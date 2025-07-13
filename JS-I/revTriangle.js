//Reverse Number Triangle

function revTriangle(num) {
  for (let i = 0; i < num; i++) {
    let result = "";
    for (let j = num - i; j >= 1; j--) {
      result += j + " ";
      console.log(j);
    }
    console.log(result);
  }
}

revTriangle(4);
