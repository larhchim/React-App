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

export default function StarDetails() {
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

    React.useEffect(() => {
      axios.get(localStorage.getItem("key")).then((response) => {
        setPosting(response.data.starships);
        setPost(response.data);
      });
    }, []);



const HandleClickAction = (event)=>{
  axios.get(event.currentTarget.value).then((response) => {
    console.log(response)
    setModalValue(response.data)
  });
  handleShow();
}

const HandleRedict = (event)=>{
  axios.get(event.currentTarget.value).then((response) => {
    console.log(response)
    setPosting(response.data.starships);
    setPost(response.data);
    setModalValue(response.data)
  });
  handleClose();
}

  if (!starWars) return null;

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
        <div><h3>Starships Links If Exists</h3></div>
        <Table striped>
                <tbody>
                    <tr>
                        <th>Url </th>
                        <th>Action</th>
                    </tr>
                      {star.map(str => (
                        <tr key={str}>
                          <th>{str}</th>
                          <td><Button variant="contained" color="primary" value={str} onClick={HandleClickAction}>view Detail</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
     
        </Paper>

        <Paper elevation={3} style={paperStyledown}>

        <div>
          <h3>Informations Details per person</h3>
        </div>
        <Table striped>
            <tbody>
                <tr>
                    <th>Name </th>
                    <td>{starWars.name}</td>
                </tr>
                <tr>
                    <th>Eye Color </th>
                    <td>{starWars.eye_color}</td>
                </tr>
                <tr>
                    <th>Birth Year </th>
                    <td>{starWars.birth_year}</td>
                </tr>
                <tr>
                    <th>Gender </th>
                    <td>{starWars.gender}</td>
                </tr>
                <tr>
                    <th>Ressource Creation Date </th>
                    <td>{starWars.created}</td>
                </tr>
                <tr>
                    <th>Ressource Edition Date </th>
                    <td>{starWars.edited}</td>
                </tr>
            </tbody>
        </Table>

        </Paper>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>StarShip Instance Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped>
                <tbody>
                    <tr>
                        <th>Name </th>
                        <td>{modalval?.name}</td>
                    </tr>
                    <tr>
                        <th>Model </th>
                        <td>{modalval?.model}</td>
                    </tr>
                    <tr>
                        <th>Manufacturer </th>
                        <td>{modalval?.manufacturer}</td>
                    </tr>
                </tbody>
            </Table>

            <Table striped>
                <tbody>
                    {modalval.pilots?.map(str => (
                        <tr key={str}>
                          <th>Pilot</th>
                          <td>{str}</td>
                          <td><Button variant="contained" color="primary" value={str} onClick={HandleRedict}>view Detail</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}