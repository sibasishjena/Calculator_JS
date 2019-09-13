calculator={
    result: "0",
    firstValue: null,
    secondValue: null,
    firstEntered: false,
    action: null
}
function showResult()
{
    let display=document.getElementById("screen");
    display.value=calculator.result;
}
showResult();
document.getElementById("calculator-keys").addEventListener("click",showValue);
//console.log(keys.childNodes);
function resetCalculator()
{
    calculator.result="0";
    calculator.firstValue=null;
    calculator.secondValue=null;
    calculator.action=null;
    calculator.firstEntered=false;
    showResult();
}
function showValue(clickedElement)
{
    //console.log(clickedElement);
    if(clickedElement.target.tagName=="BUTTON")
    {
        let value=clickedElement.target.value;
        //console.log(clickedElement.target.value);
        if(value==="clear")
        {
            resetCalculator();
        }
        else if(value==="=")
        {
            if(calculator.firstValue!=null && calculator.secondValue!=null && calculator.action!=null)
            {
                calculator.firstValue=eval(calculator.firstValue+calculator.action+calculator.secondValue).toString();
                calculator.secondValue=null;
                calculator.action=null;
                calculator.result=calculator.firstValue;
                showResult();
            }
        }
        else if(value==="+" || value==="-" || value==="*" || value==="/")
        {
            if(calculator.firstValue!=null && calculator.secondValue==null)
            {
                calculator.action=value;
                calculator.result="";
                calculator.firstEntered=true;
            }
            else if(calculator.firstValue!=null && calculator.secondValue!=null)
            {
                calculator.firstValue=eval(calculator.firstValue+calculator.action+calculator.secondValue).toString();
                calculator.secondValue=null;
                calculator.result=calculator.firstValue;
            }
            showResult();
        }
        else
        {
            if(calculator.action==null)
            {
                if(calculator.firstEntered==true)
                {
                    calculator.firstValue=null;
                    calculator.firstEntered=false;
                }
                if(calculator.firstValue=="0" || calculator.firstValue==null)
                {
                    calculator.firstValue=value;
                }
                else
                {
                    calculator.firstValue+=value;
                }
                calculator.result=calculator.firstValue;
                showResult();
            }
            else
            {
                if(calculator.secondValue=="0" || calculator.secondValue==null)
                {
                    calculator.secondValue=value;
                }
                else
                {
                    calculator.secondValue+=value;
                }
                calculator.result=calculator.secondValue;
                showResult();
            }

        }
        console.log(calculator.firstValue);
        console.log(calculator.action);
        console.log(calculator.secondValue);
    }
    else
    {
        console.log("Invalid Click");
    }
}
