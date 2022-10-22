module.exports = {
  trailingSlash: true,
  images: {
    domains: [
      "localhost",
      "mikrokosmos.codie.digital",
      "https://master-of-miniatures.vercel.app/",
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