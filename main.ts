import { fatorial } from './fatorial'

import * as yargs from 'yargs'

console.log('n-fatorial');

const argv = yargs.demandOption('num').argv

const num = argv

console.log(`o fatorial de ${num} é igual a  ${fatorial(num)}`);