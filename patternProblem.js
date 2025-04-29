const leftPattern = n => {  //while using arrow function no need to use function keyword
        for(let i = 1;i <= n;i++) { //assigning 1 for i to intiate loop
            let line = ''; //adding star with previous iteration value
            for(j = 1;j <= i; j++) { //nested loop for make a pattern
                line += '* ';
            }
            console.log(line); //Prints left pattern
            //console.log('');
        }
        console.log('');
    }
    
    const rightPattern = n => {
        for(let i = n;i >= 0;i--) {
            let line = '';
            for(j = 1;j <= i; j++) {
                line += '* ';
            }
            console.log(line); //prints five * on top right pattern 
            //console.log('');
        }
    }
    
    const pyramidPattern = n => {
        for (let i = 1; i <= n; i++) {
            let line = '';
            // Add spaces before the stars
            for (let j = 1; j <= n - i; j++) {
                line += ' ';
            }
            // Add stars
            for (let k = 1; k <= 2 * i - 1; k++) {
                line += '*';
            }
            console.log(line);
        }
    };
    var leftpattern = prompt("Enter Lines for left pattern : ");
    leftPattern(leftpattern);
    var rightpattern = prompt("Enter Lines for left pattern : ");
    rightPattern(rightpattern);
    var pyramidpattern = prompt("Enter Lines for left pattern : ");
    pyramidPattern(pyramidpattern);




//     Output of the code is given below 

//     Enter Lines for left pattern :5
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

// Enter Lines for left pattern :5
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// Enter Lines for left pattern :5
//     *
//    ***
//   *****
//  *******
// *********