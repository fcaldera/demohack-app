export default {

  tokenExpired: function() {
    const tokenExpires = localStorage.mmApiValidBefore || sessionStorage.mmApiValidBefore;
    let tokenExpired = false;
    if (tokenExpires && Date.parse(tokenExpires) < new Date().getTime()) {
      this.unsetCredentials();
      tokenExpired = true;
    }
    return tokenExpired;
  },

  setCredentials: function(token, userId, validAfter, validBefore, persistent = true) {
    if (persistent) {
      localStorage.mmApiToken = token;
      localStorage.mmApiUserId = userId;
      localStorage.mmApiValidAfter = validAfter;
      localStorage.mmApiValidBefore = validBefore;
    } else {
      sessionStorage.mmApiToken = token;
      sessionStorage.mmApiUserId = userId;
      sessionStorage.mmApiValidAfter = validAfter;
      sessionStorage.mmApiValidBefore = validBefore;
    }
  },

  getCredentials: function() {
    return {
      token: localStorage.mmApiToken || sessionStorage.mmApiToken,
      userId: localStorage.mmApiUserId || sessionStorage.mmApiUserId,
      validAfter: localStorage.mmApiValidAfter || sessionStorage.mmApiValidAfter,
      validBefore: localStorage.mmApiValidBefore || sessionStorage.mmApiValidBefore,
    }
  },

  getApiToken: function() {
    return (localStorage.mmApiToken || sessionStorage.mmApiToken);
  },

  unsetCredentials: function() {
    delete sessionStorage.mmApiToken;
    delete sessionStorage.mmApiUserId;
    delete sessionStorage.mmApiValidAfter;
    delete sessionStorage.mmApiValidBefore;
    delete localStorage.mmApiToken;
    delete localStorage.mmApiUserId;
    delete localStorage.mmApiValidAfter;
    delete localStorage.mmApiValidBefore;
    return true;
  },

  isLoggedIn: function() {
    const mmApiToken = localStorage.mmApiToken || sessionStorage.mmApiToken;
    const mmApiValidBefore = localStorage.mmApiValidBefore || sessionStorage.mmApiValidBefore;

    return Boolean((mmApiToken && Date.parse(mmApiValidBefore) > new Date().getTime()));
  },

};
