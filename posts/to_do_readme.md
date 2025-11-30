---
title: "To Do Project"
category: "Proje"
summary: "Tkinter ile geliştirilmiş görev yönetim uygulaması"
date: "28.11.2024"
image: |
  <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M379.733333 386.133333l-157.866666 155.733334-89.6-87.466667L85.333333 501.333333l136.533334 136.533334 204.8-204.8zM379.733333 108.8l-157.866666 155.733333-89.6-87.466666L85.333333 224l136.533334 136.533333L426.666667 155.733333zM379.733333 663.466667l-157.866666 155.733333-89.6-87.466667L85.333333 778.666667l136.533334 136.533333 204.8-204.8z" fill="#3F51B5"/><path d="M512 469.333333h426.666667v85.333334H512zM512 192h426.666667v85.333333H512zM512 746.666667h426.666667v85.333333H512z" fill="#90CAF9"/></svg>
---

<div class="lang-block" data-lang="tr">
  
# <span>To-Do Uygulaması Projesi</span>
---
<div class="github-link">
    <div>
        <strong>GitHub Repository</strong><br>
        <span>Projenin kaynak kodlarına ulaşın</span>
    </div>
    <a href="https://github.com/BoraYlmz/to_do" target="_blank">GitHub</a>
</div>
<div class="warning-msg">
  <strong >⚠ Proje Durumu:</strong> Bu proje durdurulmuş olup bazı bölümler eksik veya tamamlanmamıştır.
</div>

Bu proje, yaklaşık 15–30 dakikalık boş zamanları değerlendirmek amacıyla geliştirdiğim ilk **Tkinter tabanlı arayüz projesidir**. Temel amaç, iş ortamımızda kullandığımız farklı uygulamaları tek bir platformda bir araya getirme fikrinin nasıl bir deneyim sunacağını test etmektir. Bu uygulama, planlanan büyük yapının ilk modülünü oluşturmaktadır.

Uygulama, görevlerin üç ana durumda listelenmesini sağlar:

- **Başlamamış**
- **İşlemde**
- **Bitti**

Her bir görev için detaylı açıklamalar, yorum ekleme alanı ve atama seçenekleri mevcuttur. Bir görev yalnızca **kendisine atanmış kullanıcı tarafından silinebilir**.

---

## 📸 Proje Ekran Görüntüleri

### 1️⃣ Giriş Ekranı
Kullanıcının sisteme giriş yaptığı başlangıç arayüzü.

<img src="https://github.com/user-attachments/assets/51352d6d-e1ec-48df-9dde-5aea06eccf5e" width="250">

---

### 2️⃣ Görev Durumu Paneli  
Oluşturulan veya size atanan görevlerin durumlarının gösterildiği ana ekran.

<img src="https://github.com/user-attachments/assets/a558194a-4931-472c-91a1-8cd298c5183b" width="250">

---

### 3️⃣ Görev Detayı ve Yorum Paneli  
Bir göreve tıklandığında açılan bu panelde görev açıklaması ve yorumlar yer alır.

<img src="https://github.com/user-attachments/assets/4921feb9-64f2-4f2b-b5ee-c813171d61cd" width="250">

---

### 4️⃣ Yeni Görev Oluşturma Ekranı  
Kendinize veya başka bir kullanıcıya görev eklemenizi sağlar.

<img src="https://github.com/user-attachments/assets/9097d0be-d0f6-4ae1-83de-daeab6089865" width="250">

---

### 5️⃣ Silme Onay Penceresi  
Görev yalnızca **kendisine atanmış kişi tarafından** silinebilir.

<img src="https://github.com/user-attachments/assets/bcf42d10-a19d-43f2-9827-3f3dd9027edb" width="250">

---

## 🧩 Eksik Yönler ve Geliştirme Planları

### 1. **Kullanıcı Kayıt Modülü**
Henüz uygulanmadı. Düşünülen iki yöntem:

- Manuel kullanıcı ekleme ve yetkilendirme  
- Ağ kullanıcı adıyla otomatik giriş + loglama

---

### 2. **Veritabanı Düzenlemesi**
Başlangıçta yorumlar ayrı JSON dosyalarında tutulmuş olsa da, ileride **tek TinyDB tablosunda** toplanması planlanmaktadır.

---

### 3. **Canlı Güncellemeler**
Yeni görevler ve yorumlar için gerçek zamanlı güncelleme desteği eklenmelidir.

---

### 4. **Kullanıcı Ayarları**
`usersetting.cfg` geçici bir çözümdür.  
Gelecekte:

- Kullanıcı anahtarı üretimi  
- Şifreli giriş  

eklenecektir.

---

### 5. **Toplu Görev Atama**
Birden fazla kullanıcıya aynı anda görev atama özelliği planlanmaktadır.


</div>
<div class="lang-block" data-lang="en">
  
# <span>To-Do Application Project</span>
<div class="github-link">
    <div>
        <strong>GitHub Repository</strong><br>
        <span>Access the source codes of the project</span>
    </div>
    <a href="https://github.com/BoraYlmz/to_do" target="_blank">GitHub</a>
</div>
<div class="warning-msg">
  <strong >⚠ Proje Durumu:</strong> This project has been stopped and some sections are missing or incomplete.
</div>
<div class="info-msg">
  <strong>ℹ Notice:</strong> This English section was generated using AI translation and may include small errors.
</div>

This project is my first **Tkinter-based GUI application**, created during short free periods (approximately 15–30 minutes). The goal was to experiment with unifying multiple tools used in our workplace into a single platform. This application represents the first module of that larger vision.

The module allows users to manage tasks under three states:

- **Not Started**
- **In Progress**
- **Completed**

Each task includes detailed descriptions, comments, and assignment settings.  
A task can be **deleted only by the user it was assigned to**.

---

## 📸 Project Screenshots

### 1️⃣ Login Screen  
Initial interface where the user logs in.

<img src="https://github.com/user-attachments/assets/51352d6d-e1ec-48df-9dde-5aea06eccf5e" width="250">

---

### 2️⃣ Task Status Panel  
Displays tasks created by the user or assigned to them.

<img src="https://github.com/user-attachments/assets/a558194a-4931-472c-91a1-8cd298c5183b" width="250">

---

### 3️⃣ Task Details & Comments  
Shows task information and the comments panel.

<img src="https://github.com/user-attachments/assets/4921feb9-64f2-4f2b-b5ee-c813171d61cd" width="250">

---

### 4️⃣ New Task Creation  
Allows creating a new task for yourself or another user.

<img src="https://github.com/user-attachments/assets/9097d0be-d0f6-4ae1-83de-daeab6089865" width="250">

---

### 5️⃣ Delete Confirmation  
Only the owner of a task can delete it.

<img src="https://github.com/user-attachments/assets/bcf42d10-a19d-43f2-9827-3f3dd9027edb" width="250">

---

## 🧩 Missing Features & Future Plans

### 1. **User Registration Module**
Not yet implemented. Two possible approaches:

- Manual user management  
- Auto-login via local network credentials  

---

### 2. **Database Structure Improvement**
Comments were initially stored in separate JSON files. The plan is to migrate them into a **dedicated TinyDB table**.

---

### 3. **Live Updates**
Real-time updates for new tasks and comments will be added using a background thread.

---

### 4. **User Settings**
`usersetting.cfg` is temporary.  
Future plans:

- User-based login key generation  
- Encrypted login  

---

### 5. **Bulk Task Assignment**
Will allow assigning a task to multiple users at once.
</div>

---
