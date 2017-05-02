export default function makeTransducer(transformerFn, combineFn, initialValue) {
    return function transducer(list) {
        return list.reduce(transformerFn(combineFn), initialValue);
    };
}
