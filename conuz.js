// mukhriddin_uz
// 
var car;

function latcyr() {
    car = document.transcription.text2.value;
    var k = 0;
    var tekst = '';
    var teg = '';
    var natija = '';
    for (var i = 0; i < car.length; i++) {
        var cut = '';
        cut = car.substring(i, i + 1);
        if (cut == '<' || k == 1) {
            if (tekst != '') {
                natija = natija + replacee(tekst);
                tekst = '';
            }
            k = 1;
            if (k == 1 && cut == '>') {
                natija = natija + teg + cut;
                teg = '';
                k = 0;
            } else {
                teg = teg + cut;
            }
        } else {
            tekst = tekst + cut;
            if (teg != '') {
                natija = natija + teg;
                teg = '';
            }
        }
    }
    if (tekst != '') {
        natija = natija + replacee(tekst);
        tekst = '';
    }
    if (teg != '') {
        natija = natija + teg;
        teg = '';
    }
    return document.transcription.text1.value = natija;

}

function replacee(car) {
    car = car.replace(/\n/g, "\n ");
    car = car.replace(/,/g, ", ");
    car = car.replace(/:/g, ": ");
    car = car.replace(/;/g, "\? ");
    car = car.replace(/·/g, "\; ");
    car = car.replace(/\./g, "\. ");
    car = car.replace(/!/g, "! ");
    car = car.replace(/‘/g, "ъ");
    car = car.replace(/’/g, "ъ");
    car = car.replace(/\'/g, "ъ");
    car = car.replace(/ʻ/g, "ъ");
    car = car.replace(/ʼ/g, "ъ");
    car = car.replace(/h/g, "ҳ");
    car = car.replace(/a/g, "а");
    car = car.replace(/b/g, "б");
    car = car.replace(/cҳ/g, "ч");
    car = car.replace(/d/g, "д");
    car = car.replace(/e/g, "е");
    car = car.replace(/ е/g, " э");
    car = car.replace(/f/g, "ф");
    car = car.replace(/g/g, "г");
    car = car.replace(/гъ/g, "ғ");
    car = car.replace(/i/g, "и");
    car = car.replace(/j/g, "ж");
    car = car.replace(/k/g, "к");
    car = car.replace(/q/g, "қ");
    car = car.replace(/l/g, "л");
    car = car.replace(/m/g, "м");
    car = car.replace(/n/g, "н");
    car = car.replace(/o/g, "о");
    car = car.replace(/оъ/g, "ў");
    car = car.replace(/p/g, "п");
    car = car.replace(/r/g, "р");
    car = car.replace(/s/g, "с");
    car = car.replace(/сҳ/g, "ш");
    car = car.replace(/t/g, "т");
    car = car.replace(/u/g, "у");
    car = car.replace(/v/g, "в");
    car = car.replace(/x/g, "х");
    car = car.replace(/y/g, "й");
    car = car.replace(/z/g, "з");
    car = car.replace(/A/g, "А");
    car = car.replace(/B/g, "Б");

    car = car.replace(/H/g, "Ҳ");
    car = car.replace(/CҲ/g, "Ч");
    car = car.replace(/Cҳ/g, "Ч");
    car = car.replace(/D/g, "Д");
    car = car.replace(/E/g, "Е");
    car = car.replace(/ Е/g, " Э");
    car = car.replace(/F/g, "Ф");
    car = car.replace(/G/g, "Г");
    car = car.replace(/Гъ/g, "Ғ");
    car = car.replace(/I/g, "И");
    car = car.replace(/J/g, "Ж");
    car = car.replace(/K/g, "К");
    car = car.replace(/Q/g, "Қ");
    car = car.replace(/L/g, "Л");
    car = car.replace(/M/g, "М");
    car = car.replace(/N/g, "Н");
    car = car.replace(/O/g, "О");
    car = car.replace(/Оъ/g, "Ў");
    car = car.replace(/P/g, "П");
    car = car.replace(/R/g, "Р");
    car = car.replace(/S/g, "С");
    car = car.replace(/СҲ/g, "Ш");
    car = car.replace(/Сҳ/g, "Ч");
    car = car.replace(/T/g, "Т");
    car = car.replace(/U/g, "У");
    car = car.replace(/V/g, "В");
    car = car.replace(/X/g, "Х");
    car = car.replace(/Y/g, "Й");
    car = car.replace(/Z/g, "З");

    car = car.replace(/йа/g, "я");
    car = car.replace(/йо/g, "ё");
    car = car.replace(/йу/g, "ю");
    car = car.replace(/тс/g, "ц");
    car = car.replace(/ЙА/g, "Я");
    car = car.replace(/ЙО/g, "Ё");
    car = car.replace(/ЙУ/g, "Ю");
    car = car.replace(/ТС/g, "Ц");
    car = car.replace(/Йа/g, "Я");
    car = car.replace(/Йе/g, "Ё");
    car = car.replace(/Йу/g, "Ю");
    car = car.replace(/Тс/g, "Ц");

    car = car.replace(/\n /g, "\n");
    return car;
    //  document.transcription.text1.value=car;
}

function cyrlat() {
    car = document.transcription.text1.value;
    var k = 0;
    var tekst = '';
    var teg = '';
    var natija = '';
    for (var i = 0; i < car.length; i++) {
        var cut = '';
        cut = car.substring(i, i + 1);
        if (cut == '<' || k == 1) {
            if (tekst != '') {
                natija = natija + replaceee(tekst);
                tekst = '';
            }
            k = 1;
            if (k == 1 && cut == '>') {
                natija = natija + teg + cut;
                teg = '';
                k = 0;
            } else {
                teg = teg + cut;
            }
        } else {
            tekst = tekst + cut;
            if (teg != '') {
                natija = natija + teg;
                teg = '';
            }
        }
    }
    if (tekst != '') {
        natija = natija + replaceee(tekst);
        tekst = '';
    }
    if (teg != '') {
        natija = natija + teg;
        teg = '';
    }

    document.transcription.text2.value = natija;
}

function replaceee(car) {
    car = car.replace(/а/g, "a");
    car = car.replace(/б/g, "b");
    car = car.replace(/ч/g, "ch");
    car = car.replace(/д/g, "d");
    car = car.replace(/[еэ]/g, "e");
    car = car.replace(/ф/g, "f");
    car = car.replace(/г/g, "g");
    car = car.replace(/ғ/g, "g‘");
    car = car.replace(/ҳ/g, "h");
    car = car.replace(/и/g, "i");
    car = car.replace(/ж/g, "j");
    car = car.replace(/к/g, "k");
    car = car.replace(/қ/g, "q");
    car = car.replace(/л/g, "l");
    car = car.replace(/м/g, "m");
    car = car.replace(/н/g, "n");
    car = car.replace(/о/g, "o");
    car = car.replace(/ў/g, "o‘");
    car = car.replace(/п/g, "p");
    car = car.replace(/р/g, "r");
    car = car.replace(/с/g, "s");
    car = car.replace(/ш/g, "sh");
    car = car.replace(/т/g, "t");
    car = car.replace(/у/g, "u");
    car = car.replace(/в/g, "v");
    car = car.replace(/х/g, "x");
    car = car.replace(/й/g, "y");
    car = car.replace(/з/g, "z");
    car = car.replace(/ъ/g, "’");
    car = car.replace(/ь/g, "");
    car = car.replace(/А/g, "A");
    car = car.replace(/Б/g, "B");
    car = car.replace(/Ч/g, "Ch");
    car = car.replace(/Д/g, "D");
    car = car.replace(/[ЕЭ]/g, "E");
    car = car.replace(/Ф/g, "F");
    car = car.replace(/Г/g, "G");
    car = car.replace(/Ғ/g, "G‘");
    car = car.replace(/Ҳ/g, "H");
    car = car.replace(/И/g, "I");
    car = car.replace(/Ж/g, "J");
    car = car.replace(/К/g, "K");
    car = car.replace(/Қ/g, "Q");
    car = car.replace(/Л/g, "L");
    car = car.replace(/М/g, "M");
    car = car.replace(/Н/g, "N");
    car = car.replace(/О/g, "O");
    car = car.replace(/Ў/g, "O‘");
    car = car.replace(/П/g, "P");
    car = car.replace(/Р/g, "R");
    car = car.replace(/С/g, "S");
    car = car.replace(/Ш/g, "Sh");
    car = car.replace(/Т/g, "T");
    car = car.replace(/У/g, "U");
    car = car.replace(/В/g, "V");
    car = car.replace(/Х/g, "X");
    car = car.replace(/Й/g, "Y");
    car = car.replace(/З/g, "Z");
    car = car.replace(/Ъ/g, "’");
    car = car.replace(/Ь/g, "");

    car = car.replace(/я/g, "ya");
    car = car.replace(/ё/g, "yo");
    car = car.replace(/ю/g, "yu");
    car = car.replace(/ц/g, "ts");
    car = car.replace(/Я/g, "Ya");
    car = car.replace(/Ё/g, "Yo");
    car = car.replace(/Ю/g, "Yu");
    car = car.replace(/Ц/g, "Ts");
    return car;

}

function copy1() {
    textRange = document.transcription.text1.createTextRange();
    textRange.execCommand("Copy");
    textRange = "";
}

function copy2() {
    textRange = document.transcription.text2.createTextRange();
    textRange.execCommand("Copy");
    textRange = "";
}