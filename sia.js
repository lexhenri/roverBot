function sia(str) {
    var boi = str.split(" ");
    var output = " ";

    for (var count = 0; count < boi.length; count++) {
        output += boi[count]
        output += "sia ";
    }

    return output
};


exports.sia = sia;