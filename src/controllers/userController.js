import User from "../models/User";

export const getJoin = (req, res) => res.render("join", {pageTitle:"Join"});
export const postJoin = (req, res) => {
    const {name, username, email, password, location}=req.body;
    await User.create({
        name, username, email, password, location,
    });
    return res.redirect("/login");
};
export const edit = (req, res) => res.render("Edit User");
export const remove = (req, res) => res.render("Remove User");
export const login = (req, res) => res.render("home");
export const logout = (req, res) => res.render("home");
export const see = (req, res) => res.render("home");