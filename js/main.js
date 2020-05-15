let money, time;

function start() {
    money = +window.prompt('Ваш бюджет на месяц?', '');
    time = window.prompt('Введите дату в формате YYYY-MM--DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +window.prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = window.prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = window.prompt('Во сколько обойдется?', '');
        
            if ( typeof(a)=== 'string' && typeof(a) != null && typeof(b)=== 'string' && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                continue;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        window.alert('Ежедневный бюджет  ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.saving == true) {
            let save = +window.prompt('Какова сумма накоплений?'),
                percent = +window.prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            window.alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = window.prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = window.prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
        appData.income.push(window.prompt('Может что-то еще?', ''));
        appData.income.sort();
    }
};
