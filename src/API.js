import { API_URL } from "./config";

const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
};

const apiSettings = {
    storeResults: async (results) => {
        const endpoint = `${API_URL}/user/result`
        console.log(`Making API call at ${endpoint} with ${results}`)
        return await fetch(endpoint, {
            ...defaultConfig,
            body: JSON.stringify(results)
        });
    }
}

export default apiSettings;
