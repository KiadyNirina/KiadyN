import posthog from 'posthog-js';
import { browser } from '$app/environment';
import {
	PUBLIC_POSTHOG_KEY,
	PUBLIC_POSTHOG_HOST
} from '$env/static/public';

if (browser) {
	posthog.init(PUBLIC_POSTHOG_KEY, {
		api_host: PUBLIC_POSTHOG_HOST,
		defaults: '2026-05-30',
        capture_pageview: true
	});
}

export default posthog;