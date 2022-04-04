//this class will launch comment view based on post class commment data
export class CommentView {
	#commentViewElement;

	constructor(commentArray, parentPostClass) {
		// console.log(commentArray);
		const comments = commentArray.map(comment => this.createCommentElement(comment));
		this.createCommentViewElement(comments);
		this.render();
	}

	createCommentElement(comment, isFirst) {
		const wrapper = document.createElement('div');
		const commentEl = document.createElement('span');
		const userEl = document.createElement('span');
		const userPhoto = document.createElement('img');

		commentEl.textContent = comment.text;
		userEl.textContent = comment.username;
		userPhoto.src = comment.imgURL;

		wrapper.className = 'comment-interface';
		if (isFirst) {
			wrapper.classList.add('top-comment');
		}
		wrapper.append(userPhoto, userEl, commentEl);
		return wrapper;
	}

	createCommentViewElement(commentElements) {
		const commentViewTemplate = document
			.getElementById('comment-view-template')
			.content.cloneNode(true);
		this.commentViewEl = commentViewTemplate;
		this.commentViewEl.querySelector('.comments').append(...commentElements);
		this.initCommentViewInterface();
	}

	close() {
		document.querySelector('.comment-view').remove();
		this.commentViewEl = null;
	}

	initCommentViewInterface() {
		this.commentViewEl
			.querySelector('.back')
			.addEventListener('click', this.close.bind(this));
	}

	render() {
		const appHook = document.getElementById('app');
		appHook.appendChild(this.commentViewEl);
	}
}
