const apiCallDurations = [3000, 4000, 5000, 6000,10000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: If the duration is longer than maxDuration, reject() the promise
      if(duration>= maxDuration){
        reject(new Error("This request is done"))
        return
      }      
      // TODO: Otherwise resolve() the promise
      resolve(`Response Recieved ${duration}`)
    }, duration);
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected

Promise.all(promises)
  .then((response)=>{ console.log(response)})
  .catch((err)=> console.log(err))