import { RandomPost } from '../post/RandomPost.js';

export class Scroll {
	constructor() {
		this.lastPhotoFetchTimestamp = -Infinity;
		this.postFetchDelay = 500;
		this.initFeedHandler();
	}

	initFeedHandler() {
		this.feedContainer = document.getElementById('app-content');
		this.feedContainer.addEventListener('scroll', () => this.feedScrollHandler());
	}

	getPostsHeight() {
		const posts = [...document.querySelectorAll('.post')];
		posts.forEach((post, id) => (posts[id] = post.offsetHeight));
		const height = posts.reduce((prev, curr) => prev + curr, 0);
		return height;
	}

	getLastPostHeight() {
		const lastPost = document.querySelector('.post:last-child');
		return lastPost.offsetHeight;
	}

	getMsFromLastFetch() {
		return Date.now() - this.lastPhotoFetchTimestamp;
	}

	feedScrollHandler() {
		const feedHeight = this.getPostsHeight();
		const postFetchHeightThreshold = this.getLastPostHeight() * 1.4;

		if (this.feedContainer.scrollTop > feedHeight - postFetchHeightThreshold) {
			if (this.getMsFromLastFetch() > this.postFetchDelay) {
				new RandomPost().add();
				this.lastPhotoFetchTimestamp = Date.now();
			} else if (this.getMsFromLastFetch() < this.postFetchDelay) {
				setTimeout(() => {
					this.feedScrollHandler();
				}, this.postFetchDelay - this.getMsFromLastFetch());
			}
		}
	}
}
