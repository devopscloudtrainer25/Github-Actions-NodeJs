const fs = require('fs');

fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.js', 'dist/index.js');
fs.writeFileSync('dist/build-info.txt', `Built at ${new Date().toISOString()}\n`);

console.log('Build complete: dist/ created');
