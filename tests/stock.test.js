const {currentValue} = require('../util')

// jest case to test the currentValue module
// input: price (20); quantity (30)
// output: 20x30 - 600
// expected result - if the module works as expected, this case should pass, returning the product of price and quanity
// no error should be thrown
test('it should calculate the Current Value ',() => {
const value = currentValue(20,30)
if(value !== 600){
    throw new Error("currentValue Failed:\n" + "Should return a value of 600" + "but, returned: " + value)
}
    
})

// jest case to test the totalValue module
// input: total (as of now) (10); value (20)
// output: 10+20 - 30
// expected result - if the module works as expected, this case should pass, returning the sum of total and value
// no error should be thrown
const{totalValue} = require('../util')
test('it should calculate the Total value',() => {
    const total = totalValue(10,20)
    if(total !== 30){
        throw new Error("totalValue Failed:\n" + "Should return a value of 30" + "but, returned: " + total)
    }
})

// jest case to test the appendFile module
// input: any "test" string, csv file
// output: the new "test" string should be "appended" to the file, at the end
// expected result - if the module works as expected, this case should pass, compare should return a match
//      appendFile is executed to append a record to the csv
//      compare is expecuted on last line of csv file and "test" string
//      compare should pass  
// no error should be thrown
const{appendFile} = require('../util')
test('it shoud append record',() =>{
    let testString = "TTL,10,$110.18,$224.2,$159.28,$1101."
    let lastLine = ""
    const test = appendFile (testString)
    var fileName = require('fs');
    fileName.readFile('stockfile.csv','utf-8',function(err,data){
        if (err) throw err;
        var lines = data.trim().split('\n');
       lastLine = lines[lines.length-1]
       if(lastLine !== testString){
        throw new Error("Append Failed:\n" + "testString: " + testString + "lastLine: " + lastLine)
    }
    })
    
})

// jest case to test the writeFile module
// input: any "test" string, csv file (optional - if not existing, creates one)
// output: the new "test" string should be "written" to the file
// expected result - if the module works as expected, this case should pass, compare should return a match
//      writeFile is executed to write a record to the csv
//      compare is expecuted on line, read from csv file and "test" string
//      compare should pass  
// no error should be thrown
const{writeFile} = require('../util')
test('it shoud write record',() =>{
    let testString = "TTL,10,$110.18,$224.2,$159.28,$1101."
    let lastLine = ""
    const test = writeFile (testString)
    var fileName = require('fs');
    fileName.readFile('stockfile.csv','utf-8',function(err,data){
        if (err) throw err;
        var lines = data.trim().split('\n');
       lastLine = lines[lines.length-1]
       if(lastLine !== testString){
        throw new Error("Write Failed:\n" + "testString: " + testString + "lastLine: " + lastLine)
    }
    })
    
})