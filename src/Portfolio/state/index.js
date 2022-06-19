export const initialState = { selectedTab: "home", isDarkTheme: true };

export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_TAB = "CHANGE_TAB";

export function reducer(state, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, isDarkTheme: !state.isDarkTheme, };
        case CHANGE_TAB:
            return { ...state, selectedTab: action.payload };
        default:
            return state;
    }
}
