import { RandomPost } from './post/RandomPost.js';
import { Scroll } from './feed/Scroll.js';
import { NavBottom } from './nav/navBottom.js';

class App {
	constructor() {
		this.addInitialPosts();
		this.init();
	}

	init() {
		const sc = new Scroll();
		new NavBottom();
	}

	async addInitialPosts() {
		for (let index = 0; index < 2; index++) {
			await new RandomPost().add();
		}
	}
}

new App();
