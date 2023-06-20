function checkName()
{
    var productName=document.getElementById('pname').value;
    var span1=document.getElementById('sp1');
    if(productName !='')
    {
        span1.innerHTML='ok'
    }
    else
    {
        span1.innerHTML='Enter a Product Name';
    }
}
function checkCode()
{
    var productCode=document.getElementById('pcode').value;
    var span2=document.getElementById('sp2');
    if(productCode.length>5)
    {
        span2.innerHTML='valid';
    }
    else
    {
        span2.innerHTML='invalid';
    }
}

function checkColor()
{
    var productColor=document.getElementById('pcolor').value;
    var span3=document.getElementById('sp3');
    if(productColor !='')
    {
        span3.innerHTML='Color';
    }
    else
    {
        span3.innerHTML='Please enter a Color';
    }
}

function totalPrice()
{
    var productPrice=parseInt(document.getElementById('pprice').value);
    var gst=document.getElementById('gst').value=productPrice*(6/100);
    var cgst=document.getElementById('cgst').value=productPrice*(3/100);
    var igst=document.getElementById('igst').value=productPrice*(3/100);
    var gst1=parseInt(gst);
    var cgst1=parseInt(cgst);
    var igst1=parseInt(igst);
    var mrp=document.getElementById('mrp').value=(productPrice+gst+cgst+igst);
    var mrp1=parseInt(mrp);

    document.getElementById('tbodyid').innerHTML='<tr><td>'+productPrice+'</td><td>'+gst1+'</td><td>'+cgst1+'</td><td>'+igst1+'</td><td>'+mrp1+'</td></tr>'
}