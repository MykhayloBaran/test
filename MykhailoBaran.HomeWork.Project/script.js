'use script';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSevings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    persentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;
     
startBtn.addEventListener('click',function(){
    time = prompt("Введіть дату в форматі : YYYY-MM-DD", ""); 

   while( time.length != 10 || targetSearch(time,0) != 4 || targetSearch(time,5) != 7) {
        time = prompt("Не коректний формат, повторіть спробу : YYYY-MM-DD", ""); 
    }

    money = +prompt("Ваш бюджет на місяць?", "");

    while( isNaN(money) || money == '' || money == null ) {
        money = +prompt("Ваш бюджет на місяць?", "");
    }

    function targetSearch(str,pos) {
        let target = '-';
    
        while (true) {
            let foundPos = str.indexOf(target, pos);
    
             if (foundPos == -1) break;
            return foundPos;
        }
    };

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); 
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++){
        let answerOnFirstQuestion = expensesItem[i].value,
            answerOnSecondQuestion = expensesItem[++i].value; 

        if( (typeof(answerOnFirstQuestion)) === 'string' && (typeof(answerOnFirstQuestion)) != null && (
            typeof(answerOnSecondQuestion)) != null && answerOnFirstQuestion != '' && answerOnSecondQuestion != '' && 
            answerOnFirstQuestion.length < 50) {
                console.log("done");
                appData.expenses[answerOnFirstQuestion] = answerOnSecondQuestion;
                sum += +answerOnSecondQuestion;
        } else {
             i = i - 1;
        }
        expensesValue.textContent  = sum;
    }
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;

        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
       appData.moneyPerDay = (appData.budget / 30).toFixed(); 
    dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
           levelValue.textContent = "Низький дохід!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Середній дохід!";
        } else if ( appData.moneyPerDay > 2000) {
            levelValue.textContent = "Високий дохід!";
        } else {
            levelValue.textContent = "Сталася помилка!";
        } 
    } else {
        dayBudgetValue.textContent = "Сталася помилка!";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;

        appData.icome = items.split(', '); 
        incomeValue.textContent = appData.icome;  
});

checkSevings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true; 
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +persentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

persentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +persentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1); 
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    icome: [],
    savings: false
};

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