/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_DdYKPfgi.mjs';
import { g as getCollection } from '../chunks/_astro_content_CoK1-Uov.mjs';
import { $ as $$Layout } from '../chunks/Layout_zb9K9g-g.mjs';
import { f as formatDate } from '../chunks/helpers_CI0do3qC.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://kaimhere.tech/");
const $$PostRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostRow;
  const { title, date, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="w-full text-neutral-100 hover:text-neutral-400 ease-in-out transition-colors border-b-neutral-400 border-dashed border-b-1 my-2"> <a class="text-sm md:text-base decoration-none flex justify-between"${addAttribute(`/blog/${url}`, "href")}> <p class="inline-block whitespace-nowrap"> ${title} </p> <time class="text-right tabular-nums"${addAttribute(date.toISOString(), "datetime")}${addAttribute(date.toISOString(), "data-date")}> ${formatDate(date)} </time> </a> </li>`;
}, "/Users/ramoncito/Documents/Portfolio/src/components/Blog/PostRow.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog"))?.sort(
    (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
  );
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-screen h-screen flex flex-col justify-start items-start max-w-3xl mx-auto p-8"> <a href="/" class="text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 mb-8 border-1 border-solid border-neutral-600 rounded-lg">Back</a> <h1 class="text-4xl font-bold mb-4 text-neutral-100">Posts</h1> <ul class="w-full"> ${posts?.map((post) => renderTemplate`${renderComponent($$result2, "PostRow", $$PostRow, { "title": post.data.title || "No title", "date": post.data.pubDate || /* @__PURE__ */ new Date(), "url": post.slug })}`)} </ul> </main> ` })}`;
}, "/Users/ramoncito/Documents/Portfolio/src/pages/blog/index.astro", void 0);

const $$file = "/Users/ramoncito/Documents/Portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
