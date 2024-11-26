let exp1= ((4+5)&&'abc'||false+'test')*(0||0)||(false&&(+11+1))*'end';
console.log(exp1);
//its throwing NaN, 9 AND abc --> true, wont look at right side of OR, 0 OR 0 will be false, False AND 12 will be false and they can not be multiplied.

let exp2=10*('foo'&& 5 + (7)) || ('bar') && (false + 'test') || 0 && true;
console.log(exp2);
// 10*('foo'&& 5 + (7)) --> 120 so wont look at right side of OR

let exp3 = 3 + (1 ||'start') * 4 && (-1 + 'value') * (1 + 2) + 'result';
console.log(exp3);
// Nanresult , Nan and result re concatenated with +.

let exp4= 'hello' * (0 + true) || (2+3 * 'abc') * (0+1) + 'xyz' && 0 ;
console.log(exp4);
//0, 'hello' * (0 + true) --> NaN, will move towards right side of OR

let exp5=(true || (0+1))*('test'&&4)||(false && 3 + 'value') * 1+2;
console.log(exp5);
// 4, as true is 1 and test AND 4 will give 4.

let exp6=3 + 'abc' && (4*2) +3 || (0+1) && (3 + 'hello') || 5;
console.log(exp6);
// 11, as  3abc is a true value and it will look at right side of AND, expression there is giving 11 so it wont look at other side of OR

let exp7=('foo'+5)*(1+true) || 2*3 +(true + 2) || 'true';
console.log(exp7);
//9, ('foo'+5)*(1+true) is NaN so OR will look at its right, expression is giving it 9 so wont look at right then

let exp8=(0+1) && (true + 1) || (false + 'test')*4 && 3+2 || 'value';
console.log(exp8);
// 2, as 1 is ture and true+1 will give 2 so it wont move to right side of the OR

let exp9=3*'abc'+(true + 1) || (1 + 'test') && (3 + 'result') || null;
console.log(exp9);
// 3result, as first equation is NaN hence it will look at right sdie of OR and 1test is true so will move to 3result and its a true value so it wont move to null.

let exp10=(7+ false) && ' start' || 0+1 && ' value' || 5 * 'end' && 3;
console.log(exp10);
// start, as 7 is true AND will look at its right which is giving it start so it wont look at right side of OR

let exp11=(false && 'hello') + (3 || 3 + 'test') *4 || 5*'abc'&&0;
console.log(exp11);
// 12. as firsrt expression will give false then 3 is a true value so it multiplies with 4 and then stops as it got true value

let exp12='hello'*(true +0) +2 || (false +1)*3 && 'result' || 4+ 'test';
console.log(exp12);
// result, as first expression is Nan so OR will lok at its right, firs tvalue is true so result will be take and wont look at right side of OR

let exp13=5*(3 || false) + 2 && (false + 'test') || 3* 'end' && 4;
console.log(exp13);
// falsetest, firs expression is Nan so move towrds right side of AND and have falsetest.

let exp14= (false + 'abc')*2 || (3+1)*'start' + 3 && 4 || 'end';
console.log(exp14);
// end, as all others are Nan

let exp15=(0+'foo')*3 + (true &&'result') || 'start' + (1+1)*4; 
console.log(exp15);
// Nanresult, first expression is giving a value by concatenation s owont look at right side of OR

let exp16=2*'end'|| (false && true) || 'start' +(5+2) *5&& null
console.log(exp16);
// null, NaN then false then start35 but null.

let exp17=3+2*('test'+1)&&(false+3)*5  || 0 +'value' &&4;
console.log(exp17);
// 4, firss texpression is NaN and right side of OR gives 0value thats true so gives 4

let exp18='start'&&(false|| 2*'end')||(2+1)*3+'result'&&0;
console.log(exp18);
// 0, as first expression is Nan and then after true value of 9result, i  gives 0

let exp19=((5+1)&&'foo')|| (2+2)*(false+3)+'test'&&7;
console.log(exp19);
// foo, as 6 is true it will look at right side of AND and that gives foo.

let exp20=2*3 +'hello' && (false+2)*'result'||'end'+5||0;
console.log(exp20);
// end5, as first expression is NaN so will move to right side of OR that giving end

let exp21=5*(true+2)&&('test'+false)||7*(true+2)+'value';
console.log(exp21);
// testfalse, first expression is true so test will concatenate with false

let exp22='foo'+4 && (2+1)*'start' || 5+6 *(false+true)&&'test'
console.log(exp22);
// test as first expression is NaN and then expression is giving true so test is attained

let exp23=(false&&2) || (1+1)*'end'&&'start'||4*5 && 'result'
console.log(exp23);
// result, NaN then true so result is attained

let exp24=3+2*'test'|| (false + 1) * ' hello' && 'world' + 1 || 2;
console.log(exp24);
// 2, Nan so 2 is attained

let exp25=(3+4)*(false || 1) && 5 || 'start' + 1 + 'test' && 0;
console.log(exp25);
// 5, as first expression is 7 that is trueso it will attain 5 as right side of AND

let exp26='hello'&& 3*2 + (1+1) || (false + true)*'result'+'test';
console.log(exp26);
// 8, wont look at right side of OR as it already got a true value

let exp27=3*'test'+(true+2) && (false || 'value') || 'start' + 5;
console.log(exp27);
// start5

let exp28=(false+1)*'hello'||3+(1 && 5)*'result' || 'world';
console.log(exp28);
// world

let exp29='start'+2 *(true || 1) && (false || 'value')*5+'result';
console.log(exp29);
// Nanresuilt

let exp30=(true+3)*'test'|| 1*5&&(false +'value')+'end' || 4;
console.log(exp30);
// falsevalueend

