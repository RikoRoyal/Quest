var level = 1;

function makeChoice(choice) {
    var descriptionElement = document.getElementById("description");
    var choicesElement = document.getElementById("choices");
    var imageElement = document.getElementById("story-image");

    switch (level) {
        case 1:
            levelOne(choice);
            break;
        case 2:
            levelTwo(choice);
            break;
        case 3:
            levelThree(choice);
            break;
        case 4:
            levelFour(choice);
            break;
        case 5:
            levelFive(choice);
            break;
        default:
            descriptionElement.innerHTML = "Произошла неизвестная ошибка.";
            break;
    }
}

function endGame(message, image) {
    var descriptionElement = document.getElementById("description");
    var choicesElement = document.getElementById("choices");
    var imageElement = document.getElementById("story-image");

    descriptionElement.innerHTML = `<p>${message}</p>`;
    imageElement.innerHTML = `<img src="${image}" alt="Конец игры">`;
    choicesElement.innerHTML = '';
}

function levelOne(choice) {
    var descriptionElement = document.getElementById("description");
    var choicesElement = document.getElementById("choices");
    var imageElement = document.getElementById("story-image");

    switch (choice) {
        case 1:
            descriptionElement.innerHTML = "Вы выбрались в лесные чащи. Лес становится гуще.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Лесные чащи">`;
            level = 2;
            break;
        case 2:
            descriptionElement.innerHTML = "Вы направились к ручью. Слышится шум воды.";
            imageElement.innerHTML = `<img src="img/3.jpeg" alt="Ручей">`;
            level = 2;
            break;
        case 3:
            descriptionElement.innerHTML = "Вы подходите к дереву с лианой. Видно, что кто-то тут был недавно.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Дерево с лианой">`;
            level = 2;
            break;
        case 4:
            descriptionElement.innerHTML = "Вы идете по замощенной тропинке. Сквозь деревья виднеется свет.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Замощенная тропинка">`;
            level = 2;
            break;
        default:
            descriptionElement.innerHTML = "Произошла неизвестная ошибка.";
            break;
    }

    if (level === 2) {
        choicesElement.innerHTML = `
            <button onclick="makeChoice(5)">Идти глубже в лес</button>
            <button onclick="makeChoice(6)">Следовать к ручью</button>
            <button onclick="makeChoice(7)">Подойти к дереву</button>
            <button onclick="makeChoice(8)">Повернуть направо на тропинку</button>
        `;
    }
}

function levelTwo(choice) {
    var descriptionElement = document.getElementById("description");
    var choicesElement = document.getElementById("choices");
    var imageElement = document.getElementById("story-image");

    switch (choice) {
        case 5:
            descriptionElement.innerHTML = "Вы глубже погружаетесь в лес. Видите странные следы.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Лесные чащи">`;
            endGame("Вы столкнулись с дикими зверями и не смогли уйти.", "img/2.jpeg");
            break;
        case 6:
            descriptionElement.innerHTML = "Вы следуете к ручью. Встречаете ягоды на деревьях.";
            imageElement.innerHTML = `<img src="img/3.jpeg" alt="Ручей">`;
            level = 3;
            break;
        case 7:
            descriptionElement.innerHTML = "Подходите к дереву. Лиана ведет вверх, как лестница.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Дерево с лианой">`;
            level = 3;
            break;
        case 8:
            descriptionElement.innerHTML = "Поворачиваете направо на тропинку. Встречаете старинный мост.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Замощенная тропинка">`;
            level = 3;
            break;
        default:
            descriptionElement.innerHTML = "Произошла неизвестная ошибка.";
            break;
    }

    if (level === 3) {
        choicesElement.innerHTML = `
            <button onclick="makeChoice(9)">Исследовать странные следы</button>
            <button onclick="makeChoice(10)">Собирать ягоды</button>
            <button onclick="makeChoice(11)">Подняться по лиане</button>
            <button onclick="makeChoice(12)">Перейти через мост</button>
        `;
    }
}

