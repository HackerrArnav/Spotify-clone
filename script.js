// import {cors} from "cors";
// console.log("Javascript or wot");
// app.use(cors({
//   origin: "http://127.0.0.1:3000",
// }))
// async function main() {
//     let a = await fetch("http://localhost:3000/songs/");
    
//     let response = await a.text();
//     console.log(response);

//     let div=document.createElement("div");
//     div.innerHTML = response;
     
//     let as =div.getElementsByTagName("td");
//     console.log(as);
//     // let songss = [];
//     // for (let index = 0; index < as.length; index++) {
//     //     const element = as[index];
//     //     if (element.href.endsWith(".mp3")) {
//     //         songss.push(element.href);
//     //     }
//     // }
//     // console.log(songss);
// }

// main();

console.log("Javascript or wot");

fetch('http://localhost:3000/songs/', {
  method: 'GET',
  mode: 'cors',
})
.then(response => {
 
  console.log(response);
})
.catch(error => {
  console.error('Error:', error);
});




// async function main() {
//   let a = await fetch("http://localhost:3000/songs/");
  
  // let response = await a.text();
  // console.log(response);

//   // let div=document.createElement("div");
//   // div.innerHTML = response;
   
//   // let as =div.getElementsByTagName("td");
//   // console.log(as);
//   // let songss = [];
//   // for (let index = 0; index < as.length; index++) {
//   //     const element = as[index];
//   //     if (element.href.endsWith(".mp3")) {
//   //         songss.push(element.href);
//   //     }
//   // }
//   // console.log(songss);
// }

// main();
// }