let exp31=3+'end'|| 2*'test'&&(1+true)|| 'start' +1;
console.log(exp31);
// 3end

let exp32=(0 + 3) * (true + false) || 5 *'hello' && + 2 && (false + test);
console.log(exp32);
// 3

let exp33 = 2 + 3 && ('end'+ 1) || (false + 'test') * 4 &&5;
console.log(exp33);
// end1

let exp34='hello' + 4 * (false + 1) || 3 && 'start' + 1 || (true + 'test');
console.log(exp34);
// hello4

let exp35 ='start' && (1 || 'test') * 4 + 5 && (false + 'end') || 2;
console.log(exp35);
// flaseend

let exp36 = 1 + 'value' && (1 + 2) || (3 + 'result') * true && 4;
console.log(exp36);
// 3

let exp37 = 'hello' && 2 + 'test' || (1 + 3) && (true + 'value') + 1;
console.log(exp37);
// 2test

let exp38 = 5 * (1 || 'test') && 6 * 'result' || 2 +'end';
console.log(exp38);
// 2end


let exp39 = 'start' && (false + 1) * 2 || 3 + 4 * 'hello' + 5 && 0;
console.log(exp39);
// 2

let exp40 = (false || 'test') * 5 || 6 + (1 && 'result') * 4;
console.log(exp40);
// NaN

let exp41 = 'start' && (3 + 2) * 'test' + 5 || 4 * (false + 1) &&'hello';
console.log(exp41);
// hello

let exp42 = 1 + 2 * 'end' || (false + 3) && 'result' * 4 + 5;
console.log(exp42);
// NaN

let exp43 = (false && 1) || 4 * (3 + 2) && 'start' + 5;
console.log(exp43);
// start5

let exp44 = 3 + 2 * (true + 5) && 'value' + 1 || (1 + 2) + 'test';
console.log(exp44);
//value1

let exp45 = (false || 1) + 'test' && 5 + (3 * 1) || 'end' + 2;
console.log(exp45);
//8

let exp46 = (2 * 1 + 4) && 'test' || 3 + 'hello' && (false + 1) * 5;
console.log(exp46);
//test

let exp47 = 0 + 'result' && (3 + 1) * 2 || (false + 1) * 'end';
console.log(exp47);
//8

let exp48 = (false || 1) * 'test' && 4 || (true + 2) * 'hello' + 5;
console.log(exp48);
//Nan


let exp49 = (2 * 3) + 'result' && 4 * (1 + 1) || 'start' + 2 + 'end';
console.log(exp49);
//8

let exp50 = 32 && true - 5 && ' ' || 'true'; // for a = 5
console.log(exp50);
// empty space

let exp51 = (5 + 2) * (1 + 1) || 'start' + (1 + 'end') * 3;
console.log(exp51);
//14

let exp52 = (1 && 3) * 'test' || 4 + 'start' * (1 + 'result');
console.log(exp52);
//NaN

let exp53 = 3 + 'value' * (1 + 1) || (1 && 'start') + 'end';
console.log(exp53);
//startend

let exp54 = (1 + 2) * 'result' || (false && 5) * 'test' + 4;
console.log(exp54);
//NaN

let exp55 = 'start' + 5 * (1 + 'test') || (false + 2) * 'value';
console.log(exp55);
//startNaN

let exp56 = 4 * (1 + 1) + 'test' || (1 + 3) * 'start' + 5;
console.log(exp56);
//8test

let exp57 = (3 * 'test' + 1) || (1 && 1) * 'result' || 'value';
console.log(exp57);
//value

let exp58 = (1 + 'start') * 'result' || (false + 2) + 'end' + 3;
console.log(exp58);
//2end3

let exp59 = 5 * (1 + 3) * 'test' || (false && 'start') + 2;
console.log(exp59);
//2

let exp60 = (1 + 'value') * 'test' + 4 || (false + 2) * 'end';
console.log(exp60);
//NaN

let exp61 = 3 + (1 + 'result') || (1 + 2) * 'test' + 5;
console.log(exp61);
//31result

let exp62 = 'start' + (1 + 'test') * 3 || (false && 4) * 'end' + 5;
console.log(exp62);
//startNaN

let exp63 = (1 + 2) * 'test' || 'value' + (1 + 3) * 'result';
console.log(exp63);
//valueNaN

let exp64 = 5 * 'end' + (1 + 1) * 'test' || 'start' + (false && 'result');
console.log(exp64);
//startfalse

let exp65 = 'value' + 3 * (1 + 'test') || (false + 1) * 'end';
console.log(exp65);
//valueNaN

let exp66 = (1 + 'test') * 2 || (1 + 1) * 'start' + 'result';
console.log(exp66);
//NaNresult

let exp67 = 'start' + (1 + 3) * 'end' || (1 + 'test') * 5;
console.log(exp67);
//startNaN

let exp68 = 2 * (1 + 1) + 'result' || (false && 'start') * 3;
console.log(exp68);
//4result

let exp69 = 4 + (1 + 'test') * 5 || (false + 2) * 'start';
console.log(exp69);
//NaN

let exp70 = (1 + 2) * 'result' || (false && 'end') + 3;
console.log(exp70);
//3

let exp71 = 'test' + 2 * (1 + 3) || (false && 'start') + 4;
console.log(exp71);
//test8

let exp72 = 3 * (1 + 'value') || (false + 2) * 'test';
console.log(exp72);
//NaN

let exp73 = (1 + 'test') * 4 || (false + 1) * 'result' + 'start';
console.log(exp73);
//NaNstart

let exp74 = (1 + 5) * 'end' || (1 + 2) * 'result' + 'start';
console.log(exp74);
//NaNstart

let exp75 = (3 * 'test') + (1 + 'start') || (false + 1) * 'result';
console.log(exp75);
//NaN1start







 


