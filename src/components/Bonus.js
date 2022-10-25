import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Bonus() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const paperStyledown={padding:'50px 20px', width:1000,margin:"20px auto"}
    const[starWars,setPost]=useState([])
    const[star,setPosting]=useState([])
    const classes = useStyles();
    const[axiosResp,setAxiosMult]=useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[modalval,setModalValue]=useState([]);


    axios.get("http://api.open-notify.org/iss-now.json").then((response) => {
        console.log("********+")
        setModalValue(response.data.iss_position)
        console.log("latitude",modalval.latitude)
        console.log("longitude",modalval.longitude)
        console.log("********+")
    });





   





  return (

    <Container>
      Bonus
    </Container>
  );
}