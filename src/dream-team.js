module.exports = function createDreamTeam (arrayTeam)
{
  if (!Array.isArray(arrayTeam) ) 
  return false;
  else{
     let arrayDreamTeam = [];
      for (let index = 0; index < arrayTeam.length; index++) {
         
          if(typeof arrayTeam[index] === "string")
          {
              arrayDreamTeam.push(arrayTeam[index].trim().toUpperCase()[0]);   
          }

     }
     
     return arrayDreamTeam.sort().join("");
     }
}
