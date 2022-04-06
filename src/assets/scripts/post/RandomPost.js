import { getRandomName } from './data/Names.js';
import { getRandomSentence } from './data/Desc.js';
import { PostUtils } from './PostUtils.js';
import { getRandomInt } from '../utility/Utility.js';

export class RandomPost extends PostUtils {
	constructor() {
		super(getRandomName(), getRandomSentence(), getRandomInt(0, 1000000));
	}

	async addRandomComments() {
		const commentCount = getRandomInt(1, 5);
		this.addDescComment();
		for (let i = 0; i < commentCount; i++) {
			const imageUrl = await this.fetchImage(40);
			this.addComment(getRandomName(), getRandomSentence(), imageUrl);
		}
	}

	async add() {
		const loading = import('./Loading.js');
		const loadingEl = document.createElement('loading-element');
		this.feedHook.appendChild(loadingEl);
		this.postImageURL = await this.fetchImage(200);
		this.profileImageURL = await this.fetchImage(40);

		this.postTemplateEl.querySelector('.post-photo img').src = this.postImageURL;
		this.postTemplateEl.querySelector('.post-user-img img').src =
			this.profileImageURL;

		await this.addRandomComments();
		loadingEl.remove();
		this.feedHook.append(this.postTemplateEl);
	}
}