function levelThree(choice) {
    var descriptionElement = document.getElementById("description");
    var choicesElement = document.getElementById("choices");
    var imageElement = document.getElementById("story-image");

    switch (choice) {
        case 9:
            descriptionElement.innerHTML = "Вы исследуете странные следы. Встречаете диких животных.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Странные следы">`;
            endGame("Дикие звери напали на вас. Игра завершена.", "img/2.jpeg");
            break;
        case 10:
            descriptionElement.innerHTML = "Собирая ягоды, вы замечаете подозрительное движение в кустах.";
            imageElement.innerHTML = `<img src="img/3.jpeg" alt="Ягоды">`;
            endGame("Подозрительные движения оказались ядовитыми змеями. Игра завершена.", "img/2.jpeg");
            break;
        case 11:
            descriptionElement.innerHTML = "Поднимаетесь по лиане и видите загадочную высотную поляну.";
            imageElement.innerHTML = `<img src="img/2.jpeg" alt="Подъем по лиане">`;
            level = 4;
            break;
        case 12:
            descriptionElement.innerHTML = "Переходите через мост и оказываетесь в разрушенном храме.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Разрушенный храм">`;
            level = 4;
            break;
        default:
            descriptionElement.innerHTML = "Произошла неизвестная ошибка.";
            break;
    }

    if (level === 4) {
        choicesElement.innerHTML = `
            <button onclick="makeChoice(13)">Исследовать поле вокруг</button>
            <button onclick="makeChoice(14)">Сесть и насладиться видом</button>
            <button onclick="makeChoice(15)">Поискать вход в храм</button>
            <button onclick="makeChoice(16)">Вернуться обратно</button>
        `;
    }
}

function levelFour(choice) {
    var descriptionElement = document.getElementById("description");
    var choicesElement = document.getElementById("choices");
    var imageElement = document.getElementById("story-image");

    switch (choice) {
        case 13:
            descriptionElement.innerHTML = "Исследуя поле, вы находите артефакт.";
            imageElement.innerHTML = `<img src="field.jpg" alt="Поле вокруг храма">`;
            endGame("Вы нашли древний артефакт! Поздравляю, вы завершили игру!", "img/2.jpeg");
            break;
        case 14:
            descriptionElement.innerHTML = "Сидя и наслаждаясь видом, вы замечаете странную тень.";
            imageElement.innerHTML = `<img src="img/2.jpeg" alt="Сидение и наслаждение видом">`;
            endGame("Странный силуэт оказался старым мудрецом. Он предлагает вам тайное знание.", "img/1.jpeg");
            break;
        case 15:
            descriptionElement.innerHTML = "Вы начинаете искать вход в храм. Находите древнюю дверь.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Вход в разрушенный храм">`;
            endGame("Вы вошли в храм и обрели древнюю мудрость.", "img/2.jpeg");
            break;
        case 16:
            descriptionElement.innerHTML = "Решив вернуться, вы сталкиваетесь с таинственным путником.";
            imageElement.innerHTML = `<img src="img/2.jpeg" alt="Возвращение">`;
            endGame("Таинственный путник предостерегает вас от возвращения. Игра завершена.", "img/3.jpeg");
            break;
        default:
            descriptionElement.innerHTML = "Произошла неизвестная ошибка.";
            break;
    }
}

function levelFive(choice) {
    var descriptionElement = document.getElementById("description");
    var choicesElement = document.getElementById("choices");
    var imageElement = document.getElementById("story-image");

    switch (choice) {
        case 17:
            descriptionElement.innerHTML = "Вы обнаруживаете древнюю книгу с магическими знаниями.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Древняя магическая книга">`;
            endGame("Поздравляю! Вы открыли магическую книгу и получили силу волшебства!", "img/1.jpeg");
            break;
        case 18:
            descriptionElement.innerHTML = "Вы находите заколдованный артефакт, который придает вам сверхъестественные способности.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Заколдованный артефакт">`;
            endGame("Артефакт делает вас непобедимым! Поздравляю, вы завершили игру!", "img/1.jpeg");
            break;
        case 19:
            descriptionElement.innerHTML = "Вы встречаете мудреца, который передает вам знание о вечной мудрости.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Вечная мудрость">`;
            endGame("Вы обрели вечную мудрость! Поздравляю, вы завершили игру!", "img/1.jpeg");
            break;
        case 20:
            descriptionElement.innerHTML = "При ваших стараниях в храме возникает портал, открывающий двери в другие миры.";
            imageElement.innerHTML = `<img src="img/1.jpeg" alt="Портал в другие миры">`;
            endGame("Вы становитесь хранителем портала, открывая новые возможности! Поздравляю, вы завершили игру!", "img/1.jpeg");
            break;
        default:
            descriptionElement.innerHTML = "Произошла неизвестная ошибка.";
            break;
    }
}
