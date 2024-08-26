const fs = require('fs');

module.exports = (on, config) => {
    on('task', {
        fileExists(filePath) {
            return fs.existsSync(filePath);
        }
    });
};
