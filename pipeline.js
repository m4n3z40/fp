export default function pipeline(...fns) {
    return value => fns.reduce((acc, fn) => fn(acc), value); 
}
