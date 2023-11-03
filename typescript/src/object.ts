// Object

const user: {
    company: "Programming Hero"; //litarel type mane fix
    name: string;
    lastName?: string | undefined; //optional type
    age: number;
    isMarrid : boolean

} = {
    company : "Programming Hero", // new name not assainamble
    name: "Jishan",
    lastName: "Hossain",
    age: 21,
    isMarrid: true
}

user.name = "CodeX"; //object access single