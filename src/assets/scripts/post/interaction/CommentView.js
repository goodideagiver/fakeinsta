//this class will launch comment view based on post class commment data
export class CommentView {
	#commentViewElement;

	constructor(commentArray, parentPostClass) {
		console.log(commentArray, parentPostClass);
	}

	createCommentElement(comment) {
		const wrapper = document.createElement('div');
		const commentEl = document.createElement('span');
		const userEl = document.createElement('span');

		commentEl.textContent = comment.text;
		userEl.textContent = comment.username;

		return;
	}

	render() {}
}
