
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">

        <span className="tags top-tags">
          &lt;html&gt;
          <br />
          <span className="tags top-tags-body">&lt;body&gt;</span>
        </span>

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>

      <Footer />
    </div>
  )
}

export default Layout