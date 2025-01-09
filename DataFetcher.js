import React, { useEffect } from 'react';
import axios from 'axios';

const DataFetcher = ({ onDataFetched, requestData }) => {
  useEffect(() => {
    if (!requestData) {
      return; // Do nothing if no data to update
    }

    axios
      .put(`http://192.168.90.47:4001/api/booking_details${requestData.id}`, requestData) // Replace with your API endpoint
      .then((response) => {
        onDataFetched(response.data); // Pass the updated data to the parent
      })
      .catch((error) => {
        console.error('Error updating data:', error.message);
        onDataFetched(null); // Pass null in case of failure
      });
  }, [onDataFetched, requestData]);

  return null; // This component doesn't render anything directly
};

export default DataFetcher;
