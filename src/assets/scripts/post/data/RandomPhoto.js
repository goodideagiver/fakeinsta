//fetch with timeout
export async function fetchCatPhoto(px) {
	const getCatPhotoUrl = `https://api.thecatapi.com/v1/images/search?size=${px}`;
	const response = await fetch(getCatPhotoUrl);
	const data = await response.json();
	return data[0].url;
}

export async function fetchPhoto(px) {
	const resp = await fetch(`https://picsum.photos/${px}`);
	return resp.url;
}
