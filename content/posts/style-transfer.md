---
title: 5 second style copy
date: "2019-11-18T21:41:32.169Z"
template: "post"
draft: false
slug: "/posts/style-transfer/"
category: "deep-learning"
tags:
  - "deep learning"
  - "pytorch"
  - "python"
description: "drawing for commission? hahahahahahhahahahahahh come here lemme transfer your style using vgg19"
---

> wkwk, ikut conference itu feeding ego doang, existentialism


> ah masa

# neural style transfer, a pycon story.

## just why? 

well,  i'm in a rut of doing nlp stuff, finetuning parameters, climbing the hills and valleys of errors, I needed ~~pelarian~~ something to do without all these metrics. Looking at the empty walls of my rooms, I decided to search for posters to stick on the walls, making my room much *more enjoyable to look at.* 

searching for the fittest within my preferences takes forever to finish, I constraint myself not to do manual design just ol' plain seeing and printing, and this print is only and gonna be the only one in the world. I want it to be *unique and easy*! This narrows to:
- band posters: meh, too mainstream, it'll take work to make it "my style"
- film posters: i am too volatile to love one particular movies, thus only got the budget for printing one.
- quote posters: you got to be kidding me.
- motivational quote posters: 🙃
- ~~dian sastro poster~~
So I still got some viable solutions like: 

- print a film photograph
    - cost more money, *maklum anak kosan*
- edit a photo to look like it was taken from an analog film camera
    - this is basically a filter.

from the filter solution, this looks like the one. I was kinda happy but not satisfied because I'm not a very skilled photographer and not many of my photos amazes me. So I decided to have a different approach with a 3D render, recreating one of my photograph.

Long story short it is too much of a hassle. Props to you all 3D digital artist with all those octane rendering. 

