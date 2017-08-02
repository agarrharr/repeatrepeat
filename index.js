'use strict';
const repeatrepeat = (length, string) =>
	new Array(length + 1 >= 0 ? length + 1 : 0).join(string);

module.exports = (length, string) => repeatrepeat(length, string);
