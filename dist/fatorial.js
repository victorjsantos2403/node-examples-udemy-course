"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = void 0;
console.log(module.id);
exports.fatorial = (num) => {
    if (num === 0)
        return 1;
    return num * exports.fatorial(num - 1);
};
