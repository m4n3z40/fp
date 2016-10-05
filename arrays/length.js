export default function length([first, ...rest]) {
    return typeof first === 'undefined' ?
        0 :
        1 + length(rest);
}
