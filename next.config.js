/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.2.215"],
  async redirects() {
    return [
      {
        source: "/referenzen/futrue",
        destination: "/referenzen/futura",
        permanent: true,
      },
      {
        source: "/referenzen/noxx",
        destination: "/referenzen/nexx",
        permanent: true,
      },
      {
        source: "/referenzen/relexa",
        destination: "/referenzen/revita",
        permanent: true,
      },
      {
        source: "/referenzen/huhtamaki",
        destination: "/referenzen/hutacell",
        permanent: true,
      },
      {
        source: "/referenzen/orion",
        destination: "/referenzen/oreon",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
