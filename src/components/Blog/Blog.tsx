import styles from "./Blog.module.css"
const Blog = () => {
  return (
    <>
      <div className="container-blog">
        <div className="blog">
          <header className="header-section">
            <h1>Blog</h1>
            <p className="header-text">Insert Blog short bio copy</p>
          </header>
          <div className="column">
            <div className="blog-column">
              <img
                src="images/image1.png"
                alt="image1"
                className="content-img"
              />
              <div className="content-text">
                <p>Papa & Barkley back in stock along with many options!</p>
                <button className="primary-btn">Read More</button>
              </div>
            </div>
            <div className="blog-column">
              <div className="content-img">
                <img src="images/image2.png" alt="image2" />
              </div>
              <div className="content-text">
                <p>Papa & Barkley back in stock along with many options!</p>
                <button className="primary-btn">Read More</button>
              </div>
            </div>
            <div className="blog-column">
              <div className="content-img">
                <img src="images/image3.png" alt="image3" />
              </div>
              <div className="content-text">
                <p>Papa & Barkley back in stock along with many options!</p>
                <button className="primary-btn">Read More</button>
              </div>
            </div>
            <div className="blog-column">
              <div className="content-img">
                <img src="images/image4.png" alt="image4" />
              </div>
              <div className="content-text">
                <p>Papa & Barkley back in stock along with many options!</p>
                <button className="primary-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="secondary-btn">
            <button>View More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
