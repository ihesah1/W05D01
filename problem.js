
function isPalindrome(x) {
    let re = /[^A-Za-z0-9]/g;
    x = x.toLowerCase().replace(re, '');
     
    let len = x.length;
    for (var i = 0; i < len/2; i++) {
      if (x[i] !== x[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(isPalindrome("level"))
   console.log(isPalindrome("car"))