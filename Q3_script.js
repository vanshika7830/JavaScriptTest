const input = [2, 3, 4, 5, 6];

function processNumbers() {
    return input.map(n => {
        if (n % 2 === 0) {
            return n ** 2; 
        }
        return n; 
    });
}

const output = processNumbers();
console.log(output); 