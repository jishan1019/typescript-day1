
// Object Distruckturing
const user = {
    id: 123,
    name: {
        fristName: "Jishan",
        lastName: "Hossain",
    },
    contactNo: "01500090000",
    adress: "Dhaak"

}

const {
    contactNo,
    name: { fristName : "Destructure name Ahamed Raju"},
} = user;



// Array Distruckturing

const myFriends = ['jishan', 'Hossain', 'Yeliyas','Ridoy','Nooer']

const [, b, bestFriends, ...rest] = myFriends //value use na kore skip korte only distruturing e coma delai cobe

//rest dela ata aki gula neya asbe

