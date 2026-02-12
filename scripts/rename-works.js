const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "works");
const mapping = [
  ["Предложение 4 минуты + озвучка.mp4", "work-1.mp4"],
  ["Годовщина 30 лет, 4 минуты озвучка.mp4", "work-2.mp4"],
  ["Для жены 4 минуты без озвучки.mp4", "work-3.mp4"],
  ["15 лет в браке 2 минуты с озвучкой.mp4", "work-4.mp4"],
  ["1 минуты буз озвучки.mp4", "work-5.mp4"],
  ["1.5 минуты без озвучки .mp4", "work-6.mp4"],
];

mapping.forEach(([oldName, newName]) => {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(oldName, "->", newName);
  } else {
    console.log("Skip (not found):", oldName);
  }
});
