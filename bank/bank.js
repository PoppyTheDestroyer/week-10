var fs = require("fs");

var action = process.argv[2];
var cashMoney = process.argv[3];

function total() {
    fs.readFile("monies.txt", "utf8", function (err, data) {
        var output = data.split(",");
        var total = 0;
        for (i = 0; i < output.length; i += 1) {
            total += parseFloat(output[i]);

        };
        console.log(total.toFixed(2));
    });
};
switch (action) {
    case "total":
        total();
        break;
    case "deposit":
        console.log("$" + cashMoney + " deposited");
        fs.appendFile("monies.txt", ", " + cashMoney, function (err) {
            if (err) {
                console.log(err);
            };
            total();
        })
        break;
    case "withdraw":
        console.log("$" + cashMoney + " withdrawn")
        fs.appendFile("monies.txt", ", -" + cashMoney, function (err) {
            if (err) {
                console.log(err);
            };
            total();
        });
        break;
    case "lotto":
        if (cashMoney !== "42") {
            fs.appendFile("monies.txt", ", -2", function (err) {
                if (err) {
                    console.log(err);
                };
            });
            console.log("You lose $2, loser.")
            total();
        } else if (cashMoney === "42") {
            fs.appendFile("monies.txt", ", 100000", function (err) {
                if (err) {
                    console.log(err);
                };
            });
            console.log("You're a lotto winner. How neat.")
            total();
        };
        break;
};