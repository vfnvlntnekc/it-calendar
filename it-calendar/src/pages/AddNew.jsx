import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddNew = () => {
    const marginStyle = { margin: "10px 0", width: '50vw' }
    const gridStyle = { height: '100vh', width: 'vmax', background: '#F8F8F8' }
    const navigate = useNavigate()
    return (
        <Grid container style={gridStyle}>
            <Grid item container xs={12} direction="column"
                justifyContent="flex-start"
                alignItems="center"
                style={{marginTop: 10}} >

                <Button type='submit'
                    style={marginStyle}
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/addProject')}
                    fullWidth >
                    Добавить проект
                </Button>
                <Button type='submit'
                    style={marginStyle}
                    variant="contained"
                    onClick={() => navigate('/addStep')}
                    color="primary"
                    fullWidth >
                    Добавить этап
                </Button><Button type='submit'
                    style={marginStyle}
                    variant="contained"
                    onClick={() => navigate('/addTask')}
                    color="primary"
                >
                    Добавить задачу
                </Button>


            </Grid>
        </Grid>
    )
}

export default AddNew;