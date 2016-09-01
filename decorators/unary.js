export default function unary(fn) {
    return fn.length <= 0 ? 
        fn : 
        arg => fn(arg);
}
