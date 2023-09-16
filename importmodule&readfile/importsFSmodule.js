// import FS module
let fileObj = require('fs')
// read file Sysnchronous way
// let fileContent = fileObj.readFileSync('./file.txt')
// console.log(fileContent.toString())
// if Sync KeyWord is present then that is Sync action
// for asyncronous just we need to remove the sync keyword

fileObj.readFile('./file.txt', (err, fileContent) => {
    if (err) {
        console.log("Error is Occured");
    } else {
        console.log(fileContent.toString());
    }
});
console.log("Hello Word I printed First");