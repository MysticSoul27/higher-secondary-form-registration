import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'




function App() {
  
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false)
  const [invalidStudentName, setInvalidStudentName] = useState(false)

  const [formData, setFormData] = useState({
    studentName: '', 
    gender: '', 
    dateOfBirth: '', 
    phoneNumber: '', 
    email:'', 
    address: '',
    course: ''
  })
  console.log(formData);
  
  const handleChange = (e) => {
    // console.log(e.target);
    const {name, value} = e.target
    if(name == 'studentName'){
      setFormData({...formData, [name]: value})
      //checks for wheather the name starts with character
      if(value.match(/^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/)){
        setInvalidStudentName(false)
      }else{
        setInvalidStudentName(true)
      }
    }else if(name == 'gender'){
      setFormData({...formData,[name]: value})
    }else if(name== 'dateOfBirth'){
      setFormData({...formData, [name]: value})
    }else if(name == 'phoneNumber'){
      setFormData({...formData, [name]: value})
      if(value.match(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)){
        setInvalidPhoneNumber(false)
      }else{
        setInvalidPhoneNumber(true)
      }
    }else if( name == 'email'){
        setFormData({...formData, [name]: value})
        if(value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
          setInvalidEmail(false)
        }else{
          setInvalidEmail(true)
        }
    }else if(name == 'address'){
      setFormData({...formData,[name]: value})
    }else if(name=='course'){
      setFormData({...formData,[name]: value})
    } 
    
  }

  const handleRegister = (e) =>{
    e.preventDefault()
    if(formData.studentName && formData.gender && formData.dateOfBirth && formData.phoneNumber && formData.email && formData.address && formData.course){
      alert(`Form submitted successfully. Student details : 
        Name: ${formData.studentName},
        Gender: ${formData.gender},
        Date Of Birth: ${formData.dateOfBirth},
        Mobile: ${formData.phoneNumber}, 
        Email: ${formData.email},
        Address: ${formData.address}, 
        Course: ${formData.course}`)
    }else{
      alert('Please enter the form completely')
    }
  }

  const handleCancel = () => {
    setFormData({...formData, 
      studentName: '', gender: '', dateOfBirth: '',
      phoneNumber: '', email: '', address: '', course: ''
    })
    setInvalidStudentName(false)
    setInvalidPhoneNumber(false)
    setInvalidEmail(false)
  }



  return (
    <>
      <div className='bg-form p-2'>
        <Container maxWidth="md" className='rounded-3 p-2' style={{ backgroundColor: "lavender" }}>
          <h2 className='p-2 mt-3'>Higher Secondary Admission Form</h2>
          <div className='p-3 bg-warning-subtle container-sm'>
            <h6>Note:</h6>
            <p className='p-1' style={{fontSize: "13px"}}>1. Provide your full-name as in a valid Identity card(Aadhar card).<br></br>
            2. Phone number should contain 10 digits.<br></br>
            3. Provide a Official Email Address.<br></br>
            4. Please enter your address as it appears on your Aadhar card, including the following details separated by commas: house name, street name, post, city, state, country, and postal code.</p>
          </div>
          <hr></hr>
          <form className='p-1'>
            {/* name */}
            <div className='p-3'>
              <TextField
                helperText="*Full Name"
                id="demo-helper-text-misaligned"
                label="Name"
                className='w-100'
                variant="filled" name='studentName'  value={formData.studentName || ''} onChange={handleChange} 
              />
              {
                invalidStudentName && <div className='text-danger p-1'>*Not a valid name !!!</div>
              }
            </div>
            {/* gender, date of birth */}
            <Grid container spacing={2} className='p-3'>
              <Grid item xs={12} sm={6} className='p-2'>
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="gender-label">Gender</InputLabel>
                <Select labelId="gender-label" id="gender-select" name='gender' value={formData.gender || ''} onChange={handleChange} >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                    <MenuItem value='Others'>Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className='p-2'>
                <TextField name='dateOfBirth' value={formData.dateOfBirth || ''} onChange={handleChange}
                  id="date-of-birth" label="Date of Birth" variant="filled" 
                  type='date' fullWidth InputLabelProps={{ shrink: true, }} />
              </Grid>
            </Grid>
            {/* phone number and email */}
            <Grid container spacing={2} className='p-3 d-flex justify-content-between align-items-center flex-wrap'>
              <Grid item xs={12} sm={6} className='p-2 w-50'>
                <TextField name='phoneNumber' value={formData.phoneNumber || ''} onChange={handleChange} id="filled-basic" label="Phone Number" variant="filled" className='w-100' />
                {
                  invalidPhoneNumber && <div className='p-1 text-danger'>*Please enter a valid phone number....!!!</div>
                }
              </Grid>
              <Grid item xs={12} sm={6} className='p-2 w-50'>
                <TextField name='email' value={formData.email || ''} onChange={handleChange}
                  id="filled-basic"
                  label="Eamil Address"
                  variant="filled"
                  type='email'
                  className='w-100'
                />
                {
                  invalidEmail && <div className='p-1 text-danger'>*Please enter a valid email address</div>
                }
              </Grid>
            </Grid>
            {/* Address */}
            <div className='p-2'>
              <TextField name='address' value={formData.address || ''} 
                onChange={handleChange}
                helperText="*House Name, Street Address, Post, City, State, country and Pincode"
                id="demo-helper-text-misaligned"
                label="Address"
                multiline
                rows={4}
                variant="filled"
                className='w-100'
              />
            </div>
            {/* Course */}
            <div className='p-2'>
              <FormControl variant='filled' className='border w-75'>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select name='course'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.course || ''} onChange={handleChange}
                  label="Course"
                >
                  <MenuItem value='Biology'>Biology</MenuItem>
                  <MenuItem value='Computer-Science'>Computer Science</MenuItem>
                  <MenuItem value='Commerce'>Commerce</MenuItem>
                  <MenuItem value='Humanities'>Humanities</MenuItem>

                </Select>
              </FormControl>
            </div>
            {/* register and cancel */}
            <div className='p-2'>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Button onClick={handleRegister} type='button' className='bg-warning btn-lg text-black p-2'>Register</Button>
                <Button onClick={handleCancel} type='button' className='bg-danger btn-lg text-black p-2'>Cancel</Button>
              </Stack>
            </div>
          </form>
        </Container>
      </div>
    </>
  )
}

export default App
