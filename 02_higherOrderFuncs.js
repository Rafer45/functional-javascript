function repeat(func, n) {
	if(n > 0) {
		func();
		repeat(func, n - 1);
	}
}

module.exports = repeat;