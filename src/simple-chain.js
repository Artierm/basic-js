const chainMaker = {
  array : [],
    getLength() {
      if (this.array.length==0)  {
        return 0;
      }
    return this.array.length;
    },
    addLink(value) {
    this.array.push(value);
    return this;
    },
    removeLink(position) {
        if( !Number.isInteger(position) || position < 1 ||  position > this.array.length ){
          this.array =[];
          throw Error;
        }
        this.array.splice(position-1,1);
        return this;
    },
    reverseChain() {
      this.array.reverse();
      return this;
    },
    finishChain() {
     //return this.array.join('');
     let result = this.array.map(item =>`( ${item === undefined ? '' : item} )`).join('~~');
     this.array =[];
     return result;
    }
  };
  module.exports = chainMaker;

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')
  
