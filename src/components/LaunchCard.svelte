<script>
	import { Card } from 'flowbite-svelte';
	import { Badge } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';

	export let launch;

	const tagMap = new Map(launch.tags.map((tag) => [tag.id, tag.text]));
</script>

<Card data-sveltekit-noscroll href={'/launch/' + launch.slug} color='navbar' size="md">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{launch.name}
	</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
		{launch.mission_description || launch.launch_description || 'No description available'}
	</p>
</Card>
