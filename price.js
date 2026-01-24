function selectPlan(name, price, days) {
  localStorage.setItem("selectedPlan", name);
  localStorage.setItem("planPrice", price);
  localStorage.setItem("planDays", days);
  window.location.href = "booking.html";
}
