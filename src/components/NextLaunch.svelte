<script>
	import { Badge, GradientButton } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let nextLaunch;
	//href={'/launch/' + nextLaunch.slug}
</script>

<!--<section class="dark:text-white">
	<h3 class="text-2xl font-semibold">Next Launch</h3>
	<Card class="mb-4" color="navbar" size="md">
		<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
			{nextLaunch.name}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{nextLaunch.mission_description ||
				nextLaunch.launch_description ||
				'No description available'}
		</p>
		<GradientButton href={'/launch/' + nextLaunch.slug} shadow color="blue" class="mt-5 w-fit">
			Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
		</GradientButton>
	</Card>
	<div class="col-span-1 relative flex flex-col bg-white dark:bg-slate-900 p-4 rounded-lg">
		<h2 class="mb-2 font-bold text-2xl">{nextLaunch.name}</h2>
		<div class="mb-4 flex flex-wrap">
			<span class="mr-2">Link 1</span>
			<span class="mr-2">Link 2</span>
		</div>
		<p class="text-md text-justify">
			{nextLaunch.mission_description || nextLaunch.launch_description || 'No description available'}
		</p>
		<div class="flex flex-wrap mt-auto pt-3 text-xs">
			{#each nextLaunch.tags as tag}
				<Badge class='m-1' color='blue'>{tag.text}</Badge>
			{/each}
		</div>
		<div class="relative bottom-0 flex mt-auto pt-3 w-full justify-left">
			<GradientButton href={'/launch/' + nextLaunch.slug} shadow color="blue" class="w-fit">
				Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
			</GradientButton>
		</div>
	</div>
</section>-->

<section class="dark:text-white drop-shadow-lg flex flex-col items-center justify-center">
	<h3 class="text-2xl font-semibold">Next Launch</h3>
	<div style="max-width: 96rem;" class="w-full p-4">
		<div class="bg-white dark:bg-slate-900 p-4 rounded-lg">
			<h2 class="mb-2 font-bold text-2xl">{nextLaunch.name}</h2>
			<p class="text-md text-justify">
				{nextLaunch.mission_description ||
					nextLaunch.launch_description ||
					'No description available'}
			</p>
			<div class="flex flex-wrap mt-auto pt-3 text-xs">
				{#each nextLaunch.tags as tag}
					<Badge class="mr-1 mt-1" color="blue">{tag.text}</Badge>
				{/each}
			</div>
			<div class="flex justify-left mt-3">
				<GradientButton href={'/launch/' + nextLaunch.slug} shadow color="blue" class="w-fit">
					Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
				</GradientButton>
			</div>
		</div>
	</div>
</section>
