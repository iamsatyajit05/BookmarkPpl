import Profile from "../models/Profile.js";
import express from "express";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
    const newRecord = new Profile(req.body);
    try {
        await newRecord.save();
        res.status(200).json({ message: "Record created successfully!" });
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        await Profile.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
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

export default router;