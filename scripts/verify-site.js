const fs = require('fs');
const path = require('path');

// Clean up raw files
['home.raw.html', 'services.raw.html', 'tax.raw.html'].forEach(f => {
  if (fs.existsSync(f)) fs.unlinkSync(f);
});

// Verify all html files
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log(`Found ${htmlFiles.length} HTML files.`);

let totalLinksChecked = 0;
let brokenLinks = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /href="([^"#:]+?\.html)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    totalLinksChecked++;
    const target = match[1];
    if (!fs.existsSync(target)) {
      console.error(`Broken link in ${file}: target '${target}' does not exist!`);
      brokenLinks++;
    }
  }
});

console.log(`Total links checked: ${totalLinksChecked}`);
console.log(`Broken links: ${brokenLinks}`);
