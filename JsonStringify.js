let StringData = {
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}

// Json.stringify(objData, callBackFun, 4)
// objData is a data we want to convert Json String and callBackFun is a function if want to perform any opration of data and third is indentation
// this code convert the Javascript Object to a Json String

const objData = {
 Alex: {
   email: 'alex@alex.com',
   skills: ['HTML', 'CSS', 'JavaScript'],
   age: 20,
   isLoggedIn: false,
   points: 30
 },
 Asab: {
   email: 'asab@asab.com',
   skills: [
     'HTML',
     'CSS',
     'JavaScript',
     'Redux',
     'MongoDB',
     'Express',
     'React',
     'Node'
   ],
   age: 25,
   isLoggedIn: false,
   points: 50
 },
 Brook: {
   email: 'daniel@daniel.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
   age: 30,
   isLoggedIn: true,
   points: 50
 },
 Daniel: {
   email: 'daniel@alex.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
   age: 20,
   isLoggedIn: false,
   points: 40
 },
 John: {
   email: 'john@john.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
   age: 20,
   isLoggedIn: true,
   points: 50
 },
 Thomas: {
   email: 'thomas@thomas.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React'],
   age: 20,
   isLoggedIn: false,
   points: 40
 },
 Paul: {
   email: 'paul@paul.com',
   skills: [
     'HTML',
     'CSS',
     'JavaScript',
     'MongoDB',
     'Express',
     'React',
     'Node'
   ],
   age: 20,
   isLoggedIn: false,
   points: 40
 }
}

const objToString = JSON.stringify(objData , undefined , 4)

// if we want to perform on a second parameter we have to do this as mentions in the below code
const objToStringPerformer = JSON.stringify(users, ["Paul","email","skills","points"], 4)

console.log(objToString) 
console.log(objToStringPerformer) 


