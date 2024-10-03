module.exports = function(eleventyConfig) {
    // Pass through the assets/img folder to the output folder
    eleventyConfig.addPassthroughCopy("src/assets/");

     // folders to watch for changes to update site
  eleventyConfig.addWatchTarget("src/");
  eleventyConfig.addWatchTarget("**/*.{md,css}");
	return {
		markdownTemplateEngine: 'njk', // Process Markdown files with Nunjucks
        dataTemplateEngine: 'njk', // Process data files with Nunjucks (if applicable)
        htmlTemplateEngine: 'njk', // Process HTML files with Nunjucks
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
			layouts: "_includes/layouts"
			}
		};
	};