import { PostUtils } from './PostUtils.js';
export class Post extends PostUtils {
	constructor(username, description = ' ', image) {
		super(username, description);
		this.image = image;
	}

	addToFeed() {
		if (this.image) {
			this.postImageUrl = this.image.href;
			this.postTemplateEl.querySelector('.post-photo img').src = this.postImageUrl;
		}
		this.feedHook.prepend(this.postTemplateEl);
		this.addDescComment();
	}
}
