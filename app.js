const fs = require('fs');

const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));

     // for loop not for objects not set up as an array
     // for (let i = 0; i < profileDataArr.length; i += 1) {
     //     console.log(profileDataArr[i]);
     // }
// };

// printProfileData(profileDataArgs);


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio comnplete! Check out index.html to see the output!')
});