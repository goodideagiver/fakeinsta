//generate random number between min and max
export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function unsupportedFunction() {
	import('../components/Modal').then(() => {
		const modal = document.createElement('fakeinsta-modal');
		modal.textContent =
			'This function is unsupported and probably will never be added.';
		document.getElementById('app').prepend(modal);
	});
}
