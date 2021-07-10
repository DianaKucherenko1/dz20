
let arr = [1 , 2 , 3];

let sumArr = arr.concat([4 , 5 , 6]);

console.log(sumArr);


let arrSec = [1 , 2 , 3];

console.log(arrSec);

arrSec.reverse();

console.log(arrSec);


let arrThird = [1 , 2 , 3];

console.log(arrThird.push(4 , 5 , 6));

console.log(arrThird);



let arrFour = [1 , 2 , 3];

console.log(arrFour.unshift(4 , 5 , 6));

console.log(arrFour);



let arrFife = ['js', 'css', 'jq'];

alert( arrFife.shift() ); 




let arrSix = ['js', 'css', 'jq'];

alert( arrSix.pop() ); 




let arrSeven = [1 , 2 , 3, 4 , 5];

const newArr =  arrSeven.slice(0, 3);

console.log(newArr);

console.log(arrSeven)




let arrEight = [1 , 2 , 3, 4 , 5];

const newArrSec =  arrEight.slice(-2);

console.log(newArrSec);

console.log(arrEight)




let arrNine = [1 , 2 , 3, 4 , 5];

arrNine.splice(1 , 2);

console.log(arrNine);



let arrTen = [1 , 2 , 3, 4 , 5];

let arrNewSec =  arrTen.splice(0, 1);

let arrNewTh = arrTen.splice(-1);


console.log(arrTen)


let arrMid = [1 , 2 , 3, 4 , 5];

arrMid.splice(2, 0, 'a', 'b', 'c');

console.log(arrMid);

let arrTwelv = [1 , 2 , 3, 4 , 5];

let newArrTwFirst = arrTwelv.splice(1, 0, 'a', 'b', );

let newArrTwSec = arrTwelv.splice(6, 0, 'c' );

let newArrTwTh = arrTwelv.splice(8, 0, 'e' );

console.log(arrTwelv);

let arrSort = [3 , 4 , 1, 2 , 7];

arrSort.sort();

console.log(arrSort);



var arrSum = [5, 6, 7, 8, 9];
var resul = arrSum.reduce(function(sum, a) {
	return sum + a;
});
console.log(resul);  


let arrSquare = [5, 6, 7, 8, 9];

let newArrSquare = arrSquare.map(function(a) {
	return a * a;
});

alert(newArrSquare)    


let arrNeg = [1,-3, 5, 6,-7, 8, 9,-11];

let resultSec = arrNeg.filter(function(a) {
	if (a  < 0) {
		return true;
	} else {
		return false;
	}
});

console.log(resultSec);


let arrEvenNum = [1,-3, 5, 6,-7, 8, 9,-11];

let result = arrEvenNum.filter(function(a) {
	if (a % 2 === 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result);


let arrLend =  ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];


let resultTh = arrLend.filter(function(a) {
	if (a.length > 5) {
		return true;
	} else {
		return false;
	}
});

console.log(resultTh);

let arrElem = [1, 2, [3, 4], 5, [6, 7]];


let res = arrElem.filter(function(a) {
	if (Array.isArray(a)) {
		return true;
	} else {
		return false;
	}
});

console.log(res);

let arrSumNeg = [5,-3, 6,-5, 0,-7, 8, 9];


let newArrSumNeg = arrSumNeg.filter(function(a) {
	if (a < 0) {
		return true;
	} else {
		return false;
	}
});

console.log(newArrSumNeg.length);
