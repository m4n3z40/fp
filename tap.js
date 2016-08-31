export default function tap(value, fn) {
    function curried(fn) {
        return (
            typeof fn === 'function' && fn(value),
            value
        );
    }

    return typeof fn === 'undefined' ?
        curried :
        curried(fn);
}
