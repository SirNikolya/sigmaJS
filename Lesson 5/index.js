const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const uploadFile = async (name, size) => {
  console.log(`Начали загрузку файла: ${name} (${size} MB)`);

  await delay(size * 10);

  console.log(`Файл был загружен ${name}`);
};

const runCloud = async () => {
  console.log('Облако было запущено');

  await Promise.all([
    uploadFile('photo.jpg', 200),
    uploadFile('video.mp4', 500),
  ]);

  console.log('Загрузка завершена');
};

runCloud();
