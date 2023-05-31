import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `



# Praxis 1

Hello world some text


## Section 2

Some Content Here

### Subsection 1

### Subsection 2

### Subsection 3



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
    <p>Blaasdf</p>
    <h3>Footer 2</h3>
    <p>Blum</p>
    <h3>Footer 3</h3>
</footer>

`;


JodaDescriptionManager.addClass("page", "page1", "This is a description", example, [], {
    bodyClasses: ["website",  "page1"],
    parseMarkdown: true
});
