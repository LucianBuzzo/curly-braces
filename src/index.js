const evalFn = require('./evalFn');
const stackProc = require('./stackProc');
const stackRec = require('./stackRec');

module.exports = {
	evalFn: evalFn.parse,
	stackProc: stackProc.parse,
	stackRec: stackRec.parse,
};
