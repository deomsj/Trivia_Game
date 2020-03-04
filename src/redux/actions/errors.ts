import { NETWORK_ERROR } from './types';
import { Action } from 'redux';

export const networkError = (): Action => ({ type: NETWORK_ERROR });
