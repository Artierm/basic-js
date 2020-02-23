module.exports = function getSeason( arrayData ) {
  
  if ( arrayData === undefined || arrayData - new Date() == 0 )
  return 'Unable to determine the time of year!';
  if(function isDate (arrayData) {
    return arrayData instanceof Date;
    })
       

{   

    for (let index = 0; index < arrayData.length; index++) {
        
         
    }
    if(arrayData.getMonth() == 11 || arrayData.getMonth() == 0 ||  arrayData.getMonth() == 1)
    {
         return 'winter';
    }

    if(arrayData.getMonth() == 2 || arrayData.getMonth() == 3 ||  arrayData.getMonth() == 4)
    {
         return 'spring';
    }

    if(arrayData.getMonth()== 5 || arrayData.getMonth() == 6 ||  arrayData.getMonth() == 7)
    {
         return 'summer';
    }

    if(arrayData.getMonth() == 8 || arrayData.getMonth() == 9 ||  arrayData.getMonth() == 10)
    {
         return 'autumn';
    }


}

else {
  
   throw Error;
}
 
};
