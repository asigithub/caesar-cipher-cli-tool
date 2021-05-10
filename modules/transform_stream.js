import fs from 'fs';
import { Transform, pipeline } from 'stream';
import coder from './coder.js';
import errorHandler from './showError.js'

/**
 * data transformation
 *
 * @param {object} commandArguments - object of arguments
 */

const transformData = (commandArguments) => {

  const source = commandArguments.input ? fs.createReadStream(commandArguments.input) : process.stdin;
  const target = commandArguments.output ? fs.createWriteStream(commandArguments.output, { flags: 'a' }) : process.stdout;

  pipeline(source,
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        callback(null, coder(chunk.toString(), commandArguments.shift, commandArguments.action));
      }
    }),
    target,
    (error) => errorHandler(error)
    );
}

export default transformData;