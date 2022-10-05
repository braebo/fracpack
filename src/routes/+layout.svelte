<script lang="ts">
	import Nav from '$lib/Nav.svelte'
	import 'greset/greset.css'
	import '../styles/app.scss'
</script>

<header>
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
