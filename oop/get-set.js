const data = {
	get location() {
		return 'This is a test';
	},
	set location(value) {
		value = value.trim();
	}
};

data.location = 'St Petersburg';
console.log(data.location);
