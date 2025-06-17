import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProfileCard from "./ProfileCard";

export default function App() {
  return(
    <React.StrictMode>
      <BrowserRouter>
        <ProfileCard></ProfileCard>
      </BrowserRouter>
    </React.StrictMode>
  );
}