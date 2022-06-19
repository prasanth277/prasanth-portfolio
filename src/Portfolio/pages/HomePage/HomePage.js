import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import SideNavBar from "../../components/SideNavBar/SideNavBar";
import { HomeSection } from "../../sections/HomeSection";
import { Container, RightContainer, ThemeIcon } from "./HomePage.style";

export const HomePage = ({ dispatch, selectedTab, isDarkTheme }) => {
    const handleClickThemeIcon = () => {
        dispatch({ type: "CHANGE_THEME" });
    };

    const handleSelectTab = (tab) => {
        dispatch({ type: "CHANGE_TAB", payload: tab });
    };

    const renderRightContent = () => {
        switch (selectedTab) {
            case "home":
                return <HomeSection />;
            case "about":
                return <h2 style={{ color: "white" }}>About</h2>;
            case "portfolio":
                return <h2 style={{ color: "white" }}>Portfolio</h2>;
            case "contact":
                return <h2 style={{ color: "white" }}>Contact</h2>;
            default:
                return <h2 style={{ color: "white" }}>Home</h2>;
        }
    };

    return (
        <Container>
            <SideNavBar handleSelectTab={handleSelectTab} selectedTab={selectedTab} />
            <RightContainer>
                <ThemeIcon
                    icon={isDarkTheme ? faSun : faMoon}
                    onClick={handleClickThemeIcon}
                    isDarkTheme={isDarkTheme}
                />
                {renderRightContent()}
            </RightContainer>
        </Container>
    );
};
