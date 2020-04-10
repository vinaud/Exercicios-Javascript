//listagem de conteudos de um diretorio de forma async

const fs = require('fs');

const sreaddir = (path) => {
    return new Promise((resolve, reject) => {
     fs.readdir(path, (error, files) => {
         if(error){
             reject(error)
         }
         else{
             resolve(files)
         }
     });
    });
}

sreaddir('./')
.then((files) => {
    files.forEach(file =>{
        console.log(file);
    })
    return sreaddir('./FullStackLab');})
.then((files) => files.forEach(file =>{console.log(file)}))
.catch((error) => console.log(error));


