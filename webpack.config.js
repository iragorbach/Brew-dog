// Для использования нужен Node.JS
// Поставьте webpack:
//   npm i -g webpack
// Поставьте babel-loader:
//   npm i babel-loader
// Запустите его в директории с файлами:
//   webpack

module.exports = {
    entry: './js/main.js',

    output: {
        filename: 'bundle.js'
    }
};