//* this is some models on objects in JS =>
//! all this models is from my self-learn and searches
//! the object //
let me = {
    Name: 'Ayman',
    Age: 18,
    Country: "Egypt",
    City: "Alexandria",
    Street: '24 Ahmed Faruk Ali Ezzat',
    Phone: `+${Number(+201552326055)}`,
    Email: 'aymanmohamed.programmer@gmail.com',
    insta: 'lamona.dev',
    facebook: 'Ayman Mohmamed',
    info: function () { return `Name: ${this.Name}, Age: ${this.Age}` },
    location: function () { return `${this.Country} => ${this.City} => ${this.Street}` },
    contact: function () {
        return `Phone Number: ${this.Phone}
Gmail: ${this.Email}
Instagram: ${this.insta}
Facebook: ${this.facebook}`}
}
console.log(`${me.info()}
-----------------
${me.location()}
-----------------
${me.contact()}`);

//! video number #80

/*
Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/

let myVar = "country";

let user = {
    theName: "Osama",
    country: "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country
console.log(user[myVar]); // user.country
console.log(`    
    
    `);
//? practice :

const myName = "Name";
const myAge = "Age";
const myCountry = "country";
let userTwo = {
    Name: "Ayman",
    Age: 18,
    country: "EGY",
}
console.log(`Name: ${userTwo.Name}, Age: ${userTwo.Age}, Country: ${userTwo.country}`); //todo: with (Dot Notation)
console.log(`Name: ${userTwo[myName]}, Age: ${userTwo[myAge]}, Country: ${userTwo[myCountry]}`); //todo: with (Bracket Notation)
//? the classes of the object can be replaced with normal vars with the same name of the class in the object

//! practise //
console.log(``);
console.log(``);

let thePerson = {
    theName: function (a) {
        typeof a === 'string' && a.length > Number(true + true) ?a : `Error`
            return `Your Name Is: ${a}`
    },
    theAge: function (a) { 
        typeof a === 'number' && a >= Number(18) ? a : `Your Age Is Not Suit The Requirements`
            return `Your Age Is: ${a}`
    },
    theCountry: function (a) {
        typeof a === 'string' ? a : `Error`
            return `Your Country: ${a}`
    },
    theCity: function (a) {
        typeof a === 'string' ? a : `Error`
            return `Your City: ${a}`
    },
    theNumber: function (a) {
        typeof a === 'string' ? a : `Error`
            return `Your Number: +${a}`
    },
    theGmail: function (...form) {
        typeof form[0] === 'string' && typeof form[1] === 'string' && typeof form[2] === 'string'
            ? `${form[0]}@${form[1]}.${form[2]}` : ``
            return `${form[0]}@${form[1]}.${form[2]}`;
    },

}
console.log(`${thePerson.theName(`Ayman`)},
${thePerson.theAge(18)},
${thePerson.theCountry('EGY')},
${thePerson.theCity('Alex')},
${thePerson.theNumber('201552326055')},
${thePerson.theGmail(['aymanmohamed'], ['Gmail'],['com'])}`);
console.log(``);
console.log(``);
//! video number #81 //
//? nested object

/*
    Object
    - Nested Object And Trainings
*/

let available = true; //? when you choose global scope => "Free For Work"

let userInNestedObject = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
    ksa: "Riyadh",
    egypt: {
    one: "Cairo",
    two: "Giza",
    },
    },
checkAv: function () {
    if (userInNestedObject.available === true) { //? => "Not Free" => local scope with the value that declared in the main object
    return `Free For Work`;
    } else {
    return `Not Free`;
    }
    },
};
console.log(userInNestedObject.addresses);
console.log(userInNestedObject.name);
console.log(userInNestedObject.age);
console.log(userInNestedObject.skills);
console.log(userInNestedObject.skills.join(" | "));//? joining the array with "|"
console.log(userInNestedObject.skills[2]); // Access With Index
console.log(userInNestedObject.addresses.ksa);
console.log(userInNestedObject.addresses.egypt.one);
console.log(userInNestedObject["addresses"].egypt.one);//? access with both (bracket & dot) => notion
console.log(userInNestedObject["addresses"]["egypt"]);//? access with bracket notion
console.log(userInNestedObject["addresses"]["egypt"]["one"]);

