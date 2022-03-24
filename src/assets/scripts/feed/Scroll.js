import { Post } from '../post/Post.js';

export class Scroll {
	constructor() {
		this.feedConatainer = document.getElementById('app-content');
		this.lastFireEvent = -Infinity;
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

	feedScrollHandler() {
		const maxHeight = this.getPostsHeight();
		const scrollActivateHeight = this.getLastPostHeight() * 1.2;

		if (
			this.feedConatainer.scrollTop > maxHeight - scrollActivateHeight &&
			Date.now() - this.lastFireEvent > 500
		) {
			new Post().addRandomPost();
			this.lastFireEvent = Date.now();
			return;
		} else if (this.feedConatainer.scrollTop > maxHeight - scrollActivateHeight) {
			setTimeout(() => {
				this.feedScrollHandler();
			}, 500);
		}
	}
}
