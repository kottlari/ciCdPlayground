import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Inga Kottlarz",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Better sleep"],
    // Which CI/CD tools do you use in your project?
    tools: "Github actions",
    // What do you want to learn in this workshop?
    expectations: ["all the gh actions features I don't know about yet"],
  },
});
