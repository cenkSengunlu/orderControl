const justNumber = (event) => {
  if (event.key === "." || event.key === "-" || event.key === "e" || event.key === "," || event.key === "+") {
    event.preventDefault();
  }
}

export default justNumber;