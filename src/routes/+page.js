import { rllc } from 'rocket-launch-live-client';
const { VITE_APIKey } = import.meta.env;

export async function load({ fetch }) {
	const client = rllc(VITE_APIKey);

	const data = await client.launches({ limit: 11 });
	//const data = await res.json();

	const launches = data.result;
	const nextLaunch = launches.shift();

	return {
		props: {
			launches,
			nextLaunch
		}
	};
}
