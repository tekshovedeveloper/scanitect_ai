// const baseURL =  '/api';
const baseURL = 'http://localhost:4000'

export const postRequest = async (endpoint, data) => {
  try {

    console.log("the url", `${baseURL}/${endpoint}`)
  
    const response = await fetch(`${baseURL}/${endpoint}`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
};

export async function getData(endpoint, access_token) {
  console.log(`${baseURL}/${endpoint}`)
  const res = await fetch(`${baseURL}/${endpoint}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'credentials': 'include',
    },
  })
  return res.json()
}



export const addSubscriptionEmail = async (endpoint, data) => {
  try {

    
  
    const response = await fetch(`${baseURL}/${endpoint}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
  body: JSON.stringify(data),
    });

    const responseData = await response.json();
       return {
      status: response.status,
      ok: response.ok,
      data: responseData,
    };
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
};


export async function getAllEmail(endpoint) {
  console.log(`${baseURL}/${endpoint}`)
  const res = await fetch(`${baseURL}/${endpoint}`, {
    method: "GET",
    headers: {
      // 'Authorization': `Bearer ${access_token}`,
      'credentials': 'include',
    },
  })
   const responseData = await res.json();
       return {
      status: res.status,
      ok: res.ok,
      data: responseData,
    };
}



