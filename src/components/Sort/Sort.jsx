import React from 'react'
import { sortAlphabetical, sortAge, deSort } from '../../Redux/sortSlice'
import { useDispatch } from 'react-redux'

export default function Sort() {
    const dispatch = useDispatch();

    return (
        <div className="dropdown text-end my-3">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort Players
            </button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => {
                    dispatch(deSort())
                }} >Orginial Sorting</button></li>
                <li><button className="dropdown-item" onClick={() => {
                    dispatch(sortAge({ order: -1 }))
                }} >Younder to Older</button></li>
                <li><button className="dropdown-item" onClick={() => {
                    dispatch(sortAge({ order: 1 }))
                }}>Older to Younger</button></li>
                <li><button className="dropdown-item" onClick={() => {
                    dispatch(sortAlphabetical({ order: 1 }))
                }} >Alphabetically A-Z</button></li>
                <li><button className="dropdown-item" onClick={() => {
                    dispatch(sortAlphabetical({ order: -1 }))
                }} >Alphabetically Z-A</button></li>
            </ul >
        </div >
    )
}
