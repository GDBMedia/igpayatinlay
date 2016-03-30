function piglatin (word, arrayOfVowels){
	for (var i = 0; i < arrayOfVowels.length; i++){
		if(word.charAt(0) === arrayOfVowels[i]){
			alert("yippie");

		}
	}
}

$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var sentence = $("#sentence").val();
		var sentanceArray = sentence.split(" ");
		var arrayOfVowels = ["a", "e", "i", "o", "u"];

		piglatin(sentence, arrayOfVowels);


	});
});





// bdd:
// 1. if not a word output false
// 2. is first letter a vowel. output: add ay to end
// 2. if word starts with qu output: move qu to end and add ay to end
// 3. if first letter a consonant. output remove consecutive consonants move to end and add ay to end
// 4. if starts with y output same as consonant
