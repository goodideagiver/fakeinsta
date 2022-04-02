import { RandomPost } from '../post/RandomPost.js';
import * as FeedUtil from './FeedUtil.js';

export class Scroll {
	constructor() {
		this.fetchTimestamp = -Infinity;
		this.postFetchDelay = 500;
		this.initFeedHandler();
	}

	initFeedHandler() {
		this.feedContainer = document.getElementById('app-content');
		this.feedContainer.addEventListener('scroll', () => this.feedScrollHandler());
	}

	async feedScrollHandler() {
		const feedHeight = FeedUtil.getFeedHeight();
		const postFetchHeightThreshold = FeedUtil.getLastPostHeight() * 1.4;

		if (this.feedContainer.scrollTop > feedHeight - postFetchHeightThreshold) {
			if (FeedUtil.timestampDiffNow(this.fetchTimestamp) > this.postFetchDelay) {
				this.fetchTimestamp = Infinity;
				await new RandomPost().add();
				this.fetchTimestamp = Date.now();
			} else if (
				FeedUtil.timestampDiffNow(this.fetchTimestamp) < this.postFetchDelay
			) {
				setTimeout(() => {
					this.feedScrollHandler();
				}, this.postFetchDelay - FeedUtil.timestampDiffNow(this.fetchTimestamp));
			}
		}
	}
}
