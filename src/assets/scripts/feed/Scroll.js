import { Post } from '../post/Post.js';

export class Scroll {
	constructor() {
		this.feedConatainer = document.getElementById('app-content');
		this.lastPhotoFetchTimestamp = -Infinity;
		this.feedConatainer.addEventListener('scroll', () => this.feedScrollHandler());
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
		const maxHeight = this.getPostsHeight();
		const scrollActivateHeight = this.getLastPostHeight() * 1.2;

		if (
			this.feedConatainer.scrollTop > maxHeight - scrollActivateHeight &&
			this.getMsFromLastFetch() > 500
		) {
			new Post().addRandomPost();
			this.lastPhotoFetchTimestamp = Date.now();
			return;
		} else if (
			this.feedConatainer.scrollTop > maxHeight - scrollActivateHeight &&
			this.getMsFromLastFetch() < 500
		) {
			setTimeout(() => {
				this.feedScrollHandler();
			}, this.getMsFromLastFetch());
		}
	}
}
