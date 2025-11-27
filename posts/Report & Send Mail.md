---
Başlık: "Report & Send Mail"
Kategori: "Proje"
Özet: "Veritabanındaki istediğimiz koşullarda ayarlanan zaman ve kişilere istenilen formatta hafızadan direkt mail gönderen bir raporlama aracıdır."
YazımTarihi: "28.11.2024"
Resim: |
  <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background gradient -->
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D0E7FF"/>
        <stop offset="100%" stop-color="#A0C4FF"/>
      </linearGradient>
      <linearGradient id="dbGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3B82F6"/>
        <stop offset="100%" stop-color="#60A5FA"/>
      </linearGradient>
      <linearGradient id="sheetGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FACC15"/>
        <stop offset="100%" stop-color="#FBBF24"/>
      </linearGradient>
      <linearGradient id="mailGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#10B981"/>
        <stop offset="100%" stop-color="#34D399"/>
      </linearGradient>
    </defs>
    <ellipse cx="70" cy="60" rx="40" ry="15" fill="url(#dbGrad)" opacity="0.9"/>
    <rect x="30" y="60" width="80" height="60" fill="url(#dbGrad)" opacity="0.3"/>
    <ellipse cx="70" cy="120" rx="40" ry="15" fill="url(#dbGrad)" opacity="0.9"/>
    <rect x="160" y="50" width="120" height="100" rx="6" fill="url(#sheetGrad)" opacity="0.9"/>
    <line x1="170" y1="70" x2="270" y2="70" stroke="#fff" stroke-width="2"/>
    <line x1="170" y1="90" x2="270" y2="90" stroke="#fff" stroke-width="2"/>
    <line x1="170" y1="110" x2="270" y2="110" stroke="#fff" stroke-width="2"/>
    <line x1="170" y1="130" x2="270" y2="130" stroke="#fff" stroke-width="2"/>
    <rect x="300" y="70" width="60" height="40" rx="4" fill="url(#mailGrad)" opacity="0.9"/>
    <polyline points="300,70 330,90 360,70" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="300" y1="70" x2="360" y2="70" stroke="#fff" stroke-width="2"/>
    <path d="M110,90 C140,90 180,80 190,90" stroke="#3B82F6" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#3B82F6"/>
      </marker>
    </defs>
  </svg>
---

