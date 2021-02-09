// const person: { name: string; age: number } = {}
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Tim',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const { ADMIN, READ_ONLY, AUTHOR } = Role;

const person = {
  name: 'Tim',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favActivities: (string | number)[];
favActivities = ['sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === ADMIN) {
  console.log(Role);
  
  console.log('person is an admin');
}
