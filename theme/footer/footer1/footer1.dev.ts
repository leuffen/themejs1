import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `


<footer class="use-footer1">
    <div id="minifooter">
        Minifoooter
    </div>
    
    <h3>Footer 1</h3>
    <h3>Footer 2</h3>
    <h3>Footer 3</h3>

</footer>

`;


JodaDescriptionManager.addClass("footer", "footer1", "This is a description", example, [], {
    parseMarkdown: false
});
