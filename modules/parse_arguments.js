import { Command } from 'commander/esm.mjs';
const program = new Command();

/**
 * parse arguments
 *
 * @returns {object} commandArguments - object of arguments
 */

const getArguments = () => {
  program
    .option('-s, --shift <type>', 'a shift')
    .option('-i, --input <type>', 'an input file')
    .option('-o, --output <type>', 'an output file')
    .option('-a, --action <type>', 'an action encode/decode');

  program.parse();

  return program.opts();
}

export default getArguments;