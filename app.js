const request = require('request')
const utils=require("./util");

// define stock ticker public API' url, source: code challenge document
// for this exercise, the we're preparing this to retrieve information on three stock symbols of own choice
// AAPL - Apple; FB - Facebook; GOOG - Google
const url = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG'

// making a request to API, to retrieve the response in a json format 
request({url: url, json: true },(error,response) => {
   if(error){ // handles any API errors

      console.log("API is not responding")
   }
   else{

      let total=0 //initialize total <<to be calculated, after the successful call
      let quantity=[20,35,10] //define quantities, own choice, per code challenge document

      utils.writeFile("Ticker,Quantity,Current Price,High,Low,Current Value\n"); // write header for the csv
      
      // loop through the response structure received (json format), until the array max-size
      // accumulate value (for totalling purposes)
      // append the given stock ticker and it's corresponding details (per document) to the spreadsheet (.csv)
      for(let i=0;i<response.body.length;i++){
         let s="";
         let value=utils.currentValue(response.body[i].price,quantity[i])
         total = utils.totalValue(total,value)
         s=s+response.body[i].symbol+","+quantity[i]+",$"+response.body[i].price+",$"+response.body[i].yearHigh+",$"+response.body[i].yearLow+",$"+value
         utils.appendFile(s);
      }

      // write the total row - which shows the net value of the stocks, as of the moment
      utils.appendFile('Total,,,,,\"$'+total+"\"")
   }  
})



