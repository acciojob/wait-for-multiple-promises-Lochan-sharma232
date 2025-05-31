// table.innerHTML="";

const Promise1=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise1");
	},2000);
})
}
const Promise2=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise2");
	},1000);
})
}
const Promise3=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise3");
	},1500);
})
}
const table=document.getElementById("output");

Promise.all([Promise1(),Promise2(),Promise3()]output.remove();)
	.then((data)=>{
	console.log(data)
})