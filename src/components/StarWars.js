import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import Table from 'react-bootstrap/Table';
import axios from "axios";




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function StarWars() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const paperStyledown={padding:'50px 20px', width:1000,margin:"20px auto"}
    const[starWars,setPost]=useState([])
    const[star,setPosting]=useState([])
    const[current,setCurrent]=useState('1')
    const[disbnext,setNextdisb]=useState();
    const[disbprev,setPrevdisb]=useState();

  const handleClick=(event)=>{
    setNextdisb(false)
    setPrevdisb(false)
    setCurrent('1')
    console.log(event.target.value);

    try{
        axios.get("https://swapi.dev/api/people/?search="+event.target.value).then((response) => {
          console.log(response.data.results);
          setPosting(response.data);
          setPost(response.data.results);
        });

    }catch(e){
        console.log(e)
    }
       
  }


const HandleClickAction = (event)=>{
    console.log(event.currentTarget.value);
    localStorage.setItem("key",event.currentTarget.value)
    window.location.replace("/Detail")




}

const HandleClickNext = (e)=>{    
    if(Number(current) == Number(9)){
        setNextdisb(true);
        return;
    }

    if(Number(current) < Number(star.count)/10){
        try{
            axios.get(star.next).then((response) => {
                console.log(response.data.results);
                setPosting(response.data);
                setPost(response.data.results);
                setCurrent(Number(current) + 1)
                setPrevdisb(false);
              });
        }catch(e){
            console.log(e)
        }
    }
        
    
    if (!starWars) return null;

}

const HandleClickPrevious = (e)=>{

    if(Number(current) == Number(1)){
        setPrevdisb(true);
        return;
    }

    if(Number(current) >=1){

        try{
            axios.get(star.previous).then((response) => {
              console.log(response.data.results);
              setPosting(response.data);
              setPost(response.data.results);
              setCurrent(Number(current) - 1)
              setNextdisb(false);
            });
    
        }catch(e){
            console.log(e)
        }
           
    }
   
    if (!starWars) return null;
}



React.useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((response) => {
      console.log(response.data.results);
      setPosting(response.data);
      setPost(response.data.results);
    });
}, []);

  if (!starWars) return null;

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Search For StarWar</h1>

    <form  noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Person Name" variant="outlined" fullWidth 
      onChange={handleClick}
      />
    </form>
   
    </Paper>

    <Paper elevation={3} style={paperStyledown}>


<div><h4><u>page: {current}</u></h4></div>
<div>
      <Button  disabled={disbprev} variant="contained" color="secondary" onClick={HandleClickPrevious}>previous</Button>
      <span id="spacing"></span>
      <Button  disabled={disbnext} variant="contained" color="primary" onClick={HandleClickNext}>next</Button>
</div>
<Table striped>
    
      <thead>
        <tr>
          <th>Action</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Mass</th>
        </tr>
      </thead>
      <tbody>
            {starWars.map(student => (
            <tr key={student.url}>
              <td><Button variant="contained" color="primary" value={student.url} onClick={HandleClickAction}>Détail</Button></td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.height}</td>
              <td>{student.mass}</td>
            </tr>
        ))}
      </tbody>


    </Table>


    </Paper>



    </Container>
  );
}