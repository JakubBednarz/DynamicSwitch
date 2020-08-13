
// Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji 
// - ma metodę .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jak zostanie warunek spełniony
// - ma metodę .isValid, która iteruje po wszystkich .cases sprawdzając kążdy dodany wcześniej warunek
// - metoda .isValid, która zwraca true jeśli wszystkie warunki będą na false

// po wykonaniu w metodzie .isValid dany warunek jest usuwany z listy cases
// console.log('hello');

class Switch{
    cases = []
    conditions = []

    add(condition, callback){
        this.cases.push(condition);
        this.conditions.push(callback);
    }

    isValid(){
        const allCasesValid = this.cases.every((value) => {
            return !value
            })

        this.cases.forEach((el, index) => {
            if (el) {
                this.conditions[index]();
            }
        })

        this.cases = [];
        this.conditions = [];

        return allCasesValid
    }
}


// ma to działać tak:
// const formChecker = new Switch()
// const value = 'test'

// formChecker.add(value.length < 5, ()=>{
//     console.error('value is to short')
// })

// formChecker.add(!value.includes('@'), ()=>{
//     console.error('value is not an email')
// })

// formChecker.isValid() // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.cases.length === 0

module.exports = {
    Switch : Switch
}