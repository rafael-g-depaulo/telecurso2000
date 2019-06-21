const printAll = (...argArr) => {
  argArr.map(arg => console.log("arg: ", arg))
  // for (arg of argArr) {
  //   console.log("arg: ", arg)
  // }
}

printAll(1, 2, 3, 4, 5, 6, "sete", 8)
