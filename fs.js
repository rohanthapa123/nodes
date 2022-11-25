const fs = require('fs');
//fs stands for filesystem

//reading file
// fs.readFile('./content/test/test.txt',(err,data)=>{
//     if(err){
//         console.log(err);

//     }
//     console.log(data.toString());
// })

// console.log("reading ")


//writing file
// fs.writeFile('./content/test/test.txt','hello,world',()=>{
//     console.log('file was written');
// });


//if we add nonexisting file , it creates 
// fs.writeFile('./content/test/test2.txt','hello,world',()=>{
//     console.log('file was written');
// });



//directories

if(!fs.existsSync('./content/test/apple')){

    fs.mkdir('./content/test/apple',(err)=>{
        if(err){
            console.log(err);
        }
        
        console.log('folder created')
    })
}
else{
    fs.rmdir('./content/test/apple',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}


//delete file
if(fs.existsSync('./content/test/test2.txt')){
    fs.unlink('./content/test/test2.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}