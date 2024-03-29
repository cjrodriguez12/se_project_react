import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
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
      })
      .catch((error) => {
        console.error(`Error: ${error.status}`);
      });
  }, []);

  console.log(currentTemperatureUnit);

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div>
          <Header onCreateModal={handleCreateModal} />
          <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
        </div>
        {activeModal === "create" && (
          <ModalWithForm title="New Garment" onClose={handleCloseModal}>
            <label className="modal_form-label">
              Name
              <input
                className="modal_form-input"
                placeholder="Name"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
              ></input>
            </label>
            <label className="modal_form-label">
              Image
              <input
                className="modal_form-input"
                placeholder="Image URL"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
              ></input>
            </label>

            <div className="modal_radio">
              <p className="modal_radio-title">Select Weather Type:</p>
              <div className="modal_radio-input">
                <label>
                  <input name="radio" type="radio" id="hot" value="hot" />
                  Hot
                </label>
              </div>
              <div className="modal_radio-input">
                <label>
                  <input name="radio" type="radio" id="warm" value="warm" />
                  Warm
                </label>
              </div>
              <div className="modal_radio-input">
                <label>
                  <input name="radio" type="radio" id="cold" value="cold" />
                  Cold
                </label>
              </div>
            </div>
          </ModalWithForm>
        )}
        <Footer />
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
