import fs from 'fs';

const errorHandler = (error) => {
  if (error) {
    process.stderr.write(error.message + '\n');
    process.exit(1);
  }
}

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