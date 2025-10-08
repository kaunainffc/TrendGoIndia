const fs = require('fs');
const path = require('path');

// List of required images
const images = [
  'logo.png',
  'iphone.png',
  'laptop.png',
  'product1.png',
  'product2.png',
];

// Assets images folder
const imagesDir = path.join(__dirname, 'assets', 'images');

// Create folder if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create a blank PNG file (1x1 pixel)
const createBlankPNG = (filePath) => {
  const blankPNGBuffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgHc0Z9sAAAAASUVORK5CYII=',
    'base64'
  );
  fs.writeFileSync(filePath, blankPNGBuffer);
};

// Loop through images
images.forEach((img) => {
  const filePath = path.join(imagesDir, img);

  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    console.log(`✅ ${img} already exists`);
  } else {
    createBlankPNG(filePath);
    console.log(`🟢 Created blank ${img}`);
  }
});

console.log('✅ All required images are now ready!');
