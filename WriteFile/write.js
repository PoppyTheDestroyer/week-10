var fs = require("fs");

fs.writeFile("movies.txt", "Baby Driver, Stranger Than Fiction", function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("movies.txt was updated!");
});