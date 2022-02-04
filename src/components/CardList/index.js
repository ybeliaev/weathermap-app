import {Card} from '../Card'
import {useContext, useState} from "react";
import {GlobalContext} from "../App";

export const CardList = () => {
    const {state: {citiesList}} = useContext(GlobalContext);
    const {orderBy, setOrderBy} = useState('asc')
    return (
        <>
            <select className='Select' value={orderBy}>
                <option value='desc'>By name desc</option>
                <option value='asc'>By name asc</option>
            </select>
            <div className="CardList">
                {
                    citiesList.map(city => <Card key={city} city={city}/>)
                }
            </div>
        </>
    )
}