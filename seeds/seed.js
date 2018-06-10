

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
  
db.Cards.insert({
    content: {front: 'Pavlov called the dogs\'\ anticipatory salivation "psychic secretion". Putting these informal observations to an experimental test, Pavlov presented a stimulus (e.g. the sound of a metronome) and then gave the dog food; after a few repetitions, the dogs started to salivate in response to the stimulus.',
            back: 'https://www.sciencedirect.com/science/article/pii/S0960982203000666'},
    category: 'Behavior',
    author: 'ben123',
    likes: 4,
    Dislikes: 0
}, {
  content: {front: 'A new study on the brains of 949 young people found striking gender differences in the brain’s connectivity between males and females. These may help explain some of the classic psychological differences between men and women',
            back: 'https://www.spring.org.uk/2013/12/connectivity-the-difference-between-mens-and-womens-brains.php'},
  category: 'Neuroscience',
  author: 'ben123',
  likes: 9,
  Dislikes: 2
}, {
  content: {front: 'A new study published in the prestigious journal, Science, found that the brain may wash away toxins built up over the day during sleep.',
            back: 'https://www.spring.org.uk/2013/11/hidden-caves-in-the-brain-open-up-during-sleep-to-wash-away-toxins.php'},
  category: 'Sleep',
  author: 'dan123',
  likes: 6,
  Dislikes: 1
}, {
  content: {front: 'Evidence from over 1,000 fMRI brain scans finds no evidence people are ‘right-brained’ or ‘left-brained’.',
  back: 'https://www.spring.org.uk/2013/08/debunked-right-brain-and-left-brain-personalities.php'},
category: 'Neuroscience',
author: 'ben123',
likes: 1,
Dislikes: 2
}, {
  content: {front: 'Those who were confirmed night owls (preferring late to bed and late to rise) were found to have lower integrity of the white matter in various areas of the brain.',
  back: 'https://www.spring.org.uk/2013/11/like-to-stay-up-late-different-neural-structures-found-in-the-brains-of-night-owls.php'},
category: 'Neuroscience',
author: 'dan123',
likes: 4,
Dislikes: 8
}, {
  content: {front: 'Imagine if it were possible for one person to control another person’s movements over the internet, purely using their thoughts. Well, researchers at the University of Washington have managed to set up the first ever noninvasive human-to-human brain interface.',
  back: 'https://www.spring.org.uk/2013/09/remote-control-of-the-mind-over-the-internet.php'},
category: 'Neuroscience',
author: 'dan123',
likes: 3,
Dislikes: 0
}, {
  content: {front: 'Pilot study finds mood of chronic pain patients is boosted by left-field use of ultrasound machine. Could it work for all of us?',
  back: 'https://www.spring.org.uk/2013/07/brain-ultrasound-how-sound-waves-can-boost-mood.php'},
category: 'Pain',
author: 'ben123',
likes: 7,
Dislikes: 10
}, {
  content: {front: 'A new study has found that the body produces natural painkillers in response to social rejection, just as if it had suffered a physical injury.',
  back: 'https://www.spring.org.uk/2013/10/social-rejection-triggers-release-of-natural-painkillers-in-the-brain.php'},
category: 'Pain',
author: 'ben123',
likes: 11,
Dislikes: 1
}, {
  content: {front: 'Every day, when you open your eyes in the morning, there is a huge flood of visual information from the external world into your mind. Your brain edits this flood down to a trickle of things that are highly relevant: Where is the dressing-gown? Where is the curtain? Where is the door?',
  back: 'https://www.spring.org.uk/2013/11/the-brain-sees-objects-that-you-dont-perceive.php'},
category: 'Perception',
author: 'ben123',
likes: 1,
Dislikes: 1
}, {
  content: {front: 'Childhood stress and poverty linked to problems regulating the emotions in adulthood, according to a recent study.',
  back: 'https://www.spring.org.uk/2013/10/childhood-poverty-and-stress-harms-adult-brain-function.php'},
category: 'Developmental',
author: 'dan123',
likes: 1,
Dislikes: 21
}, {
  content: {front: 'Without empathy, human beings are lonely, disconnected creatures. And recent neuroscientific studies now demonstrate the enormous human capacity for empathy in the living mind.',
  back: 'https://www.spring.org.uk/2013/08/neuroscience-reveals-the-deep-power-of-human-empathy.php'},
category: 'Neuroscience',
author: 'dan123',
likes: 10,
Dislikes: 9
}, {
  content: {front: 'Back in March, researchers reported that depression may not be just a psychiatric disorder, but instead a systemic disease.',
  back: 'https://neurosciencenews.com/depression-systemic-illness-3775/'},
category: 'Depression',
author: 'ben123',
likes: 5,
Dislikes: 2
}, {
  content: {front: 'Researchers from University College London discovered people with depression had hyperactive habenula function. ',
  back: 'https://neurosciencenews.com/depression-habenula-neuroscience-4343/'},
category: 'Depression',
author: 'ben123',
likes: 5,
Dislikes: 3
}


);

db.Disorder.insert({
  name: "Depression",
  summary: 'Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.',
  brainArchitecture: 'Before treatment, depressed patients had a thicker cortex in the frontal, temporal and parietal lobes of the brain',
  neuroChem: 'Depression has been linked to problems or imbalances in the brain with regard to the neurotransmitters serotonin, norepinephrine, and dopamine. The evidence is somewhat indirect on these points because it is very difficult to actually measure the level of neurotransmitter in a persons brain. What we do know is that antidepressant medications (used to treat the symptoms of depression) are known to act upon these particular neurotransmitters and their receptors.', 
  studies: 'Happiness: What studies on twins show us about nature, nurture, and the happiness set-point. http://psycnet.apa.org/record/2000-03362-000'
}, {
  name: "Schizophrenia",
  summary: 'Schizophrenia is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.',
  brainArchitecture: 'Before treatment, schizophrenic patients had a thicker cortex in the frontal, temporal and parietal lobes of the brain',
  neuroChem: 'Schizophrenia has been linked to problems or imbalances in the brain with regard to the neurotransmitters serotonin, norepinephrine, and dopamine. The evidence is somewhat indirect on these points because it is very difficult to actually measure the level of neurotransmitter in a persons brain. What we do know is that antidepressant medications (used to treat the symptoms of depression) are known to act upon these particular neurotransmitters and their receptors.', 
  studies: 'Happiness: What schizophrenic studies on twins show us about nature, nurture, and the happiness set-point. http://psycnet.apa.org/record/2000-03362-000'
})