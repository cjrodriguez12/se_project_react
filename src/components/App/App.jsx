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
  Routes,
  useNavigate,
} from "react-router-dom/cjs/react-router-dom.min";
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
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
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
    setActiveModal("login");
  };
  useEffect(() => {
    if (isLoggedIn) {
      handleCloseModal();
    }
  }, [isLoggedIn]);
  // Function to handle user login
  const handleLogin = (userData) => {
    const navigate = useNavigate();
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
    loginUser(userData.email, userData.password)
      .then((res) => {
        if (res.token) {
          userData.token = res.token;
          setIsLoggedIn(true);
          handleCloseModal();
        } else {
          setIsLoggedIn(false);
        }
        localStorage.setItem("jwt", res.token);
        setCurrentUser(userData);
        return res;
      })
      .then((res) => {
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
  const ProtectedRoute = ({ isLoggedIn, currentUser, children }) => {
    return (
      <Route
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
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
            value={{ currentTemperatureUnit, handleToggleRoutesChange }}
          >
            <Header exact onCreateModal={handleCreateModal} location={city} />
            <Routes>
              <ProtectedRoute
                path="/profile"
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
              >
                <Profile
                  currentUser={currentUser}
                  clothingItems={clothingItems}
                  onSelectCard={handleSelectedCard}
                />
                <children />
              </ProtectedRoute>

              <Route exact path="/">
                <Main
                  initialClothes={clothingItems}
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                />
              </Route>
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
                <button
                  className="register_button"
                  onClick={handleRegisterModal}
                >
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
