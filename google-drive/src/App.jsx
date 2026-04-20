import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />

      <div class="main-container">

        <Sidebar />

        <div class="content">
          <div class="content-header">
            <div class="title">My Drive <i class="fa-solid fa-caret-down"></i></div>
            <div class="view-options">
              <i class="fa-solid fa-list-ul"></i>
              <i class="fa-solid fa-grid-view"></i>
              <i class="fa-solid fa-circle-info"></i>
            </div>
          </div>

          <div class="filters">
            <button>Type <i class="fa-solid fa-caret-down"></i></button>
            <button>People <i class="fa-solid fa-caret-down"></i></button>
            <button>Modified <i class="fa-solid fa-caret-down"></i></button>
          </div>

          <table class="file-table">
            <thead>
              <tr>
                <th>Name <i class="fa-solid fa-arrow-up"></i></th>
                <th>Owner</th>
                <th>Date modified</th>
                <th>File size</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i class="fa-solid fa-folder folder-icon"></i> Classroom</td>
                <td>me</td>
                <td>Jan 29</td>
                <td>—</td>
                <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
              </tr>
              <tr>
                <td><i class="fa-solid fa-file-zipper zip-icon"></i> ecommerce-breeze.zip</td>
                <td>me</td>
                <td>Sep 15, 2023</td>
                <td>54.7 MB</td>
                <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
              </tr>
              <tr>
                <td><i class="fa-solid fa-file-lines text-icon"></i> EVERYBODY.txt</td>
                <td>me</td>
                <td>Nov 13, 2024</td>
                <td>501 bytes</td>
                <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
              </tr>
              <tr>
                <td><i class="fa-solid fa-file-pdf pdf-icon"></i> himanshu-dimri-cv.pdf</td>
                <td>me</td>
                <td>Apr 16</td>
                <td>113 KB</td>
                <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default App
