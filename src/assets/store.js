export default {
  auth: false,
  setAuthStatus(val) {
    if (val) {
      this.auth = true;
    }
  },
};
