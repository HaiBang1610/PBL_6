export const Load = () => {
  setTimeout(() => {
    try {
      const links = ["/cdn.jsdelivr.net/npm/bootstrap%405.1.0/dist/js/bootstrap.bundle.min.js","https://cdn.jsdelivr.net/npm/simple-datatables@latest","/js/datatables/datatables-simple-demo.js","/cdn.jsdelivr.net/npm/litepicker/dist/bundle.js","/js/litepicker.js","/js/scripts.js"];
      links.map((value) => {
        const script = document.createElement("script");
        script.src = value;
        return document.body.append(script);
      });
    } catch (error) {
      window.location.reload();
    }
  }, 0);
};
