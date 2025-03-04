
export default defineNuxtLink({
  componentName: "MyNavLink",
  activeClass: "active text-red-600",
  exactActiveClass: "exact-active text-blue-600",
  externalRelAttribute: "noopener noreferrer",
  prefetchedClass: "prefetched",
  trailingSlash: "append",
});
