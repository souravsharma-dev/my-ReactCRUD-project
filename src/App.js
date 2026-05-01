import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'

const App = () => {

const [editIndex, setEditIndex] = useState(null)

const [rightdrawer, setRightDrawer] = useState(-450)

const [students, setStudents] = useState([])

const [form, setForm] = useState({
  fullname: '',
  email: '',
  phone: '',
  subject: '',
  date: ''
})

  const handleChange = (e) => {
    const input = e.target
    //console.log(input.value)
    const value = input.value
    const name = input.name
   // console.log(name)
   setForm({
     ...form,
    [name] : value
   })
  }

  const createStudent = (e) => {
    e.preventDefault()
    //console.log(form)
    setStudents([...students, form])
    setForm({
        sr: '',
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        date: ''
    })
    setRightDrawer(-450)
  }

  const handleSubmit = () => {
    setRightDrawer(0)
  }

  const deleteStudents = (index) => {
    const backup = [...students]
    backup.splice(index, 1)
    setStudents(backup)
  }

  const editStudents = (item) => {
    setEditIndex(item)
    setRightDrawer(0)
    setForm(item)
  }

  const saveStudent = (e) => {
    alert('save student')
    e.preventDefault()
    const backup = [...students]
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
          <th> Sr. No. </th>
          <th> Name </th>
          <th> Email </th>
          <th> Phone </th>
          <th> Subject  </th>
          <th> Actions </th>
          </tr>
        </thead>

        <tbody>
        {
         students.map((item, index)=>(
                <tr>
            <td> {index + 1} </td>
            <td> {item.fullname} </td>
            <td> {item.email} </td>
            <td> {item.phone} </td>
            <td> {item.subject} </td>
            <td style={{
              
            }}> 
              <button 
              onClick={()=>editStudents(item)}
              style={{
                background: 'darkgreen',
                color: 'white',
                borderRadius: '2px',
                marginRight: '10px'
              }}><i class="ri-add-line"></i></button> 
              <button 
              onClick={()=>deleteStudents(index)}
              style={{
                background: 'deeppink',
                color: 'white',
                borderRadius: '2px'
              }}><i class="ri-subtract-fill"></i></button>
            </td>
          </tr>
         ))
        }

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

          {/*{JSON.stringify(form)}*/}
        <form 
          onSubmit={editIndex === null ? createStudent : saveStudent}
          style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}>
          <input 
          value = {form.fullname}
          onChange = {handleChange}
          required
          name='fullname'
          type='text' 
          placeholder='Name' 
          style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input 
          value = {form.email}
          onChange = {handleChange}
          required
          name='email'
          type='email' 
          placeholder='Enter Email' style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input 
          value = {form.phone}
          onChange = {handleChange}
          required
          name='phone'
          type='tel' 
          placeholder='Enter Phone' 
          style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input 
          value = {form.subject}
          onChange = {handleChange}
          required
          name='subject'
          type='text' 
          placeholder='Subject' style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
          <input 
          value = {form.date}
          onChange = {handleChange}
          required
          name='date'
          type='date' placeholder='Date' 
          style={{
            padding: '8px',
            border: '2px solid grey',
            borderRadius: '4px'
          }}></input>
            {
            editIndex === null ?
          <button style={{
            background: 'blue',
            color: 'white',
            padding: '10px',
            fontWeight: 'medium',
            borderRadius: '4px',
          }}>Submit Form</button>
          :
          <button style={{
            background: 'deeppink',
            color: 'white',
            padding: '10px',
            fontWeight: 'medium',
            borderRadius: '4px',
          }}>Save</button>
          }

        </form>
      </aside>
    </div>
  )
}

export default App