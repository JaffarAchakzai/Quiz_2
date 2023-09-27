const persons = [
    {
      id: 1,
      personName: "Jaffar",
      personAge: "22",
      personIncome: "200000"
    },
    {
      id: 2,
      personName: "JAWERIA ",
      personAge: "20",
      personIncome: "300000"
    }
  ];
  
  // Print the information for each person
  for (const person of persons) {
    console.log(`Person ${person.id} name is ${person.personName} having salary ${person.personIncome}`);
  }
  