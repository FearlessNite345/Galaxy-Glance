import { rllc } from 'rocket-launch-live-client';
const { VITE_APIKey } = import.meta.env;

export async function load({ fetch, params }) {
	const client = rllc(VITE_APIKey);

	const data = await client.launches({ slug: params.slug });

	return {
		launch: data.result[0]
	};
}
