export default function foldWith(fn, terminalValue, [first, ...rest]) {
    return typeof first === 'undefined' ?
        terminalValue :
        fn(first, foldWith(fn, terminalValue, rest));
}
