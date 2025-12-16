import './App.css'
import { foods } from './data/foods'
import { foodImages } from './data/foodImages'

const MAX_KCAL = 884;

function App() {
  return (
    <div className="app">
      <h1>Food Energy Density</h1>
      <div className="food-list">
        {foods.map((food) => {
          const percentage = (food.kcalPer100g / MAX_KCAL) * 100;
          const imageSrc = foodImages[food.name];

          return (
            <div key={food.name} className="food-item">
              <div className="food-image">
                {imageSrc && <img src={imageSrc} alt={food.name} />}
              </div>
              <div className="food-content">
                <div className="food-header">
                  <span className="food-name">{food.name}</span>
                  <span className="food-calories">{food.kcalPer100g} kcal/100g</span>
                </div>
                <div className="bar-container">
                  <div className="bar-background"></div>
                  <div
                    className="bar-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App
