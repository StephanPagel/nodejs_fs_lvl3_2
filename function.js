const fs = require("fs");

const checkFolder = (dir) => {
  if (fs.existsSync(dir)) {
    fs.rmdir(dir, (err) => {
      if (err) {
        throw err;
      }
      console.log(dir, "wurde gelöscht.");
    });
  } else {
    fs.mkdir(dir, (err) => {
      if (err) {
        throw err;
      }
      console.log(dir, "wurde erstellt.");
    });
  }
};

const checkFile = (folder, file) => {
  if (!fs.existsSync(folder + file)) {
    fs.mkdir(folder, (err) => {
      if (err) {
        throw err;
      }
      console.log(folder, "wurde erstellt.");

      fs.writeFile(folder + file, "", (err) => {
        if (err) {
          throw err;
        }
        console.log(file, "wurde erstellt");
      });
    });
  } else {
    console.log(folder + file, "existiert bereits.");
  }
};

module.exports = {
  checkFolder,
  checkFile,
};
