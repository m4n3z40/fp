export default function flatten([first, ...rest]) {
    if (typeof first === 'undefined') {
        return [];
    } else if (!Array.isArray(first)) {
        return [first, ...flatten(rest)];
    }

    return [...flatten(first), ...flatten(rest)];
}
