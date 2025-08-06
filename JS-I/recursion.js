function f5(str) {
  if (str === "") return "";

  f5(str);
}

f5(hello);
