<script>
	import NextLaunch from '../components/NextLaunch.svelte';
	import FeaturedLaunches from '../components/FeaturedLaunches.svelte';
	import { fly } from 'svelte/transition';

	export let data;
	$: ({ launches, nextLaunch } = data);
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<NextLaunch {nextLaunch} />
	<FeaturedLaunches {launches} />
	<h3 class="my-5 text-center dark:text-gray-400">Data by RocketLaunch.Live</h3>
</section>
