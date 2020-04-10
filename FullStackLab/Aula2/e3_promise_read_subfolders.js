const fs = require('fs');
const path = require('path');

//promessa que le o path
const readdirAsync = (path) => {
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

//promessa que verifica o estado do arquivo/folder
statAsync = function(file) {
    return new Promise(function(resolve, reject) {
        fs.stat(file, function(err, stat) {
            if (err) {
                reject(err);
            } else {
                resolve(stat);
            }
        });
    });
}


function listDir(dir) {
    return readdirAsync(dir)
    .then(function(list) {
        return Promise.all(list.map(function(file) {
            file = path.resolve(dir, file);
            return statAsync(file).then(function(stat) {
                if (stat.isDirectory()) {
                    return listDir(file);
                } else {
                    return file;
                }
            });
        }));
    }).then(function(results) {
        // compactação do array de arrays
        return Array.prototype.concat.apply([], results);
    });
}

listDir('./')
.then(results => {
    console.log(results)
})