const fs = require('fs');
const readStream =fs.createReadStream('./content/test/test.txt',{encoding : 'utf8'});
const writeStream = fs.createWriteStream('./content/test/test2.txt')
// readStream.on('data', (chunk)=>{
//     console.log(' ------- new chunk -------')
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\N')
//     writeStream.write(chunk)
// })



//piping
readStream.pipe(writeStream)