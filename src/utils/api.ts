import {BACKEND_BASE_URL} from "./constants.ts";

export const fetcher = async (url: string) => {
    const response = await fetch(BACKEND_BASE_URL + url);
    if (!response.ok) {
        throw new Error('Es ist ein Fehler aufgetreten: ' + response.statusText);
    }
    return response.json();
};
