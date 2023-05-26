import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

<div class="do-navbar">
    <a class="navbar-brand" href="/" aria-label="Home">
        <img id="logo" src="/assets/logo64b.svg" height="84" width="72" alt="Logo">
    </a>
    <ul class="mainbar">{% include el/navbar.html ptag="nav" %}</ul>
    <ul class="minibar">
        <li><i class="bi bi-phone-fill"></i> <a class="fw-bold" href="tel:{{site.data.general.phone1}}">{{ site.data.general.phone1_text}}</a></li>
    </ul>
</div>

`;


JodaDescriptionManager.addClass(".do-navbar", "This is a description", example, []);
