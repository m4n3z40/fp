export default function compose(fnA, ...otherFns) {
    return otherFns.length === 0 ?
        fnA :
        value => fnA(compose(...otherFns)(value));
}
