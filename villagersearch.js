var glob = require("glob")
fs = require('fs');
var ogs = require('open-graph-scraper');

function search(str) {
    var searchName = str;
    var bruh = glob.sync("data/villagers/" + searchName + ".json"); //glob is very nice
    bruh = bruh.toString(bruh);
    console.log(bruh);

    var content = fs.readFileSync(bruh);
    var jsonContent = JSON.parse(content);
    var output = new Array;
    var options = { 'url': "https://villagerdb.com/villager/" + searchName };
    //grabs the info and puts it into an array to be referenced in the embed.
    output.push(jsonContent.name, jsonContent.species, jsonContent.games.nh.personality, jsonContent.games.nh.phrase, jsonContent.gender, jsonContent.birthday);

    
    //TODO MAKE THE FUCKING IMAGE WORK
        ogs(options)
            .then(function (result) {
                url = result.data.ogImage.url;
                getData(url);
            })
            .catch(function (error) {
                console.log('error:', error);
            });
    ///////////////////////////////////

    console.log(output);
    return output;

};



exports.search = search;