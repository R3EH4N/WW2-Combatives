const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/WW2-Combatives/": "/pages/index.html",
  "/WW2-Combatives/techtrain": "/pages/techtrain.html",
  "/WW2-Combatives/history": "/pages/history.html",
  "/WW2-Combatives/gallery": "/pages/gallery.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();