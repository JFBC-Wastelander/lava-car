import Veiculo from "../models/veiculo_model.js"

export const store = async (req, res) => {
    try {
        await Veiculo.create(req.body)
        res.status(201).json()
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const index = async (req, res) => {
    try {
        let content = await Veiculo.find(req.query).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const show = async (req, res) => {
    try {
        let content = await Veiculo.find(req.params.id).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const update = async (req, res) => {
    try {
        let content = await Veiculo.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const destroy = async (req, res) => {
    try {
        let content = await Veiculo.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err.message)
    }
}