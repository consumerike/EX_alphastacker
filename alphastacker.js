var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alpha = alphabet.join('');
 var answer = "";


function stacker() {



	for (i = 0; i < alphabet.length; i++) {
		if ([i + 1] % 3 === 0) {
			console.log(answer+= alphabet[i]+ " ");
		}

		else {
			console.log(answer+= alphabet[i]);
		}
	}
}



// 		if([i + 1] % 3 === 0) {
// 			  console.log(" "+alpha.slice([0], [i+1]));
// 		}

// 		else {
// 			console.log(alpha.slice([0],[i + 1]));
// 		}

// 	}

// }


// FOR LATER USE IF NECESSARY:
// console.log(alphabet.slice([0],[i + 1]));


// alphabet.forEach(function(item) {
// 	var newAlphabetString = "I like this string: " + item;
// 		console.log(newAlphabetString);
// });