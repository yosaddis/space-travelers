import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/rockets';
import reducerMissions from './missions/missions';

const rootReducer = combineReducers({
  missions: reducerMissions.reducer,
  rockets: reducerRockets,
});

const store = configureStore({
  reducer: {
    missions: reducerMissions,
    rockets: reducerRockets,
  },
  middleware: [thunk, logger],
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
export { setupStore };
