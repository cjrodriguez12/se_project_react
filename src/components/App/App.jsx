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
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import { getInitialCards, deleteCards, postCards } from "../../utils/api.jsx";

import RegisterModal from "../SignupModal/SignupModal.jsx";
import { loginUser, registerUser, getUserData } from "../../utils/auth.jsx";
import { CurrentUserContext } from "../../contexts/CurrentTempatureUnitContext.js/CurrentUserContext.jsx";
//json-server --watch db.json --id _id --port 3001
import LoginModal from "../LoginModal/LoginModal.jsx";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: "",
  });
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });
  const navigate = useNavigate();
  // Fetch initial clothing items from the server
  useEffect(() => {
    getInitialCards()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //close modal when user logs in
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
    errorMessage.error && setErrorMessage({ error: false, message: "" });
    setActiveModal("login");
  };
  useEffect(() => {
    if (isLoggedIn) {
      handleCloseModal();
    }
  }, [isLoggedIn]);

  // Function to handle user login
  const handleLogin = (userData) => {
    handleSignIn(userData)
      .then((res) => {
        if (res && res.token) {
          navigate("/profile", { replace: true });
          return res;
        }
      })
      .catch((err) => {
        console.error(`Error: ${err.status}`);
        setIsLoggedIn(false);
        setErrorMessage({ error: true, message: err.message });
        setCurrentUser({});
      });
  };
  // Function to handle user registration and login
  const handleRegister = (userData) => {
    registerUser(
      userData.email,
      userData.password,
      userData.name,
      userData.imageUrl
    )
      .then((userData) => {
        handleSignIn(userData);
        return userData;
      })
      .catch((err) => {
        console.error(`Error: ${err.status}`);
        setIsLoggedIn(false);
        setCurrentUser({});
      });
  };
  // Function to handle user sign-in
  // This function logs in the user and updates the current user context
  const handleSignIn = (userData) => {
    loginUser(userData.email, userData.password).then((res) => {
      if (res.token) {
        userData.token = res.token;
        setIsLoggedIn(true);
        handleCloseModal();
      } else {
        setIsLoggedIn(false);
        setCurrentUser({});
      }
      localStorage.setItem("jwt", res.token);
      setCurrentUser(userData);
    });
    return currentUser.then((res) => {
      getUserData(res.token)
        .then((res) => {
          setCurrentUser((prevUser) => ({
            ...prevUser,
            email: res.email,
            password: res.password,
            name: res.name,
            avatar: res.avatar,
          }));
          return res;
        })
        .catch((err) => {
          setIsLoggedIn(false);
          setCurrentUser({});
          console.error(`Error: ${err.status}`);
        });
    });
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
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const onAddItem = (addItem) => {
    postCards(addItem)
      .then((res) => {
        setClothingItems([res.data, ...clothingItems]);
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
  const ProtectedRoute = ({ Profile }) => {
    return (
      <Profile
        currentUser={currentUser}
        clothingItems={clothingItems}
        onSelectCard={handleSelectedCard}
      />
    );
  };
  const MainRoute = ({ Main }) => {
    return (
      <Main
        weatherTemp={temp}
        onSelectCard={handleSelectedCard}
        initialClothes={clothingItems}
      />
    );
  };
  return (
    <div className="App">
      <CurrentUserContext.Provider
        value={{ currentUser, isLoggedIn, handleLogin }}
      >
        <div className="page">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            {isLoggedIn && (
              <Header
                onCreateModal={handleCreateModal}
                onLoginModal={handleLoginModal}
                onRegisterModal={handleRegisterModal}
                location={city}
                isLoggedIn={isLoggedIn}
              />
            )}
            {!isLoggedIn && (
              <Header
                onCreateModal={handleCreateModal}
                onLoginModal={handleLoginModal}
                onRegisterModal={handleRegisterModal}
                location={city}
              />
            )}
            <Routes>
              <Route
                exact
                path="/"
                element={<MainRoute Main={Main} />}
                onSelectCard={handleSelectedCard}
              ></Route>

              <Route
                path="/profile"
                element={<ProtectedRoute Profile={Profile} />}
              ></Route>
            </Routes>

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
                onLoginModal={handleLoginModal}
              />
            )}
            {activeModal === "login" && (
              <LoginModal
                handleCloseModal={handleCloseModal}
                onLogin={handleLogin}
                errorMessage={errorMessage}
                isOpen={activeModal === "login"}
                onRegisterModal={handleRegisterModal}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
