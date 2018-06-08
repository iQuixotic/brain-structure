

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

db.Disorder.create({
  name: "Depression",
  summary: 'Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.',
  brainArchitecture: 'Before treatment, depressed patients had a thicker cortex in the frontal, temporal and parietal lobes of the brain',
  neuroChem: 'Depression has been linked to problems or imbalances in the brain with regard to the neurotransmitters serotonin, norepinephrine, and dopamine. The evidence is somewhat indirect on these points because it is very difficult to actually measure the level of neurotransmitter in a persons brain. What we do know is that antidepressant medications (used to treat the symptoms of depression) are known to act upon these particular neurotransmitters and their receptors.', 
  studies: 'Happiness: What studies on twins show us about nature, nurture, and the happiness set-point. http://psycnet.apa.org/record/2000-03362-000'
})