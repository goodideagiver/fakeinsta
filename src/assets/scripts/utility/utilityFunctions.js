//generate random number between min and max
export const getRandomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const unsupportedFeatureAlert = () => {
	import('../components/Modal').then(() => {
		const modal = document.createElement('fakeinsta-modal');
		modal.textContent =
			'This function is unsupported and probably will never be added.';
		document.getElementById('app').prepend(modal);
	});
};
