const team = {
  _players: [
    { firstName: "Maria", lastName: "Sharapova", age: 36 },
    { firstName: "Anna", lastName: "Kournikova", age: 42 },
    { firstName: "Serena", lastName: "Williams", age: 41 },
  ],
  _games: [
    { opponent: "Zenit", teamPoints: "40", opponentPoints: 30 },
    { opponent: "CSKA", teamPoints: "41", opponentPoints: 31 },
    { opponent: "Spartak", teamPoints: "42", opponentPoints: 32 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
