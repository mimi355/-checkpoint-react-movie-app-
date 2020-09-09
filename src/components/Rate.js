import React from 'react';
function Rate({rating,setSearchRate}){
    const stars=(x)=>{
let arrayStars=[];
for(let i=1 ;i <=5 ;i++){
if(i<=x){ arrayStars.push(<span className='star' onClick={()=> setSearchRate(i)}>  ★ </span> )}
else{ arrayStars.push(<span className='star' onClick={()=> setSearchRate(i)}>  ☆ </span>)}
}
 return arrayStars;
    }

return(
<div> {stars(rating)}    </div>
    
)
}
    Rate.defaultProps={
        setSearchRate:()=>{ }
        
    }




export default Rate;