console.log(userInNestedObject.checkAv());//? calback function as a object child => doing a function in the main object
console.log(``);
console.log(``);
//? smal partice on nested object XD
let secret = {
    first: {
        second: {
            third: {
                fourth: {
                    fifth: {
                        sixth: {
                            theSecret: '3alawy 7abib 2lby abo 7essien',
                        }
                    }
                }
            }
        }
    }
}
console.log(secret.first.second.third.fourth.fifth.sixth.theSecret);
console.log(``);
console.log(``);
//! practice on the nested object // 
let identity = {
    PassWord: '<div><p>Pass Word: "Word Pass"</p></div>',
    Name: {
        first: 'Ayman',
            Second: 'Mohamed',
                last:'Sharaf-El-din' },
    Age: Number(18),
        Gender: 'Male',
        Contact: {
        Social: {
                Facebook: 'Ayman Mohamed',
                    Instagram: 'lamona.dev' },
            Email: "ayman.sharafeldin@gmail.com",
                Phone: "+201552326055",
        Address: {
            Street: "Ahmed-Farouk Ali Ezzat",
                City: "Alex",
                    Country: "Egypt",
            Tower: {
                TowerNumber: 24,
                    Floor: 6,
                        Apartment: 603 }, }, },
        checkPass: function (pass) {
            identity.PassWord === pass
                ? console.log(`
Name: '${this.Name.first} ${this.Name.Second} ${this.Name.last}',
Age: ${this.Age} Y\\O,
Gender: ${this.Gender},
Contact Information:
${this.Contact.Address.Country}, ${this.Contact.Address.City}
${this.Contact.Address.Tower.TowerNumber} ${this.Contact.Address.Street}, ${this.Contact.Address.Tower.Floor}th Floor, Ap: ${this.Contact.Address.Tower.Apartment}
${this.Contact.Email}
${this.Contact.Phone}
${this.Contact.Social.Facebook} \\\\ Facebook
${this.Contact.Social.Instagram} \\\\ Instagram`)
                : console.log(`--Invalid Password--`);
    }
}
identity.checkPass('<div><p>Pass Word: "Word Pass"</p></div>');
//! video number #82 //

/*
    Object
    - Create With New Keyword new Object();
*/

let userInNewKeyWord = new Object({
    age: 20,
});

console.log(userInNewKeyWord);

userInNewKeyWord.age = 38;
userInNewKeyWord["country"] = "Egypt";

userInNewKeyWord.sayHello = function () {
    return `Hello`;
};

console.log(userInNewKeyWord);
console.log(userInNewKeyWord.age);
console.log(userInNewKeyWord.country);
console.log(userInNewKeyWord.sayHello())

