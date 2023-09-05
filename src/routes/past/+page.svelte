<script>
	import { Pagination } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import PastLaunches from '../../components/PastLaunches.svelte';

	export let data;

	$: ({ launches, rawData, currentPage } = data);

	$: currentPageInt = parseInt(currentPage)

	$: startIndex = (currentPageInt - 1) * 25 + 1;
	$: endIndex = currentPageInt * 25;

	// Adjust endIndex for the last page if it has fewer entries
	$: if (currentPageInt === Math.ceil(rawData.total / 25)) {
		endIndex = rawData.total;
	}

	$: helper = {
		start: startIndex,
		end: endIndex,
		total: rawData.total
	};

	let pages = [];

	$: for (let i = 1; i <= rawData.last_page; i++) {
		pages.push({ name: i, href: `/past?page=${i}` });
	}

	function prev() {
		let page = currentPageInt - 1;
		if (page < 1) page = rawData.last_page;
		goto(`/past?page=${page}`);
	}

	function next() {
		let page = currentPageInt + 1;
		if (page > rawData.last_page) page = 1;
		goto(`/past?page=${page}`);
	}
</script>

<section
	class="p-10 grid grid-cols-1 justify-items-center"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<PastLaunches {launches} />
	<div class="my-10 flex flex-col items-center justify-center gap-2">
		<div class="text-sm text-gray-700 dark:text-gray-400">
			Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
			to
			<span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
			of
			<span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
			Entries
		</div>

		<Pagination table large on:previous={prev} on:next={next}>
			<span slot="prev">Prev</span>
		</Pagination>
	</div>
    <h3 class="my-5 text-center dark:text-gray-400">Data by RocketLaunch.Live</h3>
</section>
