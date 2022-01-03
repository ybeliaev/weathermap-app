import {Card} from '../Card'

export const CardList = ({citiesList}) => {
  return (
    <div className="CardList">
      {citiesList.map((city) => (
        <Card key={city} city={city} />
      ))}
    </div>
  );
}