const TOGGLE_THEME_MODE = "themeModule/TOGGLE_THEME_MODE";

export const toggleThemeMode = () => {
  return {
    type: TOGGLE_THEME_MODE,
  };
};

const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true",
};

export default function themeModule(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME_MODE:
      //테마 모드 로컬스토리지에 저장
      const updatedDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", updatedDarkMode);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
