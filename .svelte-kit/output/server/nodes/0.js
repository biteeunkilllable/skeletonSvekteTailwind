

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f29943d0.js","_app/immutable/chunks/scheduler.6e36ff5f.js","_app/immutable/chunks/index.07d96475.js"];
export const stylesheets = ["_app/immutable/assets/0.8a377626.css"];
export const fonts = [];
