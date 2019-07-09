'use script';

let money, time;

function start() {
    money = +prompt("Your budget on month?", "");

    while( isNaN(money) || money == '' || money == null ) {
        money = +prompt("Your budget on month?", "");
    }

    time = prompt("Enter data in format : YYYY-MM-DD", ""); 

    while( time.length != 10 || targetSearch(time,0) != 4 || targetSearch(time,5) != 7) {
        time = prompt("No correctly, enter data in format : YYYY-MM-DD", ""); 
    }

    
}
function targetSearch(str,pos) {
    let target = '-';

    while (true) {
        let foundPos = str.indexOf(target, pos);

         if (foundPos == -1) break;
        return foundPos;
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    icome: [],
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++){
        let answerOnFirstQuestion = prompt("Enter mandatoryarticle expenses on current month:",""),
            answerOnSecondQuestion = prompt("How money need for it?","");

        if( (typeof(answerOnFirstQuestion)) === 'string' && (typeof(answerOnFirstQuestion)) != null && (
            typeof(answerOnSecondQuestion)) != null && answerOnFirstQuestion != '' && answerOnSecondQuestion != '' && 
            answerOnFirstQuestion.length < 50) {
                console.log("done");
                appData.expenses[answerOnFirstQuestion] = answerOnSecondQuestion;

        } else {
            i = i - 1;
        }
    }
    /*let i = 0;
    do { 
        let answerOnFirstQuestion = prompt("Enter mandatoryarticle expenses on current month:",""),
            answerOnSecondQuestion = prompt("How money need for it?","");

        if( (typeof(answerOnFirstQuestion)) === 'string' && (typeof(answerOnFirstQuestion)) != null && (
            typeof(answerOnSecondQuestion)) != null && answerOnFirstQuestion != '' && answerOnSecondQuestion != '' && 
            answerOnFirstQuestion.length < 50) {
                console.log("done");
                appData.expenses[answerOnFirstQuestion] = answerOnSecondQuestion;
                i++;

        } else {
            i = i - 1;
        }
    } while ( i < 2 );
    let i = 0;
    while ( i < 2 ) {
        let answerOnFirstQuestion = prompt("Enter mandatoryarticle expenses on current month:",""),
            answerOnSecondQuestion = prompt("How money need for it?","");

        if( (typeof(answerOnFirstQuestion)) === 'string' && (typeof(answerOnFirstQuestion)) != null && (
            typeof(answerOnSecondQuestion)) != null && answerOnFirstQuestion != '' && answerOnSecondQuestion != '' && 
            answerOnFirstQuestion.length < 50) {
                console.log("done");
                appData.expenses[answerOnFirstQuestion] = answerOnSecondQuestion;
                i++;

        } else {
            i = i - 1;
        }
    }*/
}

chooseExpenses(); 
appData.moneyPerDay = (appData.budget / 30).toFixed(); 
alert("Budget on one day is - " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Low income!");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average income!");
} else if ( appData.moneyPerDay > 2000) {
    console.log("Hight income!");
} else {
    console.log("Error!");
}

function checkSevings(){
    if (appData.savings == true) {
        let save = +prompt("How many cash in the your deposit?", ''),
            percent = +prompt("What percentege of your deposit?", '');
        
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Income of your deposin in month is: " + appData.monthIncome.toFixed());
    }
}

checkSevings();