export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.17ed8fb2.js","imports":["_app/immutable/entry/start.17ed8fb2.js","_app/immutable/chunks/index.fff29cf5.js","_app/immutable/chunks/singletons.5b5230da.js","_app/immutable/chunks/index.c8cd8a6e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.392d74e8.js","imports":["_app/immutable/entry/app.392d74e8.js","_app/immutable/chunks/index.fff29cf5.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
