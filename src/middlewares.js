import multer from "multer";
import multerS3 from "multer-S3";
import aws from "aws-sdk";

const s3 = new aws.S3({
    credentials:{
        accessKeyId:process.env.AWS_ID,
        secretAccessKey:process.env.AWS_SECRET
    }
})

process.env.NODE_ENV
const s3ImageUploader = multerS3({
    s3: s3,
    bucket:'whattube/images',
    acl:"public-read",
});

const s3VideoUploader = multerS3({
    s3: s3,
    bucket:'whattube/videos',
    acl:"public-read",
});

export const localsMiddleware = (req, res, next) =>{
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Whattube";
    res.locals.loggedInUser = req.session.user || {};
    next();
};

export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn){
        return next();
    } else{
        req.flash("error", "Log in first.");
        return res.redirect("/login");
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggedIn){
        return next();
    } else{
        req.flash("error", "Not authorized");
        return res.redirect("/");
    }
};

export const uploadFiles = multer({dest:"uploads/"});

export const avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 3000000,
    },
    storage: isHeroku ? s3ImageUploader: undefined,
  });
  export const videoUpload = multer({
    dest: "uploads/videos/",
    limits: {
      fileSize: 10000000,
    },
    storage: isHeroku ? s3VideoUploader: undefined,
  });