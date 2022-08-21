/****  This Program return the Ascci Value through the text that we enterd*****/
let str = "GIVE IT HERE YOUR TEXT"

for (let i = 0; i < str.length; i++) {
 let findAascciValue = str.charCodeAt(i)
 console.log(str[i] + " => ", findAascciValue)
}
