import Amplitude from "amplitude-js/amplitude";

const key = "2b7244506a6dd92f25cd4d12c74b933b";

const getInstance = () => {
  let instance = Amplitude.getInstance();
  instance.init(key);
  instance.setVersionName(process.env.VERSION);
  return instance;
};

const getFakeInstance = () => {
  return {
    setVersionName() {
      return this;
    },
    logEvent() {
      return this;
    }
  };
};

export default (process.env.NODE_ENV === "production"
  ? getInstance()
  : getFakeInstance());

export const reduxMiddleware = instance => store => next => action => {
  const { amplitude, type } = action;
  if (amplitude && instance.logEvent) instance.logEvent(type, amplitude);
  return next(action);
};
