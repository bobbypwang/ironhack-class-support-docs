function isIsogram(str) {

    let sortedArr = str.toLowerCase().split('').slice().sort();
  
    for (var i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i + 1] == sortedArr[i]) {
        console.log(str + " is false")
        return false;
      }
    }
    console.log(str + " is true")
    return true;
  }
  
  isIsogram("") // true
  isIsogram("Dermatoglyphics") // true
  isIsogram("aba") // false
  isIsogram("moOse") // false