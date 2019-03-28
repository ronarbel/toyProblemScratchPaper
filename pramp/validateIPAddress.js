function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/
  let nums = ip.split('.');
  if (nums.length !== 4) return false
  
  for (let i = 0; i < nums.length; i += 1) {
    // check if number coersion is valid
    if (nums[i].length === 0) return false;
    for(let j = 0; j < nums[i].length; j += 1) {
      if (Number.isNaN(Number(nums[i][j]))) return false;
    }
    
    // check if number is in valid range
    let num = Number(nums[i]);
    if (num < 0 || num > 255) return false;
  }
  
  return true;
}
