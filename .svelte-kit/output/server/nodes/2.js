

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5e09614f.js","_app/immutable/chunks/scheduler.6e36ff5f.js","_app/immutable/chunks/index.07d96475.js","_app/immutable/chunks/index.dc27e418.js"];
export const stylesheets = ["_app/immutable/assets/2.5a24ee6e.css"];
export const fonts = [];
