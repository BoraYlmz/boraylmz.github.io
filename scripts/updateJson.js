const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const jsonFilePath = path.join(__dirname, '../postdb.json');

let postData = { posts: [] };

try {
  const rawData = fs.readFileSync(jsonFilePath, 'utf-8');
  if (rawData) {
    postData = JSON.parse(rawData);
  }
} catch (error) {
  console.error('JSON dosyası okunurken bir hata oluştu:', error);
}

const postsDirectory = path.join(__dirname, '../posts');

fs.readdirSync(postsDirectory).forEach(file => {
  if (file.endsWith('.md') && fs.statSync(path.join(postsDirectory, file)).isFile()) {
    const filePath = path.join(postsDirectory, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    postData.posts.push({
      title: data.title || 'Başlık bulunamadı',
      category: data.category || 'Kategori bulunamadı',
      date: data.date || 'Tarih bulunamadı',
      summary: data.summary || 'Özet bulunamadı',
      image: data.image || 'Resim bulunamadı',
      file: file
    });
  }
});

fs.writeFileSync(jsonFilePath, JSON.stringify(postData, null, 2));
console.log('JSON dosyası güncellendi!');
