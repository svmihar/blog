---
title: sebuah website kp
date: "2018-08-29T10:30:38.000Z"
template: "post"
draft: false
slug: "/posts/website-kp/"
category: "dev"
tags:
  - "javascript"
  - "Web Development"
description: "sebuah pengalaman webdev yang kurang menyenangkan yang seru"
---
last day of magang. dapat banyak, jauh lebih banyak daripada kuliah selama ini. (mainly because kebanyakan yang dipelajari di kp ini searah dengan cita-cita), seneng sih, tapi sedih juga. Schrödinger's emotion. wkwk. 
today i started to run again, setelah 8 hari istirahat. serius istirahat karena saya memutuskan untuk lari 17km, literally running. 

#### peduli lagi?
awalnya dapet ide ini karena banyaknya 'impression' di akun [instagram angkatan](http://instagram.com/doh.main/) ketika ditanya mengenai kp, semua berawal dari rasa penasaran kira2 yang lain kp-nya sesusah ini gak ya, apa hanya yang menderita ketika kp. ternyata enggak. semuanya menderita. semunya gak ngerti. semuanya berbeda dari materi kuliah. dari sini saya sangat senang sekali mendapat feedback dari temen2 seangkatan sendiri tentang bagaimana mereka menyeimbangkan work-life balance, pengalaman unik yang cukup lucu dan banyaknya insight dari data yang mereka berikan pada saya. 

Dari sini timbul rasa ingin ngeshare data ini kepada seluruh angkatan karena yah apa gunanya kalau itu cuman bisa menjadi eye candy buat saya. Karena data ini hanya bisa diliat oleh admin-nya akun Instagram [doh.main](http://instagram.com/doh.main/). Semacam sharing the happiness wkwk, tapi gak sepenuhnya happiness sih, semacam tertawa di atas penderitaan type of thing. Selain itu, saya sedang belajar full-stacknya JavaScript, otomatis kenapa gak sekalian aja digabung jadi satu. 

#### problems and set backs
Awalnya pengen mengumpulkan hasil dari Q&A yang tiap minggu saya tanyakan di akun [instagramnya](http://instagram.com/doh.main) tapi data ini terlalu variatif dan gak ada polanya sama sekali. jadi susah kalo dibikin sebuah strutur website, kecuali kalo dibikin per card, dan pertanyaan nya diisi dalam card tersebut. data ini super duper subjektif tapi, hanya bisa dialami ketika waktu dan orangnya tepat saja. jadi kalau dibuat website buat apa opini orang2 ini di share, untuk tawa dan canda? 

Waktu. ah klise ya. setiap manusia pasti trouble dengan pembagian waktu. simplenya (walaupun gak simple), urusan waktu hanyalah masalah prioritas. menimbang mana yang lebih penting dari hal lainnya. pilih ini, pilih itu, milih yang mana?

FRS-an! sebenernya ini adalah subset dari masalah waktu, tapi FRS-an adalah subset yang paling mempengaruhi sepertinya. Bagi orang lain FRS-an pasti capek nunggu kapan dibuka, lalu capek refresh pagenya agar dapet kelasnya, dan capek nyari dosen buat persetujuannya. Bagi saya sedikit berbeda, sebelum FRS-an saya pasti bikin crawler, apa itu? semacam auto klik pake python tapi kliknya nyari "id" dengan querySelector. intinya smart auto click. repot ketika sebelum FRS-an jadinya, nentuin parameter kelas (tiap semester beda. anying.). tapi repotnya itu doang. setidaknya gak perlu ruwet dengan dosen (puji Tuhan dipercaya lebih untuk setujuin sendiri) penasaran? [beautifulsoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/). you can thank me later. 

Ekivalensi. tiap 4 tahun sekali, kampus pasti harus update ilmu dong. nah angkatan saya kena tuh. banyak mata kuliah-mata kuliah tahun lalu harus di "transpile" menjadi mata kuliah 2018. Ini repot di urusan dosen, karena harus ijinlah, harus tanda tangan ini lah itunya, kasih materai ini lah. Untungnya saya banyak dibantu oleh teman angkatan (masih kp di jakarta, sementara ekivalensi di surabaya). Tuh kan munculin subsetnya waktu lagi. krusyel soalnya 🙃 

Kalau disimpulkan memang hanya masalah prioritas ya. wkwk. 

> solusyen dek, butuhnya solusyen, bukan alesyan.


siap kak. 
yang pertama, otomatis bikin struktur yang rigid dulu, konsisten tiap page. caranya? ya gampang kasih aja form and let them go nuts. isi dengan pertanyaan yang relevan dengan kp (ya iyalah), kaitkan dengan apa yang pernah ditanyakan di akun instagramnya [doh.main](http://instagram.com/doh.main) biar yang ngisi lebih mudah untuk ngisi dan ngerelat, gak perlu mikir berkali-kali. Per form ini tak bagi beberapa page, totalnya ada 9 page. Nah per page ini adalah satu heading dari artikel yang akan dibuat. jadi bahas stacknya dulu biar seru

### STACK 

#### front

<img src="/img/designawal.png" class="center smaller"/>

**index**    
sebenernya ini tergabung antara: post dan aboutnya, karena SPA yo. (single page application, minimalism and performance reasons.)

**post**    
tiap post akan ada artikel di dalemnya menjelaskan, nama perusahaan, alamat, dapet tugas apa aja, vibes kantornya, bagaimana masuknya, dan of course kontak HRDnya. Tambah foto tipis2 lah ya karena picture speaks louder than words.  

**about**    
disini, about hanyalah semacam narcissistic bull crap untuk ngelink ke seluruh sosmed/porto (gotta pay some bills yo.) dan bagaimana buatnya dari awal. briefly doang tapi.    

disini saya pake *Gatsby.js*, react static generator. asik banget pake ini, simple dan gak ribet kayak Jekyll. Awalnya styling pengen pake SASS sekalian nyoba-nyoba preprocessor ya kan, eh tapi ketemu sama mbak *Bulma.js* preprocessornya CSS tapi pake bahasa objectnya javascript dan dapet template juga. Disini pake CMS namanya *prismic.io*, tolong jangan hina saya dulu ini ada alasannya. karena ingin ambil data dari google spreadsheet lebih gampang ngequery pake GraphQL dulu ke Prismic, nanti prismic yang ngambil dari google spreadsheetnya yang di generate sama google form. Jangan pusing. pegangan. baca ulang. googling. tanya. Disini terjadi semi otomasi, jadi setelah ngisi Google Form bakal langsung di generate di prismic.io pake JSON editor, sambungin per row ke dalam satu paragrafnya, dan generate heading juga dari prismic. Jadi tinggal ngecheck redaksi dan bagaimana si pengisi "bercerita" aja. Gak repot ngedit ulang. Sayangnya gak bisa ngequery image, karena by Google API banyak ngelimit query buat image di Google Drive-nya (baca: gak bisa dapet .jpg di akhir link), cuman ya gpp lah nanti, kasih canned message aja ke emailnya pake python, toh yang ngisi paling <50 orang  [#pythonmasterrace](https://www.instagram.com/explore/tags/python/), awalnya mikir pake `gatsby-transformer-remark` supaya tinggal copas aja dari spreadsheet, cuman karena masalah waktu, kan sudah ada teknologi yang namanya CMS, jadinya ya kenapa tidak. Boilerplate bruh. 
 TL;DR: 
- `gatsby.js` 
- `bulma.js ` buat styling
- prismic.io buat fetch data dari Google Spreadsheet, sama bikin markdown-nya + ngejadiin artikelnya
- `GraphQL` buat saling mengisi antara gatsby-prismic-google spreadsheet, gak perlu ribet ngetik ulang
- plugin `react-spring` supaya ada animasi tipis2 🔥
- plugin `gatsby-transformer-sharp` pasti ini. wajib, kudu, mesti ada. demi image loading yang lebih cantik dan cepat. 
  
#### back-end

**serverless**    
yes. semuanya ini hanya didasar dari sebuah csv yang di buat otomatis oleh google form, pake next.js buat ambilnya, query dari prismic buat bikin markdownnya, terus kasih api key aja deh ke gatsby buat generate per postnya. 


> Semua ini dilakukan demi penghematan *prioritas*

ya ya ya, tau csv itu gak efisien kalo banyak datanya karena kalo input satu query doang harus search seluruhnya, sekali lagi. ini web diskala <50 orang yang input. Kalau masalah tamu yang mengunjungi mah tergantung CDN-nya aja (*netlify ftw)*.

Web ini di hosting pake `gh-pages` dan pake netlify buat CDN-nya + prismic buat content managementnya. gak perlu server-an deh

### publikasi dan insecurities-nya.

sejujurnya gak berharap banyak dari project ini dapat membantu dengan baik dalam sentralisasi informasi tapi setidaknya it's out there. Memang gak perfect banyak bolong2 dan snaky codes 🐍 err'where. At least it's out there. Jujur berharap para orang-orang yang akan magang bisa punya gambaran kecil tentang apa yang akan dilakukan ketika nanti KP dan tidak memalukan almamater ya di kantor. 

inilah yang saya rasakan ketika awal KP, the infamous **impostor syndrome**. cuy anak matematika tau apa tentang web service selama ini yang diajarin cuman aljabar aljabar, integral dan algoritma indah buat competitive programming. akhirnya dikorbankanlah jam tidur dan weekend guna catching up ~~with the kardashians~~ with all these new languages. Dude in the first week I don't even feel like I'm coding. I feel like a fraud. Seumur2 selalu pede dengan skill sendiri masuk kantor profesional begini langsung insecure. tau ini gak? nggak. tau itu gak? nggak. terus yang kamu tau apa? 😢 
<img src="/img/impostor.png" class="center smaller"/> 
tapi disini saya sadar, ada langit di atas langit. kalo mau sombong balik aja kuliah sana, saya juga banyak dibantu sama bukunya mas John Sonmez, [The Complete Software Developer's Career Guide: How to Learn Your Next Programming Language, Ace Your Programming Interview, and Land the Coding Job of Your Dreams](https://books.google.com.sg/books/about/The_Complete_Software_Developer_s_Career.html?id=U6GFswEACAAJ&source=kp_cover&redir_esc=y). Bukunya cocok banget buat newbie sama programmer-programmer yang masih mencari jati diri, tapi gak cocok kalau kamu sudah punya technology stack yang tetap, atau sudah pernah develop aplikasi professionally. Serta sadar kalo gap antara apa yang dipelajari pada saat kuliah sama apa yang terjadi di lapangan itu langit dan bumi. Lu bikin tugas untuk selesai, lu "ngehack" tugas buat selesai. Di kantor? bayangin codingan lu itu akan dipake nasabah yang notabene jumlahnya 5000 request per detik. Lu hack sana sini codingan lu? siap-siap gak pernah tidur aja buat terima complain. 
Belum lagi tentang sedikitnya tools yang diketahui seperti VCS(version control software). Mana saya tau cara ngepush codingan bagaimana, mana saya peduli dengan version history codingan saya ketika kuliah. toh sekali jalan, output ada, prosesnya bener ya sikat presentasi + laporan. Disini bikin codingan seperti kuliah alamat dimarahin dan dimaki habis2an. literally bukan makian yang pake profanity tapi dasar-dasar prinsip hidup sebagai saintis lah yang ditanyakan. damn. Belum lagi IDE yang sebenernya mumpuni tapi ternyata ada yang lebih cepat dan efisien. Selain tools juga sedikit tau tentang Software Development Life cycle, sebenernya ini ada matkulnya cuman agak gak beres aja materinya jadi ya banyak autopilot di kelas. Tapi bener2 dipake ketika kerja. Tau lah ya SDLC, planning > implementation > testing > documentation > deployment > maintaining? ternyata gak seseimple itu. tiap iterasi ada nerakanya sendiri dan itu gak hanya satu kali siklus tapi beberapa siklus sekaligus karena ngehandle lebih dari 1 project. 

Move on dari rant di atas, buku yang sangat membimbing saya untuk melangkah adalah [Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X), buku yang teknis sekali dan merupakan buku yang cukup terkenal di kalangan programmer karena intuitif banget dalam membimbing programmer-programmer yang udah tau nih jalananya kemana tapi masih sulit menelusuri jalan tersebut, banyak banget dibahas tentang paradigma-paradigma programmingnya, cara mikir dan menyelesaikan bug. oke jadi book review ya. baca aja deh apalagi kalo sedang burn out jadi programmer. this book shed me a light when I need it. 

yah publikasinya, standar sih bakal buat post di instagram buat umumin sama paling LINE Post aja biar bisa di share di chat-chat gitu. standar lah nothing awesome

### improvements
seharusnya bisa di hosting di google firebase. biar gak kemana-mana back end-nya. jauh lebih simple pake firebase cuman yah itu semi-semi gak sempet kalo harus belajar firebase lagi. udah keburu nyaman sama github pages. 

feedback system. disini saya bener-bener lupa bikin feedback, entah komen disqus lah atau sekedar contact page. semuanya statis aja. seharusnya ini bisa diskusi dua arah. maybe saya suruh buat kirim email atau chat telegram aja kali ya kalo mau nanya-nanya. hehehe. [#antisosial ](https://www.instagram.com/explore/tags/antisosial/)

> next kalau bikin project iseng seperti ini harus bisa kolaborasi ya, tapi bukan buat tenar tapi belajar kerja sama. seusatu yang masih asing dari hidup saya.  

semisal ada yang pengen share pengalaman impostor syndrome-nya nih[ silahkan lo ](https://t.me/svmihar)jangan sungkan 

link website kp-nya nyusul ya masih ada finalisasi draft konten nih hehe. 


