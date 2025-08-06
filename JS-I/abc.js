function count(num) {
  if (num > 26) return;
  console.log(String.fromCharCode(96 + num), num);

  count(num + 1);
}

console.log(count(1));
