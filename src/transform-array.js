module.exports = function transform( arr) {
  
    if(Array.isArray(arr))
    {       let stroka = [];
                if(arr.length==0)
                {
                    return [];
                }   
                else
                {
                    for ( let i = 0; i < arr.length; i ++ )
                            {
                            if ( arr[i]=="--double-next"){
                                if(i!=arr.length-1)
                              stroka.push(arr[i+1])                        
                            }
                            else if ( arr[i]=="--double-prev"){
                                if(i!=0)
                                stroka.push(arr[i-1])                              
                            }
                           else  if (arr[i]=="--discard-next"){
                            if(i!=arr.length-1)
                                {
                                    
                               i++;
                            
                                }    
                            }
                            
                           else  if (arr[i]=="--discard-prev"){
                            if(i!=0)
                          
                                    stroka.pop();
                                    
                            
                            }
                            
  
                           else { stroka.push(arr[i]);
                           }
  
                            }
                            
  
                        }
                        return stroka;
                    }
                    else 
                    {
                       throw  Error; 
                    }
                }
  
            
                  
  
  
                 
        
  