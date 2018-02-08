const app = "I don't do much.";

const token = '705ca4a054758071adb25612a252b99590627fac'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
