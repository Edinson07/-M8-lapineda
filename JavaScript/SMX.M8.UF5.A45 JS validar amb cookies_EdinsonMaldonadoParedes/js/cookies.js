function comprova(){
    document.getElementById("usuari").value;
    document.getElementById("contrasenya").value;
    document.getElementById("veri").value;
    //Verficar si les credencials son correctes
    if (usuari.value == "ibai" & contrasenya.value == "1234" & veri.value == "1234"){
        alert ("Les dades introduïdes són correctes")
    }   
    else{
         alert ("Les dades introduïdes són incorrectes")
    }   
    //Verificar si les contrasenyes son correctes
    if (contrasenya.value !=veri.value){
        alert ("Les contrasenyes no coincideixen");
        return false;
        }
    else {
        alert("Les contrasenyes coincideixen");
        return true;
        }
    
}
