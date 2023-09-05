<script>
	export let data;
	import { fly } from 'svelte/transition';

	const launch = data.launch;
</script>

<section
	class="dark:text-white"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<h1 class="my-5 text-center">{launch.name}</h1>
	<h3 class="my-2 text-center">More coming soon</h3>
	<h3 class="my-5 text-center dark:text-gray-400">Data by RocketLaunch.Live</h3>
</section>
