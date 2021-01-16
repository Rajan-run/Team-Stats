const team = {
  _players: [
   { firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11 }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }
  ],
  get players(){
return this._players;
  },
  get games(){
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);

  },
   addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
  
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 44);

console.log(team.players);


team.addGame("See lions", 100, 50);
team.addGame("Wolves", 56, 90);
team.addGame("TIgers", 38, 47);

console.log(team.games);

