import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>

      <Navbar />

      <div className="main-container">

        <Sidebar />

        <div className="content">
          <div className="content-header">
            <div className="title">My Drive</div>
          </div>

          <div className="filters">
            <button>Type</button>
            <button>People</button>
            <button>Modified</button>
          </div>

          <table className="file-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Owner</th>
                <th>Date modified</th>
                <th>File size</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ClassNameroom</td>
                <td>me</td>
                <td>Jan 29</td>
                <td>—</td>
                <td></td>
              </tr>
              <tr>
                <td>ecommerce-breeze.zip</td>
                <td>me</td>
                <td>Sep 15, 2023</td>
                <td>54.7 MB</td>
                <td></td>
              </tr>
              <tr>
                <td>EVERYBODY.txt</td>
                <td>me</td>
                <td>Nov 13, 2024</td>
                <td>501 bytes</td>
                <td></td>
              </tr>
              <tr>
                <td>himanshu-dimri-cv.pdf</td>
                <td>me</td>
                <td>Apr 16</td>
                <td>113 KB</td>
                <td></td>
              </tr>
              <tr>
                <td>ClassNameroom</td>
                <td>me</td>
                <td>Jan 29</td>
                <td>—</td>
                <td></td>
              </tr>
              <tr>
                <td>ecommerce-breeze.zip</td>
                <td>me</td>
                <td>Sep 15, 2023</td>
                <td>54.7 MB</td>
                <td></td>
              </tr>
              <tr>
                <td>EVERYBODY.txt</td>
                <td>me</td>
                <td>Nov 13, 2024</td>
                <td>501 bytes</td>
                <td></td>
              </tr>
              <tr>
                <td>himanshu-dimri-cv.pdf</td>
                <td>me</td>
                <td>Apr 16</td>
                <td>113 KB</td>
                <td></td>
              </tr>
              <tr>
                <td>ClassNameroom</td>
                <td>me</td>
                <td>Jan 29</td>
                <td>—</td>
                <td></td>
              </tr>
              <tr>
                <td>ecommerce-breeze.zip</td>
                <td>me</td>
                <td>Sep 15, 2023</td>
                <td>54.7 MB</td>
                <td></td>
              </tr>
              <tr>
                <td>EVERYBODY.txt</td>
                <td>me</td>
                <td>Nov 13, 2024</td>
                <td>501 bytes</td>
                <td></td>
              </tr>
              <tr>
                <td>himanshu-dimri-cv.pdf</td>
                <td>me</td>
                <td>Apr 16</td>
                <td>113 KB</td>
                <td></td>
              </tr>
              <tr>
                <td>ClassNameroom</td>
                <td>me</td>
                <td>Jan 29</td>
                <td>—</td>
                <td></td>
              </tr>
              <tr>
                <td>ecommerce-breeze.zip</td>
                <td>me</td>
                <td>Sep 15, 2023</td>
                <td>54.7 MB</td>
                <td></td>
              </tr>
              <tr>
                <td>EVERYBODY.txt</td>
                <td>me</td>
                <td>Nov 13, 2024</td>
                <td>501 bytes</td>
                <td></td>
              </tr>
              <tr>
                <td>himanshu-dimri-cv.pdf</td>
                <td>me</td>
                <td>Apr 16</td>
                <td>113 KB</td>
                <td></td>
              </tr>
              <tr>
                <td>ClassNameroom</td>
                <td>me</td>
                <td>Jan 29</td>
                <td>—</td>
                <td></td>
              </tr>
              <tr>
                <td>ecommerce-breeze.zip</td>
                <td>me</td>
                <td>Sep 15, 2023</td>
                <td>54.7 MB</td>
                <td></td>
              </tr>
              <tr>
                <td>EVERYBODY.txt</td>
                <td>me</td>
                <td>Nov 13, 2024</td>
                <td>501 bytes</td>
                <td></td>
              </tr>
              <tr>
                <td>himanshu-dimri-cv.pdf</td>
                <td>me</td>
                <td>Apr 16</td>
                <td>113 KB</td>
                <td></td>
              </tr>
              <tr>
                <td>ClassNameroom</td>
                <td>me</td>
                <td>Jan 29</td>
                <td>—</td>
                <td></td>
              </tr>
              <tr>
                <td>ecommerce-breeze.zip</td>
                <td>me</td>
                <td>Sep 15, 2023</td>
                <td>54.7 MB</td>
                <td></td>
              </tr>
              <tr>
                <td>EVERYBODY.txt</td>
                <td>me</td>
                <td>Nov 13, 2024</td>
                <td>501 bytes</td>
                <td></td>
              </tr>
              <tr>
                <td>himanshu-dimri-cv.pdf</td>
                <td>me</td>
                <td>Apr 16</td>
                <td>113 KB</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default App
