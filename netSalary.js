//
let salary;
let benefits;
let NHIF;
let NSSf;
let PAYE;
function salCalc(salary,benefits){
    let gross = salary + benefits;
    let NSSF = gross * 0.06;
    //let netCalculator = gross;
    //PAYE
    if(gross <= 24000){
        PAYE = (gross*0.01)
    }
    else if(gross >= 32333){
        PAYE = (gross*0.3)
    }
    else if(gross >= 24001){
        PAYE = (gross*0.25)
    }
    console.log('gross salary:', gross)
    console.log('PAYE deductions:',PAYE)
    console.log('NSSF deduction:',NSSF)
    //NHIF Deduction

    if(gross <= 5999 ){
        deduction = 150
    }
    else if (gross >= 6000 && gross <= 7999){
        deduction = 300
    }
    else if (gross >= 8000 && gross <= 11999){
        deduction = 400
    }
    else if (gross >= 12000 && gross <= 14999){
        deduction = 500
    }
    else if (gross >= 15000 && gross <= 19999){
        deduction = 600
    }
    else if (gross >= 20000 && gross <= 24999){
        deduction = 750
    }
    else if (gross >= 25000 && gross <= 29999){
        deduction = 850
    }
    else if (gross >= 30000 && gross <= 34999){
        deduction = 900
    }
    else if (gross >= 35000 && gross <= 39999){
        deduction = 950
    }
    else if (gross >= 40000 && gross <= 44999){
        deduction = 1000
    }
    else if (gross >= 45000 && gross <= 49999){
         deduction = 1100
    }
    else if (gross >= 50000 && gross <= 59999){
        deduction = 1200
    }
    else if (gross >= 60000 && gross <= 69999){
       deduction = 1300
    }
    else if (gross >= 70000 && gross <= 79999){
        deduction = 1400
    }
    else if (gross >= 80000 && gross <= 89999){
        deduction = 1500
    }
    else if (gross >= 90000 && gross <= 99999){
        deduction = 1600
    }
    else { 
        deduction =  1700 
    console.log(`NHIF deduction: ${deduction}`);
    console.log('Taxes: PAYE + NSSF + NHIF:',(NSSF + PAYE + NHIF));
    let netSalary = 'NetSalary:'+(gross-(deduction));
    return netSalary;
    }
}
console.log(salCalc(100000,5000));

