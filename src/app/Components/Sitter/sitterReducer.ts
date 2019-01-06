import { SittersActions } from '../Sitter/sitterAction';
import { SittersState } from '../../store';
import { tassign } from 'tassign';

const INITIAL_STATE = {isProcessing: false, sitters: []};

export function sitterReducer(state: SittersState = INITIAL_STATE, action: any) {
  switch (action.type) {

    default:
      return state;
  }

}

