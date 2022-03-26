export class PostUtils {
	constructor() {
		this.postTemplateEl = document
			.getElementById('post-template')
			.content.cloneNode(true);
	}

	async fetchImage() {
		const resp = await fetch('https://picsum.photos/200');
		if (!resp.ok) {
			return new URL(
				'../../img/post/placeholder.jpg?as=webp&width=250',
				import.meta.url
			);
		}
		return resp.url;
	}

	generateDescPeekString(desc) {
		const arr = desc.split(' ');
		const peekArr = arr.map((sentence, id) => {
			if (id > 3) {
				return;
			} else {
				return sentence;
			}
		});
		return peekArr.join(' ').trim() + '...';
	}

	addHideDescButton(target) {
		const hideDesc = document.createElement('span');
		hideDesc.className = 'show-hide-btn-post';
		hideDesc.textContent = ' hide';
		hideDesc.addEventListener('click', () => {
			hideDesc.closest('details').open = false;
		});
		target.append(hideDesc);
	}
}
