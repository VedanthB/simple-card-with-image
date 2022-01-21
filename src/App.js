import "./styles.css";

/* 
card : { cardLabel, cardBody }
onPrimaryButtonClick,
*/

export default function App() {
  return (
    <div className="container">
      <div className="cardContainer">
        <div className="cardMedia"></div>
        <div className="cardContent">
          <h5 className="cardLabel">Lizard</h5>
          <div className="cardBody">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </div>
        </div>
      </div>
    </div>
  );
}
