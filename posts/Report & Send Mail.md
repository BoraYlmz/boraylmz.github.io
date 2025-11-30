---
title: "Report & Send Mail"
category: "Proje"
summary: "Veritabanındaki istediğimiz koşullarda ayarlanan zaman ve kişilere istenilen formatta hafızadan direkt mail gönderen bir raporlama aracıdır."
date: "28.11.2024"
image: |
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

<div class="lang-block" data-lang="tr">

# <span>Report & Send Mail</span>

<div class="github-link">
    <div>
        <strong>GitHub Repository</strong><br>
        <span>Projenin kaynak kodlarına ulaşın</span>
    </div>
    <a href="https://github.com/BoraYlmz/Report-and-Send-Mail" target="_blank">GitHub</a>
</div>

<div class="warning-msg">
  <strong>⚠ Proje Durumu:</strong> Bu proje durdurulmuş olup bazı bölümler eksik veya tamamlanmamıştır.
</div>

Bu program, kullanıcıların ihtiyaçlarına göre belirlenen şablonlar üzerinden filtreli verileri raporlama ve e-posta yoluyla göndermeyi sağlayan bir sistemdir. Şu anlık, iki farklı raporlama modülü ve şablon üzerinden çalışmaktadır. Program, sürekli çalışmasını gerektirmeyen ancak her gün bir kez çalıştırılması gereken bir yapıya sahiptir. Bu nedenle, Windows Görev Zamanlayıcı'ya eklenerek belirli zamanlarda çalışması sağlanmalıdır. Kullanıcılar raporları, filtreleri ve hedef kişileri belirleyerek e-posta yoluyla ilgili kişilere iletebilirler.

---

## 1. Fark Raporlama
Veritabanındaki tablolarla ilişkilendirilmiş belirli sütunlarda meydana gelen değişiklikleri takip eder. Haftalık karşılaştırmalar yapılır ve farklar raporlanır. Send Mail modülüyle Excel formatında ilgili kişilere iletilir.

---

## 2. Max Satılabilir Raporu
Belirli ürünlerin maksimum satılabilirlik değerindeki değişiklikler takip edilir, raporlanır ve filtreli verilerle e-posta gönderilir.

---

## Rapor UI (Kullanıcı Arayüzü)
Kullanıcılar raporlama görevlerini yönetebilir, hangi günlerde rapor gönderileceğini ve hedef kişileri belirleyebilir. Arayüzde mevcut e-posta görevlerini silme menüsü henüz eklenmemiştir. Gelecekte programlı silme ve ek özellikler planlanmaktadır.

---

## Send Mail (E-posta Gönderme)
Filtreli veriler şablona yerleştirilir ve hedef kişilere e-posta ile gönderilir. Gönderim sonrası yedek alınır.

</div>

<div class="lang-block" data-lang="en">

# <span>Report & Send Mail</span>

<div class="github-link">
    <div>
        <strong>GitHub Repository</strong><br>
        <span>Access the source codes of the project</span>
    </div>
    <a href="https://github.com/BoraYlmz/Report-and-Send-Mail" target="_blank">GitHub</a>
</div>

<div class="warning-msg">
  <strong>⚠ Project Status:</strong> This project has been stopped and some sections are missing or incomplete.
</div>

<div class="info-msg">
  <strong>ℹ Notice:</strong> This English section was generated using AI translation and may include small errors.
</div>

This program allows users to report filtered data based on templates and send them via email. Currently, it works with two reporting modules. The program does not need to run continuously but should be executed once a day via Windows Task Scheduler.

---

## 1. Difference Reporting
Tracks changes in specific columns of database tables, compares weekly data, and generates reports sent via the Send Mail module in Excel format.

---

## 2. Max Sellable Report
Tracks changes in maximum sellable values of products, reports differences, and sends filtered data via email.

---

## Report UI
Users can manage reporting tasks, schedule report days, and specify recipients. Currently, no menu exists for deleting email tasks. Future updates will include automated deletion and additional features.

---

## Send Mail
Filtered data is placed into a template and sent to target recipients. Backup is performed after sending.

</div>
