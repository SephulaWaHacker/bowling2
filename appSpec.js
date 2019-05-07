describe("10 pin bowling", function() {
let player;
let game;

it("show a person starts with a total score of zero", function() {
  player = new Person();
  expect(player.totalScore).toEqual(0)
});

it("should show a person has 10 frames", function() {
  player = new Person();
  expect(player.frames.length).toEqual(10)
});

it("show a person frame score starts with 0", function() {
  player = new Person();
  expect(player.frameScores.length).toEqual(0)
});

it("can roll a random generated number ranging from 0 to 10", function() {
  game = new Game();
  expect(game.pinsDown).toBeLessThan(11)
});

});
