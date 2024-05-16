const fs = require("fs");
const readStream = fs.createReadStream("./docs/blog1.txt", { encoding: "utf8"});
const writeStream = fs.createWriteStream("./docs/blog2.txt");

// read and write streams
// readStream.on("data", (chunk) => {
//     console.log("----new chunk-----")
//     console.log(chunk);
//     writeStream.write("\nNew chunk\n");
//     writeStream.write(chunk);
// });

// piping streams a better way of reading and writing streams
readStream.pipe(writeStream);