//! some practice on the object till nested object // 
const school = new Object({
    classes: {
        classOne: {
            students: {
                studentOne: { Name: 'Ayman',
                    parentInfo: {
                        mother: { Name: 'Magda', Age: 42, occupation: 'non-worker'},
                        father: { Name: 'Mohamed', Age: 58, occupation: 'full-stack developer'},},
                            stage: 'Senior', Age: 18, Code: 'S-100'},
                studentTwo: { Name: 'Ahmed',
                    parentInfo: {
                        mother: { Name: 'Magi', Age: 62, occupation: 'non-worker at the moment' },
                        father: {
                            Name: 'Mahmoud',
                            Age: 78,
                            occupation: 'not in any occupation at the moment' }, }, 
                            stage: 'Jonior', Age: 20, Code: 'J-500'},
                studentThree: { Name: 'Khaled',
                    parentInfo: {
                        mother: { Name: 'Smiha', Age: 32, occupation: 'home-made'},
                        father: { Name: 'Waeel', Age: 48, occupation: 'front-end developer'},},
                    stage: 'Fresh Men', Age: 18, Code: 'FM-587' },},},},
    info: function (a) {
        if (a === 'FM-587') { return `Name: ${school.classes.classOne.students.studentThree.Name}
Age: ${school.classes.classOne.students.studentThree.Age}
Stage: ${school.classes.classOne.students.studentThree.stage}
Code: ${school.classes.classOne.students.studentThree.Code}
ParentsInfo: => 
Father: => [
Name: ${school.classes.classOne.students.studentThree.parentInfo.father.Name}
Age: ${school.classes.classOne.students.studentThree.parentInfo.father.Age}
Occupation: '${school.classes.classOne.students.studentThree.parentInfo.father.occupation}'
]
Mother: => [
Name: ${school.classes.classOne.students.studentThree.parentInfo.mother.Name}
Age: ${school.classes.classOne.students.studentThree.parentInfo.mother.Age}
Occupation: '${school.classes.classOne.students.studentThree.parentInfo.mother.occupation}'
]
`;} else if (a === 'J-500') { return `Name: ${school.classes.classOne.students.studentTwo.Name}
Age: ${school.classes.classOne.students.studentTwo.Age}
Stage: ${school.classes.classOne.students.studentTwo.stage}
Code: ${school.classes.classOne.students.studentTwo.Code}
ParentsInfo: => 
Father: => [
Name: ${school.classes.classOne.students.studentTwo.parentInfo.father.Name}
Age: ${school.classes.classOne.students.studentTwo.parentInfo.father.Age}
Occupation: '${school.classes.classOne.students.studentTwo.parentInfo.father.occupation}'
]
Mother: => [
Name: ${school.classes.classOne.students.studentTwo.parentInfo.mother.Name}
Age: ${school.classes.classOne.students.studentTwo.parentInfo.mother.Age}
Occupation: '${school.classes.classOne.students.studentTwo.parentInfo.mother.occupation}'
]`} else if (a === 'S-100') { return `Name: ${school.classes.classOne.students.studentOne.Name}
Age: ${school.classes.classOne.students.studentOne.Age}
Stage: ${school.classes.classOne.students.studentOne.stage}
Code: ${school.classes.classOne.students.studentOne.Code}
ParentsInfo: => 
Father: => [
Name: ${school.classes.classOne.students.studentOne.parentInfo.father.Name}
Age: ${school.classes.classOne.students.studentOne.parentInfo.father.Age}
Occupation: '${school.classes.classOne.students.studentOne.parentInfo.father.occupation}'
]
Mother: => [
Name: ${school.classes.classOne.students.studentOne.parentInfo.mother.Name}
Age: ${school.classes.classOne.students.studentOne.parentInfo.mother.Age}
Occupation: '${school.classes.classOne.students.studentOne.parentInfo.mother.occupation}'
]`; } else { return `Invalid Data`}}})
console.log(school.info('S-100'));

//! practice on the new obejct keyWord // 
let mainObject = new Object({
    Name: 'Ayman'
})
mainObject.age = 19;
console.log(mainObject); //? first data intiualize  => mainObject
mainObject.Name = 'Mohamed' //? redeclaration to the data in the main object
mainObject.age = 65
console.log(mainObject); //? seconde data initiualize => mainObejct with defferent data

// document.getElementById('cl').onclick = function () {
//     return console.log(this); //? this is a local scope => this button (assigned to the main button)
// }
// document.getElementById('cl').onclick = _ => console.log(this); //? global scope => window object

/*
    Object
    - Create Object With Create Method
*/

let userInCreatObject = {
    age: 20,
    doubleAge: function () {
    return this.age * 2;
    },
};

console.log(userInCreatObject);
console.log(userInCreatObject.age);
console.log(userInCreatObject.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(userInCreatObject);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());


//! prcatice on the creat method in object //
let mainObject = { //? first Model 
    numberOne: 10,
    numberTwo: 20,
    numberThree: 30,
    doubledNumbers: function () {
        return `[${mainObject.numberOne * 2}, ${mainObject.numberTwo * 2}, ${mainObject.numberThree * 2}]`
    }
}
console.log(mainObject.numberOne);
console.log(mainObject.numberTwo);
console.log(mainObject.numberThree);
console.log(mainObject.doubledNumbers());

