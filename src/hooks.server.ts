import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const hrTime = process.hrtime.bigint();
	if (event.platform?.req?.sso?.user) {
		console.log('Sso of: ' + event.platform.req.sso.user.displayName + ' found at: ' + hrTime);
	} else {
		console.log('No sso found at: ' + hrTime);
	}
	const response = await resolve(event);
	return response;
}) satisfies Handle;
