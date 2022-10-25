import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import axios from "axios";

  

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
    const[latitude,setLatitude]=useState();
    const[longitude,setLongitude]=useState();


    React.useEffect(() => {
      axios.get("http://api.open-notify.org/iss-now.json").then((response) => {

        setModalValue(response.data.iss_position)
        console.log("latitude",modalval.latitude)
        setLatitude(modalval.latitude)
        console.log("longitude",modalval.longitude)
        setLongitude(modalval.longitude)
        
     });
        const ifameData=document.getElementById("iframeId")
        ifameData.src=`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`
  },);



  return (
    <Container>
        <div>
           <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
    </Container>
  );
}
