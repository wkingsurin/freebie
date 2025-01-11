import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-block">
            <nav className="navigation">
              <ul className="list">
                <li className="list-elem">
                  <a href="#works" className="link">Works</a>
                </li>
                <li className="list-elem">
                  <a href="#about" className="link">About</a>
                </li>
                <li className="list-elem">
                  <a href="#services" className="link">Services</a>
                </li>
                <li className="list-elem">
                  <a href="#blog" className="link">Blog</a>
                </li>
                <li className="list-elem">
                  <a href="#contact" className="link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="hero hero-section">
          <div className="container">
            <div className="hero-block section-block">
              <div className="content">
                <h1 className="title">WHERE GREAT IDEAS COME TO LIFE</h1>
                <p className="subtitle">Passionate creative studio helping startups grow their business!</p>
              </div>
              <div className="pagination">
                <button className="number active">01</button>
                <button className="number">02</button>
                <button className="number">03</button>
              </div>
            </div>
          </div>
          <div className="background">
            <img src="/hero/background.jpg" alt="Worktop" />
          </div>
        </section>
        <section className="present present-section">
          <div className="container">
            <div className="present-block section-block">
              <div className="text-block">
                <div className="ttile-block">
                  <h2 className='title'>we are</h2>
                  <p className="subtitle">the sqwd</p>
                </div>
                <p className="description">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.</p>
              </div>
              <div className="images">
                <div className="box">
                  <div className="item">
                    <img src="/present/image-1.jpg" alt="Man" />
                  </div>
                  <div className="item item_green">
                  </div>
                  <div className="item">
                    <img src="/present/image-2.jpg" alt="Man" />
                  </div>
                  <p className="description">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services services-section" id='services'>
          <div className="container">
            <div className="services-block section-block">
              <h2 className="title">Our Services</h2>
              <div className="cards">
                <div className="item">
                  <div className="title-block">
                    <h3 className="title-card">Branding</h3>
                    <div className="icon-block">
                      <img src="/services/icon-1.png" alt="Branding" />
                    </div>
                  </div>
                  <div className="text-block">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a href="#" className="button">READ MORE</a>
                  </div>
                  <div className="bottom-line"></div>
                </div>
                <div className="item">
                  <div className="title-block">
                    <h3 className="title-card">DESIGN</h3>
                    <div className="icon-block">
                      <img src="/services/icon-2.png" alt="Design" />
                    </div>
                  </div>
                  <div className="text-block">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a href="#" className="button">READ MORE</a>
                  </div>
                  <div className="bottom-line"></div>
                </div>
                <div className="item">
                  <div className="title-block">
                    <h3 className="title-card">DEVELOPMENT</h3>
                    <div className="icon-block">
                      <img src="/services/icon-3.png" alt="Development" />
                    </div>
                  </div>
                  <div className="text-block">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a href="#" className="button">READ MORE</a>
                  </div>
                  <div className="bottom-line"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}