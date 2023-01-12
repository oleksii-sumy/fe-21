// 1/ context - object with methods, this привязывается к глобальному объекту или устанавливается в undefined (в строгом режиме)
//2. when context is lost - 



function sayHi() {
    console.log(`Hello ${this.userName}`);
}

const user = {
    userName: 'Oleksii'
}

const sayHisayHiBinded = sayHi.bind(user);
sayHisayHiBinded();


//task-timer, when context log

const timer ={

    secondPassed:0,
    minsPassed:0,
    startTimer() {
setInterval(() => {
    this.secondPassed += 1;
    if(this.secondPassed === 60) {
        this.minsPassed += 1;
        this.secondPassed = 0;
    }
    console.log(this.secondPassed);

}, 1000);
//input: callback, ms
//output: number (ID)

    },
    getTime() {

    },
    stopTimer() {

    },
    resetTimer() {

    }
}

// timer.startTimer();

//lost context:
// const func = timer.startTimer();
// func();
