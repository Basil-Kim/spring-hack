const asyncHandler = require('express-async-handler')

const Item = require('../models/itemModel')
const User = require('../models/userModel')

// @desc Get Items
// @route GET/fridge/items
// @access private
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({user: req.user.id})

  res.status(200).json(items)
})

// @desc Post Items
// @route POST/fridge/items
// @access private
const postItem = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('item name cannot be null')
  }

  let date = new Date(req.body.dateAdded)
  date.setDate(date.getDate() + parseInt(req.body.dayBest))

  const item = await Item.create({
    user:req.user.id,
    itemName: req.body.name,
    quantity: parseInt(req.body.quantity),
    dateAdded: req.body.dateAdded,
    dateExpired: date,
    daysToExpire: parseInt(req.body.dayBest),
    color: req.body.color
  }

  )

  res.status(200).json(item)

})

// @desc Update Items
// @route PUT/fridge/items/:id
// @access private
const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id)
  
  if (!item) {
    res.status(400)
    throw new Error('item not found.')
  }

  const user = await User.findById(req.user.id)

  // Check if user exist
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  //Check for the item id and user id is matching
  if(item.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('User not authorized to modify this item')
  }

  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })



  res.status(200).json(updatedItem)

})
// @desc Delete Items
// @route DELETE/fridge/items/:id
// @access private
const deleteItem = asyncHandler(async (req, res) => {
  
  const item = await Item.findById(req.params.id)
  if(!item){
    res.status(400)
    throw new Error('Item not foun')
  }

  const user = await User.findById(req.user.id)

  // Check if user exist
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }
  
  //Check for the item id and user id is matching
  if(item.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized to modify this item')
  }
  
  
  
  await item.deleteOne()

  res.status(200).json({ id: req.params.id })
})






module.exports = {
  getItems, postItem, updateItem, deleteItem
}
