## Перед началом задания

Скопируйте всё содержимое папки `task` к себе в workspace.

## Задание

1. Настройте `npm start` команду чтобы запускать проект через webpack-dev-server.
2. Найстройте `babel-loader` для загрузки `.js` файлов, `postcss-loader` для загрузки `.pcss`.
4. Используя `webpack.DefinePlugin` определите переменную `window.MY_NAME`.
5. Настройте `npm run build` команду, чтобы собрать вашу приложку в продакшен. Используйте `ExtractTextPlugin` чтобы вынести стили в отдельный файл, a также на забудьте определить нужные переменные среды (`process.env.NODE_ENV`).

## Обратите внимание
Не убирайте из сборки `trickyScript.js` а также `SuperTrickyPlugin` из конфигурации.

## Завершение задания

Когда закончите задание, создавайте Pull Request в котором:

1. Настроенный `webpack.config.js`
2. Добавьте 2 скриншота с проектом, запущенным с помощью dev сервера, и проетом для продакшена, запущенный с помощью `serve`.
3. Assign reviewer and add `To Review` label.

## Литература

- [webpack documentation](https://webpack.js.org)
