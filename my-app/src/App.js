import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  ThemeProvider
} from '@ui5/webcomponents-react';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./HomePage";
import {Events} from "./Events";
import {Profile} from "./Profile"
import TopNav from './TopNav'
import './App.css';
import { ExampleUser } from './ExampleUser';

function App() {
  return (
    <BrowserRouter>
        <nav>
          <TopNav />
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/ExampleUser" element={<ExampleUser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
