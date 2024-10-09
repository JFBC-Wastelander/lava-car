import Cliente from "../models/cliente_model.js"

export const store = async (req, res) => {
    try {
        await Cliente.create(req.body)
        res.status(201).json()
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const index = async (req, res) => {
    try {
        let content = await Cliente.find().exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const show = async (req, res) => {
    try {
        let content = await Cliente.find(req.params.id).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const update = async (req, res) => {
    try {
        let content = await Cliente.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const destroy = async (req, res) => {
    try {
        let content = await Cliente.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}