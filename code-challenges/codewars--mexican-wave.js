function wave (text) {
    let arr = []
    
    for ( let i = 0; i < text.length; i++) {
      let splitArr = text.toLowerCase().split('')
      if ( splitArr[i] === ' ') { 
         continue
      }
      splitArr[i] = splitArr[i].toUpperCase()
      arr.push(splitArr.join(''))
  }
      return arr
  }