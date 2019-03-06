---
title: \\darkness
date: "2019-03-05T09:43:55.169Z"
template: "post"
draft: false
slug: "/posts/data-mining-UB/"
category: "talk"
tags:
  - "coding"
  - "python"
  - "data-science"
  - "talk"
description: "data mining workshop di Universitas Brawijaya"
---

> if you can't explain something in simple terms, you don't understand it. 

![ub means universitas brawijaya, loved the unbraw abbreviation tho.](https://i.imgur.com/bffsi4O.png)

### update v1
[this kind of workshop ternyata takes several days, bahkan sampe dibikin bootcamp. i cramp it into 3 hours.](https://github.com/thisismetis/dsp) approach nya sangat noob proof. kalo ada kesempatan lagi i'll definitely use this as a precourse material. 

# kok bisa
awalnya gak nyangka diajak buat ikutan seminar. Diajak ikutan berarti asumsi awal adalah **mengikuti** seminar tentang data mining, bukan mengisi kan, karena dirasa saya masih perlu banyak belajar jadi saya memutuskan secara langsung gak pake mikir buat ikutan. Ternyata *tidak*
disini diajak ikutan adalah menjadi pembicara. Awal ngeh itu ketika disuruh bikin penjelasaan algoritma SVM, Kmeans dan heiarchical. Ketika ditanya buat apa, ternyata disuruh ngisi. 

<small> **hint #0**. cara menaklukan hewan buas seperti mengimplementasikan dan membuat sebuah algoritma ternyata berbeda dengan menaklukan orang-orang yang ingin belajar.</small>

<small>**hint #1**. it's not something that i really enjoy. it's like debugging an app, but instead of one app, you're debugging a whole class of errors. Like playing chess, but instead of 1 opponent, you're actually playing with several people at the same time. </small>

<small>**TLDR;** simpler learning material, approach sesuai dengan background dari pesertanya or having a pre-course material given before the workshop, and having an evalution metrics whatever metric type.</small>
# lesson(s) given
of course python. pake sklearn, scipy, pandas dan numpy. oh matplotlib juga. should've gone with seaborn tho. 

super basic sih, mainly about: 
- machine learning algorithms
  - clustering: kmeans, agglomerative, dendogram
  - classification: svm with linear, rbf and polynomial kernels
- exploratory data analysis
  - making sense of data with pearson coefficient
  - mencari korelasi antar feature di kolom
- data visualization
  - basics of matplotlib. 

disini sebenernya lebih kepada showcasing ketimbang mengajakarkan cara membuatnya. dimana implementasi algoritma dijelaskan dengan lancar tapi memvisualisasikannya agak "cacat" karena tidak terbiasa mengotak-atik sebuah visualisasi. i should've go with seaborn. but i went with matplotlib instead (i'm assuming they are aware of matplotlib because it's literally derived from the matlab plot library. *they don't.*)

oh iya sama beberapa subtle "hints" of github. dimana resource sharing disini tinggal ambil dari github. 

# lesson(s) learned
### should have gone with more structurized material 
  bukan beberapa ide yang "mashed together" menjadi pembelajaran, ternyata gak belajar. malah error debugging.

### should've gone with the handout type. 
you can read the comments, people without any programming background find it hard to see comments in code. use jupyternotebook markdown instead. have some latex to type the equations. (*i did [this](https://github.com/svmihar/seminar-ub/blob/master/Seminar Data Mining Matematika UB.ipynb), but still hard to grasp i guess.*)

### longer. 
coding workshop is not mere 3-4 hours of talking. it's mainly error debugging. saya berdiri di depan dengan asumsi semua sudah nyaman dengan python. ternyata tidak. yang terjadi pada saat itu adalah saya ngetik sendiri yang lainnya hanya mereka karena saya terlalu cepat. 

### make clear boilerplates (noob proof).
boilerplates diciptakan untuk mempercepat proses yang redundant. bukan menciptakan kebingungan yang lebih. sebebernya boilerplate nya sudah ada hanya saja akan tetapi dataset yang disediakan sudah terlalu advanced untuk membuat proof of concept. 

### clear backgoround about the peserta.
cukup menjadi masalah karena boilerplate yang disediakan bukan untuk non coder. jadinya ya berantakan. akhirnya malah saya sendiri yang asik di depan sementara pesertanya hanya planga plongo tidak mengerti apa yang terjadi pada datanya. 
bahkan melihat `pip install sklearn`  saja sudah merasa menjadi programmer. 
okay welcome to the darkside then i guess. 

### more practice on public speaking.
seharusnya sudah tau di depan itu mau ngobrol tentang apa. terlalu advanced topiknya? jadikan diskusi. terlalu gampang topik di depan? jadikan game. skill inilah sebenernya yang bisa "adapt vastly" kepada penontonnya. memang si speaker yang memandu si penontonnya tapi penontonnya harus tau tujuan akhir bagaimanapun proses menuju tujuan akhirnya. 

### have some music. 
it's not a damn test. relax. buat beberapa games untuk memecah suasana, memperkecil jarak dari penonton ke pembicara.  

![](https://i.imgur.com/7JBB38F.png)

# improvements
### suitable internet connection 
i know it's indonesia assume bad internet at all times. but come on. at this scale the facilitator should've had priavte fast speed internet connection. you think datasets and api calls are small bandwith stuff? 

### pre course material. 
have the peserta learned up, jadi ketika diterangkan bisa lebih ngeh dengan apa yang tidak dimengerti dan mengerti apa yang tidak diketahui. 

## pre-test-post-test cycle. 
biar tau apakah ada improvement sebelum dan sesudah workshop. 

## longer. 
seriously. 3-4 hours of pengantar data science itu tidak cukup. i'm trying bootcamp style. 

# hotel 
the guest house is nice tho. i guess calling it a hotel itu lebih pantes. but... 

![](https://i.imgur.com/xuTfB2X.png)
<small>PLEASE INSTALL A GOOD WIFI. YOU'RE NOT A HOTEL UNLESS YOU HAD A GOOD WIFI</small>    

# parting words 
i guess the quote by richard feynman above summarizes it. 

