let size = 11;
let str;

if (size % 2 === 0) {
    for(let i = 1; i <= size; i++ ){
        if(i % 2 !== 0){
            str = '# '.repeat(size/2);
            console.log(str);
        }
        else {
            str = ' #'.repeat(size/2);
            console.log(str);
        }
    }
}
else {
    for(let i = 1; i <= size; i++){
        if(i % 2 !== 0){
            str = '# '.repeat(size/2) + '#';
            console.log(str);
        }
        else {
            str = ' #'.repeat(size/2) + ' ';
            console.log(str);
        }
    }
}