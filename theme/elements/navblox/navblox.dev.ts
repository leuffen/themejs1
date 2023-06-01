import {JodaDescriptionManager} from "@leuffen/jodastyle";

// language=HTML
const example = `
<div class="use-navblox">
    <div class="navblox">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xl-4 block ">
                    <div class="navbar-brand :: mobile :xl: " href="/" aria-label="Home">
                        <a href="/">
                            <img id="logo" src="https://cdn.leuffen.de//leu-kdn/o/8/100.03x113.63/logo_farbe_1.svg" width="478" height="543" alt="Logo">
                            <span>
                                Zahnärztin<br>
                                Dr. M.C. Müller
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-3 col-xl-3 block">
                    <a href=""><i class="bi bi-geo-alt-fill"></i><span class=":: d-none :xl:">Street 132, Frankfurt</span></a>
                </div>
                <div class="col-3 col-xl-2 block">
                    <a href=""><i class="bi bi-phone-fill"></i><span class=":: d-none :xl:">069 123456</span></a>
                </div>
                <div class="col-3 col-xl-2 block">
                    <a href=""><i class="bi bi-calendar-check-fill" ></i><span class=":: d-none :xl:">Termin vereinbaren</span></a>
                </div>
                <div class="col-3 col-xl-1 block">
                    <div class="use-hamburger" style="--hamburger-bar-color: #fff"></div>
                </div>
                <div class="col-12 sidenav-positioner">
                    <div class="sidenav">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                        </ul>
                    </div>
                </div>
                        
            </div>
        </div>
    </div>
</div>
<div class="container-fluid" style="height: 100vh;background-image: url(https://cdn.leuffen.de//leu-stock/v/40/992x661/AdobeStock_311198389.avif);background-size: cover;">
</div>

`;


JodaDescriptionManager.addClass("element", ".use-navblox", "This is a description", example, [],
    {
        parseMarkdown: false
    });
