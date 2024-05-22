function descendingOrder(n) {
    let numStr = n.toString();
    let numArr = numStr.split('');
    numArr.sort((a, b) => b - a);
    let sortedNumStr = numArr.join('');
    let sortedNum = parseInt(sortedNumStr, 10);
    
    return sortedNum;
  }

//   function descendingOrder(n){
    // return parseInt(String(n).split('').sort().reverse().join(''))
//   }