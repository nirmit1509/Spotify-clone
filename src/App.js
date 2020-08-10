import React, { useEffect, useState } from 'react';
import './css/App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromResponse } from './spotify';
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect( () => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {

      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then( user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      spotify.getPlaylist('37i9dQZEVXcXHT1Eej9LX1').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })

    }
  }, [token, dispatch]);

  return (
    <div className="app">
    {
      token&&user ?
        <Player spotify={spotify} />
        :
        <Login />
    }</div>
  );
}

export default App;