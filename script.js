function threeSum(S, target) {
// write your code here
	  let sum=0;
	 
	for(let i=0;i<S.length;i++){
		for(let j=i+1;j<S.length-1;j++){
		    for(let k=j+1;k<S.length-2;k++){
				 sum+=S[i]+[j]+[k];
				if(sum>=target){
					 return sum;
				}
			}
		}
	}
	
  
}

module.exports = threeSum;
