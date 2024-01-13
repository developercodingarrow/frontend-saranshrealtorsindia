// GENERIC HANDLER FOR SEND ONLY DATA
export const genericDataHandler = (sendDataFunction) => {
  return async (data) => {
    try {
      const result = await sendDataFunction(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// GENERIC HANDLER FOR SEND DATA AND OPTIONAL UrlToken
export const genericDataAndSlugHandler = (sendDataFunction) => {
  return async (data, slug) => {
    try {
      console.log(data);
      const result = await sendDataFunction(data, slug);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};