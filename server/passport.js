const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID ="881012707504-dn4q8ts7i20d2it2dt2pgi2k9igkbsa2.apps.googleusercontent.com";
 
const GOOGLE_CLIENT_SECRET ="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" ;

GITHUB_CLIENT_ID = "f6b6af654aaaf640626f";
GITHUB_CLIENT_SECRET = "62818ff4edcef32e53cb8697286dfc1037d3fdca";

FACEBOOK_APP_ID = "1566965003803620";
FACEBOOK_APP_SECRET = "c6e8227c870d2aade86c6172624e0a49";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
