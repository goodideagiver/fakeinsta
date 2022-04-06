export function getFeedHeight() {
	const posts = [...document.querySelectorAll('.post')];
	posts.forEach((post, id) => (posts[id] = post.offsetHeight));
	const height = posts.reduce((prev, curr) => prev + curr, 0);
	return height;
}

export function getLastPostHeight() {
	const lastPost = document.querySelector('.post');
	return lastPost.offsetHeight;
}

export function timestampDiffNow(lastFetchTimestamp) {
	return Date.now() - lastFetchTimestamp;
}
