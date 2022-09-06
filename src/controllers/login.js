import passport from "passport";

export const getLogin = (req, res) => {
  res.render("login");
};

export const postLogin = passport.authenticate("login", {
  successRedirect: "/",
  failureRedirect: "/login/errorLogin",
});

export const errorLogin = (req, res) => {
  res.render("error-login");
};
