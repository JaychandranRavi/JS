// local variable
function bioData()
{
var firstName="Jayachandran";
var rollNo="RWD04011";
var geNder="Male";
var fatherName="Ravichandran";
var motherName="Parimalam"
var aGe="24";
var dOb="04.06.1999"
var qulifiCation="B.E - EEE";
var moblieNumber="8248251870";
var emAil="jayachandran.r1999@gmail.com";
document.getElementById('tblid').innerHTML='<tr><td>Name</td><td>'+firstName+'</td></tr>'
+'<tr><td>Roll No</td><td>'+rollNo+'</td></tr>'
+'<tr><td>Gender</td><td>'+geNder+'</td></tr>'
+'<tr><td>Father Name</td><td>'+fatherName+'</td></tr>'
+'<tr><td>Mother Name</td><td>'+motherName+'</td></tr>'
+'<tr><td>Age</td><td>'+aGe+'</td></tr>'
+'<tr><td>DOB</td><td>'+dOb+'</td></tr>'
+'<tr><td>Qulifiaction</td><td>'+qulifiCation+'</td></tr>'
+'<tr><td>Mobile Number</td><td>'+moblieNumber+'</td></tr>'
+'<tr><td>Email</td><td>'+emAil+'</td></tr>';
}
bioData();
// Global Variable
    var firstName="Jayachandran";
    var rollNo="RWD04011";
    var geNder="Male";
    var fatherName="Ravichandran";
    var motherName="Parimalam"
    var aGe="24";
    var dOb="04.06.1999"
    var qulifiCation="B.E - EEE";
    var moblieNumber="8248251870";
    var emAil="jayachandran.r1999@gmail.com";
    function bioData()
    {
    document.getElementById('tblid').innerHTML='<tr><td>Name</td><td>'+firstName+'</td></tr>'
    +'<tr><td>Roll No</td><td>'+rollNo+'</td></tr>'
    +'<tr><td>Gender</td><td>'+geNder+'</td></tr>'
    +'<tr><td>Father Name</td><td>'+fatherName+'</td></tr>'
    +'<tr><td>Mother Name</td><td>'+motherName+'</td></tr>'
    +'<tr><td>Age</td><td>'+aGe+'</td></tr>'
    +'<tr><td>DOB</td><td>'+dOb+'</td></tr>'
    +'<tr><td>Qulifiaction</td><td>'+qulifiCation+'</td></tr>'
    +'<tr><td>Mobile Number</td><td>'+moblieNumber+'</td></tr>'
    +'<tr><td>Email</td><td>'+emAil+'</td></tr>';
    }
    bioData();
