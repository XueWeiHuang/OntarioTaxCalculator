const IncomeTax = require('../public/IncomeTax');

let oTax = new IncomeTax();

// ON 1st bracket

it("calculate Ontario tax on $1000", ()=>{
    expect(oTax.ontarioTax(10000)).toBe(505.00);
})
// ON 2nd bracket 
it("calculate Ontario tax on $40922", ()=>{
    expect(oTax.ontarioTax(40922)).toBe(2067.00);
})

// ON 3rd bracket

it("calculate Ontario tax on $81847", ()=>{
    expect(oTax.ontarioTax(81847)).toBe(5811.00);
})

// ON 4th bracket

it("calculate Ontario tax on $150000", ()=>{
    expect(oTax.ontarioTax(150000)).toBe(13417.00);
})

// ON 5th bracket
it("calculate Ontario tax on $220000", ()=>{
    expect(oTax.ontarioTax(220000)).toBe(21929.00);
})


// Federal 1st bracket
it("calculate Federal tax on $10000", ()=>{
    expect(oTax.federalTax(10000)).toBe(1500.00);
})


//Federal 2nd bracket 
it("calculate Federal tax on $45282", ()=>{
    expect(oTax.federalTax(45282)).toBe(6792.00);
})

//Federal 3rd bracket
it("calculate Federal tax on $90563", ()=>{
    expect(oTax.federalTax(90563)).toBe(16075.00);
})

//Federal 4th bracket
it("calculate Federal tax on $140388", ()=>{
    expect(oTax.federalTax(140388)).toBe(29029.00);
})

//Federal 5th bracket
it("calculate Federal tax on $200000", ()=>{
    expect(oTax.federalTax(200000)).toBe(46317.00);
})


it("Calculates Ontario Tax on $100,000", ()=>{
    expect(oTax.ontarioTax(100000)).toBe(7836.87);
});


it("Calculates Federal Tax on $100,000", ()=>{
    expect(oTax.federalTax(100000)).toBe(18528.62);
});