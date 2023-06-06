let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");

let errorDay = document.getElementById("error-day");
let errorMonth = document.getElementById("error-month");
let errorYear = document.getElementById("error-year");

let button = document.getElementById("arrow");

button.addEventListener("click", function() {
  if (dayInput.value.trim() === "") {
    errorDay.style.display = "block";
  } else {
    errorDay.style.display = "none";
  }
  if (monthInput.value.trim() === "") {
    errorMonth.style.display = "block";
  } else {
    errorMonth.style.display = "none";
  }
  if (yearInput.value.trim() === "") {
    errorYear.style.display = "block";
  } else {
    errorYear.style.display = "none";
  }

  // Run calculateAge() only if all input fields are non-empty
  if (dayInput.value.trim() !== "" && monthInput.value.trim() !== "" && yearInput.value.trim() !== "") {
    calculateAge();
  }
});

function calculateAge() {
  let fullDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
  let currentDate = new Date();
  let years = currentDate.getFullYear() - fullDate.getFullYear();
  let months = currentDate.getMonth() - fullDate.getMonth();
  let days = currentDate.getDate() - fullDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months < 0) {
      months += 12;
    }
    if (days < 0) {
      let prevMonthLastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += prevMonthLastDay;
    }
  }

  let resultsDay = document.getElementById("result-days");
  let resultsMonth = document.getElementById("result-months");
  let resultsYear = document.getElementById("result-years");

  resultsDay.innerHTML = days;
  resultsMonth.innerHTML = months;
  resultsYear.innerHTML = years;
}
