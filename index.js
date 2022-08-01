// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     if (req.url == '/') {
//         res.write(JSON.stringify(courses));
//         res.end();
//     }  
//     if (req.url == '/courses/:id') {
//         res.write(JSON.stringify(courses[req.params.id]));
//         res.end();
//     } 
    // else if (req.url == '/courses/2') {
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.write(JSON.stringify(courses[1]));
    //     res.end();
    // } else if (req.url == '/courses/3') {
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.write(JSON.stringify(courses[2]));
    //     res.end();
    // }
    // else if (courses.length < '/'){
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.write('Server Not found');
    //     res.end();  
    // }
// });



// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000')
// })
require('dotenv').config();
const express = require('express');
const app = express();
const {genSalt, hash, compare} = require('bcrypt');
const port = parseInt(process.env.PORT) || 3000;


let courses = [{
        id: 1,
        name: 'Software Engineering'
    },
    {
        id: 2,
        name: 'Web Development'
    },
    {
        id: 3,
        name: "Database Management"
    }
];

app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`);
})
app.get('/', (req, res)=> {
    res.send(courses);
});
app.get('/courses/:id', (req, res)=> {
    const index = parseInt(req.params.id) - 1;
    if(index < courses.length) {
        res.send(courses[index]);
    }else {
        res.send('Course was not found');
    }
});

//Encdrypt

async function generatePass(password) {
    const generateSalt = await genSalt();
    const encPass = await hash(password, generateSalt);
    const isValid = await compare(password, encPass);
    console.log(generateSalt);
    console.log(encPass);
    console.log('Is correct? ', isValid);
}
// Call a function
generatePass('jt2345');