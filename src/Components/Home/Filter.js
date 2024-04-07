import React,  { useEffect, useState } from 'react'
import FilterModal from './FilterModal'
import {  useDispatch } from 'react-redux'
import { getAllProperties } from '../../Store/Property/property-action'
import { propertyAction } from '../../Store/Property/property-slice'

const Filter = () => {
  // state for controlling modal visibility
  const [isModalOpen, setIsModalOpen]=useState(false)
  // stae for storing selected filter
  const [selectedFilters, setSelectedFilters]=useState({})
  const dispatch=useDispatch()
  useEffect(() =>{
    dispatch(propertyAction.updateSearchParams(selectedFilters))
    dispatch(getAllProperties())
  },[selectedFilters,dispatch])

  // function to handle opening modal/popupwindow
  const handleOpenModal =()=>{
    setIsModalOpen(true) //sets IsModalOpen to true to oen modal
  }

  // function to gande closing modal
  const handleCloseModal =()=>{
    setIsModalOpen(false) //sets IsModalOpen to false to close the modal
  }
   
  // function to handle changes in filters
  const handleFilterChange =(filterName,value)=>{
    // update the selected filter with new values
    setSelectedFilters((prevFilters)=>({
      ...prevFilters,
      [filterName]:value,
    }))
  }

  return (
   <>
     {/* click even to open modal */}
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
       tune
      </span>
      {isModalOpen && (
       <FilterModal
       selectedFilters={selectedFilters}
       onFilterChange={handleFilterChange}
       onClose={handleCloseModal}
      />
      )}
   </>
  )
}
export default Filter