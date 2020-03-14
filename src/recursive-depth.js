
module.exports = class DepthCalculator {
  calculateDepth(array) {
    let arrayDepth = [1];
 
    array.filter(element=>(Array.isArray(element))).forEach(elem => {
      arrayDepth.push(1+this.calculateDepth(elem));
    });
   
     return Math.max(...arrayDepth);
  }
};