import http from "k6/http";
// import { check, sleep } from "k6";

function random() {
  let num = Math.floor(Math.random() * 10000000);
  return num;
}

// export let options = {
//   vus: 10,
//   duration: "10s"
// };

export default function() {
  http.get(`http://localhost:3000/courses/${random()}/`);
}