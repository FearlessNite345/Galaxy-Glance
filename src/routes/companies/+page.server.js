import { rllc } from 'rocket-launch-live-client';
const { VITE_APIKey } = import.meta.env;

export async function load({ fetch, url }) {
	const page = url.searchParams.get('page') || '1';
	const client = rllc(VITE_APIKey);

	const data = await client.companies({ page: page });

	return {
		rawData: data,
		companies: data.result,
		currentPage: page
	};
}
