
import Video from "../models/Video";

/*Video.find({}, (error, videos) => {
        console.log("Finished");
        
    });*/

export const home = async(req, res) => {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos});
};

export const watch = async(req, res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", {pageTitle:"Video not found."});
    }
    return res.render("watch", {pageTitle:video.title, video});
};
export const getEdit = async(req, res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", {pageTitle:"Video not found."});
    }
    return res.render("watch", {pageTitle:`Edit:${ video.title}`, video});
};
export const postEdit = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:"Upload Video"});
}
export const postUpload = async(req, res) => {
    const {title, description, hashtags}=req.body;
    try{
     await Video.create({
        title,
        description,
        createAt:Date.now(),
        hashtags:hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
} catch(error){
    console.log(error);
    return res.render("upload", {pageTitle:"Upload Video", errorMessage:error._message,
});
}
};
