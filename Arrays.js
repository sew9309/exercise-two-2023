const simpleArray = ['hi','hello', 'bye']

const valueIWant = simpleArray.find ((val) => val === 'hello');

const complexArray = [
    { id: 'article-one', title: 'hi'},
    { id: 'article-two', title: 'hello'},
    { id: 'article-three', title: 'bye'}
]

const slug = 'article-three';

const articleData = complexArray.find((val) => val.id === slug);