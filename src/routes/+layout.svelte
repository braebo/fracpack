<script lang="ts">
	import { page } from '$app/stores'
	import Nav from '$lib/Nav.svelte'
	import '../styles/app.scss'
	import 'greset/greset.css'
</script>

<header>
	<p>
		Logged in: {$page.data.user.username}
	</p>

	<Nav />
</header>

<slot />

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 1rem;

		color: var(--light-c);
	}
</style>
