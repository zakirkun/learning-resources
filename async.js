/**
* Author : Muhammad Fauzan
* Add asynchronous code example - https://github.com/devoverid/learning-resources
*/

// no need to use async keyword when we return `Promise` object
function returnAsync () {
  return new Promise((resolve, reject) => {
    resolve("Hello");
  });
}

returnAsync().then(res => console.log(res));

// async function without returning await
async function returnAsync2 () {
  return "Hello";
}

returnAsync2().then(res => console.log(res));


// async function with await return, the benefit returning await is you can also use try catch to handle the promise rejection.
async function shouldThrow () {
  return Promise.reject("Not Hello");
}

async function returnAsync3 () {
  try {
    return await shouldThrow();
  } catch (e) {
    console.log(e)
  }
}

returnAsync3().then(res => console.log(res));
