




const ApiBaseUrl = process.env.REACT_APP_API_URL || 'https://localhost:7105/';    

const ApiTimeout = parseInt(process.env.REACT_APP_API_TIMEOUT, 10) || 30000; // Default to 30 seconds 

export const api  ={

async getPostWhitAllData(){

    try {


        const controller  = new AbortController();  

        const response = await fetch(`${ApiBaseUrl}/Post/full-data`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        });

        const timeoutId = setTimeout(() => controller.abort(), ApiTimeout);

        const data = await response.json();
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch post with all data');
        }

        return data;    


    }    catch (error) {


        console.error('Error fetching post with all data:', error);
        throw error;
    }
}




}