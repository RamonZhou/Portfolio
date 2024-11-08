/* empty css                                  */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DdYKPfgi.mjs';
import { ssr, ssrHydrationKey } from 'solid-js/web';
import { onMount } from 'solid-js';
import 'd3';
import { $ as $$BasicLayout } from '../chunks/BasicLayout_-uU3cuw9.mjs';
export { renderers } from '../renderers.mjs';

var _tmpl$ = ["<div", ' class="flex flex-col text-white justify-center items-center w-full h-full"><div class="w-full"></div></div>'];
const GlobeComponent = () => {
  onMount(() => {
    return;
  });
  return ssr(_tmpl$, ssrHydrationKey());
};

const $$Travel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "", "description": "A 3d globe showing countries", "page": "travel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="text-white absolute bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg">Back</a> ${renderComponent($$result2, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ramoncito/Documents/Portfolio/src/components/Globe", "client:component-export": "default" })} ` })}`;
}, "/Users/ramoncito/Documents/Portfolio/src/pages/travel.astro", void 0);

const $$file = "/Users/ramoncito/Documents/Portfolio/src/pages/travel.astro";
const $$url = "/travel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Travel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
