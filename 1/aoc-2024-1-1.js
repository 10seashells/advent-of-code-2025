let input = 'L68,L30,R48,L5,R60,L55,L1,L99,R14,L82';
number = 50;
count0 = 0;
const pass_seq = input.split(",");
let i = 0;
while (i < pass_seq.length) {
    let leap = parseInt(pass_seq[i].substring(1), 10);
    if (pass_seq[i].substring(0,1) == 'R') {
        number += leap;
    }else{number -= leap;}
    if (number%100 === 0){count0++;}
    i++;
}
console.log(count0);