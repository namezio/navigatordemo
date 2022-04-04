const CommonHelper = {
  delay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
};

export default CommonHelper;
