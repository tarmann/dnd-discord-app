import axios from 'axios';

const BASE_URL = `https://jsonbox.io`;
const URL_ID = `dnd_6d9e326c183fde7b`;

export const getRecord = (recordId) => {
  const url = `${BASE_URL}/${URL_ID}/${recordId}`;
  return axios.get(url)
}

export const getAllRecords = () => {
  const url = `${BASE_URL}/${URL_ID}?limit=1000`;
  return axios.get(url)
}

export const getCollection = (collectionId) => {
  const url = `${BASE_URL}/${URL_ID}/collectionId?limit=1000`;
  return axios.get(url)
}

export const updateRecord = (recordId, data) => {
  const url = `${BASE_URL}/${URL_ID}/${recordId}`;
  return axios.put(url, data);
}

export const deleteRecord = (recordId) => {
  if(!recordId) return;
  
  const url = `${BASE_URL}/${URL_ID}/${recordId}`;
  return axios.delete(url);
}
