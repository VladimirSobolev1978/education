/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {
    // Напиши свой код здесь
    constructor() {
        this.data = [];
        this.size = 0;
    }

    push(element) {
        let size = ++this.size;
        this.data.push(element);
        return this
    }

    isEmpty() {
        return this.size === 0;
    }

    pop() {
        let size = this.size;

        if (size) {
            this.data.pop();
            this.size--;
        } else {
            throw new Error("Stack is empty!");
        }
        return this
    }

    print() {
        let data = this.data;
        return '[' + data.join(', ') + ']'
    }
}

window.Stack = Stack;

export default Stack;
