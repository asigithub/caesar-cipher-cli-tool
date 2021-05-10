/**
 * show error
 *
 * @param {object} error - object of error
 */

const errorHandler = (error) => {
  if (error) {
    process.stderr.write(error.message + '\n');
    process.exit(1);
  }
}

export default errorHandler;