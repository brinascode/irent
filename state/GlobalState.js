import React, { useReducer } from "react";

export const AppContext = React.createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case action.test:
      return {
        ...state,
        [action.payload]: "passed",
      };
  }
};

const GlobalState = ({ children }) => {
  const [globalState, dispatch] = useReducer(globalReducer, {
    rentalData: initialData,
    favorites: [],
  });
  return (
    <AppContext.Provider value={{ globalState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;

const initialData = [
  {
    id: 1,
    image:
      "https://architecturesstyle.com/wp-content/uploads/2019/09/pretty-houses-2.jpg",
    address: "123 Happiness Ave",
    city: "Arlington",
    state: "VA",
    zip: "22207",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    image:
      "https://blog.neighbor.com/wp-content/uploads/2020/03/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000.jpeg",
    address: "456 Success Lane",
    city: "Arlington",
    state: "VA",
    zip: "22207",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    image:
      "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg",
    address: "543 Beauty Street",
    city: "Alexandria",
    state: "VA",
    zip: "22205",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    image:
      "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607",
    address: "111 Joyride St",
    city: "Arlington",
    state: "VA",
    zip: "22208",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