# [Report & Send Mail](https://github.com/BoraYlmz/Report-and-Send-Mail)
## Dil Seçenekleri / Language Options:
- [Türkçe](#tr)
- [English](#en)

<hr>

## <a id="tr"></a>Program Özeti:
Bu program, kullanıcıların ihtiyaçlarına göre belirlenen şablonlar üzerinden filtreli verileri raporlama ve e-posta yoluyla göndermeyi sağlayan bir sistemdir. Şu anlık, iki farklı raporlama modülü ve şablon üzerinden çalışmaktadır. Program, sürekli çalışmasını gerektirmeyen ancak her gün bir kez çalıştırılması gereken bir yapıya sahiptir. Bu nedenle, Windows Görev Zamanlayıcı'ya eklenerek belirli zamanlarda çalışması sağlanmalıdır. Kullanıcılar raporları, filtreleri ve hedef kişileri belirleyerek e-posta yoluyla ilgili kişilere iletebilirler.

---

## 1. Fark Raporlama:
Bu modül, veritabanındaki tablolarla ilişkilendirilmiş belirli sütunlarda meydana gelen değişiklikleri takip eder. Belirtilen sütunlar ve anahtarlar üzerinden yapılan karşılaştırmalar, veritabanındaki değişimleri analiz eder. Haftanın başında önceki hafta verisi sıfırlanır ve yeni veri ile karşılaştırılır. Bu işlem veri kaybını tespit etmek ve değişikliklere hızlıca tepki vermek için kullanılır. Kodlar, önemli üç sütunun kontrolünü ve bir "uniq" anahtarın doğruluğunu yapar.

Program, bir gün önceki alınan yedeği kullanarak güncel verilerle karşılaştırma yapar. Farklılıklar tespit edildikten sonra, raporlar günlük olarak kaydedilir ve kullanıcının belirlediği filtrelerle bu veriler hafızada saklanır. Ardından, Send Mail modülü devreye girerek verileri Excel formatına dönüştürür ve hedeflenen kişilere e-posta gönderir.

---

## 2. Max Satılabilir Raporu:
Bu modül, belirli bir üründeki maksimum satılabilirlik değerindeki değişimleri takip eder. Bu tür değişiklikler, ilgili kişilere filtreli verilerle raporlanır. Bu sayede, manuel kontrol gereksinimi ortadan kaldırılır ve hızlı reaksiyon sağlanır. Modül, yedek alınmış verilerle güncel verileri karşılaştırarak bir pivot tablosu oluşturur. Bu tablo üzerinden analizler yaparak farkları raporlar. 

Oluşturulan rapordan sonra, filtreli veriler hedeflenen kişilerle paylaşılmak üzere hafızada saklanır ve Send Mail modülü ile Excel dosyası olarak e-posta ile gönderilir.

---

## Rapor UI (Kullanıcı Arayüzü):
Bu, kullanıcıların önceki iki modüle ilişkin raporlama görevlerini ve kişisel ayarlarını yönetebileceği bir arayüzdür. Kullanıcılar, hangi günlerde raporların gönderileceği, hangi kişilere filtreli verilerin gönderileceği gibi bilgileri girer ve bu veriler `reports.json` dosyasına kaydedilir. Şu anda, arayüzde mevcut e-posta görevlerini silmek için gereken menü eksiktir. Program, ihtiyaçlarım doğrultusunda güncellenmeye devam edecektir ve arayüze, ilerleyen zamanlarda programlı e-posta silme ve diğer raporlama araçları için ek özellikler eklenmesi planlanmaktadır.

---

## Send Mail (E-posta Gönderme):
Send Mail modülü, raporlama programlarından alınan filtreli verileri hafızadan alır, şablona yerleştirir ve belirlenen kişilere e-posta gönderir. Tüm mailler gönderildikten sonra, yüklenmeyen yedek alma kodu çalıştırılır.

---

## Kullanıcıya Yönelik Çalışma Prensibi:
- **Fark Raporlama:** Günlük veri karşılaştırması yapılır, farklar tespit edilip raporlanır.
- **Max Satılabilir Raporu:** Günlük olarak ürünlerin maksimum satılabilirlik değişiklikleri izlenir ve hızlı bir şekilde ilgili kişilere raporlanır.
- **Rapor UI:** Kullanıcılar raporlama işlemlerini kolayca yönetebilir, e-posta gönderim programlarını ayarlayabilirler.
- **Send Mail:** Filtreli veriler şablona yerleştirilip ilgili kişilere e-posta ile gönderilir, tüm işlemler tamamlandıktan sonra yedek alınır.

---

<hr>

# <a id="en"></a> Report & Send Mail 

## Program Overview:
This program is designed to report filtered data via email based on templates chosen by the user. It currently works with two different reporting modules and templates. The program does not need to be continuously running but should be executed once a day. Therefore, it should be added to the Windows Task Scheduler to run at specific times. Users can define the reports, filters, and target recipients and send the reports via email.

---

## 1. Difference Reporting:
This module tracks changes in specific columns related to tables in the database. The comparisons made on the specified columns and keys analyze changes in the database. At the start of the week, previous week's data is reset and compared with the new data. This process helps to detect data loss and respond to changes quickly. The code checks three important columns and the validity of one unique key.

The program compares current data with backups from the previous day. Once differences are detected, the reports are saved daily, and the filtered data is stored in memory. Afterward, the Send Mail module is activated to convert the data into Excel format and sends it to the targeted recipients.

---

## 2. Max Sellable Report:
This module tracks changes in the maximum sellable value of a product. Such changes are reported with filtered data to the relevant people. This eliminates the need for manual monitoring and enables faster responses. The module compares the current data with the backup data to create a pivot table. The differences in the pivot table are analyzed and reported.

After the report is generated, the filtered data is saved in memory to be shared with the relevant persons, and the Send Mail module sends it as an Excel file via email.

---

## Report UI (User Interface):
This is an interface where users can manage reporting tasks and personal settings related to the two previous modules. Users enter information such as which days the reports should be sent, to whom the filtered data should be sent, and this data is saved in the `reports.json` file. Currently, there is no menu for deleting existing email tasks in the interface. The program will continue to be updated according to my needs, and additional features like programmatic email deletion and other reporting tools will be added to the interface in the future.

---

## Send Mail:
The Send Mail module retrieves the filtered data from memory, places it into the template, and sends it to the specified recipients. After all emails are sent, a backup script (which is not included in the repository) is executed.

---

## Working Principle for the User:
- **Difference Reporting:** Daily data comparisons are made, differences are detected, and reports are generated.
- **Max Sellable Report:** Changes in the maximum sellable value of products are tracked daily and reported to the relevant persons quickly.
- **Report UI:** Users can easily manage reporting tasks, set up email scheduling, and configure other report settings.
- **Send Mail:** Filtered data is placed into a template and sent to relevant recipients via email. After all emails are sent, a backup is created.

---
