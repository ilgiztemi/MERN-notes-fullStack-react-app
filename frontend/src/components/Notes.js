import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNotes } from '../context/NotesContext';
import '../App.css'


const Notes = () => {
    const { notes, setNotes, handleDelete, handleUpdate, flag, input, handleChange } = useNotes();
    useEffect( () => {
        fetch( 'http://localhost:4001/notes' ).then( res => {
            if ( res.ok ) {
                return res.json();
            }
        } ).then( data => setNotes( data ) )
    } )
    return (
        <div className='notes'>
            {
                notes.map( note => (
                    <Card key={ note._id } sx={ { width: 345, height: 395, m: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bm90ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                                alt="green iguana"
                            />
                            <CardContent>
                                {
                                    flag && note._id === input._id ?
                                        <>
                                            <TextField id="standard-basic"
                                                onChange={ handleChange }
                                                name="title"
                                                value={ input.title }
                                                variant="standard"
                                                sx={ {
                                                    '& > :not(style)': { textAlign: 'left', width: '300px' },
                                                } } />
                                            <TextField id="standard-basic"
                                                onChange={ handleChange }
                                                name="content"
                                                value={ input.content }
                                                multiline
                                                variant="standard"
                                                sx={ {
                                                    '& > :not(style)': { textAlign: 'left', width: '300px' },
                                                } } />
                                        </> :
                                        <><Typography gutterBottom variant="h5" component="div">
                                            { note.title }
                                        </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                { note.content }
                                            </Typography>
                                        </>
                                }


                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {
                                flag && note._id === input._id ?
                                    <Button onClick={ () => handleUpdate( note ) } size="small" color="primary">
                                        Save
                                    </Button>
                                    : <Button onClick={ () => handleUpdate( note ) } size="small" color="primary">
                                        Edit
                                    </Button>
                            }
                            <Button onClick={ () => handleDelete( note._id ) } size="small" color="primary">
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                ) )
            }
        </div>
    )
}

export default Notes