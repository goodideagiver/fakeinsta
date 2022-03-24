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

	feedScrollHandler() {
		const maxHeight = this.getPostsHeight();
		if (
			this.feedConatainer.scrollTop > maxHeight - 500 &&
			Date.now() - this.lastFireEvent > 500
		) {
			new Post().addRandomPost();
			this.lastFireEvent = Date.now();
			return;
		}
	}
}
