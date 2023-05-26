---
layout: default
permalink: /
---





<style>
    .preview {
        --scale: 0.2;
        --aspect-ratio: calc(16 / 9);
        --width: 350px;
        --height: calc(var(--width) / var(--aspect-ratio));
        position: relative;
        width: var(--width);
        height: var(--height);
        overflow: hidden;
        display: inline-block;
        margin: 1rem;
        border: 3px solid #ccc;
    }
    iframe {
        position: relative;
        right: calc((var(--width) / var(--scale) / 2) - var(--width) / 2);
        bottom: calc((var(--height) / var(--scale) / 2) - var(--height) / 2);
        width: calc(var(--width) / var(--scale));
        height: calc(var(--height) / var(--scale));
        transform: scale(var(--scale));
    }
</style>



<div class="preview"><iframe src="/html?className=.do-hero"></iframe></div>
<div class="preview"><iframe src="/html?className=.do-hero"></iframe></div>






