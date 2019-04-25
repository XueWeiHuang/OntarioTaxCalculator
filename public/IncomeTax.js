class IncomeTax{
    ontarioTax(nIncome){

        //Ontario 1st bracket 
        if (nIncome<40922)
        {
            let nRc=(nIncome)*.0505;
            return Number(nRc.toFixed(2));
        }
        
        //second bracket
        else if (nIncome>=40922 && nIncome<81847)
        {
            let nRc= (nIncome-40922)*.0915+2067;
            return Number(nRc.toFixed(2));            
        }

        //third bracket
        else if (nIncome>=81847 && nIncome<150000)
        {
            
            let nRc=(nIncome-81847)*.1116+5811 ;
            return Number(nRc.toFixed(2));            
        }

        //fourth bracket
        else if (nIncome>=150000 && nIncome<220000)
        {
            
            let nRc=(nIncome-150000)*.1216+13417 ;
            return Number(nRc.toFixed(2));            
        }

        //fifth bracket
        else if ( nIncome>=220000)
        {
            let nRc= (nIncome-220000)*.1316+21929;
            return Number(nRc.toFixed(2));            
        }

        else if (nIncome==0)
        {
            return nRc=0;
        }
        else
        {
            return "no implemented";
        }
    }

    federalTax(nIncome){
        if (nIncome<45282 && nIncome>0)
        {
            let nRc=(nIncome*.15);
            return Number(nRc.toFixed(2));            
        }
        
        //second bracket
        else if (nIncome>=45282 && nIncome<90563)
        {
            let nRc= (nIncome-45282)*.205+6792;
            return Number(nRc.toFixed(2));            
        }

        //third bracket
        else if (nIncome>=90563 && nIncome<140388)
        {
            let nRc=(nIncome-90563)*.26 +16075;
            return Number(nRc.toFixed(2));            
        }

        //fourth bracket
        else if (nIncome>=140388 && nIncome<200000)
        {
            let nRc=(nIncome-140388)*.29+29029 ;
            return Number(nRc.toFixed(2));            
        }

        //fifth bracket
        else if ( nIncome>=200000)
        {
            let nRc=(nIncome-200000)*.33+46317;
            return Number(nRc.toFixed(2));            
        }
        else if (nIncome==0)
        {
            return nRc=0;
        }

        else{
            return "not implemented";
        }
    }

}

module.exports = IncomeTax;