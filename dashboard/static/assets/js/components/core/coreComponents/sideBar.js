import React from "react";
// import { ReactDOM } from "react";


export function Sidebar() {



    return (
        <>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">

                <div class="position-sticky">
                    <div class="list-group list-group-virtical mx-3 mt-4">
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true">
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span> </a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-users fa-fw me-3"></i><span>Users</span></a>

                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
                    </div>
                </div>



            </nav>


        </>
    );
}