import { rllc } from 'rocket-launch-live-client';
const { VITE_APIKey } = import.meta.env;

export async function load({ fetch, event }) {
	const client = rllc(VITE_APIKey);

	const data = await client.launches({ limit: 16 });

	const launches = data.result;
	const nextLaunch = launches.shift();

	return {
		launches,
		nextLaunch
	};
}
