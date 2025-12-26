const http = require("http");
const PORT = 3000;

// const server = http.createServer((request, response) => {
//   // request — письмо от браузера (запрос)
//   // response — бланк для нашего ответа (ответ на запрос от браузера)

//   console.log("Кто-то зашел к нам на сервер");
//   console.log(request.method);

//   // Формируем ответ
//   response.writeHead(200, {
//     "Content-Type": "text/plain; charset=utf-8",
//   });

//   // Пишем тело ответа
//   response.write("Привет из Node.js");

//   // Заканчиваем наш ответ и отдаём его браузеру/клиенту. ИНАЧЕ браузер будет висеть вечно!
//   response.end();
// });

const server = http.createServer(async (request, response) => {
  response.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (request.url === "/") {
    // Главная страница нашего сайта
    response.statusCode = 200;
    response.write("Главная страница сайта");
    response.end();
  } else if (request.url === "/about") {
    // Страница о нас
    response.statusCode = 200;
    response.write("Это стартовая страница нашего файлообменника");
    response.end();
  } else if (request.url === "/stats") {
  const data = await fetch("https://gusic.xyz/stats");
  const jsonData = await data.json();

    response.setHeader("Content-Type", "application/json; charset=utf-8");

    response.statusCode = 200;

    response.write(JSON.stringify(jsonData));
    response.end();

  } else {
    response.statusCode = 404;
    response.write("Такой страницы не существует!");
    response.end();
  } 
});

server.listen(PORT, () => {
  console.log(`Сервер был успешно запущен на порту ${PORT}`);
});