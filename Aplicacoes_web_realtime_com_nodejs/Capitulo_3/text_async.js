const fs = require('fs');

for (var i = 1; i <= 5; i++) {
  var file = 'sync-txt' + i + '.txt';
  fs.writeFile(file, (err, out) => {
    console.log(out);
  });
}