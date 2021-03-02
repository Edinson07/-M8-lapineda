function enviar() {

document.getElementById("uno");
document.getElementById("dos");
if (uno.value !=dos.value){
alert ("Les contrasenyes no coincideixen");
return false;
}
else {
alert("Les contrasenyes coincideixen");
return true;
}
}
