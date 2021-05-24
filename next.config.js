module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    firebaseAPIKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    firebaseProjectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
      loader: require.resolve("url-loader")
    });

    return config;
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  images: {
    domains: ['take-sushi-away.herokuapp.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/menu',
      },
    ]
  },
};