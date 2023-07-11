function staircase(n) {

    // want to declare a variable that will hold the final output that we will print
    let output = ''

    // outer for loop to keep track of the overall number of rows (n)
    for (let i = 1; i <= n; i++) {
        for (let s = n - 1; s >= i; s--) {
            output += ' '
        }
        for (let h = 1; h <= i; h++) {
            output += '#'
        }
        // new line
        output += "\n"

    }
    // log the final result
    console.log(output)
}


staircase(3);
