import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "Containers/Page/Homepage";
import Error404 from "Containers/Error/Error404";
import store from "store";
import ContactPage from "Containers/Page/ContactPage";
import Blog from "Containers/Page/blog/Blog";
import BlogPost from "Containers/Page/blog/BlogPost";

import BlogCategory from "Containers/Page/Category/BlogCategory";
import Search from "Containers/Page/Search";
import RecetasPage from "Containers/Page/restaurantes/Recetas";
import Repositorio from "Containers/Page/Repositorio";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* Error Display */}

          <body className="App-grid-container">
            <main className="App-main">
              <div className="App-main-content">
                <Routes>
                  <Route path="*" element={<Error404 />} />
                  <Route path="/" element={<Homepage />} />
                  <Route path="/Recetas" element={<RecetasPage />} />

                  {/*<Route path="/Repository" element={<Repository />} />*/}
                  <Route path="/Restaurantes" element={<Blog />} />
                  <Route path="/blog/post/:slug" element={<BlogPost />} />
                  <Route
                    path="/blog/categories/:category_id"
                    element={<BlogCategory />}
                  />
                  <Route path="/search/:term" element={<Search />} />
                  <Route path="/repository" element={<Repositorio />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </div>
              {/* aqui estaba el footer */}
            </main>
          </body>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
