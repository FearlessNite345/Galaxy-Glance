<script>
	import NextLaunch from '../components/NextLaunch.svelte';
	import FeaturedLaunches from '../components/FeaturedLaunches.svelte';

	export let data;
	const launches = data.props.launches;
	const nextLaunch = data.props.nextLaunch;
</script>

<section class="p-10">
	<NextLaunch {nextLaunch} />
	<FeaturedLaunches {launches} />
</section>
