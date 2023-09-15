import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("navbar-blox",
    // language=HTML
    `

        <div class="tjs__navbar-blox">
            <div class="wrapper">
                <div class="firstline">
                    <div class="tjs__content [[ layout.container ]]">
                        <slot data-select=".brand" data-copy data-replace></slot>
                    </div>
                </div>

                <div class="secondline" style="box-shadow: 0px 1px 2px #00000029;background: white">
                    <div class="tjs__main-container [[ layout.container ]]">
                        <div class="tjs__row1">


                            <div class="tjs__logo :: mobile :md: " href="/" aria-label="Home">
                                <slot data-select=".brand" data-replace></slot>
                            </div>



                            <div class="tjs__row2">
                                <div class="tjs__nav-main" >

                                    <slot data-select=".nav-bar-main" data-replace></slot>

                                </div>


                                <div class="tjs__hamburger">
                                    <div class="use-hamburger :: justify-content-center :lg: text-start"
                                         style="display: flex; padding-right:20px; align-items: center; justify-content: right; height:100%;width:100%"></div>
                                </div>
                            </div>


                        </div>
                        <div class="sidenav-positioner">
                            <div class="sidenav">
                                <slot data-select=".nav-menu"></slot>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    `);
