const asyncHandler = require('express-async-handler')

const Item = require('../models/itemModel')

// @desc Get Items
// @route GET/fridge/items
// @access private
const getItems = asyncHandler (async(req, res) => {
  const items = await Item.find()

  res.status(200).json(items)
})

// @desc Post Items
// @route POST/fridge/items
// @access private
const postItem = asyncHandler (async (req, res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error('item name cannot be null')
  }

  let date = new Date(req.body.dateAdded)
  date.setDate(date.getDate() + parseInt(req.body.dayBest))  
  


  const goal = await Item.create( {
    itemName: req.body.name,
    quantity: parseInt(req.body.quantity),
    dateAdded: req.body.dateAdded,
    dateExpired: date,
    daysToExpire: parseInt(req.body.dayBest),
    color: req.body.color
  }
    
  )

  res.status(200).json(goal)

})

// @desc Update Items
// @route PUT/fridge/items/:id
// @access private
const updateItem = asyncHandler (async (req, res) =>{
  const item = Item.findById(req.params.id)
  if(!item){
    res.status(400)
    throw new Error('item not found.')
  }
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  
  
  
  res.status(200).json(updatedItem)

})
// @desc Delete Items
// @route DELETE/fridge/items/:id
// @access private
const deleteItem = asyncHandler(async (req, res) =>{
  const item = Item.findById(req.params.id)
  await item.deleteOne()

  res.status(200).json({id: req.params.id})
})






module.exports = {
  getItems, postItem, updateItem, deleteItem
}
