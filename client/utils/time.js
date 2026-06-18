export function greetTime() {
  const hr = new Date().getHours();

  if (hr >= 6 && hr < 12) {
    return "Good Morning";
  } else if (hr >= 12 && hr < 17) {
    return "Good Afternoon";
  } else if (hr >= 17 && hr < 24) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}
