export default function callLeft(fn, ...eagerArgs) {
    return (...lazyArgs) => fn(...eagerArgs, ...lazyArgs);
}
