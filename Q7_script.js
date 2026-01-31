function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
    };
}

const myCounter = createCounter();

console.log(myCounter.increment()); 
console.log(myCounter.increment()); 
console.log(myCounter.increment()); 

// 3. The value is not accessible directly
console.log(myCounter.count); // undefined (cannot access private variable)