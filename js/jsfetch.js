// const username="ashish23-byte";
// const url=https://api.github.com/users/${username};
const url = "https://dummyjson.com/users?limit=35";
const pr=fetch(url);
 pr.then((res)=>{
   return res.json();
 })
.then((data)=>{
    console.log("Data=",data);
})
.catch((err)=>{
    console.log("Error=",err.message);
})
.finally(()=>{
    console.log("Finally executed");
});