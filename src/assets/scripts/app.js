import { RandomPost } from './post/RandomPost.js';
import { Scroll } from './feed/Scroll.js';
import { NavBottom } from './nav/NavBottom';
import { NavTop } from './nav/NavTop';

class App {
	#fetchPostsOnLaunchAmount = 2;

	constructor() {
		this.addInitialPosts();
		this.init();
	}

	init() {
		new Scroll();
		new NavBottom();
		new NavTop();
	}

	async addInitialPosts() {
		for (let i = 0; i < this.#fetchPostsOnLaunchAmount; i++) {
			await new RandomPost().add();
		}
	}
}

new App();
