export const submitToSheet = async (data, customURL = null) => {
  const scriptURL = customURL || "https://script.google.com/macros/s/AKfycbyGcnX27Wul_8O30wg45iEygv5Hh1MrtbZfMqfLZb6v1HawdDvx2e5dnNdAbjReMB7H/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Submission error:", error);
    throw error;
  }
};
