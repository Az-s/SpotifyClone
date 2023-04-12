import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  button:hover {
    outline: none;
    background-color: #303030;
  }
`;

const Login = () => {

  const handleClick = async () => {
    const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
    const redirect_url = "http://127.0.0.1:5173/";
    const api_url = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    // const response = await axios.get(
    //   `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(
    //     "%20"
    //   )}&response_type=token&show_dialog=true`
    // );
    // window.location.href = response.request.responseURL;
    window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="Spotify"
      />
      <button type="button" onClick={handleClick} >Connect to Spotify</button>
    </Container>
  );
};

export default Login;
