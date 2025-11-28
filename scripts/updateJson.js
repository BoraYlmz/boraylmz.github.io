const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const jsonFilePath = path.join(__dirname, '../postdb.json');
let postData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

const postsDirectory = path.join(__dirname, '../posts');

fs.readdirSync(postsDirectory).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDirectory, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    postData.posts.push({
      title: data.title,
      category: data.category,
      date: data.date,
      summary: data.summary,
      image: data.image,
      file: file
    });
  }
});

fs.writeFileSync(jsonFilePath, JSON.stringify(postData, null, 2));
console.log('JSON dosyası güncellendi!');
