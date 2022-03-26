import { getRandomName } from './data/Names.js';
import { getRandomSentence } from './data/Desc.js';
import { PostUtils } from './PostUtils.js';
export class Post extends PostUtils {
	constructor(username, description, image) {
		super();
	}
}
