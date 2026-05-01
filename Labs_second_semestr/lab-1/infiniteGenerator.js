function* infiniteGenerator(startId = 100) {
    let requestId = startId;

    while (true) {
        const loadValue = Math.floor(Math.random() * 101);

        yield {
            id: requestId++,
            load: loadValue,
            timestamp: new Date().toLocaleTimeString()
        };
    }
}

const monitor = infiniteGenerator(5000);
console.log("--- Тест генератора Smart-Dash ---");
console.log(monitor.next().value);
console.log(monitor.next().value);
console.log(monitor.next().value);