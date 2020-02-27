const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(arrayData) {
 
  if ( arrayData === undefined ||  typeof arrayData !="string")

  {
      return false;
  }
  if( arrayData.length==0)
  {
    return false; 
  }
  else
  {
   
    arrayData = parseFloat(arrayData);

    if (arrayData <= 0)
    {
      return false;
    }

   if (typeof arrayData == "number"  && arrayData<=MODERN_ACTIVITY )

    {
    return Math.ceil((Math.log(MODERN_ACTIVITY/arrayData))/((0.693)/HALF_LIFE_PERIOD));
    }

    else
     {
        return false;
    }
    
    
  }
};
