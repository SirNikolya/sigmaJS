const files = ["cat.jpg", "dog.png", "doc.docx", "virus.exe", "document.pdf"];

files.push("misic.mp3");

for (const file of files) {
    if (file === "cat.jpg") {
        console.log("Пропускаем данную картинку")
        continue
    }

    if (file === "virus.exe") {
        console.log("АЛАРМ! Вирус найден!")
        break
    }

    console.log("Файл проверен " + file);
}

// let fuel = 100; // топливо

// while (fuel > 0) {
//     console.log("Едем " + "Топливо осталось " + fuel);
//     fuel -= 10;
// }

// console.log("Приехали")

// for (СТАРТ; ФИШИН; ШАГ)

// for (let i = 0; i < files.length; i++) {
//     console.log(files[i]);
// }
