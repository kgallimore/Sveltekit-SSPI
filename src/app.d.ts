import type { IncomingMessage } from 'connect';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			req: IncomingMessage;
		}
	}
}

export {};
