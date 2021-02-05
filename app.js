var InputBill = document.querySelector("#inpBill");
var InputCash = document.querySelector("#inpCash");
var InpButton = document.querySelector("#buttonn")
var leftAmount = document.querySelector("#returnAmount");

var twot = document.querySelector("#two");
var fivehunt = document.querySelector("#fivehun");
var onehuntt = document.querySelector("#onehun");
var twentyt = document.querySelector("#twenty");
var tent = document.querySelector("#ten");
var fivet = document.querySelector("#five");
var onet = document.querySelector("#one");

function showBox()
{ 
    if(InputBill.value==="")
    InputCash.style.visibility = "hidden";
else
    InputCash.style.visibility = "visible";
}

function clickHandler()
{
    leftAmount.innerText = InputCash.value - InputBill.value;


    var remainder = leftAmount.value;
    for(var i=0;i<7;i++)
    {
        if(2000<=leftAmount.value)
        {
            twot.innerHTML = "×" + Math.floor(leftAmount.value/2000);
            remainder = remainder%2000;
        }
        else if(500<=remainder)
        {
            fivehunt.innerHTML = "×" + Math.floor(remainder/500);
            remainder = remainder%500;
        }
        else if(100<=remainder)
        {
            onehuntt.innerHTML = "×" + Math.floor(remainder/100);
            remainder = remainder%100;
        }
        else if(20<=remainder)
        {
            twentyt.innerHTML = "×" + Math.floor(remainder/20);
            remainder = remainder%20;
        }
        else if(10<=remainder)
        {
            tent.innerHTML = "×" + Math.floor(remainder/10);
            remainder = remainder%10;
        }
        else if(5<=remainder)
        {
            fivet.innerHTML = "×" + Math.floor(remainder/5);
            remainder = remainder%5;
        }
        else if(1<remainder)
        {
            onet.innerHTML = "×" + Math.floor(remainder/1);
            remainder = remainder%1;
        }
    }
}
InpButton.addEventListener("click", clickHandler)