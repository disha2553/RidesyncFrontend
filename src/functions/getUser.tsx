import React from "react";
import axios from "axios";

const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const isToday = (storedDate: string) => {
  const today = getTodayDateString();
  return storedDate === today;
};

const getUser = async (userId: string, cached: boolean = true) => {
  try {
    const cachedUserData = localStorage.getItem("savedUser");
    const lastUpdatedDate = localStorage.getItem("lastUpdatedDate");

    // If cache is allowed and data is from today, return cached data but still fetch latest in background
    if (cached === true && cachedUserData && lastUpdatedDate && isToday(lastUpdatedDate)) {
      console.log("Fetched from cache, but updating in background...");

      // Fetch updated user data in the background
      axios.get("https://ridesyncbackend.onrender.com/get_user", { params: { userId } })
        .then((response) => {
          localStorage.setItem("savedUser", JSON.stringify(response.data));
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("lastUpdatedDate", getTodayDateString());
        })
        .catch((error) => console.error("Error fetching user data:", error));

      return JSON.parse(cachedUserData);  // Return cached data immediately
    }

    // Otherwise, fetch fresh data from Firestore
    let response = await axios.get("https://ridesyncbackend.onrender.com/get_user", { params: { userId } });

    // Update localStorage with latest balance
    localStorage.setItem("savedUser", JSON.stringify(response.data));
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("lastUpdatedDate", getTodayDateString());

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export default getUser;
