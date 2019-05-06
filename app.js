function Person (){
    this.frames = [[], [], [], [], [], [], [], [], [], []];
    this.frameScores = [];
    this.totalScore = 0;
  
}

function Roll() {
  if (people[j].frames[i].length < 1) {
    this.pinsDown = Math.floor(Math.random() * 11);
  } else {
    this.pinsDown = Math.floor(
      Math.random() * (11 - people[j].frames[i][0])
    );
  }
  return pinsDown;
}

let [person_1, person_2, person_3] = [new Person(), new Person(), new Person()];
let people = [person_1, person_2, person_3];
let i = 0;

while (i < 10) {
  for (j = 0; j < people.length; j++){
    for (x = 0; x < 2; x++)
      people[j].frames[i].push(Roll());
    const sumTotal = people[j].frames[i].reduce((total, amount) => total + amount);
      people[j].frameScores.push(sumTotal)
        people[j].totalScore = people[j].frameScores.reduce((total, amount) => total + amount);
      console.log("player" + [j + 1] +" frame " + [i + 1] + " score :" + people[j].frames[i]); 
      console.log("player" + [j + 1] +" "+ sumTotal + "pins this turn");
  }       
  if(person_1.frameScores[i] > person_2.frameScores[i] && person_1.frameScores[i] > person_3.frameScores[i]){
      console.log("Player1 is leading");
    } else if(person_2.frameScores[i] > person_1.frameScores[i] && person_2.frameScores[i] > person_3.frameScores[i]){
      console.log("Player2 is leading")
    } else{
      console.log("Player3 is leading")
    }
  i++;
}
console.log("Player1 total score : " + person_1.totalScore);
console.log("Player2 total score : " + person_2.totalScore);
console.log("Player3 total score : " + person_3.totalScore);
// console.log(person_3.frames[3][0]);
