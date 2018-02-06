# Лекционное задание

Вам необходимо научиться работать с `react-router` и разобраться в работе жизненных хуков компонента.

## Основная задача

1. Закончите предыдущее задание.
2. При клике по ишью - рендерить страницу с ее описанием. Используйте для этого `react-router`.
3. Используйте функциональные компоненты, где это возможно.
4. Оптимизируйте что-нибудь. 🌝

## Дополнительная задача

5. Интегрируйте ваше приложение с гитхабом.

- Создайте новый публичный репозиторий.
- Сгенерируйте [токен](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) для работы с гитхабом по `https`.
- Для отправки `https` запросов, используйте [fetch](https://github.com/github/fetch).
- [Документация](https://developer.github.com/v3/issues/) `api` гитхаба для работы с ишью.

### Пример отправки запроса к `api` гитхаба
```javascript
fetch('https://api.github.com/repos/<USERNAME>/<REPONAME>/issues?access_token=<TOKEN>')
  .then(response => response.json())
  .then(data => console.log(data));
```
