import {getRandomPositiveInteger, getRandomArrayElement, id} from './util.js';
import { NAMES, USERS_COUNT, COMMENTS_COUNT, COMMENTS, DESCRIPTION, MIN_LIKES, MAX_LIKES } from './consts.js';

const getComment = (id) =>
  ({
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  });


const createPost = (id) => {
  return {
    id,
    url: `photos/${x}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomPositiveInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)}, (_, index) => getComment(index + 1));
  };
};

const createPosts = () => Array.from({length: USERS_COUNT}).map((_, index) => createPost(index + 1))
export { createPosts };
