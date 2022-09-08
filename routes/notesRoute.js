const express = require("express");
const router = express.Router();
const Note = require("../models/notesModel");

router.route('/create').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    })
    newNote.save();
})
router.route('/notes').get((req, res) => {
    Note.find()
    .then(notes => res.json(notes))
})
router.route('/delete').post((req, res) => {
    Note.findByIdAndDelete((req.body._id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  

})
router.route('/update').post((req, res) => {
    Note.findByIdAndUpdate(req.body._id, 
        {title:req.body.title, content:req.body.content}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
})
module.exports = router;