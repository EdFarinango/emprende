

import React, { useContext } from 'react';
import { AuthContext } from '../../contexts';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
});


export const Dashboard = () => {



  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);



  const getData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/emprendimiento`,
        { headers: { 'accept': 'application/json', 'authorization': token } }
      );

      setData(response.data.data.emprendimientos)
    } catch (error) {
      console.log(error);
    }
  }












  return (


    <>
      <div className="container">

        <Row className='mt-2 d-flex justify-content-between'>

          {user && user.rol === 'superadmin' && (
            <Card className={classes.root}>
              <CardActionArea>

                <Link to="/administracion/super" >
                  <CardMedia
                    className={classes.media}
                    image="https://cdn-icons-png.flaticon.com/512/1705/1705768.png"
                    title="Super Usuario"

                  />
                </Link>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Super Administradores
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>


              </CardActions>
            </Card>


          )}

          {user && user.rol === 'superadmin' && (


            <Card className={classes.root}>
              <CardActionArea>
                <Link to="/administracion/admin" >
                  <CardMedia
                    className={classes.media}
                    image="https://cdn-icons-png.flaticon.com/512/1705/1705768.png"
                    title="Super Usuario"

                  />
                </Link>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Administradores
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>


                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

          )}


          <Card className={classes.root}>
            <CardActionArea>

              <Link


                to="/users/emprendimientos" >
                <CardMedia
                  className={classes.media}
                  image="https://cdn-icons-png.flaticon.com/512/2103/2103716.png"
                  title="emprendimiento"
                />
              </Link>




              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Administraci??n de emprendimientos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>


              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>


        </Row>

      </div>







    </>







  );
}
