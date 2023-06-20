
function addition(){
    var add = document.getElementById('number').value;
    add++;
    document.getElementById('number').value=add ;

}
function subtraction(){
    var sub= document.getElementById('number').value;
    sub--;
    document.getElementById('number').value=sub;
}
function reset(){
    document.getElementById('number').value="";
}

