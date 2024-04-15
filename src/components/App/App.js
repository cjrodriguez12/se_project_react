import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile";
import { getInitialCards, deleteCards, postCards } from "../../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    getInitialCards()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleDeleteCard = () => {
    deleteCards(selectedCard._id)
      .then((response) => {
        setSelectedCard(null);
      })
      .catch((err) => {
        console.log(err);
      });
    handleCloseModal();
  };
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    console.log(card);
    setSelectedCard(card);
  };
  const onAddItem = (addItem) => {
    postCards(addItem)
      .then((response) => {
        console.log(addItem);
        return setClothingItems([addItem, ...clothingItems]);
      })
      .catch((err) => {
        console.log(err);
      });
    handleCloseModal();
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        setCity(temperature.location);
      })
      .catch((error) => {
        console.error(`Error: ${error.status}`);
      });
  }, []);

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header exact onCreateModal={handleCreateModal} location={city} />
        <Switch>
          <Route exact path="/">
            <Main
              initialClothes={clothingItems}
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
            />
          </Route>
          <Route path="/profile">
            <Profile
              initialClothes={clothingItems}
              onSelectCard={handleSelectedCard}
            />
          </Route>
        </Switch>

        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        <Footer />
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            deleteCard={handleDeleteCard}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
