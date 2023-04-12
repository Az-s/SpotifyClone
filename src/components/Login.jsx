import React from "react";
import styled from "styled-components";

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

  const handleClick = () => {
    // const clientId = 'ed789d04de0f43738bb2cc5feffcb9c0';
    const clientId = process.env.SPOTIFY_CLIENT_ID;
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
