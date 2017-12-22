var fs = require("fs")

var textFile = process.argv[2];

fs.appendFile(textFile, "Hello Kitty", function(err) {
    
      // If an error was experienced we say it.
      if (err) {
        console.log(err);
      }
    
      // If no error is experienced, we'll log the phrase "Content Added" to our node console.
      else {
        console.log("Content Added!");
      }
    
    });