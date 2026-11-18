import { siteUrl } from "../data/site.ts";

const routes = ["/", "/privacidad", "/terminos"];
const lastmod = new Date().toISOString().slice(0, 10);

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `  <url><loc>${siteUrl}${route}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${route === "/" ? "1.0" : "0.4"}</priority></url>`)
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
