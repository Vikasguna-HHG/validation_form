import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FromTable from './FromTable';
import Header from './Header';
import Footer from './footer';
function App() {
  let [mainitems,setItems] = useState([]);
  let [nameVal,setnameVal] = useState('');
  let [emailVal,setemailVal] = useState('');
  let [genderval,setgender] = useState('');
  let [cityval,setCity] = useState('');
  let [isedit,setedit] = useState(false);
  let [isedit1,setedit1] = useState('');
  let [xyz, setxyz] = useState('');
  let [xyz1, setxyz1] = useState('');
  let [xyz2, setxyz2] = useState('');
  let [xyz3, setxyz3] = useState('');
 const submithandler = () => {
    var obj = {
      name:nameVal,
      email:emailVal,
      gender:genderval,
      city:cityval
    }

   
    //broder box 
  if(!nameVal )
  {
    setxyz('enter your name')
    document.getElementById('a').style.border="1px solid red";
  }else
  {
    setxyz('')
    document.getElementById('a').style.border="1px solid black";
  }

  if(!emailVal )
  {
    setxyz1('enter your email')
    document.getElementById('b').style.border="1px solid red";

  }else
  {
    setxyz1('')
    document.getElementById('b').style.border="1px solid black";

  }
  
  if(!genderval )
  {
    setxyz2('enter your gender')
    document.getElementById('c').style.border="1px solid red";
    document.getElementById('c1').style.border="1px solid red";

  }else
  {
    setxyz2('')
  }
  
  if(!cityval)
  {
    setxyz3('enter your city')
    document.getElementById('d').style.border="1px solid red";
  }
  else
  {
    setxyz3('')
  }
  
  //submit widhout data not print 
  if(!nameVal || !emailVal || !genderval || !cityval)
  {
    return;
  }
  
  
  if(isedit)
    {
      const updatedObject = mainitems.map((user,ind) =>
        ind === isedit1 ? obj : user
      );
      setItems(updatedObject);
      setnameVal('');
      setemailVal('');
      setgender('');
      setCity('')
    }
    else{
    setItems([...mainitems,obj]);
      setnameVal('');
      setemailVal('');
      setgender('');
      setCity('');
    }
   

    document.getElementById('rst').reset();

  }
  
  
  //Delete 
  const deletehandler = (i) =>{
         
    mainitems.splice(i);
    setItems([...mainitems]);
  }
  
  
  //update
  const edithandler = (i) =>{
    setedit(true)
    setedit1(i);
         const getdata = mainitems[i];
         setnameVal(getdata.name)
         setemailVal(getdata.email);
         setgender(getdata.gender);
         setCity(getdata.city)
         document.getElementById('update').innerHTML="UPDATE";
  }

  
  
  //click event
  const color = () => {
      setxyz('');
      document.getElementById('a').style.border="1px solid black";
  }
  const color1 = () => {
    setxyz1('');
    document.getElementById('b').style.border="1px solid black";
  }
  const color2 = () => {
    setxyz2('');
    document.getElementById('c').style.border="1px solid black";
  }
  const color3 = () => {
    setxyz3('');
    document.getElementById('d').style.border="1px solid black";
  }


  return (
    <>
      <Header />

    <div> 

      <from id='rst'>
        <h1>hello</h1>
        <table cellpadding={5} className="table1">
        <tr>
          <td colspan="2" align="center">
            <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" width="48px" height="52" />
          </td>
        </tr>
        <tr>
            <td>Name :- </td>
            <td><input required="" placeholder='Enter your name' className="login_input" onClick={color} type="text" id='a' size="52" name='name' value={nameVal}  onChange={(e)=>{ setnameVal(e.target.value) }} ></input><p>{xyz}</p></td><br />
        </tr>
        <tr>
          <td>Email :- </td>
          <td><input required=""  placeholder='Enter your email' className="login_input" type="email" onClick={color1}  id='b' size="52" name='email' value={emailVal} onChange={(e)=>{ setemailVal(e.target.value) }} ></input><p>{xyz1}</p></td>
        </tr>
        <tr>
          <td>Gender :- </td>
          <td><input type="radio"  onClick={color2}  id='c' value="male"  name='gender' onChange={(e)=>{ setgender(e.target.value) }} ></input>&nbsp;Male &nbsp;
              <input type="radio" onClick={color2}  id='c1' value="female"  name='gender' onChange={(e)=>{ setgender(e.target.value) }} ></input>&nbsp;Female
              <p>{xyz2}</p>
          </td>
        </tr>
        <tr>
          <td>City :- </td>
          <td>
            <select  className="sele"  required="" name="city" onClick={color3}  id='d' value={cityval} onChange={(e)=>{ setCity(e.target.value) }}>
                      <option value="select" selected >Select-city</option>
                      <option value="surat">surat</option>
                      <option value="tapi">tapi</option>
                      <option value="amhedabad">amhedabad</option>
                      <option value="rajkot">rajkot</option>
                    </select><br />
            <p>{xyz3}</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="button"  className="button_l" value="submit"  id="update" onClick={submithandler}>submit</button> 
          </td>
        </tr>
      </table>
    </from><br/><br/><br/><br/>

    {/* <Container>
      <Table striped bordered hover size="sm">
        <thead> 
                <th>No</th>
                <th>Name </th>
                <th>Email</th>
                <th>Gender</th>
                <th>city</th>
                <th>Delete</th>
                <th>Edit</th>
        </thead>
         <tbody>
              {
                props.mainitems.map((item,i)=>{
                  return(
                    <tr>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.city}</td>
                      <td><button value="delete" onClick={()=>props.deletehandler(i)} >Delete</button></td>
                      <td><button value="button" onClick={()=>props.edithandler(i)}>Update</button></td>
                    </tr>
                  )
                })
              }
          </tbody>
      </Table>
    </Container> */}
    <FromTable mainitems={mainitems} deletehandler={deletehandler} edithandler={edithandler} />
    <Footer/>

   </div>
   </>
  );
}

export default App;
