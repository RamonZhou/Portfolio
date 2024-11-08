import { c as createAstro, a as createComponent, r as renderTemplate, h as renderSlot, j as renderHead, u as unescapeHTML, b as addAttribute } from './astro/server_DdYKPfgi.mjs';
/* empty css                                                                   */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kaimhere.tech/");
const $$BasicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title, description, page, slug, frontmatter } = Astro2.props;
  const image = `${Astro2.url.origin}/og-image.png`;
  const schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Kaicheng",
    url: "https://kaimhere.tech",
    sameAs: [
      "https://www.linkedin.com/in/kaicheng-zhou-b33a40253/",
      "https://github.com/ramonzhou"
    ],
    image: "https://kaimhere.tech/og-image.png",
    jobTitle: "Software Developer / Student"
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"', "><title>", '</title><meta name="description"', `><meta name="robots" content="/favicon/sitemap-index.xml"><!-- Basic OG tags for sharing your website's content on platforms like Facebook and LinkedIn --><meta property="og:title"`, '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image"', '><!-- Basic Twitter Card tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="preconnect" href="https://cdn.fontshare.com"><script type="application/ld+json">', "<\/script>", '</head> <body class="bg-darkslate-700 md:h-screen font-serif"> ', " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url.origin, "content"), addAttribute(image || "https://kaimhere.tech/og-image.png", "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image || "https://kaimhere.tech/og-image.png", "content"), unescapeHTML(JSON.stringify(schema)), renderHead(), renderSlot($$result, $$slots["loader"]), renderSlot($$result, $$slots["default"]));
}, "/Users/ramoncito/Documents/Portfolio/src/layouts/BasicLayout.astro", void 0);

export { $$BasicLayout as $ };
