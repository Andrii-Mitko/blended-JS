//! ============================================================================================

//* Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

//? -----------------------------------------------------------------------

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// styles[1] = 'classic';
// function logItems(styles) {
    
//     for (let i = 0; i < styles.length; i++) {
    

//         console.log(`${i + 1} - ${styles[i]}`);
//         }
//   }

// logItems(styles);

//! ============================================================================================

//* Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];

//? -----------------------------------------------------------------------

const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);
function checkLogin(array) {
    const userName = prompt("Введіть своє ім'я: ");
    for (const element of array) {
        if (element === userName) {
            alert(`Welcome, ${userName}!`);
            return userName;
    } 
    }
    alert("User not found"); 
}

//? -----------------------------------------------------------------------

const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);
function checkLogin(array) {
    const userName = prompt("Введіть своє ім'я: ");
    
        if (array.includes(userName)) {
            alert(`Welcome, ${userName}!`);
    } else { 
            alert("User not found"); 
            } 
}

//! ============================================================================================

//* Завдання 2:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

//? -----------------------------------------------------------------------

// function caclculateAverage(...num) {
//     let sum = 0;
//     let elements = 0;
//     for (let i = 0; i < num.length; i++) {
//             if (typeof num[i] === "number" && !isNaN(num[i])) {
//                 sum += num[i];
//                 elements++;
//         }
//     }
//     if (elements === 0) {
//         return 0;
//     }
//      const average = sum / elements;
//      return Math.round(average);
// }

//! ============================================================================================

//* Завдання 3: