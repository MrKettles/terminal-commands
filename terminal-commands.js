const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (...names) => {
	names.forEach((name) => {
		fs.writeFile(name, '', 'utf8', (err) => {
			if (err) throw err;
		})
		console.log('File created: ' + name);
	})
};

module.exports.mkdir = (name) => {
	fs.mkdir(name, (err) => {
		if (err) throw err;
	})
	console.log('New directory created: ' + name);
};