let copyTheMainObject = Object.create(mainObject);
copyTheMainObject.a = 100; //? a component assigned to the copied object 
copyTheMainObject.numberOne = 100; //? still a component 
copyTheMainObject.numberTwo = 100;
copyTheMainObject.numberThree = 100;
console.log(copyTheMainObject); //? the copied object and his own componenets
console.log(copyTheMainObject.doubledNumbers()); //? logging the proto of the mainObject with the main values

let mainObjectTwo = { //? second Model 
    numberOne: 10,
    numberTwo: 20,
    numberThree: 30,
    doubledNumbers: function () {
        return `[${this.numberOne * 2}, ${this.numberTwo * 2}, ${this.numberThree * 2}]`
    }
}
console.log(mainObjectTwo.numberOne);
console.log(mainObjectTwo.numberTwo);
console.log(mainObjectTwo.numberThree);
console.log(mainObjectTwo.doubledNumbers());

let copyTheMainObjectTwo = Object.create(mainObjectTwo);
copyTheMainObjectTwo.a = 100; //? a component assigned to the copied object 
copyTheMainObjectTwo.numberOne = 100; //? still a component 
copyTheMainObjectTwo.numberTwo = 100;
copyTheMainObjectTwo.numberThree = 100;
console.log(copyTheMainObjectTwo); //? the copied object and his own componenets
console.log(copyTheMainObjectTwo.doubledNumbers());//! redeclare a new value to the copied object so 'this' => the value of the current object

/*
    Object
    - Create Object With Assign Method
*/

let obj1 = {
    prop1: 1,
    meth1: function () {
    return this.prop1;
        },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
    return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2); //? syntax => ('target to copy object model', (object to add)...)

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);


//! practice on assign method to create a new object
let mainContainter = new Object({
    top_left: 0,
    top_left_storage: function () { return `T-L: ${this.top_left}%`},
    top_right: 0,
    top_right_storage: function () { return `T-R: ${this.top_right}%`},
    bottom_left: 0,
    bottom_left_storage: function () { return `B-L: ${this.bottom_left}%`},
    bottom_right: 0,
    bottom_right_storage: function () { return `B-R: ${this.bottom_right}%` },

})
let topLeftSource = { top_left: 25, top_left_storage: function () {return `T-L: ${mainContainter.top_left}%`}}
let topRightSource = { top_right: 50, top_right_storage: function () {return `T-R: ${mainContainter.top_right}%`}}
let bottomLeftSource = { bottom_left: 75, bottom_left_storage: function () {return `B-L: ${mainContainter.bottom_left}%`}}
let bottomRightSource = { bottom_right: 100, bottom_right_storage: function () {return `B-R: ${mainContainter.bottom_right}%`}}
let finalObject = Object.assign(mainContainter, topLeftSource, topRightSource, bottomLeftSource, bottomRightSource);
console.log(finalObject);


const mainObject = {
    name: {
        mainName: {
            n: 'Ayman'
        },
        secondName: {
            n: 'Mohamed'
        } 
    },
    age: { 
        a: 22,
    } 

}
let num = Object.keys(mainObject)//? to get the main object length
console.log(num);

let mainObject = new Object({
    person: {
        personAge: {
            Age: 18,
        },
        personName: {
            Name: 'Ayman',
        },
        personSurname: {
            Name: 'Mohamed',
        },
        personOccupation: {
            Occupation: {
                OC: 'Full-Stack Developer',
            },
        },
        personeFullName: function () {
            return `${this.personName.Name} ${this.personSurname.Name}`
        },
        personFullInfo: function () {
            return `Name: ${mainObject.person.personName.Name} ${mainObject.person.personSurname.Name} , Age: ${mainObject.person.personAge.Age}, Occupation: ${mainObject.person.personOccupation.Occupation.OC}`
        },
    },
})
// object info -- 
console.log(mainObject.person.personName.Name);
console.log(mainObject.person.personSurname.Name);
console.log(mainObject.person.personOccupation.Occupation.OC);
console.log(mainObject.person.personeFullName());
console.log(mainObject.person.personFullInfo());
console.log(`----------------------------------------`);
var objectsKeys = Object.keys(mainObject); //assign the main properties in the object not the nested ones
var nestedObjectsKeys = Object.keys(mainObject.person); // you could access the nested object keys 
console.log(objectsKeys); // ['person']
console.log(nestedObjectsKeys); // ['personName', 'personAge'...]

