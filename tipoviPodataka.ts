//Primitivni tipovi
let godine:number=25;
let ime:string="Jovana";
let studira:boolean=true;

//Kompleksni tipovi
//Nizovi
let predmeti:string[]=["EPOS","KLIJENT","CLOUD"];
let ocene:number[]=[10,10,10];

//Tuples
let tuple:[string,number]=["Saska",25];
 
enum Modul{
    EPOS,IT,IS,SI
}

let modul:Modul.EPOS;

//Objekat
let student:{ime:string,godine:number,studira:boolean}={
    ime:"Danica",
    godine:25,
    studira:true
};


//Unija tipova
let brojIliString:number | string=10;

//Any
let biloSta:any="moze bilo koji tip bratyyyyy";


function cao():void{
    console.log("cao");
}

//null undefined
let n:null=null;
let u:undefined=undefined;

let nekaVrednost:any="neki string";
let duzinaStringa:number=(nekaVrednost as String).length;

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(Modul);
console.log(student);
console.log(biloSta);
console.log(duzinaStringa);
