const person = {
    id: 1,
    personName: "jaffar Achakzai",
    personAge: "22",
    personIncome: "200000"
  };
  
  console.log("Properties are below:");
  for (const property in person) {
    console.log(property);
  }
  