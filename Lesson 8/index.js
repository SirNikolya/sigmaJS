// const path = require("node:path");
// const fs = require("node:fs");

// // Создаем читающий поток
// const stream = fs.createReadStream(
//     path.join(__dirname, 'big.txt')
// );

// let counter = 0;

// stream.on('data', (chunk) => {
//     counter++;
//     console.log(`Получен кусок №${counter}`);
//     console.log(chunk);
//     console.log(`Размер ${chunk.length} байт`);
// });

// stream.on('end', () => {
//     console.log(`Чтение файла завершено. Всего кусков: ${counter}`);
// });

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 3000;

const MIME_TYPES = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".json": "application/json",
    ".mp4": "video/mp4",
};

const server = http.createServer((request, response) => {
    console.log(`Запрос: ${request.url}`);

    let url;

    if (request.url === "/") {
        url = "/index.html";
    } else {
        url = request.url;
    }

    // Формируем путь к файлу на диске
    const filePath = path.join(__dirname, "public", url);

    // Определяем расширение файла (.css, .html, .js)
    const extname = path.extname(filePath);

    console.log(extname);

    const contentType = MIME_TYPES[extname] || 'text/plain';

    console.log(contentType);

    // Создаем поток чтения
    const fileStream = fs.createReadStream(filePath);

    // Сразу ставим правильный заголовок
    response.setHeader('Content-Type', contentType);

    fileStream.pipe(response);

    fileStream.on("error", (err) => {
        response.statusCode = 404;
        response.end();
    })

    
    // Нам не нужно писать response.end() вручную.
    // pipe() сам закроет ответ, когда файл кончится.
});

server.listen(PORT);
console.log(`Сервер был запущен на адресе http://localhost:${PORT}`);