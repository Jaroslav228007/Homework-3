const age = 15;

if(age >= 18){
    const message = 'You are an adult';
    console.log(message);
} else if(age <= 18){
    const message1 = 'You are a minor';
    console.log(message1);
}
// -----------------
const message = age <= 18 ? 'You are a minor' : 'You are an adult';

console.log(message);
// -----------------
for(let age = 0; age <= 18; age += 1){
    console.log(age);
}
