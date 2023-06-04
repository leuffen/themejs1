import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `



# Wir entwickeln die <span class="text-primary">passende Website</span> für Ihre Arztpraxis!

Weil Sie Besseres zu tun haben, als sich um Ihre Website zu kümmern.


<a href="#" class="btn btn-primary btn-lg">Jetzt Konditionen freischalten</a>




---{: .section-h2 .showcase}

![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-laptop style="width:100%"}
![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-mobile .position-absolute .bottom-0 style="height:70%"}


---{: .section-h2 .sec2}




### Immer up-to-date

Wir kümmern uns um die Aktualisierung Ihrer Website.

### Einfache Bedienenung

Urlaubsschaltung, Notdienst, Sprechzeiten, ... steuern Sie mit einem Klick.

### Günstig & Schnell

Von der Einzelpraxis bis zum MVZ - wir haben für jeden die passende Lösung. [Jetzt Preise freischalten.]()



## Praxismarketing mit System!{: .sec3}

Erprobten Marketinglösungen für viele Fachrichtungen & Anforderungsprofile.<br>
Für Einzelpraxen, Gemeinschaftspraxen und MVZ.

### Patienten informieren

Aus dem Stand eine Top-Platzierung: Mit unseren erprobten Marketinglösungen,
die wir individuell an Ihre Bedürfnisse anpassen.

### Termine vereinbaren

Nutzen Sie die Vorteile der Online-Terminvereinbarung. Kompatibel mit allen
Praxisverwaltungssystemen.

### Bewerber überzeugen

Präsentieren Sie sich und Ihre Praxis potenziellen Bewerbern. Ihre Website ist die beste Stellenanzeige.




## &nbsp;{: .sec4}


### Mit Ärzten konzipiert

Keine Zeit für lange Briefings? Nutzen Sie unsere
erprobten Website-Konzepte und sparen Sie Zeit, Geld und Nerven.

Und: Günstiger als Sie denken.

<button class="btn btn-primary btn-lg">Jetzt Preise freischalten</button>

---{: .section-h3}

![](cdn:///leu-stock/v/3/1920x1281_1200x800_992x662_768x512_480x320_256x256/AdobeStock_276575002.avif_jpeg)

### Für Ärzte optimiert

Optimierte Website-Konzepte für:
- Hausärzte & Allgemeinmediziner
- Fachärzte (z. B. Kardiologie, Orthopädie, ...)
- Zahnärzte und Kieferorthopäden
- Psychotherapeuten
- und viele mehr




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
