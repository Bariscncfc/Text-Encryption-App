var encryptBtn = $("#encrypt");

function isUpperCase(letter){
  var l = letter.charCodeAt();
  if(l >= 65 && l <= 90){   // ASCII kodları 65 ile 90 arası büyük harf
    return true;
  }else{
    return false;
  }
};

function isLowerCase(letter){
  var l = letter.charCodeAt();   //karekterin unicode değerini belirtir
  if(l >= 97 && l <= 122){      // ASCII kodları 97 ile 122 arası küçük harf
    return true;
  }else{
    return false;
  }
};

var encrypt = function(plainMsg, key){
  var cypher = "";
  for(var i = 0, j = 0; i < plainMsg.length; i++){
    var currentLetter = plainMsg[i];

    if(isUpperCase(currentLetter)){
      var upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
      cypher += String.fromCharCode(upperLetter+65); // Aldığı unicode tamsayı değer(ler)in karakter gösterimini verir.
      j++;
    }else if(isLowerCase(currentLetter)){
      var lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
      cypher += String.fromCharCode(lowerLetter+97);
      j++;
    }else{
      cypher += currentLetter;
    }
  }
  return cypher;
};

$(document).ready(function(){

  encryptBtn.on("click", function(){
    var plainMsg = $("#userText");
    var keyword = $("#keyword");

    if(plainMsg.val() == "" || keyword.val() == "" ){
      alert("Lütfen Metin ve Anahtar alanını boş bırakmayın ");
    }else{
      plainMsg.val(encrypt(plainMsg.val(), keyword.val()));
    }
  });

});