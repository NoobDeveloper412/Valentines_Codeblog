import data from "./blogData";

const options = {
    category: ["python"]
  };
  
const filtered = data.filter(obj => Object.keys(options).some(key => {
if (key != "color") {
    return obj[key] == options[key];
} else {
    return options[key].some(s => s == obj[key]);
}
}));

export default filtered;