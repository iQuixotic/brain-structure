// db.brain_db.drop();

// db.Users.drop();
// db.BlogPosts.drop();
// db.BlogResp.drop();
// db.Cards.drop();
// db.Decks.drop();
// db.Note.drop();

// db.Users.create([{
//     userName: 'dan123',
//     email: 'dan@dan.com',
//     password: '123'
//   }, {
//     userName: 'ben123',
//     email: 'ben@ben.com',
//     password: '123'
//   }]);
  
//   db.BlogPosts.create({
//      user: 'dan123',
//      title: 'The Best Post Ive Ever seen !!',
//      body: 'I love to post things about science and the brain. I feel awesome right now, and if you ' +
//      'guys want, you should all totally come over this weekend !!! My parents are out of town. ',
//      Likes: 7,
//      Dislikes: 2
//     });
  
//     db.BlogResp.create({
//       user: 'ben123',
//       body: 'Dude, what are you even taking about ? I cant EVEN ...',
//       Likes: 4,
//       Dislikes: 4
//     });
  
//     db.Cards.create({
//         user: 'ben123',
//         title: 'Card Title Here',
//         content: {front: 'Here is some data that goes on the front of the card fosho',
//                   back: 'card1'},
//         verified: 3
//     });
  
//     db.Decks.create({
//         user: 'ben123',
//         name: 'wicked', 
//         cards: 'All of them' 
//     });
  
//     db.Note.create({
//         user: 'ben123',
//         name: 'please dont forget to study squiggles'
//     })
  
//   // .then(user => {
//   //   console.log(`${user.length} users created`);
//   // })
//   // .catch((err) => {
//   //   console.log(err);
//   // })
//   // .finally(() => {
//   //   mongoose.connection.close();
//   // });