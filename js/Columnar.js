let alpahet = "abcdefghijklmnopqrstuvwxyz";

function handleEncrypt() {
    let plaintext = normalize(getById("p").value);
    if (validate(plaintext, 'Şifrelenecek metin giriniz')) return;
    let key = normalize(getById("key").value);
    let pc = normalize(getById("pc").value);   //şifrelenecek metin tabloya sokulurken tabloda olacak sütün sayısı belirlenir.
    getById("c").value = Encrypt(plaintext, key, pc);
}

function Encrypt(plaintext, key, pc) {  // Şifreleme fonksiyonu çalışıyor
    let klen = key.length;  // anahtar kelimenin degeri klen e eşitleniyor
    if (pc == "") pc = "x";   
    while (plaintext.length % klen != 0) {
        plaintext += pc.charAt(0);
    }
    let colLength = plaintext.length / klen;
    let ciphertext = "";
    k = 0;
    for (i = 0; i < klen; i++) {
        while (k < 26) {
            t = key.indexOf(alpahet.charAt(k));
            arrkw = key.split("");
            arrkw[t] = "_";
            key = arrkw.join("");
            if (t >= 0) break;
            else k++;
        }
        for (j = 0; j < colLength; j++) {
            ciphertext += plaintext.charAt(j * klen + t);
        }
    }
    return ciphertext;
}

function validate(text, message) {
    if (text.length < 1) {
        alert(message);  
    }
}

function getById(id) {
    return document.getElementById(id);
}

function normalize(value) {
    return value.toLowerCase().replace(/[^a-z]/g, "");
}