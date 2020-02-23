module.exports = function countCats(arrayCat) {
let sumCats = 0;
for (let index1 = 0; index1 < arrayCat.length; index1++) {
 for ( let index2 = 0; index2 <arrayCat[index1].length; index2++)
 {
  if (arrayCat[index1][index2]=="^^" )
  {
     sumCats+=1;
  } 

}   
}
return sumCats;
};