// object assign method -- 

let assignObject = new Object({
    Name: 'Ayman',
    Age: 18,
})
let newAssignObject = Object.assign(assignObject, { occupation: 'Full-Stcak developer' })
console.log(newAssignObject);

var obj11 = { a: 1 };
var obj22 = { b: 2 };
var obj33 = { c: 3 };
console.log(obj11); // the initiate value of the object 
var finalObject = Object.assign(obj11, obj22, obj33); // redeclare the properties of the first object after the main  var 
console.log(finalObject);
console.log(obj11); // === finalObject so, the role model of the finalObject is a (obj2, obj3) => assingned to (obj1)
console.log(obj22);
console.log(obj33);
console.log(`--------------------------------------`)
// object properties iteration (hasOwn) --

let mainObjectInCheckProperty = new Object({
    person: {
        personName: {
            name: {
                n: 'Ayman',
            },
            surName: {
                n: 'Mohamed',
            },
        },
        personAge: {
            Age: {
                a: 18,
            },
        },
    },
});
console.log(mainObjectInCheckProperty.person.hasOwnProperty("personName"))
console.log(Object.hasOwn(mainObjectInCheckProperty, "person"));
console.log(mainObjectInCheckProperty.person.personName.name.hasOwnProperty("n"))
console.log(Object.hasOwn(mainObjectInCheckProperty.person, "personName"));

//! object assignments //
// Create Your Object Here
//todo : first assignment 
const member = new Object({
    name: 'Elzero',
    age: 38,
    country: 'Egypt',
    fullDetails: () =>`My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`,

})
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//todo : second assignment

// Method One
// Create Your Object Here
const objMethodOne = {property:'"Method One"',}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
const objMethodTwo = new Object({property:'"Method Two"'})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
const objMethodThree = Object.create({property: '"Method Three"'})
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
const objMethodFour = Object.assign({}, {property: '"Method Four"'})
console.log(objMethodFour.property); // "Method Four"

//todo : 3rd assignment

let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

// Create Your Object Here in One Line
const finalObject = Object.assign({}, {a}, threeNums, twoNums)
console.log(finalObject);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/

// todo : 4th assignment

// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
},
    "Titan Quest": {
    publisher: "THQ",
    bestThree: {
    one: "Immortal Throne",
    two: "Ragnarök",
    three: "Atlantis",
    },
    price: 50,
},
    YS: {
    publisher: "Falcom",
    bestThree: {
    one: "Oath in Felghana",
    two: "Ark Of Napishtim",
    three: "origin",
    },
    price: 40,
},
};
// console.log();
// console.log(objectKeys);
// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let objectKeys = Object.keys(myFavGames);
for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${objectKeys[i]}`);
    console.log(`The Publisher Is ${myFavGames[objectKeys[i]].publishe}`);
    console.log(`The Price Is ${myFavGames[objectKeys[i]].price}`);
  // Check If Nested Object Has Property (bestThree)
    if (Object.hasOwn(myFavGames[objectKeys[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[objectKeys[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[objectKeys[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[objectKeys[i]]["bestThree"]["three"]}`); 
}
    console.log("#".repeat(20));
}

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"


