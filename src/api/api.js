import axios from "axios";

const APIKey = 'AIzaSyACJvgA4aPhAQBQZmoblgj3cEiVr6nr3dg';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
});


export const bookAPI = {
    getBookFromName(bookName, startIndex, maxResults, orderBy) {
      return instance.get(`/volumes?q=${bookName}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=${APIKey}`);
    },
}