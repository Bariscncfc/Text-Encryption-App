let text = $('input');
let output = $('div');
let btn = $('btn');

text.change(encode);
btn.click(encode);

function encode() {
    output.text(text.val().split('').map(function(x) { // parametre olarak aldığı listenin her elemanına parametre gönderiliyor
        let code = x.charCodeAt(0);
        
        if(x >= 'A' && x <= 'Z') {
            x = String.fromCharCode(155 - code);   // aldığı unicode gerin karakter gösterimini veriyor
        } else if(x >= 'a' && x <= 'z') {
            x = String.fromCharCode(219 - code);
        }
        return x;
    }).join('')); 
}