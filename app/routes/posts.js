// import Route from '@ember/routing/route';

// export default class PostsRoute extends Route {
//   model() {
//     return [
//       { id: 1, title: 'Post 1', body: 'This is the body of post 1' },
//       { id: 2, title: 'Post 2', body: 'This is the body of post 2' },
//       { id: 3, title: 'Post 3', body: 'This is the body of post 3' },
//     ];
//   }
// }


import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  model() {
    return fetch('http://localhost:3001/posts')
      .then(response => response.json());
  }
}