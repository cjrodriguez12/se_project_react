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
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile.jsx";
import { getInitialCards, deleteCards, postCards } from "../../utils/api.jsx";
import RegisterModal, {
  email,
  password,
  name,
  imageUrl,
} from "../RegisterModal/RegisterModal.jsx";
import { loginUser, registerUser, getUserData } from "../../utils/auth.jsx";
//json-server --watch db.json --id _id --port 3001

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email,
    password,
    name,
    imageUrl,
  });

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
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleRegisterModal = () => {
    setActiveModal("register");
  };
  const handleLoginModal = () => {
    setActiveModal("login");
  };
  const handleSignIn = (userData) => {
    loginUser(userData.email, userData.password)
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(`Error: ${err.status}`);
      });
  };
  const handleLogin = (userData) => {
    if (!userData) {
      setIsLoggedIn(false);
      setCurrentUser({});
      return;
    } else {
      getUserData(userData.token)
        .then((data) => {
          handleSignIn(data);
        })
        .catch((err) => {
          console.error(`Error: ${err.status}`);
        });
      setIsLoggedIn(true);
    }
    setCurrentUser(userData);
  };
  const handleRegister = (userData) => {
    registerUser(
      userData.email,
      userData.password,
      userData.name,
      userData.imageUrl
    )
      .then((data) => {
        handleSignIn(data);
      })
      .catch((err) => {
        console.error(`Error: ${err.status}`);
        setIsLoggedIn(false);
        setCurrentUser({});
      });
  };
  useEffect(() => {
    if (isLoggedIn) {
      handleCloseModal();
    }
  }, [isLoggedIn]);
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
          {isLoggedIn ? (
            <Route path="/profile">
              <Profile
                initialClothes={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
              />
            </Route>
          ) : (
            <Redirect from="/profile" to="/" />
          )}
          <Route exact path="/">
            <Main
              initialClothes={clothingItems}
              weatherTemp={temp}
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
        {activeModal === "register" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            onLogin={handleRegister}
            isOpen={activeModal === "register"}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            onLogin={handleLogin}
            isOpen={activeModal === "login"}
          />
        )}
        {!isLoggedIn && (
          <div className="login_register_buttons">
            <button className="login_button" onClick={handleLoginModal}>
              Log In
            </button>
            <button className="register_button" onClick={handleRegisterModal}>
              Register
            </button>
          </div>
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
