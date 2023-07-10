import React from 'react';
import Button from '@material-ui/core/Button'
import { Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import image5 from '../images/image5.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image6 from '../images/image6.png'
import image3 from '../images/image3.png'
import '../utils/styles.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()

    const paperStyle = { padding: 10, height: '50vh', width: 315, margin: "20vh 15vw ", background: '#F8F8F8' }
    const marginStyle = { margin: "10px 0" }
    const gridStyle = { height: '100vh', width: 'vmax', background: '#F8F8F8' }
    return (
        <Grid container style={gridStyle}>
            <Grid item container xs={6} direction="column" >
                <Paper align='center' elevation={0} style={paperStyle}>
                    <Grid>
                        <h2>С возвращением!</h2>
                        Пожалуйста, введите данные.
                        <div></div>

                        <TextField
                            label='Email'
                            placeholder='Введите email'
                            variant="outlined"
                            style={marginStyle}
                            fullWidth>
                        </TextField>

                        <TextField
                            label='Пароль'
                            placeholder='Введите пароль'
                            type='password'
                            variant="outlined"
                            style={marginStyle}
                            fullWidth>
                        </TextField>

                        <Button type='submit'
                            style={marginStyle}
                            variant="contained"
                            color="primary"
                            fullWidth >
                            Войти
                        </Button>
                        Нет аккаунта?
                        <Typography style={marginStyle}>
                            <Link
                                component="button"
                                onClick={() => navigate('/auth')} >
                                Зарегистрируйтесь бесплатно!
                            </Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item container xs={6}>
                <img className="image2" src={image2} height={143} width={158} alt='image2' />
                <img className="image6" src={image6} height={59} width={62} alt='image6' />
                <img className="image1" src={image5} height={57} width={161} alt='image5' />
                <img src={image1} height={389} width={362} alt='image1' />
                <img className="image3" src={image3} height={150} width={200} alt='image3' />
            </Grid>
        </Grid>
    );
};

export default Login;