import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
// import BlogPage from "./blogsPosts/blogPosts"
// import blogPosts from "./blogsPosts/blogPosts"
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";


function App() {
  return (
    <>
      {/* Exercise 1: Add routes to your app so that the Navbar knows what to display 
          Hint** Use the <BrowserRouter>, <Routes>, and <Route> components from react-router-dom
      */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>} />
          <Route path="/experience" element={<ExperiencePage></ExperiencePage>} />
          {/*Blog*/}
          <Route path="/blog" element={<BlogPage></BlogPage>} />
          <Route path="/blog/:slug" element={<BlogPostPage></BlogPostPage>} />
        </Routes>
        {/* <HomePage /> */}
      </BrowserRouter>
      
    </>
  );
}

export default App;
