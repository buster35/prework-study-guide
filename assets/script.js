
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];
//this variable simply uses the math built in object to pick an index number 0-3, 
//which is based on the index length of the topics array.

function listTopics() {
  for(var x = 0; x < topics.length; x++) {
  console.log(topics[x]);
  }
}


function selectTopic() {
  if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
  } else {
  console.log('Please try again!');
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();


