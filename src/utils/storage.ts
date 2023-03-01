const STORAGE_PREFIX = "react_app_name_";

const storage = {
    getToken: () => {
        return JSON.parse(window.localStorage.getItem(`${STORAGE_PREFIX}token`) as string);
    },
    setToken: (token: string) => {
        window.localStorage.setItem(`${STORAGE_PREFIX}token`, JSON.stringify(token));
    },
    clearToken: () => {
        window.localStorage.removeItem(`${STORAGE_PREFIX}token`);
    },
};

export default storage;