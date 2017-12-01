//requires mocha.js installed locally or globally
const matchDigestModel = require("./modules/matchDigest");

describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  let testMatches = [
    {
      team1:1,
      team2:2,
      score1:3,
      score2:1,
    },
    {
      team1:1,
      team2:3,
      score1:0,
      score2:0,
    },
    {
      team1:1,
      team2:4,
      score1:0,
      score2:0,
    },
    {
      team1:1,
      team2:5,
      score1:0,
      score2:0,
    },
    {
      team1:2,
      team2:3,
      score1:0,
      score2:0,
    },
    {
      team1:2,
      team2:4,
      score1:0,
      score2:0,
    },
    {
      team1:2,
      team2:5,
      score1:0,
      score2:0,
    },
    {
      team1:3,
      team2:4,
      score1:0,
      score2:0,
    },
    {
      team1:3,
      team2:5,
      score1:0,
      score2:0,
    },
    {
      team1:4,
      team2:5,
      score1:0,
      score2:0,
    }
  ]
  describe('Test 1', () => {
    it('test item 1', function(done) {
      matchDigestModel.test(testMatches);
      done()
    })
  });
});