
/**
 * match {
 *  team1,
 *  team2,
 *  score1,
 *  score2
 * }
 */

var sportList = {
	'soccer':{
		analyzer:'generalAnalyzer',
		initializer:'generalInitializer'
	}
}
var analyzer = {
	generalAnalyzer: function(match){
		if(! Number.isInteger(match.score1) && Number.isInteger(match.score2)) {
			// invalid match
			return {success: false, message: 'invalid score'}
		}
		let team1 = {};
		let team2 = {};
		let winner = null;
		let loser = null;
		team1.id = match.team1;
		team2.id = match.team2;
		team1.goalScored = team2.goalConceded = match.score1;
		team2.goalScored = team1.goalConceded = match.score2;
		if (match.score1 > match.score2) {
			winner = team1.id;
			loser = team2.id;
		} else if (match.score1 == match.score2) {
			winner = 0;
		} else {
			winner = team2.id;
			loser = team1.id;
		}
		return { success: true, winner, loser, team1, team2 }
	}
}

var initializer = {
	generalInitializer: function(teamId){
		return {
			team: teamId,
			wins: 0,
			losses: 0,
			draws: 0,
			goalScored: 0,
			goalConceded: 0
		}
	}
}

function matchesToStandings(matches, sport, winScore = 3){
	if(Object.keys(sportList).indexOf(sport) === -1){
		return {success: false, message:'unsupported sport'}
	}
	let length = matches.length;

	console.log(length)
	let teams = [];
	let standings = {};
	for (let i = 0; i < length; i++){
		let result = analyzer[sportList[sport].analyzer](matches[i]);
		if(!result.success){
			continue;
		}
		if (teams.indexOf(result.team1.id) == -1) {
			teams.push(result.team1.id)
			standings[result.team1.id] = initializer[sportList[sport].initializer](result.team1.id);
		}
		if (teams.indexOf(result.team2.id) == -1) {
			teams.push(result.team2.id)
			standings[result.team2.id] = initializer[sportList[sport].initializer](result.team2.id);
		}
		standings[result.team1.id].goalScored += result.team1.goalScored;
		standings[result.team1.id].goalConceded += result.team1.goalConceded;
		standings[result.team2.id].goalScored += result.team2.goalScored;
		standings[result.team2.id].goalConceded += result.team2.goalConceded;
		if (result.winner == 0) {
			standings[result.team1.id].draws += 1;
			standings[result.team2.id].draws += 1;
		} else {
			standings[result.winner].wins += 1;
			standings[result.loser].losses += 1;
		}
	}
	return Object.keys(standings).map(x => standings[x]);
}

function rankStandings(standings){

}

exports.test = (matches) => {
	standings = matchesToStandings(matches,'soccer')
	console.log(standings)
}




