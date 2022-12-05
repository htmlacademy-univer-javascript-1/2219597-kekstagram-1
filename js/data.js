import {getRandomPositiveInteger, getRandomArrayElement, getId, getCommentId} from './util.js';

const NAMES = [
  'Кирилл',
  'Софья',
  'Юлия',
  'Арина',
  'Виктор',
  'Светлана',
  'Даниил',
  'Вероника',
  'Дмитрий',
  'Алёна',
];

const USERS_COUNT = 25;
const COMMENTS_COUNT = 4;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Это я в горах, загораю',
  'Кому привезти открытку с отпуска?',
  'Жизнь прекрасна!',
  'Сегодня думал о смысле жизни, ничего придумать не удалось.',
  'Обычно здесь что-то пишут, но я пока не придумал',
  'Моя любимая фотка',
];

const getComment = () =>
  ({
    id: getCommentId(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  });

const createPost = () => {
  let id = getId();
  {
    id: id,
    url: `photos/{{{${id}}}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: COMMENTS_COUNT}, getComment),
  };
};

const createPosts = () => Array.from({length: USERS_COUNT}, createPost);
export {createPosts};
