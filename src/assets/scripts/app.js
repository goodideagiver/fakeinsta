import { Post } from './post/Post.js';

// const appFeed = document.getElementById('app-content');

// const postTemplate = document.getElementById('post-template');

// for (let i = 0; i < 10; i++) {
// 	const samplePost = postTemplate.content.cloneNode(true);
// 	appFeed.append(samplePost);
// }

class App {
	constructor(params) {
		for (let index = 0; index < 3; index++) {
			new Post().addRandomPost();
		}
	}
}

document.getElementById('add-post-btn').addEventListener('click', () => {
	new Post().addRandomPost();
});

new App();

const appContent = document.getElementById('app-content');

appContent.addEventListener('scroll', e => {
	console.log(e.target.scrollTop, e.target.offsetHeight + 500, e.target);
	if (appContent.scrollTop > appContent.clientHeight + 200) {
		console.log('add photo');
		new Post().addRandomPost();
	}
});

appContent.onscroll = function (ev) {
	if (appContent.innerHeight + appContent.scrollY >= document.body.offsetHeight) {
		console.log('bottom');
	}
};
