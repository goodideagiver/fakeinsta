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
					console.log('clicked on nav button that is not implemented yet');
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
