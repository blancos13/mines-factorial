function calculateMultiplier(mines, diamonds) {
    // Define factorial function
    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }

    // Define nCr function
    function nCr(n, r) {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

    // Calculate multiplier
    const multiplier = nCr(25, diamonds) / nCr(25 - mines, diamonds);
    return multiplier;
}

function generateMultipliers() {
    const output = {};

    for (let mines = 0; mines <= 24; mines++) {
        const grid = {};
        for (let diamonds = 1; diamonds <= 25 - mines; diamonds++) {
            grid[diamonds] = calculateMultiplier(mines, diamonds);
        }
        output[mines] = grid;
    }

    return output;
}

// Example usage:
const multipliers = generateMultipliers();
console.log(multipliers);
