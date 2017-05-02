import arrayCombiner from './arrayCombiner';

export default function flatArrayCombiner(result = [], value) {
    if (Array.isArray(value)) {
        return result.concat(value);
    }

    return arrayCombiner(result, value);
}
