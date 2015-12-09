module.exports = function (dirPath, ext, cb) {
  var filteredFiles = [];

  fs.readdir(dirPath, function (err, list) {
    if (err) {
      return cb(err);
    }

    list.forEach(function (file) {
      if (path.extname(file) === '.' + ext) {
        filteredFiles.push(file);
      }
    });

    cb(null, filteredFiles);
  });
};
