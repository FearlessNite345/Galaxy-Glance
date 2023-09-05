<script>
	import LaunchCard from './LaunchCard.svelte';

	export let launches;
</script>

<section class="dark:text-white flex flex-col items-center justify-center">
	<h3 class="text-2xl font-semibold">Featured Launches</h3>
	<div class="container mx-auto p-4 grid grid-cols-3 gap-4">
		{#each launches as launch}
			<LaunchCard {launch} />
		{/each}
	</div>
</section>

<style>
	h3 {
		padding: 0 1rem;
	}

	.upcoming-launches {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>
