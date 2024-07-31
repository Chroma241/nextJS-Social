/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/', // l'URL source que vous voulez rediriger
          destination: '/fr/', // l'URL de destination vers laquelle rediriger
          permanent: true, // true si la redirection est permanente (301), false si elle est temporaire (307)
        },
      ];
    },
  };
  
  export default nextConfig;
  