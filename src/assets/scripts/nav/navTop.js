import { unsupportedFeatureAlert } from '../utility/utilityFunctions.js';

export class NavTop {
	constructor() {
		this.#init();
		this.navHook.addEventListener('click', this.#clickBtnHandler.bind(this));
	}

	#init() {
		this.navHook = document.querySelector('.main-nav');
		this.navItems = [...this.navHook.querySelectorAll('button')];
	}

	#clickBtnHandler(evt) {
		evt.stopPropagation();
		const button = evt.target.closest('button');
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
