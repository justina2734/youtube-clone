/*const fakeUser = {
    username: "Yelim",
    loggedIn: false,
};  pageTitle에 fakeUser:fakeUser 추가
*/
let videos = [
    {
     title:"First Video",
     rating:5,
     comments:10,
     createdAt:"10 minutes ago",
     views:1,
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
    res.render("home", { pageTitle: "Home", videos});
};
export const watch = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    return res.render("watch", {pageTitle:`Watching: ${video.title}`, video});
};
export const getEdit = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    return res.render("edit", {pageTitle:`Editing: ${video.title}`, video})
};
export const postEdit = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:"Upload Video"});
}
export const postUpload = (req, res) => {
    console.log(req.body);
    return res.redirect("/");
};
