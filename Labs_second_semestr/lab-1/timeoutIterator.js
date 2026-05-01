/**
 * iTask1: Timeout Iterator Function
 * Назва проекту: Smart-Dash
 */

// Імпортуємо або дублюємо функцію генератора для автономності файлу
function* infiniteGenerator(startId = 100) {
    let requestId = startId;
    while (true) {
        const loadValue = Math.floor(Math.random() * 101);
        yield { id: requestId++, load: loadValue };
    }
}

const dataStream = infiniteGenerator(1);

// Запускаємо моніторинг на 5 секунд
timeoutIterator(dataStream, 5);

function timeoutIterator(iterator, seconds) {
    const endTime = Date.now() + seconds * 1000;
    let totalLoad = 0;
    let count = 0;

    console.log(`--- [Smart-Dash] Початок збору аналітики (${seconds}с) ---`);

    while (Date.now() < endTime) {
        const data = iterator.next().value;
        
        totalLoad += data.load;
        count++;
        
        // Розрахунок середнього на кожній ітерації (вимога завдання)
        const averageLoad = (totalLoad / count).toFixed(2);

        // Вивід у консоль
        console.log(`[ID: ${data.id}] Навантаження: ${data.load}% | Середнє: ${averageLoad}%`);
    }

    console.log(`--- [Smart-Dash] Моніторинг завершено ---`);
    console.log(`Всього оброблено пакетів: ${count}`);
    console.log(`Фінальне середнє навантаження: ${(totalLoad / count).toFixed(2)}%`);
}