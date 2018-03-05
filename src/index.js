const evalFn = require('./evalFn');
const stackProc = require('./stackProc');

module.exports = {
	evalFn: evalFn.parse,
	stackProc: stackProc.parse,
};
