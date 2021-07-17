let students = new Map();
students.set('INT18IS042', 'rakshith');
students.set('INT18IS100', 'sai');
students.set('INT18IS200', 'butna');

console.log('the students USN are:' + students.entries());
let entries = students.entries();
console.log(entries);

console.log('\n size of students is:' + stduents.size);

let keys = students.keys();
console.log('\n students keys are:');
console.log(keys);
console.log('\n students values are:');
let values = students.values();
console.log(values);

console.log('\n name of USN 1NT18IS042 is:' + students.get('1NT18IS042'));

console.log('\n displaying all student usns and their names:');
for (let [key, values] of students)
{
    console.log(value + 'is the anme if usn:' + key);

}

console.log('\n');

let myset = new Set();
let set1 = new set([1, 2, 3, 4, 5], 'string', { "objectkey": "objValue" });
console.log(set1);

console.log(set1.entries());
if (set1.has('string')) {
    set1.delete('string');
}
else {
    set1.clear();
}
set1.add(50);

console.log(set1.entries());
console.log(set1.size);
console.log(set1.values());