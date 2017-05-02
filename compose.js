export default function compose(...fns) {
    return value => fns.reduceRight((acc, fn) => fn(acc), value); 
}
