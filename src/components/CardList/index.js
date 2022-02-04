import {Card} from '../Card'
import {useContext, useState} from "react";
import {GlobalContext} from "../App";

export const CardList = () => {
    const {state: {citiesList}} = useContext(GlobalContext);
    const [orderBy, setOrderBy] = useState('asc')

    const handleOnChangeSelect = (e) => {
        setOrderBy(e.target.value)
    }

    let sortedCitiesList = citiesList.sort()
    if(orderBy === 'desc'){
        sortedCitiesList.reverse()
    }
    return (
        <>
            <select className='Select' value={orderBy} onChange={handleOnChangeSelect}>
                <option value='asc' selected>By name asc</option>
                <option value='desc'>By name desc</option>
            </select>
            <div className="CardList">
                {
                    sortedCitiesList.map(city => <Card key={city} city={city}/>)
                }
            </div>
        </>
    )
}