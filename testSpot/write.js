/*----------  New Thing  ----------*/
const fs = require("fs");



// let sampleObject = {
//     hey : "hello",
//     sup : "whats up",
//     ya: {
//         oh : "oh no",
//         ah : "ah... thtas a bad idea"
//     }
// };

// fs.writeFile("./object.json", JSON.stringify(sampleObject), (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     };
//     console.log("File has been created");
// });



// // Declare variables
// var obj;

// // Read the file and send to the callback
// fs.readFile('./object.json', handleFile)

// // Write the callback function
// function handleFile(err, data) {
//     if (err) throw err
//     obj = JSON.parse(data)
//     // You can now play with your datas
//     console.log(obj);
// }

/*----------  mkdir  ----------*/

// const fs = require('fs')

// try{
// 	fs.mkdirSync('thisIsAFielBro');
// 	console.log('done')
// }catch(err){
// 	if(err){
// 		console.log(err);
// 	}
// }

// var deleteFolderRecursive = function(path) {
//   if (fs.existsSync(path)) {
//     fs.readdirSync(path).forEach(function(file, index){
//       var curPath = path + "/" + file;
//       if (fs.lstatSync(curPath).isDirectory()) { // recurse
//         deleteFolderRecursive(curPath);
//       } else { // delete file
//         fs.unlinkSync(curPath);
//       }
//     });
//     fs.rmdirSync(path);
//   }
// };



// deleteFolderRecursive( './thing.txt' );

// fs.unlinkSync('./thing.txt');