//! first solution for the generation challenge
let generation = new Object({
    '-3': { m: 'great-grand-father', f: 'great-grand-mother', },
    '-2': { m: 'grand-father', f: 'grand-mother', },
    '-1': { m: 'father', f: 'mother', },
    '0': { m: 'me!', f: 'me!', },
    '1': { m: 'son', f: 'daughter', },
    '2': { m: 'grandson', f: 'granddaughter', },
    '3': { m: 'great-grand-son', f: 'great-grand-daughter', },
    generationSelect: function (x, y) {
        if (typeof x === 'number' && x === Number(-3) && typeof y === 'string' && y === 'm') { return this["-3"].m }
        else if (typeof x === 'number' && x === Number(-3) && typeof y === 'string' && y === 'f') { return this["-3"].f }
        if (typeof x === 'number' && x === Number(-2) && typeof y === 'string' && y === 'm') { return this["-2"].m}
        else if (typeof x === 'number' && x === Number(-2) && typeof y === 'string' && y === 'f') { return this["-2"].f }
        if (typeof x === 'number' && x === Number(-1) && typeof y === 'string' && y === 'm') { return this["-1"].m }
        else if (typeof x === 'number' && x === Number(-1) && typeof y === 'string' && y === 'f') { return this["-1"].f }
        if (typeof x === 'number' && x === Number(0) && typeof y === 'string' && y === 'm') { return this["0"].m }
        else if (typeof x === 'number' && x === Number(0) && typeof y === 'string' && y === 'f') { return this["0"].f }
        if (typeof x === 'number' && x === Number(1) && typeof y === 'string' && y === 'm') { return this["1"].m }
        else if (typeof x === 'number' && x === Number(1) && typeof y === 'string' && y === 'f') { return this["1"].f }
        if (typeof x === 'number' && x === Number(2) && typeof y === 'string' && y === 'm') { return this["2"].m }
        else if (typeof x === 'number' && x === Number(2) && typeof y === 'string' && y === 'f') { return this["2"].f }
        if (typeof x === 'number' && x === Number(3) && typeof y === 'string' && y === 'm') { return this["3"].m }
        if (typeof x === 'number' && x === Number(3) && typeof y === 'string' && y === 'f') { return this["3"].f }
        else return undefined
    }

})
console.log(generation.generationSelect(Number(3), String('m')));

//! second solution for the generation challenge
const generationSecondSolution = Object.create({
    m: {'-3': 'great-grand-father', '-2': 'grand-father', '-1': 'father',
        '0': 'me!', '1': 'son', '2': 'grand-son', '3': 'great-grand-son' },
    f: {'-3': 'great-grand-mother', '-2': 'grandmother', '-1': 'mother',
        '0': 'me!', '1': 'daughter', '2': 'granddaughter', '3': 'great-granddaughter' },
    generationSelect: function (x, y) {
        if (y === 'm') { return this.m[x.toString()] }
        if (x === Number(false) && y === 'f' || y === 'm') { return this.m[Number(false)] }
        if (y === 'f') { return this.f[x.toString()] }
        else return undefined } } )
console.log(generationSecondSolution.generationSelect(0, 'm'));

//! revision on what i stood in object 
//todo: => this is a role model to explain the properties
const mainObject = new Object({
    mainHanger: {
        top: {
            left: {
            goods: `[rice, wheat, extra virgin olive oil]`,
            metals: `[iron, Zn]`,
            pavarage: `[water, oragne Juice, juava Juice]`,   
            },
            right: {
                goods: `N\\A`,
                metals: `N\\A`,
                pavarage: `N\\A`,
            },
        },
        bottom: {
            left: {
            material: `[mainGoods, mainMetals, mainPavarage]`
            },
            right: {
                contain: `Incompleted`,
            },
        },
    },
})
console.log(mainObject);
console.log(mainObject.mainHanger);
console.log(mainObject.mainHanger.top.left);
console.log(mainObject.mainHanger.top.right);
console.log(mainObject.mainHanger.bottom.left);
console.log(mainObject.mainHanger.bottom.right);
//! the length of the object 
console.log(Object.keys(mainObject).length); //? the length of the main object keys => [mainHnger]; 
console.log(Object.keys(mainObject.mainHanger).length); //? the length of the (mainHanger) key => nested objects

//! revision on the obejct => all chaper of ezlero academy
//? obejct intro duction 
const mainObject = {
    Name: 'Aymna',
    Age: Number(18),
    occupation: 'Full-Stack developer',
    info: (a = mainObject.Name, ag = mainObject.Age, oc = mainObject.occupation) => `Name: ${a}, Age: ${ag}, occupation: ${oc}` 
}
console.log(mainObject.info());

//? DotNotataion || PracketNotation || nested object
let obj = Object.create({
    one: {
        'Two': {
            three: {
                'Four': {
                    five: 'BOW!!'
                }
            }
        }
    }
})
console.log(obj.one['Two'].three['Four'].five);//todo: to compile the pracket and dot notation together
//? creat a new object with new keyword

