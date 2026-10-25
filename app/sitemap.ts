import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://barum-tax.vercel.app";
  return ["", "/about", "/services", "/location", "/contact"].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
