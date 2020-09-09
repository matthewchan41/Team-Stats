const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Lebron',
      lastName: 'James',
      age: 35
    },
    {
      firstName: 'Luka',
      lastName: 'Doncic',
      age: 21
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Seahawks',
      teamPoints: 50,
      opponentPoints: 42
    },
    {
      opponent: 'Heat',
      teamPoints: 100,
      opponentPoints: 80
    }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

addPlayer(firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);
},

  addGame(oppName, points, oppPoints){
    const game = {
      opponent: oppName,
      points: points,
      opponentPoints: oppPoints
    }
    this.games.push(game);
  }
}
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Sea Lions", 100, 50);
team.addGame("Wolves", 56, 90)







