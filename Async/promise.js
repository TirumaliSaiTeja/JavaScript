const promise = new Promise((resolve, reject)=>{
    // setting a time for the function to execute
    setTimeout(()=>{
        console.log('new user');
        reject(new Error('user not logged in'));
    },2000);
});


promise.then(user=>{
    console.log(user);
}). catch(err=>console.log(err));
