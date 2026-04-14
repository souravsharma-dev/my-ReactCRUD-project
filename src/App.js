import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {

const [rightdrawer, setRightDrawer] = useState(-450)

  const handleSubmit = () => {
    setRightDrawer(0)
  }
  return (
    <div style={{
      background: '#ddd',
      minHeight: '100vh',
    }}>
      <div style={{
        width: '70%',
        background: 'white',
        margin: '32px auto',
        padding: '20px',
      }}>
      <h1 style={{
        textAlign: 'center',
        padding: '16px',
      }}>CRUD APP</h1>

      <button onClick={handleSubmit} style={{
        background: 'purple',
        color: 'white',
        padding: '10px',
        fontWeight: 'bold',
        alignItems: "center"
      }}><i style={{
        marginRight: '8px'
      }} class="ri-map-pin-user-fill"></i> Submit Form</button>
      </div>
      <aside style={{
        position: "fixed",
        top: "0px",
        right: rightdrawer,
        padding: '20px',
        background: "lightblue",
        width: 450,
        height: '100%',
        boxShadow: '0 0 40px rgba(0,0,0,0.4)',
        boxSizing: 'border-box',
        transition: '0.3s'
      }}>

        <button onClick={()=> setRightDrawer(-450)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px'
          }
          }><i class="ri-close-fill"></i></button>
        <h1>Drawer</h1>
      </aside>
    </div>
  )
}

export default App