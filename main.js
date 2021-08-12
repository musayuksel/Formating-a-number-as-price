var numberToPrice = function(number) {
  console.log(number,"<<<<<<Enter",typeof number )
  if(number && Number.isNaN(number) ){
     return 'NaN';
  }else{
   
    let arr = (""+number).split('.');
    if(arr.length>2){
      return 'NaN';
      }else{
         let [integer,cent='0'] = arr;
          cent=cent.padEnd(2,'0');//2 digit 
          cent=cent.slice(0,2);
          let numwithComma= parseInt(integer).toLocaleString();
  //     console.log(numwithComma,"<<<<<<")
}  
return numwithComma+"."+cent;
   }
}


/**
 * 
 * describe("Tests", () => {
  it("test", () => {
Test.assertEquals(numberToPrice(1500.129),   '1,500.12');
Test.assertEquals(numberToPrice(-5),         '-5.00');
Test.assertEquals(numberToPrice(1000000.5),  '1,000,000.50');
Test.assertEquals(numberToPrice('@'),        'NaN');
  });
});


 */