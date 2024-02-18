// const regex = /(\d{2})\/(\d{2})\/(\d{4})/
// const test = "Today's date is 02/18/2024"
// match = regex.exec(test);
// console.log(match);
// console.log(match.slice(1));



function groupTheMatches(pattern , inputString){

    const regexPattern = new RegExp(pattern)
    const match = regexPattern.exec(inputString)
    if(match){
        return match.slice(1)
    }else{
        return null
    }
}


console.log(groupTheMatches(/Hello (\w+)/, 'Hello World'));

const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/
const test = "Today's date is 02/18/2024"
const result = groupTheMatches(datePattern, test)
console.log(result);
if(result){
   const [date, month, year] = result
   console.log("Date:" , date);
   console.log("Month:" , month);
   console.log("Year:" , year);
}

