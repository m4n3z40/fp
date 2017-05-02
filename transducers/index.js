export { default as map } from './transformers/mapTransformer';
export { default as filter } from './transformers/filterTransformer';
export { default } from './maketransducer';
import arrayCombiner from './combiners/arrayCombiner';
import flatArrayCombiner from './combiners/flatArrayCombiner';
import immutableArrayCombiner from './combiners/immutableArrayCombiner';
import stringCombiner from './combiners/stringCombiner';

export const combine = {
    array: arrayCombiner,
    flatArray: flatArrayCombiner,
    immutableArray: immutableArrayCombiner,
    string: stringCombiner
};
