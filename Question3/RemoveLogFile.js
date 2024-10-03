const fs = require('fs');
const path = require('path');

const directory= path.join(__dirname, 'Logs');

const removeLogs = () => {
    if (fs.existsSync(directory)) {

        const files = fs.readdirSync(directory);
        
        files.forEach(file => {
            const filePath = path.join(directory, file);
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(filePath);  // Remove file
        });

        fs.rmdirSync(directory);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
};

removeLogs();
