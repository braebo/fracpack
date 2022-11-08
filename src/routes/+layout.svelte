<script lang="ts">
	import { ThemeToggle } from 'fractils'
	import Nav from '$lib/Nav.svelte'
	import 'greset/greset.css'
	import '../styles/app.scss'
</script>

<header>
	<Nav />
	<div class="theme-toggle">
		<ThemeToggle />
	</div>
</header>

<slot />

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 1rem;

		color: var(--light-c);
	}

	.theme-toggle {
		filter: saturate(0) brightness(0.75);
	}
</style>
