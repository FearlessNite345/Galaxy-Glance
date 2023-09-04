<script>
	import LaunchCard from './LaunchCard.svelte';

	export let launches;
</script>

<h3>Upcoming Launches</h3>
<div class="upcoming-launches">
	{#each launches as launch}
		<LaunchCard {launch} />
	{/each}
</div>

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
