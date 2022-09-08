import { createContext, useContext, useState } from "react";
import axios from 'axios';

export const NotesContext = createContext();
export const NotesProvider = ( { children } ) => {
    const [ input, setInput ] = useState(
        {
            title: "",
            content: ""
        }
    );
    const [ notes, setNotes ] = useState( [ {
        title: '',
        content: ''
    }, ] );
    const [ flag, setFlag ] = useState( false );
    const handleChange = ( event ) => {
        const { name, value } = event.target;
        setInput( prevValues => {
            return {
                ...prevValues,
                [ name ]: value
            }
        } )
    }
    const handleSubmit = ( event ) => {
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        }
        axios.post( "http://localhost:4001/create", newNote )
        setInput( {
            title: "",
            content: ""
        } )
    }
    const handleDelete = ( _id ) => {
        axios.post( "http://localhost:4001/delete", { _id } )
    }
    const handleUpdate = ( note ) => {
        setInput( {
            _id: note._id,
            title: note.title,
            content: note.content
        } )
        setFlag( !flag );
        if ( Object.keys( input ) !== "" ) {
            console.log( input );
            const _id = note._id;
            axios.post( "http://localhost:4001/update", { _id, title: input.title, content: input.content } )
        }
    }
    return (
        <NotesContext.Provider value={ { input, setInput, handleChange, handleSubmit, notes, setNotes, handleDelete, handleUpdate, flag, setFlag } }>
            { children }
        </NotesContext.Provider>
    )
}
export const useNotes = () => useContext( NotesContext );