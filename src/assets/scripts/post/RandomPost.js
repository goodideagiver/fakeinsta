import { getRandomName } from './data/Names.js';
import { getRandomSentence } from './data/Desc.js';
import { PostUtils } from './PostUtils.js';

export class RandomPost extends PostUtils {
	constructor() {
		super();
	}

	async add() {
		const postImageURL = await this.fetchImage();
		const profileImageURL = await this.fetchImage();
		const appFeedHook = document.getElementById('app-content');
		const username = getRandomName();

		const desc = getRandomSentence();

		const postEl = this.postTemplateEl;
		postEl.querySelector('.post-photo img').src = postImageURL;
		postEl.querySelector('.post-user-img img').src = profileImageURL;

		postEl.querySelector('.post-user-name').textContent = username;
		postEl.querySelector('.summary-username').textContent = username;
		postEl.querySelector('.details-username').textContent = username;

		const descEl = postEl.querySelector('.description');
		descEl.textContent = desc;
		this.addHideDescButton(descEl);

		postEl.querySelector('summary span').textContent =
			this.generateDescPeekString(desc);

		postEl.querySelector('.like-count span').textContent = (Math.random() * 1000000)
			.toFixed(0)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

		await appFeedHook.append(postEl);
	}
}
