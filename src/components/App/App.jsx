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
                  <a href="#" className="link">Works</a>
                </li>
                <li className="list-elem">
                  <a href="#" className="link">About</a>
                </li>
                <li className="list-elem">
                  <a href="#" className="link">Services</a>
                </li>
                <li className="list-elem">
                  <a href="#" className="link">Blog</a>
                </li>
                <li className="list-elem">
                  <a href="#" className="link">Contact</a>
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
            <img src="/background.jpg" alt="Worktop" />
          </div>
        </section>
      </main>
    </div>
  )
}