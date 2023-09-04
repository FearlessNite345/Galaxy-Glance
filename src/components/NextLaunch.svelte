<script>
	import { Card } from 'flowbite-svelte';

	export let nextLaunch;
</script>

<Card class="mb-4" href={'/launch/' + nextLaunch.slug} color='navbar' size='xl'>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{nextLaunch.name}
	</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
		{nextLaunch.mission_description || nextLaunch.launch_description || 'No description available'}
	</p>
</Card>