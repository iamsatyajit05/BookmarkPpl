import Profile from "../models/Profile.js";
import express from "express";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
    const newRecord = new Profile(req.body);
    try {
        const embedding = await getEmbedding(newRecord.description);
        newRecord['plot_embedding'] = embedding;

        await newRecord.save();
        res.status(200).json({ message: "Record created successfully!" });
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    const updateRecord = req.body;
    try {
        const embedding = await getEmbedding(updateRecord.description);
        updateRecord['plot_embedding'] = embedding;

        await Profile.findByIdAndUpdate(
            req.params.id,
            { $set: updateRecord },
            { new: true }
        );
        res.status(200).json({ message: "Record updated successfully!" });
    } catch (error) {
        res.status(500).json(error);
    }
});


// DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Profile.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Record deleted successfully!" });
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET
router.get("/:email", async (req, res) => {
    try {
        const profiles = await Profile.find({ createdBy: req.params.email });
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json(error);
    }
});

// SEARCH
router.get("/search/:query", async (req, res) => {
    try {
        // const profiles = await Profile.find({ createdBy: req.params.email });
        const profiles = await Profile.aggregate([
            {
                $search: {
                    index: "description",
                    text: {
                        query: req.params.query,
                        path: {
                            wildcard: "*"
                        }
                    }
                }
            },
            {
                $project: { "_id": 1, "name": 1, "plateform": 1, "description": 1, "url": 1, "createdBy": 1 }
            }
        ]);
        console.log(profiles);
        res.status(200).json(profiles);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


export default router;