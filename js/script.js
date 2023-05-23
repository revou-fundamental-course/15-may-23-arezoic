
var sisiLuas;
function hitungDanCekLuas()   {
    sisiLuas = document.getElementById("sisi-luas").value;
    if (sisiLuas == '' || isNaN(sisiLuas)) {
        alert('Please fill in your answer');
    } else  {
        hitungLuas(sisiLuas);
    }
}
// Variabel nya sisi luas, diambil dari html yang id nya sisi-luas. Jika sisi luas kosong, maka akan muncul notifikasi alert
// Selain itu, maka luas akan di kalkulasi sesuai rumus sisi x sisi


function hitungLuas() {
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
// Jika mengklik reset luas, maka rumus-luas, perhitungan-luas, dan output-luas akan kosong

var sisiKeliling;
function hitungDanCekKeliling()   {
    sisiKeliling = document.getElementById("sisi-keliling").value;
    if (sisiKeliling == '' || isNaN(sisiKeliling)) {
        alert('Please fill in your answer');
    } else  {
        hitungKeliling(sisiKeliling);
    }
}
// Variabel nya sisi keliling, diambil dari html yang id nya sisi-keliling. Jika sisi keliling kosong, maka akan muncul notifikasi alert
// Selain itu, maka keliling akan di kalkulasi sesuai rumus 4 x sisi

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
// Jika mengklik reset keliling, maka rumus-keliling, perhitungan-keliling, dan output-keliling akan kosong