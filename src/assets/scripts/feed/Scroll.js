import { Post } from '../post/Post.js';

export class Scroll {
	constructor() {
		this.feedConatainer = document.getElementById('app-content');
		this.lastPhotoFetchTimestamp = -Infinity;
		this.feedConatainer.addEventListener('scroll', () => this.feedScrollHandler());
		this.postFetchDelay = 500;
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

		if (this.feedConatainer.scrollTop > feedHeight - postFetchHeightThreshold) {
			if (this.getMsFromLastFetch() > this.postFetchDelay) {
				new Post().addRandomPost();
				this.lastPhotoFetchTimestamp = Date.now();
			} else if (this.getMsFromLastFetch() < this.postFetchDelay) {
				setTimeout(() => {
					this.feedScrollHandler();
				}, this.postFetchDelay - this.getMsFromLastFetch());
			}
		}
	}
}
