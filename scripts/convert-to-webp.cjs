const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folders = [
    { input: './src/assets', output: './src/assets/webp' },
    { input: './public', output: './public/webp' }
];

folders.forEach(({ input, output }) => {
    if (!fs.existsSync(input)) {
        console.log(`⚠️ Folder not found, skipping: ${input}`);
        return;
    }

    if (!fs.existsSync(output)) {
        fs.mkdirSync(output, { recursive: true });
    }

    const files = fs.readdirSync(input);
    
    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            const fileName = path.parse(file).name;
            const outputPath = path.join(output, `${fileName}.webp`);

            sharp(path.join(input, file))
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(() => console.log(`✅ Optimized: ${input}/${file} -> ${fileName}.webp`))
                .catch(err => console.error(`❌ Error processing ${file}:`, err));
        }
    });
});