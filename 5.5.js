// Реалізувати можливість вибору дати у елемент форми з спеціального візуального компоненту.
//     Вимоги до компоненту: вибір числа, перехід між місяцями та роками, відміна вибору дати.
// Пример використання в браузері (без require)
class ConsoleCalendar {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = null;
        this.showCalendar();
    }

    showCalendar() {
        const month = this.currentDate.getMonth();
        const year = this.currentDate.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        console.clear();
        console.log(`=== ${year} - ${month + 1} ===`);
        console.log('Пн Вт Ср Чт Пт Сб Нд');

        let dayLine = '';
        for (let i = 1; i < firstDay; i++) {
            dayLine += '   ';
        }

        for (let date = 1; date <= lastDate; date++) {
            dayLine += `${String(date).padStart(2, ' ')} `;
            if ((firstDay + date - 1) % 7 === 0 || date === lastDate) {
                console.log(dayLine);
                dayLine = '';
            }
        }
        console.log("\nКоманди:");
        console.log("'select <день>' — обрати день (наприклад, 'select 15')");
        console.log("'nextMonth' — перейти до наступного місяця");
        console.log("'prevMonth' — перейти до попереднього місяця");
        console.log("'nextYear' — перейти до наступного року");
        console.log("'prevYear' — перейти до попереднього року");
        console.log("'cancel' — скасувати вибір дати");
        console.log("'exit' — вийти з програми");
    }

    selectDate(day) {
        const month = this.currentDate.getMonth() + 1;
        const year = this.currentDate.getFullYear();
        if (day >= 1 && day <= 31) {
            this.selectedDate = `${year}-${month}-${day}`;
            console.log(`Вибрана дата: ${this.selectedDate}`);
        } else {
            console.log("Невірний день. Введіть день від 1 до 31.");
        }
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.showCalendar();
    }

    prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.showCalendar();
    }

    nextYear() {
        this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
        this.showCalendar();
    }

    prevYear() {
        this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
        this.showCalendar();
    }

    cancel() {
        this.selectedDate = null;
        console.log("Вибір дати скасовано.");
    }
}

// Ініціалізація календаря та обробка команд
const calendar = new ConsoleCalendar();

function processCommand() {
    const readline = window.prompt("Введіть команду:");
    const [action, value] = readline.split(" ");

    switch (action) {
        case "select":
            if (value) calendar.selectDate(parseInt(value));
            else console.log("Будь ласка, введіть номер дня.");
            break;
        case "nextMonth":
            calendar.nextMonth();
            break;
        case "prevMonth":
            calendar.prevMonth();
            break;
        case "nextYear":
            calendar.nextYear();
            break;
        case "prevYear":
            calendar.prevYear();
            break;
        case "cancel":
            calendar.cancel();
            break;
        case "exit":
            console.log("Програма завершена.");
            return;
        default:
            console.log("Невідома команда. Спробуйте ще раз.");
    }

    processCommand();
}

processCommand();


