import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { sso } from 'node-expose-sspi';
import type { PluginOption } from 'vite';

const ssoPlugin: PluginOption = {
	name: 'sspi',
	configureServer(server) {
		server.middlewares.use(sso.auth());
		server.middlewares.use((req, res, next) => {
			if (req.url === '/' && req.sso) {
				const hrTime = process.hrtime.bigint();
				console.log('Middleware Sso of: ' + req.sso.user?.displayName + ' found at: ' + hrTime);
			}
			next();
		});
	}
};

export default defineConfig({
	server: {
		open: '/'
	},
	plugins: [ssoPlugin, sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
