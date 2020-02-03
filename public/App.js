const element = React.createElement("div", {
  class: "main"
}, React.createElement("div", {
  class: "name"
}, React.createElement("h1", null, "Yash Prakashbhai Shah")), React.createElement("div", null, React.createElement("img", {
  class: "img",
  src: "myphoto.jpg",
  alt: "My Photo",
  width: "300",
  height: "300"
}), React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {
  class: "introFormat"
}, "I always try to learn new technologies and implement them to solve real world problems. I am much interested in web development and fascinated by the innovative and emerging technologies inventing in this field.I enjoy reading fictional books and playing cricket."), React.createElement("div", null, React.createElement("a", {
  class: "gitLink",
  href: "https://github.com/yashpshah"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('contents'));