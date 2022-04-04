//this class will launch comment view based on post class commment data
export class CommentView {
	#commentViewElement;

	constructor(commentArray, parentPostClass) {
		console.log(commentArray);
		const comments = commentArray.map(comment => this.createCommentElement(comment));
	}

	createCommentElement(comment) {
		const wrapper = document.createElement('div');
		const commentEl = document.createElement('span');
		const userEl = document.createElement('span');

		commentEl.textContent = comment.text;
		userEl.textContent = comment.username;

		return wrapper;
	}

	createCommentViewElement(commentElements) {
		const commentViewTemplate = document
			.getElementById('comment-view-template')
			.content.cloneNode(true);
		return commentViewTemplate;
	}

	close() {}

	render() {}
}
