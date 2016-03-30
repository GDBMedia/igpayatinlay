function piglatin (word, array){
		if (word.charAt(0) === "q") {
      var qU = (word.charAt(0) + word.charAt(1));
			word = word.slice(2);
			word += qU;
			word += "ay";
			alert(word);
	  } else{
	  	var vowelFound = false;
	  	var count = 0;
	  	for (var i = 0; i < word.length; i++){
	  		for (var x = 0; x < array.length; x++){
	  			if(word.charAt(i) === array[x]){
	  				vowelFound = true;
	  				break;
	  			}
	  		}
	  		if(vowelFound){
	  			break;
	  		}
	  			count++;
			}
			word2 = word;
			word = word.slice(count);
			word = word + word2.substring(0,count);
			word += "ay";
			alert(word);
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

