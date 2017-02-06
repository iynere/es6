'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
	function Character(attackPower, health) {
		_classCallCheck(this, Character);

		this.attackPower = attackPower;
		this.health = health;
	}

	_createClass(Character, [{
		key: 'attack',
		value: function attack(opposingPlayer) {
			opposingPlayer.health -= Math.random() * this.attackPower;
		}
	}]);

	return Character;
}();

var Red = function (_Character) {
	_inherits(Red, _Character);

	function Red(attackPower, health) {
		_classCallCheck(this, Red);

		var _this = _possibleConstructorReturn(this, (Red.__proto__ || Object.getPrototypeOf(Red)).call(this, attackPower, health));

		_this.name = 'red';
		return _this;
	}

	return Red;
}(Character);

var Blue = function (_Character2) {
	_inherits(Blue, _Character2);

	function Blue(attackPower, health) {
		_classCallCheck(this, Blue);

		var _this2 = _possibleConstructorReturn(this, (Blue.__proto__ || Object.getPrototypeOf(Blue)).call(this, attackPower, health));

		_this2.name = 'blue';
		return _this2;
	}

	return Blue;
}(Character);

// winnerArrs.map(item => ({winner: item}));

function Battle(char1, char2) {
	var first = void 0,
	    second = void 0;

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

	var winner = char1.health > 0 ? char1 : char2;
	console.log('winner is ' + winner.name);
	return winner.name;
}

function Battle10() /*char1, char2*/{
	var winnersArr = [];

	for (var i = 0; i < 10; i++) {
		var red = new Red(Math.random() * 10, Math.random() * 100);
		var blue = new Blue(Math.random() * 10, Math.random() * 100);
		winnersArr.push(Battle(red, blue));
	}

	console.log(winnersArr);
}

Battle10();
