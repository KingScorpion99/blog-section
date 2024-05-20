import "./App.css";
import "./index.css";
import b1 from "./images/b1.jpg";
import b2 from "./images/b2.jpg";
import b3 from "./images/b3.jpg";

function App() {
  return (
    <>
      <section id="blog">
        <div className="blog-heading">
          <strong>Recent Blog</strong>
          <h3>Our BLog</h3>
        </div>

        <div className="blog-box-container">
          <div className="blog-box">
            <div className="blog-box-img">
              <img src={b1} alt="blog img" />
              <a href="#" className="blog-img-link">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <div className="blog-box-text">
              <strong>Artificial Intelligence</strong>
              <a href="#">
                Artificial Intelligence, What it is and How It Is Used
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maiores error tenetur odio officia consequatur quis
                nisi, sunt suscipit, eum fuga! Odio voluptatem officiis fuga
                enim ad dolorem, alias autem?
              </p>
              <div className="blog-author">
                <div className="blog-author-img">
                  <img src={b1} alt="" />
                </div>
                <div className="blog-author-text">
                  <strong>Alax</strong>
                  <span>jan 12, 2023</span>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-box-img">
              <img src={b2} alt="blog img" />
              <a href="#" className="blog-img-link">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <div className="blog-box-text">
              <strong>Artificial Intelligence</strong>
              <a href="#">
                Artificial Intelligence, What it is and How It Is Used
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maiores error tenetur odio officia consequatur quis
                nisi, sunt suscipit, eum fuga! Odio voluptatem officiis fuga
                enim ad dolorem, alias autem?
              </p>
              <div className="blog-author">
                <div className="blog-author-img">
                  <img src={b2} alt="" />
                </div>
                <div className="blog-author-text">
                  <strong>Alax</strong>
                  <span>jan 12, 2023</span>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-box-img">
              <img src={b3} alt="blog img" />
              <a href="#" className="blog-img-link">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <div className="blog-box-text">
              <strong>Artificial Intelligence</strong>
              <a href="#">
                Artificial Intelligence, What it is and How It Is Used
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maiores error tenetur odio officia consequatur quis
                nisi, sunt suscipit, eum fuga! Odio voluptatem officiis fuga
                enim ad dolorem, alias autem?
              </p>
              <div className="blog-author">
                <div className="blog-author-img">
                  <img src={b3} alt="" />
                </div>
                <div className="blog-author-text">
                  <strong>Alax</strong>
                  <span>jan 12, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
