export const authenticate = user => {
  const SessionStack = window.SessionStack;

  if (SessionStack) {
    SessionStack.identify({
      userId: user.id, // Replace the USER-ID with the user id from your app
      displayName: user.displayName // Not require
    });
  }
};
