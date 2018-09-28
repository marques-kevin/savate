import Raven from "raven-js";

export default () => {
  Raven.config("https://6f4d9e4d89c244fc872eed61e16f1311@sentry.io/1290681", {
    release: process.env.VERSION
  }).install();
};
