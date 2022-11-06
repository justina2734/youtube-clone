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
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.render("home");
export const upload = (req, res) => res.render("watch");
export const deleteVideo = (req, res) => res.render("edit");



