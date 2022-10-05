import type { LayoutServerLoad } from './$types'

/**
 * Passes the user data from the server to the client.
 */
export const load: LayoutServerLoad = ({ locals }) => {
	return {
		user: locals.user as User,
	}
}
