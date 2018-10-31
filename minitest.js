const tomkami = require('tomkami-lib');

const handlerMap = {
    'CustomMessage_SignUp': require('tomkami-lib'),
    // 'CustomMessage_ResendCode': require('./handleCustomMessage'),
    // 'CustomMessage_ForgotPassword': require('./handleCustomMessage'),
    // 'PreSignUp_SignUp': require('./handlePreSignup'),
    // 'PostConfirmation_ConfirmSignUp': require('./handleConfirmSignUp'),
    // 'PostConfirmation_ConfirmForgotPassword': require('./handleConfirmForgetPassword'),
    // 'PostAuthentication_Authentication': require('./handlePostAuthentation'),
};


console.log(tomkami.my_max(-1,-3,-9,10,101,523,442)); // find max

console.log(tomkami.add(1,3));

console.log(handlerMap.CustomMessage_SignUp.add(10,20));

console.log(process.env.SHELL);



console.log(process.env.SHELL || 20);
// console.log(test);

console.log(5000 || 3000);




function my_min( /*...*/ ) {

    let tellMe = Number.POSITIVE_INFINITY;
    for (i = 0; i < arguments.length; i++)
        if (arguments[i] < tellMe) tellMe = arguments[i];

    return tellMe;


}

// console.log(my_min(-1,-2,-3,10,11,23));

function my_max( /*...*/ ) {

    let tellMe = Number.NEGATIVE_INFINITY;
    for (i = 0; i < arguments.length; i++)
        if (arguments[i] > tellMe) tellMe = arguments[i];

    return tellMe;


}
// console.log(Number.POSITIVE_INFINITY);
// console.log(my_max(1,1000,  3, 5, 100, 300, 500));

// console.log(tellMe);

const envdata = process.env;

// console.log(envdata);

// console.log(typeof(envdata));

// Logging property names and values using Array.forEach
// Object.getOwnPropertyNames(envdata).forEach(
//     function (val, idx, array) {
//         if (val === 'SHELL') {
//             console.log(val + ' -> ' + envdata[val]);
//         }
//     }
// );


// const empArr = [];

// empArr.push(1,2,3);
// empArr.push({x: 1, y: 2});

// console.log(empArr);

// console.log(empArr.pop());

// console.log(empArr);

// console.log(empArr.push({h: 189, w: 63})); //return array的 new length.