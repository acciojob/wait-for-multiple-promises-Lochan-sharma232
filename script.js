//your JS code here. If required.
const table=document.querySelector("#output tbody");
// table.innerHTML="";

const promise1=()=>{
	return new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("promise1");
	},2000);
})
}
const promise2=()=>{
	return new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("promise1");
	},1000);
})
}
const promise3=()=>{
	return new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("promise1");
	},1500);
})
}