import {Card} from '../Card'
import {useState} from "react";

import {withGlobalState} from "../../hocs/withGlobalState";

const CardListNoState = ({state}) => {
    const [orderBy, setOrderBy] = useState('asc')

    const handleOnChangeSelect = (e) => {
        setOrderBy(e.target.value)
    }

    let sortedCitiesList = state.citiesList.sort()
    if (orderBy === 'desc') {
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
export const CardList = withGlobalState(CardListNoState);