import { rllc } from 'rocket-launch-live-client';
const { VITE_APIKey } = import.meta.env;

export async function load({ fetch, url }) {
	const page = url.searchParams.get('page') || '1';
	const client = rllc(VITE_APIKey);

	const data = await client.launches({ page: page });

	return {
		rawData: data,
		launches: data.result,
		currentPage: page
	};
}
