import axios from "axios";

export const fetchTasks = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/task");
    console.log("API Response:", response.data);

    return response.data.tasks || []; 
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};