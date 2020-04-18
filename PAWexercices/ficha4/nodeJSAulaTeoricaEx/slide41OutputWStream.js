var fs = require("fs");
var data = 'Simple Easy Lerning';

//Create a writable stream
var writerStream = fs.createWriteStream('output.txt')

//Set the encoding to be writed in utf8
writerStream.write(data,'UTF8');

//Mark the end of file
writerStream.end();

//Handle stream events --> data, end , and error
writerStream.on('finish', function(chunk){
    console.log("Write completed")
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program Ended")