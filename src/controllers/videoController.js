const fakeUser = {
    username: "Yelim",
    loggedIn: false,
};
let videos = [
    {
     title:"First Video",
     rating:5,
     comments:10,
     createdAt:"10 minutes ago",
     views:78,
     id:1,
    },
    {
    title:"Second Video",
    rating:5,
    comments:10,
    createdAt:"10 minutes ago",
    views:78,
    id:2,
    },
    {
    title:"Third Video",
    rating:5,
    comments:10,
    createdAt:"10 minutes ago",
    views:78,
    id:3,
    }
];
export const trending = (req, res) => {
    res.render("home", { pageTitle: "Home", videos, fakeUser: fakeUser })
};
export const see = (req, res) => {
    const { id } = req.params;
    console.log("show video", id);
    return res.render("watch");
}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    res.send("Delete Video")
};



