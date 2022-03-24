const appFeed = document.getElementById('app-content');

const postTemplate = document.getElementById('post-template');

for (let i = 0; i < 10; i++) {
	const samplePost = postTemplate.content.cloneNode(true);
	appFeed.append(samplePost);
}
