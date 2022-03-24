import { Post } from './post/Post.js';

// const appFeed = document.getElementById('app-content');

// const postTemplate = document.getElementById('post-template');

// for (let i = 0; i < 10; i++) {
// 	const samplePost = postTemplate.content.cloneNode(true);
// 	appFeed.append(samplePost);
// }

class App {
	constructor(elo) {
		this.addInitialPosts();
	}

	async addInitialPosts() {
		for (let index = 0; index < 4; index++) {
			await new Post().addRandomPost();
		}
	}
}

document.getElementById('add-post-btn').addEventListener('click', () => {
	new Post().addRandomPost();
});

new App();

const appContent = document.getElementById('app-content');

const getPostsHeight = () => {
	const posts = [...document.querySelectorAll('.post')];
	posts.forEach((post, id) => (posts[id] = post.offsetHeight));
	const height = posts.reduce((prev, curr) => prev + curr, 0);
	return height;
};

let lastFireEvent = -Infinity;
appContent.addEventListener('scroll', e => {
	const maxHeight = getPostsHeight();
	console.log(Date.now() - lastFireEvent);
	if (appContent.scrollTop > maxHeight - 500 && Date.now() - lastFireEvent > 500) {
		new Post().addRandomPost();
		lastFireEvent = Date.now();
		return;
	}
});

appContent.onscroll = function (ev) {
	if (appContent.innerHeight + appContent.scrollY >= document.body.offsetHeight) {
		console.log('bottom');
	}
};
