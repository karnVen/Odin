// ~/.npm-init.js
module.exports = {
  // These will auto-fill every time
  license: "MIT",
  private: true,
  
  // These will ask you questions
  author: prompt("Your name?", "Your Name"),
  version: prompt("Version?", "1.0.0")
}