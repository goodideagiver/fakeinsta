//this class will launch comment view based on post class commment data
export class CommentView {
	constructor(commentArray, parentPostClass) {
		const comments = commentArray.map(comment => this.createCommentElement(comment));
		this.post = parentPostClass;
		this.createCommentViewElement(comments);
		this.render();
	}

	createCommentElement(comment) {
		const wrapper = document.createElement('div');
		const commentEl = document.createElement('span');
		const userEl = document.createElement('span');
		const userPhoto = document.createElement('img');

		commentEl.textContent = comment.text;
		userEl.textContent = comment.username;
		userPhoto.src = comment.imgURL;

		wrapper.className = 'comment-interface';
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
		this.commentViewEl.querySelector('.blue-button').addEventListener('click', e => {
			const input = e.target.closest('.comment-interface');
			const value = input.querySelector('input').value;
			if (value.trim() > '') {
				this.post.addComment('Visitor', value, 'https://picsum.photos/200');
				const newComment = this.createCommentElement(
					this.post.comments[this.post.comments.length - 1]
				);
				document.querySelector('.comments').append(newComment);
				input.querySelector('input').value = '';
			}
		});
	}

	render() {
		const appHook = document.getElementById('app');
		appHook.appendChild(this.commentViewEl);
	}
}
