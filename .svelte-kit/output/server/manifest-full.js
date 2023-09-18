export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.13f33da1.js","app":"_app/immutable/entry/app.3c9d4ab5.js","imports":["_app/immutable/entry/start.13f33da1.js","_app/immutable/chunks/scheduler.6e36ff5f.js","_app/immutable/chunks/singletons.d4ad84de.js","_app/immutable/chunks/index.dc27e418.js","_app/immutable/entry/app.3c9d4ab5.js","_app/immutable/chunks/scheduler.6e36ff5f.js","_app/immutable/chunks/index.07d96475.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
