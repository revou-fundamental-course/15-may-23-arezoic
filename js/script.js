
var sisiLuas;
function hitungLuas() {
    sisiLuas = document.getElementById("sisi-luas").value;
    var luasPersegi = sisiLuas * sisiLuas;

    console.log(sisiLuas);
    document.getElementById("rumus-luas").innerHTML = 'L = S X S';
    document.getElementById("perhitungan-luas").innerHTML = 'L = ' + sisiLuas +' x ' + sisiLuas;
    document.getElementById("output-luas").innerHTML = 'L = ' + luasPersegi;
}

function resetLuas()  {
    console.log(sisiLuas);
    document.getElementById("rumus-luas").innerHTML = '';
    document.getElementById("perhitungan-luas").innerHTML ='';
    document.getElementById("output-luas").innerHTML ='';
}

var sisiKeliling;
function hitungKeliling() {
    sisiKeliling = document.getElementById("sisi-keliling").value;
    var kelilingPersegi = 4 * sisiKeliling;

    console.log(sisiKeliling);
    document.getElementById("rumus-keliling").innerHTML = 'K = 4 X S';
    document.getElementById("perhitungan-keliling").innerHTML = 'K = ' + '4 x ' + sisiKeliling;
    document.getElementById("output-keliling").innerHTML = 'K = ' + kelilingPersegi;
}

function resetKeliling()  {
    console.log(sisiKeliling);
    document.getElementById("rumus-keliling").innerHTML = '';
    document.getElementById("perhitungan-keliling").innerHTML ='';
    document.getElementById("output-keliling").innerHTML ='';
}