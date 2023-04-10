/** @type {import('next').NextConfig} */
// const { publicRuntimeConfig } = getConfig();
// const ninjaGroup = `${publicRuntimeConfig.staticFolder}/ninjaGroup.jpg`;

const nextConfig = {
  // plugins: [withImages, [withExpo, { projectRoot: basePath }]],
  // images: {
  //   disableStaticImages: true,
  // },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
