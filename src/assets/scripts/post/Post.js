import { PostUtils } from './PostUtils.js';
export class Post extends PostUtils {
	constructor(username, description, image) {
		super(username, description);
		this.image = image;
	}

	addToFeed() {
		console.log('add post');
		if (this.image) {
			this.postTemplateEl.querySelector('.post-photo img').src = this.image.href;
		}
		this.feedHook.prepend(this.postTemplateEl);
		this.addDescComment();
	}
}
