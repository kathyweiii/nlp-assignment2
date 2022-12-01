import axios from "axios";

export const languageRequest = axios.create({
  baseURL: "https://translate-plus.p.rapidapi.com/",
  headers: {
    // "X-RapidAPI-Key": "70a4432f68msha24cef369d8a137p1989c8jsne705f69c5e6c",
    // "X-RapidAPI-Key": "e55a0145afmsh63d2f7d5dc28088p14e733jsne71c16274560",
    "X-RapidAPI-Key": "701d4e5029mshe84c89feb202844p10a147jsna98c75e4fa35",
    "X-RapidAPI-Host": "translate-plus.p.rapidapi.com",
  },
});

export const languageTypeReq = () => languageRequest.get();
export const detectLanguage = () => languageRequest.get("language_detect");

// url: 'https://translate-plus.p.rapidapi.com/language_detect'
