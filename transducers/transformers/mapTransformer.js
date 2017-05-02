export default function mapTransformer(mapFn) {
    return function composableMapper(combineFn) {
        return function mapReduce(result, currValue) {
            return combineFn(result, mapFn(currValue));
        };
    };
}
