const lasMascotas = [
    {
      name: "Catie",
      age: 9,
      typeOfAnimal: "dog",
      human: "Chico",
    },
    {
      name: "Casper",
      age: 10,
      typeOfAnimal: "cat",
      human: "Brandon",
    },
    {
      name: "Zoe",
      age: 14,
      typeOfAnimal: "dog",
      human: "Jessica",
    },
    {
      name: "Mia",
      age: 10,
      typeOfAnimal: "dog",
      human: "Jessica",
    },
    {
      name: "Kitty",
      age: 2,
      typeOfAnimal: "cat",
      human: "Jessica",
    },
    {
      name: "Mason",
      age: 9,
      typeOfAnimal: "Dog",
      human: "James",
    },
    {
      name: "Thor",
      age: 0.5,
      typeOfAnimal: "cat",
      human: "Joshua Herty",
    },
    {
      name: "Loki",
      age: 0.5,
      typeOfAnimal: "cat",
      human: "Joshua Herty",
    },
    {
      name: "Sylvie",
      age: 1,
      typeOfAnimal: "cat",
      human: "Joshua Herty",
    },
    {
      name: "Rigby",
      age: 4,
      typeOfAnimal: "cat",
      human: "Jacob",
    },
    {
      name: "Olive",
      age: 2,
      typeOfAnimal: "cat",
      human: "Jacob",
    },
    {
      name: "Leia",
      age: 7,
      typeOfAnimal: "dog",
      human: "Jordan",
    },
    {
      name: "Bobafett(Bo)",
      age: 10,
      typeOfAnimal: "dog",
      human: "Jordan",
    },
    {
      name: "Luna",
      age: 2,
      typeOfAnimal: "cat",
      human: "Josh Dehaan",
    },
    {
      name: "Bandida",
      age: 2,
      typeOfAnimal: "cat",
      human: "Josh Dehaan",
    },
    {
      name: "Benson",
      age: 9,
      typeOfAnimal: "cat",
      human: "Erica",
    },
    {
      name: "Wyndle",
      age: 0.5,
      typeOfAnimal: "dog",
      human: "Erica",
    },
    {
      name: "Hailey",
      age: 5,
      typeOfAnimal: "dog",
      human: "Dominic",
    },
    {
      name: "Streeter",
      age: 6,
      typeOfAnimal: "cat",
      human: "Dominic",
    },
    {
      name: "Casey",
      age: 8,
      typeOfAnimal: "dog",
      human: "Dominic",
    },
    {
      name: "",
      age: 0,
      typeOfAnimal: "",
      human: "Deshawn",
    },
    {
      name: "Thomas",
      age: 4,
      typeOfAnimal: "cat",
      human: "Mike",
    },
    {
      name: "Ian Curtis",
      age: 12,
      typeOfAnimal: "cat",
      human: "Mike",
    },
    {
      name: "",
      age: 0,
      typeOfAnimal: "",
      human: "Andrea",
    },
   ];

   
   // ---make a function that logs to the console the following message: 
// "There are (number) dogs and (number) cats. The oldest cat is (age) and is named (name). The oldest dog is (age) and is named (name)."

// ---add to the message, as an extended challenge:
// "(Human) has the most pets."

const petFn = (array) => {
const cats = array.filter((item) => {
    return item.typeOfAnimal === "cat";
});
const dogs = array.filter((item) => {
    return item.typeOfAnimal === "dog";
});
//superlative (deck of cards)
let oldestCat = cats[0]; //obj
let oldestDog = dogs[0]; //obj
cats.forEach((cat) => {
    if(cat.age > oldestCat.age){
        oldestCat = cat;
    }
});

dogs.forEach((currentDog) => {
    if(currentDog.age > oldestDog.age){
        oldestDog = currentDog;
    }
});



console.log(`There are ${dogs.length} dogs and ${cats.length} cats. The oldest cat is ${oldestCat.age} and is named ${oldestCat.name}. The oldest dog is ${oldestDog.age} and is named ${oldestDog.name}.`)
}

petFn(lasMascotas);


// const mensajeDeLasMascotas = (arrayOfPets) => {
//     const cats = arrayOfPets.filter((pet) => {
//       return pet.typeOfAnimal === "cat";
//     });
//     //   console.log(cats);
//     const dogs = arrayOfPets.filter((pet) => {
//       return pet.typeOfAnimal === "dog";
//     });
//     // superlative (deck of cards)
//     let oldestCat = cats[0]; //obj
//     let oldestDog = dogs[0]; //obj
//     cats.forEach((cat) => {
//       if (cat.age > oldestCat.age) {
//         oldestCat = cat;
//       }
//     });
//     dogs.forEach((currentDog) => {
//       if (currentDog.age > oldestDog.age) {
//         oldestDog = currentDog;
//       }
//     });
//     console.log(
//       `There are ${dogs.length} dogs and ${cats.length} cats. The oldest cat is ${oldestCat.age} and is named ${oldestCat.name}. The oldest dog is ${oldestDog.age} and is named ${oldestDog.name}.`
//     );
//   };
