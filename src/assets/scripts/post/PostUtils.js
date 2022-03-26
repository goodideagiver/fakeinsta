export class PostUtils {
	constructor(username, description = '', likes = 0) {
		this.postTemplateEl = document
			.getElementById('post-template')
			.content.cloneNode(true);
		this.username = username;
		if (description) {
			this.desc = description;
		}
		this.likeCount = likes;
	}

	initPostElementsHook() {
		this.username;
	}

	set likeCount(likeAmount) {
		this.postTemplateEl.querySelector('.like-count span').textContent = likeAmount
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}

	set username(username) {
		this.postTemplateEl.querySelector('.post-user-name').textContent = username;
		this.postTemplateEl.querySelector('.summary-username').textContent = username;
		this.postTemplateEl.querySelector('.details-username').textContent = username;
	}

	set desc(desc) {
		const descEl = this.postTemplateEl.querySelector('.description');
		descEl.textContent = desc;
		this.addHideDescButton(descEl);
		this.postTemplateEl.querySelector('summary span').textContent =
			this.generateDescPeekString(desc);
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
