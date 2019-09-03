function persistence(x) {

    let nums = x.toString().split("")
    let multiplyCount = 0
  
    while(nums.length > 1 ) {
      let products = nums.reduce((a,b) => {
         return a * b
      })
      multiplyCount++
      nums = products.toString().split("")
    }     
    
    console.log(`nums: ${nums}`)
    console.log(`mCont: ${multiplyCount}`)
  
    return multiplyCount
  }