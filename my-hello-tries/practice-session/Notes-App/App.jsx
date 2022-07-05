import React from "react";
import Sidebar from"./components/Sidebar";
import Editor from"./components/Editor";
import{data}from"./data";
import Split from"react-split";
import {nanoid} from "nanoid";

export default function App() {
    const[notes,setNotes]=
    const[currentNoteId,setCurrentNoteId]React.useState(
        (notes[0]&& notes[0].id)||
                               React.useState([])
                                    
function deleteNote(event, noteId) {
    event.stopPropagation()
    setNotes(oldNotes => oldNotes.filter)
}

function allNewDice() {
    const newDice = [];
    for(let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6));

    }
}






