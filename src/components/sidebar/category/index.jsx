import React from 'react'
import './style.css'
import { Input } from '../../Input'

export const Category = ({handleChange}) => {
  return <div className='category-div'>
    <h2 className='sidebar-title'>Category</h2>

    <div>
    <label className="sidebar-label-container">
      <input type="radio" onChange={handleChange}  value= "" name='test'/>
      <span className='checkmark'></span>All
    </label>

    <Input 
    handleChange={handleChange}
    value='sneakers'
    title='Sneakers'
    name='test'
    />
    <Input 
    handleChange={handleChange}
    value='flats'
    title='Flats'
    name='test'
    />
    <Input 
    handleChange={handleChange}
    value='sandals'
    title='Sandals'
    name='test'
    />
    <Input 
    handleChange={handleChange}
    value='heels'
    title='Heels'
    name='test'
    />
    
    
    </div>
  </div>
}
