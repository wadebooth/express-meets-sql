import mysql from "mysql2";

import connection from "./db.js";

// const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly) VALUES (?,?,?,?,?,?,?)`;

// const input = ["Xave", 8, "Yorkie", "Dog", "male", true, true];

// const [rows, fields] = await connection.promise().query(insertQuery, input);

// console.log("This is all my rows", rows);

// export const createPet = async (pet) => {
//   const name = pet.name,
//     age = pet.age,
//     breed = pet.breed,
//     species = pet.species,
//     gender = pet.gender,
//     is_kid_friendly = pet.is_kid_friendly,
//     is_hypoallergenic = pet.is_hypoallergenic;

//   const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly) VALUES (?,?,?,?,?,?,?)`;

//   const input = [
//     name,
//     age,
//     breed,
//     species,
//     gender,
//     is_hypoallergenic,
//     is_kid_friendly,
//   ];

//   try {
//     const [results] = await connection.promise().query(insertQuery, input);
//     return results;
//   } catch (error) {
//     console.error(error);
//   }
// };

// function createPets(req, res) {
//   const pet = req.body;
//   const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly) VALUES (?,?,?,?,?,?,?)`;
//   connection
//     .promise()
//     .query(insertQuery, pet)
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => console.error(err));
// }

export const getPets = () => {
  const selectQuery = "SELECT * FROM pets";

  // try {
  //     const [results] = await connection.promise().query(insertQuery, input)
  //     return results;
  // } catch (error) {
  //     console.error(error)
  // }

  return connection
    .promise()
    .query(selectQuery)
    .then((results) => {
      return results[0];
    })
    .catch((err) => console.error(err));
};

// const newPet = {
//   name: "Fluffy",
//   age: 2,
//   breed: "poodle",
//   species: "dog",
//   gender: "female",
//   is_kid_friendly: false,
//   is_hypoallergenic: true,
// };

// console.log("This is the new pet", await createPet(newPet));
console.log("This is all my pets", await getPets());

connection.end();
