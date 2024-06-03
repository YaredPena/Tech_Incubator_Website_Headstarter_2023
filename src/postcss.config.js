module.exports = {
    plugins: [
      require('autoprefixer')({
        overrideBrowserslist: ['>1%', 'last 2 versions'],
        grid: true,
        replace: true, // Add this line to enable property replacement
      }),
    ],
  };
  