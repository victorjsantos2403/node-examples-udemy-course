"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const yargs = require("yargs");
console.log('n-fatorial');
const argv = yargs.demandOption('num').argv;
const num = argv;
console.log(`o fatorial de ${num} é igual a  ${fatorial_1.fatorial(num)}`);
