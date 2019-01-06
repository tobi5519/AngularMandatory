import { combineReducers } from 'redux';
import { sitterReducer } from './Components/Sitter/sitterReducer';
import { Sitter } from './entities/sitter';
import { Baby } from './Entities/Baby';

export class SittersState {
  sitters: Sitter[];
  isProcessing: boolean;
}

export class BabyState {
  babies: Baby[];
  isProcessing: boolean;
}

export class IAppState {
  sitters?: SittersState;
  babies?: BabyState;
  // networking?: NetworkState;
}
export const rootReducer = combineReducers<IAppState>({
  sitters: sitterReducer,
  //babies: babyReducer

// router: routerReducer
});
