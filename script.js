
const data=performance.now();
const table=document.getElementById("output");

const Promise1=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise1");
	},1000);
})
}
const Promise2=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise2");
	},2000);
})
}
const Promise3=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise3");
	},2000);
})
}

Promise.all([promise1(),promise2(),promise3()]).then((results)=>{
 
    const endTime=performance.now()
    const totalTime=((endTime-startTime)/1000).toFixed(3)
 
   const tbody=document.getElementById('output')
 
   tbody.innerHTML=""
 
   const row=document.createElement("tr")
 
   results.forEach(result => {
    const row=document.createElement("tr")
 
    row.innerHTML=`
    <td>${result.label}</td>
    <td>${result.time.toFixed(3)
    }</td>
    `
    tbody.appendChild(row)
   });
 
   const totalRow=document.createElement("tr")
   totalRow.innerHTML=`
   <td>Total</td>
   <td>${totalTime}</td>
   `
 
   tbody.appendChild(totalRow)
 
})
 
 