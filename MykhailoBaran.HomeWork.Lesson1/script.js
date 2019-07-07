'use script';

let money = prompt("Your budget on month?"," "),
    time = prompt("Enter data:","YYYY-MM-DD");

let answerOnFirstQuestion = prompt("Enter mandatoryarticle expenses on current month:",""),
    answerOnSecondQuestion = prompt("How money need for it?","");

let appData = {
    bugget: money,
    timeData: time,
    expenses: {
        answerOnFirstQuestion : answerOnSecondQuestion
    },
    optionalExpenses: null,
    icome: null,
    savings: false
};

alert("Budget on one day is - " + money/30);
