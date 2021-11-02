function jelszoHossz(){
    let hossz = document.getElementById("jelszo").value.length;
    document.getElementById("jelszohossz").innerHTML = hossz+"/8";
    if(hossz<8){
        document.getElementById("jelszohossz").style.color="red";
    }else{
        document.getElementById("jelszohossz").style.color="black";
    }
}
function nevHossz(){
    let hossz = document.getElementById("nev").value.length;
    document.getElementById("nevhossz").innerHTML = hossz+"/20";
    if(hossz>20){
        document.getElementById("nevhossz").style.color="red";
    }else{
        document.getElementById("nevhossz").style.color="black";
    }
}
function jelszoMegvaltoztat(e) {
    e.stopPropagation();
}
function nevMegvaltoztat(e) {
    e.stopPropagation();
}
function jelszoell(){
    let jelszo=document.getElementById("jelszo").value;
    let jelszoell=document.getElementById("jelszoell").value;
    if(jelszoell==jelszo&&jelszo!=""){    
        document.getElementById("hiba").innerHTML = "";
    }else{
        document.getElementById("hiba").innerHTML = "nincs egyezés";
        document.getElementById("hiba").style.color="red";
    }
}
function formell(e){
    e.stopPropagation();
    let jelszo=document.getElementById("jelszo").value;
    
    let jelszohossz=document.getElementById("jelszo").value.length;
    let jelszoell=document.getElementById("jelszoell").value;
    let hossz = document.getElementById("nev").value.length;
    if(jelszoell==jelszo&&jelszo!=""&&jelszohossz>=8&&hossz<=20){
        nullazas();
        setTimeout(siker,2000);
        setTimeout(sikerVege,4000);
    }
}
function siker(){
    document.getElementById("siker").innerHTML = "Sikeres regisztráció";
}
function sikerVege(){
    document.getElementById("siker").innerHTML = "";
}
function nullazas(){
    document.getElementById("nevhossz").innerHTML ="0/20";
    document.getElementById("jelszohossz").innerHTML = "0/8";
    document.getElementById("nev").value="";
    document.getElementById("jelszo").value="";
    document.getElementById("jelszoell").value="";
}
function init() {
    document.getElementById("jelszo").addEventListener("keyup", jelszoHossz);
    document.getElementById("nev").addEventListener("keyup", nevHossz);
    document.getElementById("nev").addEventListener("input", nevMegvaltoztat);
    document.getElementById("jelszoell").addEventListener("mouseout", jelszoell);
    document.getElementById("jelszo").addEventListener("mouseout", jelszoell);
    document.getElementById("regisztral").addEventListener("click", formell);
    nullazas();
}
document.addEventListener("DOMContentLoaded", init);