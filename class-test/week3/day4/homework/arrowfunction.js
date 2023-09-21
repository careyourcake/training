function test() {
    console.log(new.target);
  }
  
  const ArrowFunction = () => {
    console.log(new.target);
  }
  
  new test();  // 
  new ArrowFunction();  // 抛出错误