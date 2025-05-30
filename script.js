//your JS code here. If required.
const table=document.querySelector("#output tbody");
// table.innerHTML="";

const Promise 1=()=>{
	return new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("promise1");
	},2000);
})
}
const Promise 2=()=>{
	return new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("promise2");
	},1000);
})
}
const Promise 3=()=>{
	return new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("promise3");
	},1500);
})
}
Promise.all[(promise1(),promise2(),promise3())].then((data)=>{
	console.log(data)
})