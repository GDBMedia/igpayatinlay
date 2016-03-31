function piglatin (array1, array2){
	var result = "Pig Latin: "
	for(var z = 0; z < array1.length; z++){
		var word = array1[z];
	

		var quFound = false;
		var uCount = 0;
		for (var a = 0; a < word.length; a++){
				if((word.charAt(a) === "u") && (word.charAt(a-1) === "q")){
					uCount = a;
					quFound = true;
					break;
				}
			}
		if(!quFound){

	  	var vowelFound = false;
	  	
	  	var count = 0;
	  	for (var i = 0; i < word.length; i++){
	  		for (var x = 0; x < array2.length; x++){
  				
	  			if(word.charAt(i) === array2[x]){

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
		}else{
			word2 = word;
			var word3 = word.substr(0, (uCount-1));
			var word4 = word.substr((uCount+1), word.length);
			word = word3+word4;
			word = word + word2.substring((uCount-1), (uCount+1));
			word += "ay";
			
		}
	result += " " + word;
}
return result;
}




$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var sentence = $("#sentence").val();
		var sentenceArray = sentence.split(" ");
		var arrayOfVowels = ["a", "e", "i", "o", "u"];

		var result = piglatin(sentenceArray, arrayOfVowels);
		

		$("#result").show();
		$("#resultT").text(result);

	});
});





