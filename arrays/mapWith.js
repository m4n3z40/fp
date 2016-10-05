export default function mapWith(fn, [first, ...rest]) {
    return typeof first === 'undefined' ?
        [] :
        [fn(first), ...mapWith(fn, rest)];
}
