function getTotalWaterOfLeterInPerHour(time) {
    return Math.floor(time * 0.5)
}

console.log(getTotalWaterOfLeterInPerHour(0)); // 0
console.log(getTotalWaterOfLeterInPerHour(2)); // 1
console.log(getTotalWaterOfLeterInPerHour(1.4)); // 0
console.log(getTotalWaterOfLeterInPerHour(12.3)); // 6
console.log(getTotalWaterOfLeterInPerHour(0.82)); // 0
console.log(getTotalWaterOfLeterInPerHour(11.8)); // 5
console.log(getTotalWaterOfLeterInPerHour(1787)); // 893
