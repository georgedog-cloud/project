module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/project/",
    dir: {
      input: '.',
      output: '_site'
    }
  };
};
