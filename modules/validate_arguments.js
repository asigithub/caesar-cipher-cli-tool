import fs from 'fs';
import errorHandler from './showError.js'

/**
 * validate arguments
 *
 * @param {object} commandArguments - object of arguments
 */

const validateArguments = (commandArguments) => {
  if (!commandArguments.action) {
    errorHandler(new Error('argument --action is missing'));
  }
  if (!commandArguments.shift) {
    errorHandler(new Error('argument --shift is missing'));
  }
  if (commandArguments.input) {
    fs.access(commandArguments.input, fs.constants.R_OK, error => errorHandler(error));
  }
  if (commandArguments.output) {
    fs.access(commandArguments.output, fs.constants.W_OK, error => errorHandler(error));
  }
}

export default validateArguments;