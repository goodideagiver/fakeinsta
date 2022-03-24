import { Post } from './post/Post.js';
import { Scroll } from './feed/Scroll.js';

class App {
	constructor(elo) {
		this.addInitialPosts();
		this.init();
	}

	init() {
		const sc = new Scroll();
	}

	async addInitialPosts() {
		for (let index = 0; index < 4; index++) {
			await new Post().addRandomPost();
		}
	}
}

document.getElementById('add-post-btn').addEventListener('click', () => {
	new Post().addRandomPost();
});

new App();
