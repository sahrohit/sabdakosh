/** @type {import('next').NextConfig} */
import nextMdx from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "api.dicebear.com",
    ],
  },
  experimental: {
    mdxRs: true
  },
};

export default withMDX(nextConfig);
