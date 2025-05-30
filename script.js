//your JS code here. If required.
const table=document.querySelector("#output tbody");
table.innerHTML="";

const promise1=()=>{
	return new Promise1=((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("promise1");
	},2000);
})
}