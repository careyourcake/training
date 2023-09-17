function numberGenerator() {
    let number = 0;
  
    function generateNumber() {
      number++;
      return number;
    }
  
    return generateNumber;
  }
  
  const getNumber = numberGenerator();
  
  console.log(getNumber()); 
  console.log(getNumber()); 
  console.log(getNumber()); 