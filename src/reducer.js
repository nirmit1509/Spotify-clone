import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    playing: false,
    top_artists: null,
    item: null,
    token: null,
    //token: 'BQBLBiiamFGTF3c6fB2yqiqHzEV3VvCkNBc2zbEY9pPkDo31U8VRcmtIAdyxv-TTI7OgNRVA8YD1iC5ChXNXHSLAmo1XoPLn0i8DM_2EkFR7bHOF_tzVPCJaIl27Bt9ZuZkZiHMGF67p-opMM97bEcpnOv2CAo1fbeoeu2N6mVq8oVsT'
};

const reducer = (state, action) => {

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}

export default reducer;