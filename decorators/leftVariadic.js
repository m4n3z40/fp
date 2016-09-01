export default function leftvariadic(fn) {
    if (fn.length < 1) {
        return fn;
    }
    
    return (...args) => {
        const sliceBorder = args.length - fn.length + 1;
        const gathered = args.slice(0, sliceBorder);
        const spread = args.slice(sliceBorder);

        return fn(gathered, ...spread);
    };
}
