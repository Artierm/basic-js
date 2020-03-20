class VigenereCipheringMachine {
    constructor (bool){
         if (bool == true || bool === undefined)
         this.flag = true;
         if (bool == false)
         this.flag = false;
  
    }
  
    encrypt(decodeString,decodeWord) {
          if(decodeWord === undefined || decodeString === undefined)
          throw Error;
        let decodeArray= [];
        let decodeValue = [];
        decodeWord = decodeWord.toUpperCase();
        decodeString = decodeString.toUpperCase();
        for ( let i = 0; i < decodeWord.length ; i++){
            decodeArray.push(decodeWord[i].charCodeAt()-'A'.charCodeAt());
        }
     let c = 0; 
    for (let i = 0; i < decodeString.length; i++){ 
      if(decodeString[i].charCodeAt()>=65 && decodeString[i].charCodeAt()<=90)
      {decodeValue[i] = decodeString[i].charCodeAt()+decodeArray[c];
      if(c == decodeArray.length-1){
      c=0;}
    else c++; 
    if(decodeValue[i]  > 90)
    decodeValue[i]-=26;
    }
      else decodeValue[i] = decodeString[i].charCodeAt();
    }
      let result = [];
      for ( let i = 0;i< decodeValue.length; i++){
        result.push(String.fromCharCode(decodeValue[i]))
      }
        if(!this.flag)
        result = result.reverse().join('');
        if (this.flag) 
        result = result.join('');
        return result;
        }
        decrypt(decodeString,decodeWord) {
          if(decodeWord === undefined || decodeString === undefined)
          throw Error;
            let decodeArray= [];
            let decodeValue = [];
            decodeWord = decodeWord.toUpperCase();
            decodeString = decodeString.toUpperCase();
           
            for ( let i = 0; i < decodeWord.length ; i++){
                decodeArray.push(decodeWord[i].charCodeAt()-'A'.charCodeAt());
            }       
     let c = 0;
    for (let i = 0; i < decodeString.length; i++){ 
      if(decodeString[i].charCodeAt()>=65 && decodeString[i].charCodeAt()<=90)
      
        {decodeValue[i] = decodeString[i].charCodeAt()-decodeArray[c];
        if(c == decodeArray.length-1){
        c=0;}
       else  c++;
       if(decodeValue[i] < 65)
       decodeValue[i]+=26;
      }
        else decodeValue[i] = decodeString[i].charCodeAt();
      
    }
    let result = [];
      for ( let i = 0;i< decodeValue.length; i++){
        result.push(String.fromCharCode(decodeValue[i]))
      }
    if(!this.flag)
    result = result.reverse().join('');
    if (this.flag) 
    result = result.join('');
    return result;
  
  }
  }
module.exports = VigenereCipheringMachine;
