<script>
	import LaunchCard from './LaunchCard.svelte';

	export let launches;
</script>

<div class="dark:text-white flex flex-col items-center justify-center">
	<h3 class="text-2xl font-semibold">Past Launches</h3>
	<div class="container mx-auto p-4 grid grid-cols-3 gap-4">
		{#each launches as launch}
			<LaunchCard {launch} />
		{/each}
	</div>
</div>

<style>
	h3 {
		padding: 0 1rem;
	}
</style>
