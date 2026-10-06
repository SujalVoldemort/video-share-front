import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Gemini/Main'
import Two from './components/Gemini/Two'
import Three from './components/Gemini/Three'
import Four from './components/Gemini/Four'
import Five from './components/Gemini/Five'
import Six from './components/Gemini/Six'
import Seven from './components/Gemini/Seven'
import Eight from './components/Gemini/Eight'
import Nine from './components/Gemini/Nine'
import Ten from './components/Gemini/Ten'
import Framer1 from './components/Framer/Framer1'
import Framer2 from './components/Framer/Framer2'
import Framer3 from './components/Framer/Framer3'
import Framer4 from './components/Framer/Framer4'
import Framer5 from './components/Framer/Framer5'
import DragExample from './components/Framer/DragExample'

function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Sidebar />
    }, {
      path: '/gemini',

      children: [
        {
          path: '1',
          element: <Main />
        },
        {
          path: '2',
          element: <Two />
        },
        {
          path: '3',
          element: <Three />
        },
        {
          path: '4',
          element: <Four />
        },
        {
          path: '5',
          element: <Five />
        },
        {
          path: '6',
          element: <Six />
        },
        {
          path: '7',
          element: <Seven />
        }, {
          path: '8',
          element: <Eight />
        }, {
          path: '9',
          element: <Nine />
        }, {
          path: '10',
          element: <Ten />
        }
      ]
    }, {
      path: "/framer",
      children: [{
        path: '1',
        element: <Framer1 />
      },
      {
        path: '2',
        element: <Framer2 />
      },{
        path: '3',
        element: <Framer3/>
      },{
        path: '4',
        element: <Framer4/>
      },{
        path: '5',
        element: <Framer5/>
      },{
        path: 'drag',
        element: <DragExample/>
      }
      ]
    }
  ])

  if (true) {
    return <RouterProvider router={browserRouter} />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="sm:px-6 lg:px-8 px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Responsive Layout</h1>
        <p className="mt-4">
          This container should be responsive and centered.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste adipisci porro, culpa provident sed similique repudiandae distinctio fugiat illum odit in, temporibus impedit odio voluptas maxime deserunt ipsam cupiditate aliquid.
        </p>
      </div>
      <hr />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Cards</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">Card 1
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis molestias at totam minus eius voluptatibus ullam numquam voluptas possimus? Ad nesciunt perspiciatis, perferendis dignissimos vero asperiores libero beatae consectetur!</div>
          <div className="bg-white p-4 rounded shadow">Card 2
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ex. Omnis veniam cum, eveniet suscipit sapiente minus ipsum molestiae praesentium rem ad numquam quam quia optio nam quaerat, enim consectetur!
          </div>
          <div className="bg-white p-4 rounded shadow">Card 3
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora quis, dolor maiores totam, quidem eligendi in minus provident eum quos reprehenderit reiciendis consequuntur vero hic necessitatibus perferendis saepe facere.
          </div>
          <div className="bg-white p-4 rounded shadow">Card 1
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis molestias at totam minus eius voluptatibus ullam numquam voluptas possimus? Ad nesciunt perspiciatis, perferendis dignissimos vero asperiores libero beatae consectetur!</div>
          <div className="bg-white p-4 rounded shadow">Card 2
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ex. Omnis veniam cum, eveniet suscipit sapiente minus ipsum molestiae praesentium rem ad numquam quam quia optio nam quaerat, enim consectetur!
          </div>
          <div className="bg-white p-4 rounded shadow">Card 3
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora quis, dolor maiores totam, quidem eligendi in minus provident eum quos reprehenderit reiciendis consequuntur vero hic necessitatibus perferendis saepe facere.
          </div>
          <div className="bg-white p-4 rounded shadow">Card 1
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis molestias at totam minus eius voluptatibus ullam numquam voluptas possimus? Ad nesciunt perspiciatis, perferendis dignissimos vero asperiores libero beatae consectetur!</div>
          <div className="bg-white p-4 rounded shadow">Card 2
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ex. Omnis veniam cum, eveniet suscipit sapiente minus ipsum molestiae praesentium rem ad numquam quam quia optio nam quaerat, enim consectetur!
          </div>
          <div className="bg-white p-4 rounded shadow">Card 3
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora quis, dolor maiores totam, quidem eligendi in minus provident eum quos reprehenderit reiciendis consequuntur vero hic necessitatibus perferendis saepe facere.
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
