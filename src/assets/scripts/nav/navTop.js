import { unsupportedFeatureAlert } from '../utility/utilityFunctions.js';

export class NavTop {
	constructor() {
		this.navHook = document.querySelector('.main-nav');
		this.navItems = [...this.navHook.querySelectorAll('button')];

		this.navHook.addEventListener('click', e => this.clickBtnHandler(e));
	}

	clickBtnHandler(e) {
		e.stopPropagation();
		const button = e.target.closest('button');
		if (this.navItems.includes(button)) {
			switch (this.navItems.indexOf(button)) {
				case 0:
					import('../gallery/Gallery.js').then(gall => {
						this.galleryObject = new gall.Gallery();
					});
					break;
				default:
					unsupportedFeatureAlert();
					break;
			}
		}
	}
}
