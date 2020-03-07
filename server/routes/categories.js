const express = require('express')
const router = express.Router()
const Category = require('../models/category')

// Get all subscribers
router.get('/', async(req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories)
        res.send()
      } catch (err) {
        res.status(500).json({ message: err.message })

      }

})

// Get one subscriber
router.get('/:id', (req, res) => {
})

// Create one subscriber
router.post('/', async(req, res) => {
    const category = new Category({
        category: req.body.category,
        refer: req.body.refer
      })
    
      try {
          console.log(category)
        const newCategory = await category.save()
        res.status(201).json(newCategory)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

// Update one subscriber
router.patch('/:id', (req, res) => {
})

// Delete one subscriber
router.delete('/:id', (req, res) => {
})

module.exports = router