export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
export const getIsUserName = state => state.auth.user.name;
export const getIsAuthToken = state => state.auth.token;
export const getIsAuthLoader = state => state.auth.isLoading;
