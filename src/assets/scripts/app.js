const appFeed = document.getElementById('app-content');

const postTemplate = document.getElementById('post-template');

const samplePost = postTemplate.content.cloneNode(true);
appFeed.append(samplePost);
console.log(samplePost);
