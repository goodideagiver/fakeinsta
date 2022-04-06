import { unsupportedFeatureAlert } from '../utility/utilityFunctions';

//bottom nav handler class
export class NavBottom {
	constructor() {
		this.#init();
		this.#handleClick();
	}

	#init() {
		this.nav = document.querySelector('.nav-bottom');
		this.navItems = document.querySelectorAll('.nav-bottom>button');
	}

	#handleClick() {
		this.nav.addEventListener('click', evt => {
			evt.preventDefault();
			evt.stopPropagation();
			const button = evt.target.closest('button');
			switch (button.id) {
				case 'home-btn':
					this.feedScrollTop();
					break;

				default:
					unsupportedFeatureAlert();
					break;
			}
		});
	}

	//feed scroll top
	feedScrollTop() {
		document.querySelector('.app-content').scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
}
