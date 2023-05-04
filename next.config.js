/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI: "mongodb+srv://omarbazeed:gH1k82RvuwGyK03n@cluster0.nd1du9e.mongodb.net/?retryWrites=true&w=majority",
    APP_DEV: "http://localhost:3000",
    APP_PROD: "https://nextjs-e-commerce.vercel.app" || "https://nextjs-e-commerce.onrender.com",
  },
  images: {
    domains: ["images.pexels.com"],
  }

}

module.exports = nextConfig
