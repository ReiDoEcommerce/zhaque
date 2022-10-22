module.exports = {
  trailingSlash: true,
  images: {
    domains: [
      "localhost",
      "mikrokosmos.codie.digital",
    ],
    experimental: {
      forceSwcTransforms: true,
    },
    swcMinify: true,
    compiler: {
      styledComponents: {
        displayName: true,
        ssr: true,
      },
    },
  },
};