export default function leftGather(outputArrayLength) {
    return inputArray => {
        const sliceBorder = inputArray.length - outputArrayLength + 1;

        return [inputArray.slice(0, sliceBorder)].concat(inputArray.slice(sliceBorder));
    };
}