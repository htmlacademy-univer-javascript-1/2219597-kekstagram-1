import {getRandomPositiveInteger, getRandomArrayElement, getId} from './util.js';
import { NAMES, USERS_COUNT, COMMENTS, DESCRIPTION, MIN_LIKES, MAX_LIKES, COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX } from './consts.js';

let id = getId();

const getComment = (id) =>
  ({
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  });


const createPost = (id) => {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomPositiveInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)}, ((_, index) => getComment(index + 1)),
};

const createPosts = () => Array.from({length: USERS_COUNT}).map((_, index) => createPost(index + 1))
export { createPosts };
