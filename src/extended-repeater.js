module.exports = function repeater(str,options) {
    if (!typeof str=='string')
    str  = str.toString();
    let firstStr = str;
  
    if(!options.hasOwnProperty('addition'))
    options.addition ='';
    else if (!typeof options.addition=='string')
    options.addition= options.addition.toString();
  
    if(!options.hasOwnProperty('repeatTimes'))
    options.repeatTimes = 1;
    if(options.repeatTimes===undefined)
    options.repeatTimes = 1;
  
    if(!options.hasOwnProperty('additionSeparator'))
    options.additionSeparator ='|';
  
    if(!options.hasOwnProperty('additionRepeatTimes'))
    options.additionRepeatTimes = 1;
  
    if(options.additionRepeatTimes===undefined)
    options.additionRepeatTimes=1;


    if(!options.hasOwnProperty('separator'))
        options.separator="+";
  
        let Addition = options.addition;
        let AdditionSeparator = options.additionSeparator;
        let Separator = options.separator;
  
    
     if(typeof options.repeatTimes=="number")
      for(let i = 0; i < options.repeatTimes;i++){
       if(typeof options.additionRepeatTimes=="number")
          for ( let j = 0; j < options.additionRepeatTimes-1; j++){
              options.addition+=AdditionSeparator+Addition;
              
          }
          let AdditionScore = options.addition;
          options.addition = Addition;
          
        if(i==options.repeatTimes-1)
        str+=AdditionScore;
        else str+=AdditionScore+Separator+firstStr;
    
    }
    return str;
  };

 