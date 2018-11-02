/**
 * Mix custom class with properties and methods to another component
 * @param {Function[]} baseCtors - array of classes mixing target class
 * @returns {(derivedCtor: Function) => void} - target class in which we add attributes and methods
 * @constructor
 */
export function mixin(baseCtors: Function[]) {
    return function (derivedCtor: Function) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
}
