import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js'

// Controllers for connecting api calls to cloud database:
export const getAllVhs = async (req, res) => {
    try{
        const vhs = await PostMessage.find();
        
        res.status(200).json(vhs);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createVhs = async (req, res) => {
    const {title, movieYear, vhsYear, vhsCompany, genre, vhsId, clamShell}= req.body;

    const newVHS = new PostMessage({title, movieYear, vhsYear, vhsCompany, genre, vhsId, clamShell});
   try{
        await newVHS.save();

        res.status(201).json(newVHS)
   }
   catch(error){
    res.status(409).json({message: error.message})
   }
}
export const updateVhs = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with that id");
    }

    const updatedVHS = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedVHS);
}
export const deleteVhs = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that id");
    }
    
    await PostMessage.findByIdAndRemove(id);

    res.send("Entry deleted!")
}
/*
export const findVhs = (req, res) => {
    const {id} = req.params;

    

    res.send(found);
}
*/