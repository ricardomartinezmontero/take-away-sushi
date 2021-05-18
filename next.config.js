module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
      loader: require.resolve("url-loader")
    });

    return config;
  }
};