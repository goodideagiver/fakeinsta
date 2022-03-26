import { getRandomName } from './data/Names.js';
import { getRandomSentence } from './data/Desc.js';
import { PostUtils } from './PostUtils.js';

export class RandomPost extends PostUtils {
	constructor() {
		super(getRandomName(), getRandomSentence(), (Math.random() * 1000000).toFixed(0));
	}

	async add() {
		const postImageURL = await this.fetchImage(480);
		const profileImageURL = await this.fetchImage(50);

		this.postTemplateEl.querySelector('.post-photo img').src = postImageURL;
		this.postTemplateEl.querySelector('.post-user-img img').src = profileImageURL;

		this.feedHook.append(this.postTemplateEl);
	}
}
