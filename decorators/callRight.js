export default function callRight(fn, ...eagerArgs) {
    return (...lazyArgs) => fn(...lazyArgs, ...eagerArgs);
}
