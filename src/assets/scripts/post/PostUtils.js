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
		this.feedHook = document.getElementById('app-content');
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
		if (desc.trim().length > 0) {
			this.addHideDescButton(descEl);
			this.setDescSummary(desc);
		} else {
			this.postTemplateEl.querySelector('.show-hide-btn-pos').remove();
		}
	}

	setDescSummary(desc) {
		this.postTemplateEl.querySelector('summary span').textContent =
			this.generateDescPeekString(desc);
	}

	async fetchImage(px = 200) {
		const resp = await fetch(`https://picsum.photos/${px}`);
		if (!resp.ok) {
			return new URL(
				'../../img/post/placeholder.jpg?as=webp&width=250',
				import.meta.url
			);
		}
		return resp.url;
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