Then I saw a tweet from [@vngc](https://twitter.com/vngnc) 
<blockquote class="twitter-tweet" data-lang="id"><p lang="en" dir="ltr">TGS 2018 Death Stranding trailer processed through style transfer utilizing the convolutional neural network. Style referenced from the art of Moebius. This current iteration still failed to pick up tiny details and draw finer lines. <a href="https://t.co/LM8PfFMT6F">pic.twitter.com/LM8PfFMT6F</a></p>&mdash; izzy (@vngnc) <a href="https://twitter.com/vngnc/status/1108948246703964161?ref_src=twsrc%5Etfw">22 Maret 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

***STYLE TRANSFER!*** - this is what I am looking for. 

This got me hooked! well I can recreate those stuff, it's only a CNN on a picture!  I just needed a painting style and apply it to the photograph of my choosing! 

This is surely a "filter" on steroids.

## how? 
![](https://i.imgur.com/s7WKTmA.png)
so how does one copy a pattern of brush strokes, the pressure of the brushes to the canvas and the beautiful colors from the original paintings? 

let me tell you: edges.

edges is what makes the subject different from the backgorund, contrast in between edges is what defines one brush stroke to the other. Edges is what  It's the edges that we are looking to copy! So how does one copy "an edge" to other image? 

now by getting the edges, recreating the edges how does a human can copy a style? well you don't we leave it to the computationally superior guys to simulate it. the computers. well the computers don't know what's an edge is and what's a picture, what's a pattern, so  they needed a good "kinda look alike edges" from the human world to the computer's world. How? Representation! 

To obtain a representation of a style of an image, how does one define an edge? an **edge is what makes a texture**.  The information, or the "edges" inside the texture is what we're trying to look for exactly. Then by representing it as an array a computer can easily simulate it in a scale that human can't.

But what does the computer sees exactly? **pixel values***.*

Because an image is just a bunch of bunch of bunch of numbers in an arrays with the value of red, green and blue values (r,g,b,a). 

But, getting the all this texture information how to distinguish between the texture that we are trying to capture and the wholesome arrangement of the image? we're trying to copy the brush strokes not the subject of the image right?  

The representation of the styles is what we will store to an n^th dimension space. Therefore to capture its textual information, this "space" is where the VGG19 comes in. 

First of all, the layers in VGG19 will try to search the "correlation"  between result of the layers.

Then it will try to deconstruct the input image by downsampling it.

Finally the resulting correlation feature space or the texture we're trying to copy will match the style to the downsampled image we're trying to paste our texture to. 

Both of these processes are what we're trying to create resulting a new texture information to the input image, and discarding the arrangement of the pixel from the styled image.

**That my friend, is what we're looking for. The separation of content and style representation.**
![](https://i.imgur.com/GSh8hqI.png)

## optimizing the loss
i know making something good means having a good metric to compare to, but this metric we'll be using is actually the metric that measures the distance between the generated image, to the content and style image. 
How do you measure the distance between images? gram matrix. 
Before going to the gram matrix we need to clarify what are the losses 
- content loss: means the difference between the "content" in the content image to the generated image.
- style loss: means the difference between the "style" in the style image to the generated image. 
How do you measure "content" and "style"? like all mathematicians, to measure a distance we need two points to measure on. We map the content image to a hilbert space using the VGG19's feature layer, making it a vector, then map the style image and generated image also. These vectors can be measured from the distances, seeing it as how far is it different from each other. 
The gram matrix is the result of the inner product of the vectors. This actually shows the spatial correlation between the images. Think of it as a historgram. It doesn't measure specific pixel to pixel or a location of the images. It calculate only the feature distribution that we wanted. 

## feature extractors x transfer learning. 
My favorite. Transfer learning is used to extract what you call a texture information on an image. How do you extract it is by mapping the "patterns" of an image to a feature layer. The Think of this transfer learning as a baseline of our model, the model itself (VGG19), is a CNN architecture which used 15 million images from the ImageNet dataset, and trained on a 138 million parameters that uses 5 convolutional layers.
![](https://i.imgur.com/PGhEo49.png)
By using VGG's pretrained models, our model doesn't need to learn from scratch and saving a lot of time and space, by only fine tuning the top layers, on what we wanted it to output (generated image). Both weight and biases from the pretrained model is what the feature extractors are. Diffrentiating which is which, edges, patterns, textures, brush strokes, colors, etc. 

## implementation
using pytorch: 
- generated a white noise for the generated image
- adding style and content from the extracted features from both the content and style image
- backprop and gradient descent step optimized using L-BFGS to find the loss function score
- iterate till satisified with result
The L-BFGS is just a work around on a smaller GPU capability. 
My implementation on this is actually stack 10 scripts on each other, changing its initiation image to the output image from the previous script output. 
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3ef27da-6045-4423-b075-e7b610d6fe8d/Webp.net-gifmaker_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45MFQ2KPGT%2F20191118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191118T144035Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICXiHyqTkCkgy1tK6i6txcrE6KBCMAmSmhyS96U4a%2FBgAiAIulNw2KS0sH1c5ioD82SRxN3qH8tnlqsVqhqwSJQdtSrbAgin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMNNJGBink4p7xxf8zKq8CeeKC448w%2BySX1dNfWktn1PiY%2BwAulJ5%2F9WHnb%2BQDj63xJsNRBGTn93EabH2HatfvhGVSEPLIcXr%2BB24m7hhO9jgGJ7deRYgx4kM39peqd6JhCtvS99BqjxDz15G33jZX8MMhe2cfBjfYtjSLBA1XJIN0twArWtYuhT9S%2B6XvGvwVQuFBF%2FqBXnGMEFd6HT6IJtPPg7lhkKre8GK%2Bvw0gQpVDS535ONjJ6N37Y7hLOwKBkOAKcFWArUU1TSr7%2FZpx727E2iNtqvA2T4q1Pe9Y8YCRvt9tNkQEm%2BW7vBVN906eXNuzQ5%2FjHYaUUWEhthQ5Omu5LG2scLCjZfMeDqcHoXJ%2FFPTOJzYuqmWXjAr9RIczUmX2bWRncnYdIkHjTQKBSIbfcf1bm5AGnZQKxOzxMIjJyu4FOs4C9WdGzWJyxfw3rPxy6Xbc1%2BVxyEXIJq8wvhhMBs9l%2FpDeTjU3pOQawrGQjCEfKjnzH%2BZcTIWx52UULz79dopcUslijcKDsEaAV9cO9vrtXQRnx2dTUX05YTP%2BHe0Vt6vKMiEXruPTEusFq2kMGbX54hfWDA9gA73dNNtOcqEGxHt7vAZoKmY%2Fx6iSd%2FpzjYjSybSk2hQTAErAsQtujqlSWlCAbr90tzB14SWKnQpU1lS5%2Fgag%2F4krHWNRLAVIwHtgRchLyzmwi5moKvME%2BxfE4xCdQQgRz3lm7lnKyuH1brFD5cj%2BptSibLHGmbpc2UbSC6eLVa1A4xSH0Zu5Ey9j6CfBhTyWLqvi2SSlsoXK92KEjSGII8sOMHgM67SAyh%2F7sDpxKRhhYKlXwnIUlZ6mmqkCGs%2FzX2ItU6LWmDPrYm9%2B7j3GQLQHTtcNp93A0w%3D%3D&X-Amz-Signature=3d97fab4850d31f354d105e5e731debc09fffd42fbafaab4efd67e83fe9584ba&X-Amz-SignedHeaders=host)
to produce image, from the 10 scripts: 
- using google colab: 3045 seconds
- using gradient's p5000: 971s

## other implementation 
- maps, on maps
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/095c9971-239f-4e45-9f83-73abe98eb830/Webp.net-gifmaker.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45MFQ2KPGT%2F20191118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191118T144035Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICXiHyqTkCkgy1tK6i6txcrE6KBCMAmSmhyS96U4a%2FBgAiAIulNw2KS0sH1c5ioD82SRxN3qH8tnlqsVqhqwSJQdtSrbAgin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMNNJGBink4p7xxf8zKq8CeeKC448w%2BySX1dNfWktn1PiY%2BwAulJ5%2F9WHnb%2BQDj63xJsNRBGTn93EabH2HatfvhGVSEPLIcXr%2BB24m7hhO9jgGJ7deRYgx4kM39peqd6JhCtvS99BqjxDz15G33jZX8MMhe2cfBjfYtjSLBA1XJIN0twArWtYuhT9S%2B6XvGvwVQuFBF%2FqBXnGMEFd6HT6IJtPPg7lhkKre8GK%2Bvw0gQpVDS535ONjJ6N37Y7hLOwKBkOAKcFWArUU1TSr7%2FZpx727E2iNtqvA2T4q1Pe9Y8YCRvt9tNkQEm%2BW7vBVN906eXNuzQ5%2FjHYaUUWEhthQ5Omu5LG2scLCjZfMeDqcHoXJ%2FFPTOJzYuqmWXjAr9RIczUmX2bWRncnYdIkHjTQKBSIbfcf1bm5AGnZQKxOzxMIjJyu4FOs4C9WdGzWJyxfw3rPxy6Xbc1%2BVxyEXIJq8wvhhMBs9l%2FpDeTjU3pOQawrGQjCEfKjnzH%2BZcTIWx52UULz79dopcUslijcKDsEaAV9cO9vrtXQRnx2dTUX05YTP%2BHe0Vt6vKMiEXruPTEusFq2kMGbX54hfWDA9gA73dNNtOcqEGxHt7vAZoKmY%2Fx6iSd%2FpzjYjSybSk2hQTAErAsQtujqlSWlCAbr90tzB14SWKnQpU1lS5%2Fgag%2F4krHWNRLAVIwHtgRchLyzmwi5moKvME%2BxfE4xCdQQgRz3lm7lnKyuH1brFD5cj%2BptSibLHGmbpc2UbSC6eLVa1A4xSH0Zu5Ey9j6CfBhTyWLqvi2SSlsoXK92KEjSGII8sOMHgM67SAyh%2F7sDpxKRhhYKlXwnIUlZ6mmqkCGs%2FzX2ItU6LWmDPrYm9%2B7j3GQLQHTtcNp93A0w%3D%3D&X-Amz-Signature=cef29201f09ed983e55b717ed715d251166a5329b6b63db2e4946cd81a524cbd&X-Amz-SignedHeaders=host)
- painting on paintings
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ff9c5913-99bc-4298-b26f-595e9edaa049/Webp.net-gifmaker_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45OJPZRXQT%2F20191118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191118T144037Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7H54Vl1qISKnpnBNXScgtY8LfbqSBJhCeW8qslbLhagIhAJbdzZ9ptufxLfhgbA44Huo%2BfSyLUpF6CdfOlCQQZrmBKtsCCKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjc0NTY3MTQ5MzcwIgxTwsnTMgBYI3V6LWgqrwKbFfxojuPm%2Bu1ZgMoQfVddw5njocMEozUD%2Ftlny5zZfRpysZqgA0aT3e8Yqi6rp1fwd97e7iXf9kp3cQleFtqp3qoHzWomGjnTiCRTl5OMje2UuaYeV5agB5VG7kIEXuMudWekd8ZwKcOKBj%2FSaiU3D0hYx2I2GdS3K%2BQ7z6Rd%2BAqTZXFN%2BOhdbbI9uM2p8cVdgCr%2BhxFDdystndI%2B%2FeIwHgS1AumGmuwZaQ%2Bupz5zHB6oeCaTDA%2BrU2x%2BYR9XioK%2BhmUWq3kYGsWNv23dWJFWsFGqPJeOj%2FO5SQwEISu3P9uNlW3o6n4LtBDirzwLO0VloqEQGl50%2FnA9jg3h8cCm6Tw4G3Rs75rSdEXDOjYvEiU4Hl7t2yla%2FHOVNZdA1o%2BCS6kzE1RgnVZhJrEpgCAw26PK7gU6zAJxhWdqWL7uvkFIAkjr8LOPik4QHAA8Bsn5NxFFHaIivB3n1zq%2Fgh6Fk0DNW%2BWHAHCnMLsXTldRFAoGAkiobogdUu71JYOk3M54bU%2FAQSEXDpvvfueK7O3S7pej1ApgqIlrd8zJ87gth623Iw2f2GxzuKNijR6tsL%2BoKBR1X7Hy70281rBVKzr9PDrzs1z4YfrvJz6vTRs%2FPVsfMcrGkcyinzEzCs5eBRs8XYhgPRakvGYu9j2iKbPJjf1qVtXefDbNuVY1sK2jVZTsRzb%2FHpMuo7iDMlL00kzTqofFkcQhsFV3fKhyDtgqHD8GfQ%2F%2BxSkFlDKCp02ZkTDdWKYtP2Psc4jJmVCll95tyl7wUY5l8fJpPDk0XcFaSbhNL0ao%2B0XiezW%2BTN5MQX5X8gFijuJ3tTOMTQU0hL9VGqgyo2unV%2BkvTY%2Fyk6dhO5qTeQ%3D%3D&X-Amz-Signature=66c06b4dbc835d3c19021ce38856335afb3e1b432e5b11973cd1ecb1b0680028&X-Amz-SignedHeaders=host)

## parting words
I am deeply honored to be invited to be the speaker on pycon indo 2019 about this however, to make the project "demo-able" i made several improvements: 
- cycleGAN
- fast-style-neural-trasnfer
Both are a pretty good "feature extractors" with way different implementation to each other. But both has a pretty good serializeable file that I can use to generate a new image without training it again and again. Creating CLI is cool and stuff, but I decided to take a step further by making a telegram bot, try it out while its still online [@styletransferbot](t.me/styletransferbot)!


I learned a lot of things about the GANs, making art with deep learning. Sometimes learning machine learning is all about metrics: getting good prediction, less error, less biased towards certain things, more reliable and good black box models, what I get from this is programming in the society should be changed from a tool for industries to something more! something that helps us to be more expressive as humans. 

Stop making weapons of math destructions!

Well I guess decorating my room got hell bent to a long hole of optimization problem eh. 