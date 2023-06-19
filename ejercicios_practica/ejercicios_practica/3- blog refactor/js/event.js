const updateMainTitle = (tituloPrincipal) => {
    const hoy = new Date();
    tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
        hoy.getMonth() + 1
      }/${hoy.getFullYear()}`;
  };

  
  const handleMouseOver = (event) => {
    const post = event.currentTarget;
    post.classList.remove("closed");
    post.classList.add("open");
  };
  

  
  export { updateMainTitle, handleMouseOver, handleMouseOut };
  