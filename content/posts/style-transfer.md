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
![](https://s5.gifyu.com/images/Webp.net-gifmaker-3.gif)
to produce image, from the 10 scripts: 
- using google colab: 3045 seconds
- using gradient's p5000: 971s

## other implementation 
- maps, on maps
![](https://s5.gifyu.com/images/Webp.net-gifmakerf00bd7504b5fa743.gif)
- painting on paintings
![](https://s5.gifyu.com/images/Webp.net-gifmaker-1a2f653dc9c5ad9ee.gif)

## parting words
I am deeply honored to be invited to be the speaker on pycon indo 2019 about this however, to make the project "demo-able" i made several improvements: 
- cycleGAN
- fast-style-neural-trasnfer
Both are a pretty good "feature extractors" with way different implementation to each other. But both has a pretty good serializeable file that I can use to generate a new image without training it again and again. Creating CLI is cool and stuff, but I decided to take a step further by making a telegram bot, try it out while its still online [@styletransferbot](t.me/styletransferbot)!


I learned a lot of things about the GANs, making art with deep learning. Sometimes learning machine learning is all about metrics: getting good prediction, less error, less biased towards certain things, more reliable and good black box models, what I get from this is programming in the society should be changed from a tool for industries to something more! something that helps us to be more expressive as humans. 

Stop making weapons of math destructions!

Well I guess decorating my room got hell bent to a long hole of optimization problem eh. 