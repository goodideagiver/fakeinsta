import { fetchCatPhoto, fetchPhoto } from './data/RandomPhoto.js';
import { getRandomInt } from '../utility/Utility.js';
export class PostUtils {
	viewCommentsEl;
	#username;
	#desc;
	#likeCount;
	#userInteraction = {
		saved: false,
		liked: false,
		likeElement: null,
	};
	comments = [];

	constructor(username, description = '', likes = 0) {
		this.postTemplateEl = document
			.getElementById('post-template')
			.content.cloneNode(true);
		this.username = username;

		this.likeCount = likes;
		this.feedHook = document.getElementById('app-content');
		this.#initButtons();
		this.desc = description;
	}

	#initButtons() {
		this.postTemplateEl
			.querySelector('.comment')
			.addEventListener('click', this.viewComments.bind(this));
		this.viewCommentsEl = this.postTemplateEl.querySelector('.post-comments');
		this.viewCommentsEl.addEventListener('click', this.viewComments.bind(this));
		this.postTemplateEl
			.querySelector('button.like')
			.addEventListener('click', this.likeButtonHandler.bind(this));
		this.postTemplateEl
			.querySelector('button.share')
			.addEventListener('click', this.shareButtonHandler.bind(this));
		this.postTemplateEl
			.querySelector('button.save')
			.addEventListener('click', this.saveButtonHandler.bind(this));

		this.#userInteraction.likeElement =
			this.postTemplateEl.querySelector('.like-count span');
	}

	likeButtonHandler() {
		if (!this.#userInteraction.liked) {
			this.likeCount = this.#likeCount + 1;
			console.log('dodano like', this.#likeCount);
			this.#userInteraction.liked = true;
		} else {
			this.likeCount = this.#likeCount - 1;
			console.log('odjęto like', this.#likeCount);
			this.#userInteraction.liked = false;
		}
	}

	shareButtonHandler() {}

	saveButtonHandler() {}

	addComment(username, comment, imageURL) {
		if (!username || !comment || !imageURL) {
			throw new Error(
				`Username, comment text, and profle image url is REQUIRED to add a comment to a post
				Username: ${username}
				commentText: ${comment}
				imageURL: ${imageURL}`
			);
			return;
		}
		this.comments.push({ username: username, text: comment, imgURL: imageURL });
		this.commentCount = this.comments.length;
	}

	viewComments() {
		import('./interaction/CommentView.js')
			.then(c => {
				new c.CommentView(this.comments, this);
			})
			.catch(err => {
				alert('there was error when launching comment view ' + err);
			});
	}

	set commentCount(count) {
		//updates comment count on feed view of the post
		const commentString = count > 0 ? `<b>View ${count} comments</b>` : '';
		this.viewCommentsEl.innerHTML = commentString;
	}

	set likeCount(likeAmount) {
		this.#likeCount = likeAmount;
		try {
			this.postTemplateEl.querySelector('.like-count span').textContent = likeAmount
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		} catch {
			this.#userInteraction.likeElement.textContent = likeAmount
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		}
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

			this.#desc = desc;
			// console.log(this);
		} else {
			// this.postTemplateEl.querySelector('.show-hide-btn-pos').remove();
			this.postTemplateEl.querySelector('details').remove();
			const usernameEl = document.createElement('h2');
			console.log(this.username);
			usernameEl.textContent = this.username;
			this.postTemplateEl.querySelector('.post-desc').append(usernameEl);
		}
	}

	addDescComment() {
		const pfp = this.profileImageURL
			? this.profileImageURL
			: 'https://picsum.photos/200';
		this.addComment(this.username, this.#desc, pfp);
	}

	setDescSummary(desc) {
		this.postTemplateEl.querySelector('summary span').textContent =
			this.generateDescPeekString(desc);
	}

	async fetchImage(px = 200) {
		const pickNumber = getRandomInt(0, 15);
		if (pickNumber > 11) {
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
