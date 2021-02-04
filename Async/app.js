// //sync function

// function myfunc () {
//     console.log('Welcome')
// }

// console.log("start");

// myfunc();


// console.log("end");

// Async function

// console.log("start");

// the settimeout will be pass on to the web api and it will handle
// all the function and pushed back to callstack

// setTimeout(()=>{
//     console.log("welcome");
// }, 8000);

// console.log("end");


console.log('start');


function loginUser(email, password, callback) {
    setTimeout(()=>{
        callback({userEmail: email});
    }, 3000);
}

function getUserVideos(email, callback) {
    setTimeout(()=>{
        callback(['video1', 'video2', 'video3']);
    }, 2000);
}

const User = loginUser('Saiteja@gmail.com', 1234567, user =>{
    console.log(user);
    getUserVideos(user.userEmail, videos=>{
        console.log(videos);
    });
});

console.log('finish')



















































































