export function getColor(ping) {
  if (ping <= 100) {
    return "blue";
  }
  if (ping > 100 && ping <= 150) {
    return "green";
  }
  if (ping > 150 && ping <= 200) {
    return "yellow";
  }
  if (ping > 200) {
    return "red";
  }
}
