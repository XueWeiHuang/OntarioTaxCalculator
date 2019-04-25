const IncomeTax = require("./IncomeTax");

const PASSTODEDUCTION=document.getElementById("taxableIncome");
PASSTODEDUCTION.addEventListener("keydown", function(event){
    if (event.key==="Enter")
    {
        event.preventDefault();
        document.getElementById("taxDeducted").focus();
    }
})

document.getElementById("taxForm").addEventListener("submit", (evt)=>{
    evt.preventDefault();
  //ontax fedtax totaltax  taxOwing
    document.getElementById("ontax").innerHTML="";
    document.getElementById("fedtax").innerHTML="";
    document.getElementById("totaltax").innerHTML="";
    document.getElementById("taxOwing").innerHTML="";

    let nIncome = document.getElementById("taxableIncome").value;
    document.getElementById("taxableIncome").value="";

    let nDeducted = document.getElementById("taxDeducted").value;
    document.getElementById("taxDeducted").value="";  

    let oTax = new IncomeTax();

    let nOntario = oTax.ontarioTax(nIncome);
    let oOntax=document.createElement("p");
    oOntax.innerHTML="$"+nOntario.toFixed(2);
    document.getElementById("ontax").append(oOntax);

    let nFederal = oTax.federalTax(nIncome);
    let oFedtax=document.createElement("p");
    oFedtax.innerHTML="$"+nFederal.toFixed(2);
    document.getElementById("fedtax").append(oFedtax);

    let nTotaltax=nOntario+nFederal;
    let oTotaltax=document.createElement("p");
    oTotaltax.innerHTML="$"+nTotaltax.toFixed(2);
    document.getElementById("totaltax").append(oTotaltax);
    document.getElementById("taxOwing").innerHTML ="$"+ (nOntario + nFederal - nDeducted).toFixed(2);
});