// Разница между function и arrow function
// const user = {
//     name: "Alex",
//     sayHiStandart: function() {
//         setTimeout(function() {
//             console.log(this.name);
//         }, 1000);
//     },

//     sayHiArrow: function() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//     }
// };

// user.sayHiStandart();
// user.sayHiArrow();

// const formatSize = (bytes) => {
//     if (bytes < 1024) {
//         return `${bytes} B`;
//     }

//     const mbytes = (bytes / 1024 / 1024).toFixed(2);

//     return `${mbytes} MB`;
// };

// const filesSize = [500, 5000000, 500000];

// for (const fileSize of filesSize) {
//     console.log(formatSize(fileSize));
// }

const usdToRub = (usd) => {
    if (usd > 300) {
        return usd * 85;
    } else if (usd > 1000) {
        return usd * 90;
    }

    return usd * 80;
}

console.log(usdToRub(301))