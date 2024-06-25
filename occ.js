var str = "hello";
var Charcount = {};
for (let i = 0; i < str.length; i++) {
    var char = str[i];
    if (Charcount[char]) {
        Charcount[char]++;
    }
    else{
        Charcount[char] = 1;
    }
}
for(var char in Charcount){
    console.log("'" + char + "': " + Charcount[char]);
}