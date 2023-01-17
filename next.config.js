/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  //redirection : API key 숨기지 않음(URL변경됨)
  async redirects(){
    return [
      {
        source: '/contact/:path*',
        destination: '/new-contact/:path*',
        permanent: false
      }
    ];
  },
  //rewrite : redirect 시키지만 유저가 보는 url은 변하지 않는다(URL변경되지 않음)
  async rewrites(){
    return [
      {
      source: '/api/movies',
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig