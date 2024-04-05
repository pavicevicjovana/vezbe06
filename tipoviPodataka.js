//Primitivni tipovi
var godine = 25;
var ime = "Jovana";
var studira = true;
//Kompleksni tipovi
//Nizovi
var predmeti = ["EPOS", "KLIJENT", "CLOUD"];
var ocene = [10, 10, 10];
//Tuples
var tuple = ["Saska", 25];
var Modul;
(function (Modul) {
    Modul[Modul["EPOS"] = 0] = "EPOS";
    Modul[Modul["IT"] = 1] = "IT";
    Modul[Modul["IS"] = 2] = "IS";
    Modul[Modul["SI"] = 3] = "SI";
})(Modul || (Modul = {}));
var modul;
//Objekat
var student = {
    ime: "Danica",
    godine: 25,
    studira: true
};
//Unija tipova
var brojIliString = 10;
//Any
var biloSta = "moze bilo koji tip bratyyyyy";
function cao() {
    console.log("cao");
}
//null undefined
var n = null;
var u = undefined;
var nekaVrednost = "neki string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(Modul);
console.log(student);
console.log(biloSta);
console.log(duzinaStringa);
