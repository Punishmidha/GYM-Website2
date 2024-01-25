console.log("This is mod.js");

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;

}

// iska matlab h ki ham ye module de skte h kisi ko nito ye module chale ga ni
// module.exports = average;

// agar multiple cheeze export krna chahte  h to..module.export ek object hai
module.exports ={
    avg: average,
    name: "Punish",
    repo: "GitHub"
}

// modules.exports ek object hai or hmne isko kha ki key me name lelo or value me punish lelo
module.exports.name = "punish";

