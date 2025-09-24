function login(){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('login  sucessfully');
      resolve();
    },9000)
   })
    
    
}
function getData(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('give data');
      resolve();
    },3000)
   })
    
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('login end');
      reject('login failed');
    },2000)
   })
    
}
function attempttext(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('getData end');
      resolve();
    },1000)  
})
}
function logout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('display Data end');
      resolve();
    },1000)  
})
    
}
//callback hell

// register(()=>{
//             sendEmail(()=>{
//                     login(()=>{
//                         getData(()=>{
//                                     displayData();
//                         });
//                 });
//             });
// });

// using Promise
// register().then(sendEmail)
//           .then(login)
//           .then(getData)
//           .then(displayData)
//           .catch((err)=>{console.log('Error: '+err)})
//           .finally(()=>{console.log('Inside Finally')})
async function f1(){
  try {
  await login();
 await sendEmail();
 await login();
 await getData(); 
 await displayData();
  }
  catch (err) {
   }

}

f1();
console.log('call other application')
