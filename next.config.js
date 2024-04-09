module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placewaifu.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};
