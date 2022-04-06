import { unsupportedFeatureAlert } from '../utility/utilityFunctions';

//bottom nav handler class
export class NavBottom {
	constructor() {
		this.nav = document.querySelector('.nav-bottom');
		this.navItems = document.querySelectorAll('.nav-bottom>button');
		this.handleClick();
	}

	handleClick() {
		this.nav.addEventListener('click', e => {
			e.preventDefault();
			e.stopPropagation();
			const button = e.target.closest('button');
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
