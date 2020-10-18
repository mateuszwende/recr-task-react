import axios from 'axios';

import { RequestParams } from '../types/star-wars';

const url = "https://swapi.dev/api/";

export const getStarWarsPeople = async (params: RequestParams) =>
  axios.get(`${url}people`, { params });

export const getStarWarsPerson = async (id: string) =>
  axios.get(`${url}people/${id}`);
