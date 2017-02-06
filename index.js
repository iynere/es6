class Character {
	constructor(attackPower, health) {
		this.attackPower = attackPower;
		this.health = health;
	}
	
	attack(opposingPlayer) {
		opposingPlayer.health -= Math.random() * this.attackPower;
	}
}

class Red extends Character {
	constructor(attackPower, health) {
		super(attackPower, health);
		this.name = 'red';
	}
}

class Blue extends Character {
	constructor(attackPower, health) {
		super(attackPower, health);
		this.name = 'blue';
	}
}

// winnerArrs.map(item => ({winner: item}));

function Battle(char1, char2) {
	let first, second;
		
	if (Math.random() > .5) {
		first = char1;
		second = char2;
	} else {
		first = char2;
		second = char1;
	}
	
	console.log('first', first.name);
		
	while (char1.health > 0 && char2.health > 0) {
		first.attack(second);
		// console.log(first.name, second.health);
		second.attack(first);
		// console.log(second.name, first.health);
	}
	
	let winner = char1.health > 0 ? char1 : char2;
	console.log(`winner is ${winner.name}`);
	return winner.name;
}

function Battle10(/*char1, char2*/) {
	const winnersArr = [];
	
	for (let i = 0; i < 10; i++) {
		let red = new Red(Math.random() * 10, Math.random() * 100);
		let blue = new Blue (Math.random() * 10, Math.random() * 100);
		winnersArr.push(Battle(red, blue));
	}
	
	console.log(winnersArr);
}

Battle10()