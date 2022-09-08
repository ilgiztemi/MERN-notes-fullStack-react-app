import React from 'react'
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNotes } from '../context/NotesContext';

const CreateNotes = () => {
    const { input, handleChange, handleSubmit } = useNotes();
    return (
        <div className='create'>
            <Box
                onSubmit={ handleSubmit }
                component="form"
                sx={ {
                    '& > :not(style)': { m: " 10px auto", width: '400px' },
                } }
                noValidate
                autoComplete="off"
            >
                <h1>Notes App</h1>
                <div>
                    <TextField id="outlined-basic"
                        onChange={ handleChange }
                        name="title"
                        value={ input.title }
                        label="title" variant="outlined"
                        sx={ {
                            '& > :not(style)': { m: 1, textAlign: 'left', width: '400px' },
                        } } />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        onChange={ handleChange }
                        name="content"
                        value={ input.content }
                        label="content" variant="outlined"
                        multiline
                        sx={ {
                            '& > :not(style)': { m: 1, textAlign: 'left', width: '400px' },
                        } } />
                </div>
                <Button
                    type="submit"
                    variant="contained">Add Note</Button>
            </Box>
        </div>
    )
}

export default CreateNotes