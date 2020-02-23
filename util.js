const fs=require("file-system");

const utils=(()=>{

   // currentValue
   // purpose: calculates the current value of a stock
   // input: price and quantity
   // returns: current value, per calculation - quantity x price
   const currentValue=(price,quantity) => {
      let value = price * quantity;
      return value;
   }

   // totalValue
   // purpose: accumulates the total value of the profile (all the stocks per app.js' user input)
   // input: value of the stock
   // returns: accumulates the value and keeps returning the "total"
   const totalValue=(total,value) => {
      let totalvalue = total + value;
      return totalvalue;
   }

   // appendFile
   // purpose: appends a record to the "existing" csv file, to the end
   // input: data, which, basically contains the data for the stock
   // output: appends to the csv; if error - logs it to console
   const appendFile=async (data)=>{
      await fs.appendFileSync("stockfile.csv",data+"\n",(err)=>{
          if(err){
             console.log(err)
          }
       })
  }

  // writeFile
  // purpose: writes a record the "existing"/ "new" csv file; wipes out any existing content
  // input: data, which, basically contains the data for the stock
  // output: writes to the csv; if error - logs it to console
  const writeFile=async (data)=>{
   fs.writeFileSync("stockfile.csv", data, (err) => {
        if (err) {
           console.log(err);
        }
     })
  }

  
   return {
      currentValue,
      totalValue,
      appendFile,
      writeFile
   }

})()

module.exports=utils