let newObjectt = new Object({
    new: 'NEW!!!!'
})
newObjectt.userName = 'Ayman';
newObjectt['Age'] = Number(18);//todo: redeclaration a new properties to the main object
console.log(newObjectt);
//? This keyword
let userr = {
    age: 38,
    ageInDays: function () {
    console.log(this);
    return this.age * 365;
    },
};

console.log(userr.age);
console.log(userr.ageInDays());

//? creat a new object with creat method


let userInCreat = {
    age: 20,
    doubleAge: function () {
    return this.age * 2;
    },
}; //todo: Assign a new object

console.log(userInCreat);
console.log(userInCreat.age);
console.log(userInCreat.doubleAge());

let object = Object.create({}); //todo: creat an empty object 

object.a = 100; //todo: assign a new property to the empty object

console.log(object); //todo: logging the object -_- سهله بروح امك

let copyObj = Object.create(userInCreat);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

//? creat a new object with assign  method


let obj111 = {
    prop1: 1,
    meth1: function () {
    return this.prop1;
    },
};

let obj222 = {
    prop2: 2,
    meth2: function () {
    return this.prop2;
    },
};

let targetObjectt = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(targetObjectt, obj111, obj222);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObjectInAssignMethod = Object.assign({}, obj111, { prop5: 5, prop6: 6 });

console.log(newObjectInAssignMethod);

const mainObject = Object.create({
    names: ['Ayman', 'Mohamed', 'Fathy'],
});

function names(zeroVal = Number(false), oneVal = Number(true)) {
    for (let i = zeroVal; i < mainObject.names.length; i++) {
        console.log(mainObject.names[i]);
    }
} names();

const mainObejct = Object.create({
    Students: ['Ayman', 'Malak', 'Ahmed', 'Ali', 'Alia', 'Amna', 'Mohamed', 'Mahmoud', 'Sara', 'Sameer'],
    Teachers: ['Mr, Ahmed', 'Mr, Mohamed', 'Mr, Saged'],
    mr_a_teamOne: function (zeroVal = Number(false), oneVal = Number(true), counter = Number(false)) {
        for (let i = zeroVal; i < oneVal; i++) {
            console.log(`The Leader For Team ${counter += oneVal} ${this.Teachers[i]}`);
            for (let k = zeroVal; k < this.Students.length; k++) { 
                if (this.Students[k].indexOf("S")) {
                    if (this.Students[k].indexOf("M")) {
                        console.log(`- ${counter++} ${this.Students[k]}`);
                    }
                }
            }
            return ``
        }
        return ``
    },
    mr_m_teamTwo: function (zeroVal = Number(false), oneVal = Number(true), counter = Number(false)) {
        for (let i = zeroVal; i < oneVal; i++) {
            console.log(`The Leader For Team ${counter + oneVal + oneVal} ${this.Teachers[oneVal]}`);
            for (let k = zeroVal; k < this.Students.length; k++) { 
                if (this.Students[k].indexOf("A")) {
                    if (this.Students[k].indexOf("S")) {
                        console.log(`- ${counter += oneVal} ${this.Students[k]}`);
                    }
                }
            }
            return ``
        }
        return ``
    },
    mr_s_teamThree: function (zeroVal = Number(false), oneVal = Number(true), counter = Number(false)) {
        for (let i = zeroVal; i < oneVal; i++) {
            console.log(`The Leader For Team ${counter + oneVal + oneVal + oneVal} ${this.Teachers[oneVal + oneVal]}`);
            for (let k = zeroVal; k < this.Students.length; k++) { 
                if (this.Students[k].indexOf("M")) {
                    if (this.Students[k].indexOf("A")) {
                        console.log(`- ${counter += oneVal} ${this.Students[k]}`);
                    }
                }
            }
            return ``
        }
        return ``
    },
    All_Teams: function () {
        return `${this.mr_a_teamOne()}
${this.mr_m_teamTwo()}
${this.mr_s_teamThree()}`
    }
})
console.log(mainObejct.All_Teams());