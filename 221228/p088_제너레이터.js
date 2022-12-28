const log = console.log
function* gen() {
    yield 10
    if (false) yield 20 //건너뜀
    yield 30
    return 90
    yield 40
}
/*방법1*/
// let iter = gen();
// console.log(iter);
// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());

/*방법2*/
console.log(...gen());