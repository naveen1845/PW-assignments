function calcTax (income){
    let taxRate = 0
    function FindTaxRate(income){
        if((income >= 1000) && (income <= 100000)){
            taxRate = 0.10;
        }else if((income > 100000) &&  (income <= 1000000) ){
            taxRate = 0.15
        }else{
            taxRate = 0.30}

        return taxRate
    }

    let TaxToBePaid = income * FindTaxRate(income)
    return TaxToBePaid
}

result = calcTax(10000000)
console.log(result);