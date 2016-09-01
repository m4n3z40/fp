export default function once(fn) {
    let done = false;

    return (...args) => done ? 
        void 0 : 
        ((done = true), fn(...args));
}
