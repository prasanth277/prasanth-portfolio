import React, { useReducer } from "react";
import { ThemeProvider } from "styled-components";

import { HomePage } from "./pages/HomePage";
import { theme } from "./themes/";
import { initialState, reducer } from "./state";

export const Portfolio = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isDarkTheme, selectedTab } = state;
    const appliedTheme = isDarkTheme ? theme.dark : theme.light;

    return (
        <ThemeProvider theme={appliedTheme}>
            <HomePage dispatch={dispatch} selectedTab={selectedTab} isDarkTheme={isDarkTheme} />;
        </ThemeProvider>
    );
};
