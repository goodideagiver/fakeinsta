export const populateUrlArray = async imageCount => {
	const urlList = [];
	for (let i = 0; i < imageCount; i++) {
		urlList.push(new URL(`../../img/gallery-image (${i + 1}).avif`, import.meta.url));
	}
	return urlList;
};
