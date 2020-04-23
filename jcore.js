var letters = {
    "a": ["Δ", "Λ", "ƌ"],
    "b": ["β", "ƀ", "ɓ"],
    "c": ["¢", "ʗ", "Ͼ"],
    "d": ["ď", "Ɖ", "Ƿ",],
    "e": ["Ƹ", "Σ", "Ξ",],
    "f": ["F", "Ƒ", "F",],
    "g": ["ǥ", "Ǥ", "ɠ"],
    "h": ["H", "ƕ", "h"],
    "i": ["¡", "⌉", "|"],
    "j": ["Ĵ", "ʝ", "J"],
    "k": ["κ", "ʞ", "ҟ"],
    "l": ["Ł", "ƚ", "ʟ"],
    "m": ["ɱ", "м", "m"],
    "n": ["λ", "ȵ", "ɴ",],
    "o": ["Ø", "Φ", "Ω"],
    "p": ["Ƥ", "Р", "Ҏ"],
    "q": ["Q", "q", "Q"],
    "r": ["Я", "Ŗ", "Ʀ"],
    "s": ["z", "§", "$"],
    "t": ["ţ", "Ŧ", "Ʈ"],
    "u": ["μ", "∪", "Ʊ"],
    "v": ["℣", "∀", "⊻"],
    "w": ["ϖ", "ɰ", "ώ"],
    "x": ["ᶍ", "Χ", "χ"],
    "y": ["Ψ", "ϒ", "ℽ"],
    "z": ["ʐ", "Ƶ", "ᶽ"],
};

function jcore(str) {
    var boi = str.split(" ");
    var output = "";

    for (var count = 0; count < boi.length; count++) {
        var bitch = boi[count].toLowerCase();
        console.log(bitch.length);


        for (var bruh = 0; bruh < bitch.length; bruh++) {
            var rng = Math.floor(Math.random() * 4);
            var currentword = bitch;

            if (rng > 1) {
                output += currentword[bruh];
            } else {
                if (currentword[bruh].match(/[a-z]/g)) {
                    output += letters[currentword[bruh]][rng];
                } else {
                    output += currentword[bruh];
                }
            }



            if (bruh == bitch.length - 1) { output += " "; };
        }



    }

    return output
};

exports.letters = letters;
exports.jcore = jcore;
