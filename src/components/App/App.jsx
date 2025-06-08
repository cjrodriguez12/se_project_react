import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal.jsx";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/weatherApi.jsx";
import Footer from "../Footer/Footer.jsx";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile.jsx";
import { getInitialCards, deleteCards, postCards } from "../../utils/api.jsx";

//json-server --watch db.json --id _id --port 3001

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
      .then((res) => {
        const updateClothingItems = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(updateClothingItems);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const onAddItem = (addItem) => {
    postCards(addItem)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
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
              onCreateModal={handleCreateModal}
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
