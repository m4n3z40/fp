function isNothing(value) {
    return typeof value === 'undefined' || value === null;
}

export default function maybe(fn) {
    return (...args) => {
        if (args.length === 0 || args.some(isNothing)) {
            return;
        }

        return fn(...args);
    };
}
