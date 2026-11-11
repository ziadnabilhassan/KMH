const fs = require('fs');
const path = require('path');

const files = ['services.raw.html', 'home.raw.html', 'tax.raw.html'];
const paths = new Set();
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /data-path="([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    paths.add(match[1]);
  }
}
console.log('All unique data-path values:');
console.log(Array.from(paths).sort());
