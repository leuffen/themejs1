import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("navbar-blox",
    // language=HTML
    `

        <div class="tjs__navbar-blox">
            <div class="wrapper">
                <div class="firstline">
                    <div class=":: container ">
                        <div class="row">
                            <div class="col d-md-none p-0 text-center" style="">
                                <a href="/" class="w-100">
                                    <slot data-select=".brand" data-copy>
                                </a>
                            </div>
                            <!--div class="col title" style="color: darkgray">

                            </div-->
                        </div>

                    </div>
                </div>

                <div class="secondline" style="box-shadow: 0px 1px 2px #00000029;background: white">
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">


                        <div class="col-4 col-lg-4 line :: d-none :md: d-block">
                            <div class="brand-logo :: mobile :md: " href="/" aria-label="Home">
                                <a href="/">
                                    <slot data-select=".brand">
                                </a>
                            </div>
                        </div>


                        <div class="col-9 col-md-11 line :: d-none :md: d-flex">

                            <slot data-select=".nav-bar-main"></slot>

                        </div>


                        <div class="col-3 col-md-1 line  ">
                            <div class="use-hamburger :: justify-content-center :lg: text-start"
                                 style="display: flex; padding-right:20px; align-items: center; justify-content: right; height:100%;width:100%"></div>
                        </div>
                        <div class="col-12 sidenav-positioner">
                            <div class="sidenav">
                                <slot data-select=".nav-menu"></slot>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            </div>

        </div>
    `);
