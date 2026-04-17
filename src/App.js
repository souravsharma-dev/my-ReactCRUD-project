import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'

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
      }}>CRUD App</h1>

      <table className="table">
        <thead>
          <tr>
          <th> Name </th>
          <th> Email </th>
          <th> Phone </th>
          <th> Subject  </th>
          <th> Actions </th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td> John Doe </td>
            <td> RogerFing@gmail.com </td>
            <td> 1234567890 </td>
            <td> Maths </td>
            <td style={{
              
            }}> 
              <button style={{
                background: 'orange',
                color: 'white',
                borderRadius: '5px',
                marginRight: '8px'
              }}><i class="ri-add-line"></i></button> 
              <button style={{
                background: 'green',
                color: 'white',
                borderRadius: '5px'
              }}><i class="ri-subtract-fill"></i></button>
            </td>
          </tr>

           
           <tr>
            <td> John Doe </td>
            <td> RogerFing@gmail.com </td>
            <td> 1234567890 </td>
            <td> Maths </td>
            <td style={{
              
            }}> 
              <button style={{
                background: 'orange',
                color: 'white',
                borderRadius: '5px',
                marginRight: '8px'
              }}><i class="ri-add-line"></i></button> 
              <button style={{
                background: 'green',
                color: 'white',
                borderRadius: '5px'
              }}><i class="ri-subtract-fill"></i></button>
            </td>
          </tr>

 
          <tr>
            <td> John Doe </td>
            <td> RogerFing@gmail.com </td>
            <td> 1234567890 </td>
            <td> Maths </td>
            <td style={{
              
            }}> 
              <button style={{
                background: 'orange',
                color: 'white',
                borderRadius: '5px',
                marginRight: '8px'
              }}><i class="ri-add-line"></i></button> 
              <button style={{
                background: 'green',
                color: 'white',
                borderRadius: '5px'
              }}><i class="ri-subtract-fill"></i></button>
            </td>
          </tr>

 
           <tr>
            <td> John Doe </td>
            <td> RogerFing@gmail.com </td>
            <td> 1234567890 </td>
            <td> Maths </td>
            <td style={{
              
            }}> 
              <button style={{
                background: 'orange',
                color: 'white',
                borderRadius: '5px',
                marginRight: '8px'
              }}><i class="ri-add-line"></i></button> 
              <button style={{
                background: 'green',
                color: 'white',
                borderRadius: '15px'
              }}><i class="ri-subtract-fill"></i></button>
            </td>
          </tr>


        </tbody>
      </table>

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
        background: "white",
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

        <form style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}>
          <input type='text' placeholder='Name' style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input type='email' placeholder='Enter Email' style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input type='tel' placeholder='Enter Phone' style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input type='text' placeholder='Subject' style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input type='date' placeholder='Name' style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>

          <button style={{
            background: 'blue',
            color: 'white',
            padding: '10px',
            fontWeight: 'medium',
            borderRadius: '4px',
          }}>Submit Form</button>
        </form>
      </aside>
    </div>
  )
}

export default App