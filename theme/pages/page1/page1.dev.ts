import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `



# Wir entwickeln die <span class="text-primary">passende Website</span> für Ihre Arztpraxis!

Weil Sie Besseres zu tun haben, als sich um Ihre Website zu kümmern.


<a href="#" class="btn btn-primary btn-lg">Jetzt Konditionen freischalten</a>




---{: .section-h2 .showcase}

![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-laptop style="width:100%"}
![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-mobile .position-absolute .bottom-0 style="height:70%"}


## Was leistet die System-Homepage?{: .sec2}




### Immer up-to-date

Wir kümmern uns um die Aktualisierung Ihrer Website.

### Einfach zu bedienen

Urlaubsschaltung, Notdienst, Sprechzeiten, ... steuern Sie mit einem Klick.

### Günstig & Schnell

Von der Einzelpraxis bis zum MVZ - wir haben für jeden die passende Lösung.



## Leistungen, die überzeugen!{: .sec3}

Erfinden Sie das Rad nicht neu. Bauen Sie auf unsere erprobten Marketinglösungen
für viele Fachrichtungen.

### Webdesign

### Logoerstellung

### Praxismarketing



## Footer 1


## Footer 2

### Kontakt



### Info



### Links


<footer class="do-footer1">
    <div id="minifooter">
        Minifoooter
    </div>
    <h3>Footer 1</h3>
    <p>Systemhomepage ist ein Angebot von</p>
    <p>leuffen.de<br>Matthias Leuffen<br>Mathildenstr. 9-11<br></p>
    <h3>Footer 2</h3>
    <p>Blum</p>
    <h3>Footer 3</h3>
</footer>

`;


JodaDescriptionManager.addClass("page", "page1", "This is a description", example, [], {
    bodyClasses: ["website",  "page1"],
    parseMarkdown: true
});
