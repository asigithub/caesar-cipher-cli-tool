import getArguments from './modules/parse_arguments.js';
import validateArguments from './modules/validate_arguments.js';
import transformData from './modules/transform_stream.js';

const commandArguments = getArguments();
validateArguments(commandArguments);
transformData(commandArguments);