module.exports = function(eleventyConfig) {
  // Copy the `images` directory to the output
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: '.',
      output: '_site'
    }
  };
};
