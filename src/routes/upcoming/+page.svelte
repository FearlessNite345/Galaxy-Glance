<script>
	import UpcomingLaunches from '../../components/UpcomingLaunches.svelte';
	import { Pagination } from 'flowbite-svelte';

	export let data;

	const launches = data.props.launches;
	const rawData = data.props.rawData;

	let pages = [];

	for (let i = 1; i <= rawData.last_page; i++) {
		pages.push({ name: i, href: `/upcoming?page=${i}` });
	}

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
		//alert('Next btn clicked. Make a call to your server to fetch data.');
	};
</script>

<section class="p-10">
	<UpcomingLaunches {launches} />
	<Pagination {pages} large on:previous={previous} on:next={next} />
</section>
