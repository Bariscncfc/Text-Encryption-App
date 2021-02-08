
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let fullAlphabet = alphabet + alphabet + alphabet;

function runCipher(){
  let cipherText = $('#cypher').val();  // Düz metnin degerini alıyor
  let cipherOffset = $('#offset').val(); // Kaydırma aralıgı degerini alıyor
  cipherOffset = (cipherOffset % alphabet.length);  
  let cipherFinish = '';    //şifreli mesaj tanımlanıyor

  for(i=0; i<cipherText.length; i++){    // Düz metindeki harfler döngü kullanarak büyük harfe çevriliyor 
     let letter = cipherText[i];   // Düz metnin her indexi degiskene esitleniyor
     let upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();
    
     let index = alphabet.indexOf(letter);  // harfin alfabedeki sıra degeri alıyor
     if(index == -1){
       cipherFinish += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length); 
       let nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherFinish += nextLetter;
     }
  }
    
  $('#finish').val(cipherFinish);
}

$(document).ready(function() {  // şifreleme metodu çalışıyor
  $('#cypher').blur(function(){
    runCipher();
  });
  $('#offset').change(function(){
    setTimeout(runCipher(),20);
  });
  
});
