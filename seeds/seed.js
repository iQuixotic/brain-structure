

db.Users.create([{
    userName: 'dan123',
    firstName: 'Dan',
    lastName: 'Thomas',
    email: 'dan@dan.com',
    password: '123'
  }, {
    userName: 'ben123',
    firstName: 'Ben',
    lastName: 'Drips',
    email: 'ben@ben.com',
    password: '123'
  }]);
  
db.Cards.create({
    content: {front: 'Here is some data that goes on the front of the card fosho',
            back: 'card1'},
    category: 'Gabba',
    author: 'ben123',
    likes: 4,
    Dislikes: 2
});

