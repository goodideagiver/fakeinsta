export class Post {
	constructor(params) {
		this.postTemplateEl = document
			.getElementById('post-template')
			.content.cloneNode(true);
	}

	async fetchImage() {
		const resp = await fetch('https://picsum.photos/200');
		return await resp.url;
	}

	async addRandomPost() {
		const postImageURL = await this.fetchImage();
		const profileImageURL = await this.fetchImage();
		const appFeedHook = document.getElementById('app-content');

		const postEl = this.postTemplateEl.cloneNode(true);
		postEl.querySelector('.post-photo img').src = postImageURL;
		postEl.querySelector('.post-user-img img').src = profileImageURL;

		await appFeedHook.append(postEl);
	}
}
