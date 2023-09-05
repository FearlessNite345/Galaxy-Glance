import { rllc } from 'rocket-launch-live-client';
const { VITE_APIKey } = import.meta.env;

export async function load({ fetch, url }) {
	const page = url.searchParams.get('page') || '1';
	const client = rllc(VITE_APIKey);

	const data = await client.launches({ before_date: new Date(), page: page, direction: 'desc' });

	return {
		rawData: data,
		launches: data.result,
		currentPage: page
	};
}
