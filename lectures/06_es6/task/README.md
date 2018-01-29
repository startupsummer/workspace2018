## Введение в ES6

Основная задача — попробовать ES6 на практике и настроить esilint с конфигурацией airbnb.

### Задание:

Создайте очередь, которая принимает размер очереди в конструкторе со следующей функциональностью:

1. `enqueue`: добавить в очередь
2. `dequeue`: удалить из очередь (и вернуть это)
3. `isEmpty`
4. `isFull`
5. `peek`: получить элемент из очереди, не удаляя его
6. `size` (getter): вернуть размер очереди
7. `sort`: сортировка элементов, можно использовать `comparator`

Создайте расширенную очередь, в которой будет `getIterator`, который возвращает функцию генератора. Расширенная очередь, должна наследоваться от обычной очереди. 

Создайте три класса

1. `queueItem.js`: объект очереди
2. `queue.js`: очередь
3. `iterableQueue.js`: расширенная очередь

index.js:

1. создайте расширенную очередь
2. добавить элементы в очередь
3. вывести размер очереди
4. сортировать (по любому полю)
5. итерации по очереди с помощью `for ... of` и печати каждого элемента
6. удалить несколько элементов из очереди
7. вывести размер очереди

Установите [eslint airbnb config](https://www.npmjs.com/package/eslint-config-airbnb) и запустите его. Если есть ошибки — исправьте их. 

### Дополнительно:

Добавьте ещё несколько элементов ES6/7 (промисы, async/await).