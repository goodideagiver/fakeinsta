import { PostUtils } from './PostUtils.js';
export class Post extends PostUtils {
	constructor(username, description, image) {
		super(username, description);
	}

	addToFeed() {
		console.log('add post');
		this.feedHook.prepend(this.postTemplateEl);
	}
}
