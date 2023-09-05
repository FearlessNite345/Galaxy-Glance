<script>
	import { Badge, GradientButton } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let launch;
</script>

<div
	class="col-span-1 relative drop-shadow-lg flex flex-col bg-white dark:bg-slate-900 p-4 rounded-lg"
>
	<h2 class="mb-2 font-bold text-2xl">{launch.name}</h2>
	<p class="text-md text-justify">
		{launch.mission_description || launch.launch_description || 'No description available'}
	</p>
	<div class="flex flex-wrap mt-auto pt-3 text-xs">
		{#each launch.tags as tag}
			<Badge class="mr-1 mt-1" color="blue">{tag.text}</Badge>
		{/each}
	</div>
	<div class="relative bottom-0 flex mt-auto pt-3 w-full justify-left">
		<GradientButton href={'/launch/' + launch.slug} shadow color="blue" class="w-fit">
			Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
		</GradientButton>
	</div>
</div>
