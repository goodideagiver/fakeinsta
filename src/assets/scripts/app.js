import { RandomPost } from './post/RandomPost.js';
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
		for (let index = 0; index < 2; index++) {
			await new RandomPost().add();
		}
	}
}

new App();
