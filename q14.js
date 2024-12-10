// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
  };
  
  const valuesArray = [];
  for (let key in object1) {
    if (object1.hasOwnProperty(key)) {
      valuesArray.push(object1[key]);
    }
  }
  
  console.log(valuesArray); 
  