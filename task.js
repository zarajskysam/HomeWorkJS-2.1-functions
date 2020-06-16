//Задание 1 
function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a *c;
    if (D < 0) {
        return {D: D, roots: []};
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {D: D, roots: [x1]};
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {D: D, roots: [x1, x2]};
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

//Задание 2
function getAverageScore(data) {
    let avgData = {};
    let marksSum = 0;
    let disciplineQuantity = 0;
    for (let discipline in data) {
        if (data[discipline].length === 0){
            avgData[discipline] = 0;
        }
        avgData[discipline] = getAverageMark(data[discipline]);
        marksSum += getAverageMark(data[discipline]);
        disciplineQuantity++;
    }
    if (Object.keys(avgData).length === 0) {
        avgData.average = 0;
    } else {
        avgData.average = marksSum / disciplineQuantity; 
    }
    return avgData;
}

function getAverageMark(marks) {
    let avgMark;
    if (marks.length === 0) {
        avgMark = 0;
        return avgMark;
    } else {
        let sumMark = 0;
        for (let mark in marks) {
            sumMark += marks[mark];
        }
        avgMark = sumMark / marks.length;
        return avgMark;
        
    }
   
}