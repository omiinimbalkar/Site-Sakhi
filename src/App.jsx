// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Features from "./components/Features/Features";
// import Footer from "./components/Footer/Footer";
// import Login from "./pages/Login";
// import './index.css'; // Assuming you have an index.css for global styles

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <div className="white-gradient">
//           <Header />
//           <Hero />
//           <Features />
//           <Footer />
//         </div>
//       </div>
//       {/* <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/success-stories" element={<SuccessStories />} />
//         <Route path="/template" element={<Template />} />
//         <Route path="/feature" element={<Features />} />
//       </Routes> */}
//     </Router>
//   )
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Template from './pages/Template';
import Feature from './pages/Feature';
import SuccessStories from './pages/SuccessStories';
import Get from './pages/Get';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/help" element={<Help />} />
        <Route path="/get" element={<Get />} />

      </Routes>
    </Router>
  );
}
export default App;