

let result = 0;
function add(x) {
    return result += x;
}

function minus(x) {
    return result -= x;
}

//key 방식 or 향상된 리터럴
export default {a: add, b: minus}