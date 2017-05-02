export default function filterTransformer(predicateFn) {
  return function composableFilterer(combineFn) {
    return function filterReduce(result, currValue) {
        if (predicateFn(currValue)) {
            return combineFn(result, currValue);
        }

        return result;
    };
  }
}
