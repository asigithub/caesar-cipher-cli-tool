import getArguments from './modules/parse_arguments.js';
import validateArguments from './modules/validate_arguments.js';

const commandArguments = getArguments();
validateArguments(commandArguments);