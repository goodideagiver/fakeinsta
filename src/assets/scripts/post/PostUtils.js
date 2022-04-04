import { fetchCatPhoto, fetchPhoto } from './data/RandomPhoto.js';
import { getRandomInt } from '../utility/Utility.js';
import { CommentView } from './interaction/CommentView.js';

export class PostUtils {
	comments = [];
	#username;
	constructor(username, description = '', likes = 0) {
		this.postTemplateEl = document
			.getElementById('post-template')
			.content.cloneNode(true);
		this.username = username;

		this.desc = description;

		this.likeCount = likes;
		this.feedHook = document.getElementById('app-content');
	}

	addComment(username, comment) {
		this.comments.push({ username: username, text: comment });
	}

	viewComments() {
		new CommentView(this.comments, this);
	}

	renderCommentCount() {}

	set likeCount(likeAmount) {
		this.postTemplateEl.querySelector('.like-count span').textContent = likeAmount
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}

	set username(username) {
		this.postTemplateEl.querySelector('.post-user-name').textContent = username;
		this.postTemplateEl.querySelector('.summary-username').textContent = username;
		this.postTemplateEl.querySelector('.details-username').textContent = username;
		this.#username = username;
	}

	get username() {
		return this.#username;
	}

	set desc(desc) {
		const descEl = this.postTemplateEl.querySelector('.description');
		descEl.textContent = desc;
		if (desc.trim().length > 0) {
			this.addHideDescButton(descEl);
			this.setDescSummary(desc);
		} else {
			// this.postTemplateEl.querySelector('.show-hide-btn-pos').remove();
			this.postTemplateEl.querySelector('details').remove();
			const usernameEl = document.createElement('h2');
			console.log(this.username);
			usernameEl.textContent = this.username;
			this.postTemplateEl.querySelector('.post-desc').append(usernameEl);
		}
	}

	setDescSummary(desc) {
		this.postTemplateEl.querySelector('summary span').textContent =
			this.generateDescPeekString(desc);
	}

	async fetchImage(px = 200) {
		const pickNumber = getRandomInt(0, 15);
		if (pickNumber === 0) {
			return await fetchCatPhoto(px);
		} else {
			return await fetchPhoto(px);
		}
	}

	generateDescPeekString(desc) {
		if (desc.trim().length > 0) {
			const arr = desc.split(' ');
			const firstThreeWords = arr.slice(0, 3);
			return firstThreeWords.join(' ') + '...';
		} else {
			return '';
		}
	}

	addHideDescButton(descriptionEl) {
		const hideDesc = document.createElement('span');
		hideDesc.className = 'show-hide-btn-post';
		hideDesc.textContent = ' hide';
		hideDesc.addEventListener('click', () => {
			hideDesc.closest('details').open = false;
		});
		descriptionEl.append(hideDesc);
	}
}
