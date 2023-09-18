

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0dba6662.js","_app/immutable/chunks/scheduler.6e36ff5f.js","_app/immutable/chunks/index.07d96475.js","_app/immutable/chunks/singletons.d4ad84de.js","_app/immutable/chunks/index.dc27e418.js"];
export const stylesheets = [];
export const fonts = [];
