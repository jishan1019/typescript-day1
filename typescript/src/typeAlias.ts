//block scope er jonno node cara {} use kore block korte pari

// Group tupe declear

//typeAlies mane type agei declear kore pore ata use kroa

{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string; //optional
    adress: string;
  };

  const student1: Student = {
    name: "Jishan",
    age: 21,
    gender: "Mail",
    contactNo: "015555555",
    adress: "Dhaka",
  };

  const student2: Student = {
    name: "Hossain",
    age: 16,
    gender: "Mail",
    adress: "Savar",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const UserName: UserName = "Jishan";
  const IsAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
