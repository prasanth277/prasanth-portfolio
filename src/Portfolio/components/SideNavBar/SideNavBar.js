import React from "react";
import { withTheme } from "styled-components";

import { tabs } from "../../constants";

import {
    SideBarContainer,
    TabContainer,
    TabText,
    TabIcon,
} from "./SideNavBar.styles";

const SideNavBar = ({ handleSelectTab = () => { }, selectedTab, ...props }) => {

    const renderTab = (tab) => {
        return (
            <TabContainer key={tab.id} isActive={selectedTab === tab.id} onClick={() => { handleSelectTab(tab.id) }}>
                <TabIcon icon={tab.icon} />
                <TabText>{tab.label}</TabText>
            </TabContainer>
        );
    };

    return (
        <SideBarContainer theme={props.theme}>
            {tabs.map((tab) => renderTab(tab))}
        </SideBarContainer>
    );
};

export default withTheme(SideNavBar);
