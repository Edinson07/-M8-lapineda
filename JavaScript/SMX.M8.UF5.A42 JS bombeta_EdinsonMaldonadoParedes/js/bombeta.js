//Bombeta on-off
cc=0
function ca1()
{
if (cc==0) 
{
cc=1
document.getElementById('img1').src="../img/llumon.gif"

}
else
{
cc=0
document.getElementById('img1').src="../img/llumoff.gif"
}
}
//Bombeta trencada
function ca3() {
    var image = document.getElementById('img1');
    if (image.src.match("bulbon")) {
    image.src = "../img/llumoff.gif";
    } else {
    image.src = "../img/llumbreak.gif";
    }
    }
