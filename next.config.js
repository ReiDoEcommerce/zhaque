module.exports = {
  trailingSlash: true,
  images: {
    domains: [
      "localhost",
      "painel.zhaque.com.br",
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