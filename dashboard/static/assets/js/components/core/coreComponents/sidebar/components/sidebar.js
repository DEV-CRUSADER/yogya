import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import SubMenu from "./subMenu";
import pagePath from "../pagePath.js";

const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () =>{
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

return (
    <>
        <IconContaxt.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                <h1
                    style={{ textAlign: "center",
                marginLeft:"200px,",
                color: "green"}}
                >
                    Sidebar Menu using React Js
                </h1>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>    
            </SidebarNav>
        </IconContaxt.Provider>    
    </>
);
};

export default Sidebar;