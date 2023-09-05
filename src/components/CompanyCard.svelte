<script>
	import { Card, Badge, GradientButton } from 'flowbite-svelte';

	export let company;

	const status = {
		true: 'Inactive',
		false: 'Active'
	};
</script>

<!--<Card data-sveltekit-noscroll color="navbar" size="md">
	<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
		{company.name}
	</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
		Country: {company.country.name}<br>Status: {status[company.inactive]}
	</p>
</Card>-->

<div class="col-span-1 drop-shadow-lg relative flex flex-col bg-white dark:bg-slate-900 p-4 rounded-lg">
    <h2 class="mb-2 font-bold text-2xl">{company.name}</h2>
    <p class="text-md text-justify">
        Country: {company.country.name}<br>Status: {status[company.inactive]}
    </p>
</div>
