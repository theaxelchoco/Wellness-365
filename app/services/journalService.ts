import axios from "axios";

export const fetchJournalEntries = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/journal");
    return response.data.entries;
  } catch (error) {
    console.error("Error fetching journal entries:", error);
    return [];
  }
};