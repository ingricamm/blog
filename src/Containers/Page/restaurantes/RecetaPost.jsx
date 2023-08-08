function RecetaPost(data) {
  let recetas = data && data.data;
  console.log(data);
  return (
    <div>
      <div>
        <div className="title">
          {recetas.title ? (
            <div>
              <h3>{recetas.title}</h3>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="section">
          {recetas.imagen ? (
            <div>
              <img src={recetas.imagen} alt="imagen" />
            </div>
          ) : (
            <></>
          )}

          <div>
            <p>{recetas.content}</p>
          </div>
          {recetas.video ? (
            <div>
              <video src={recetas.video} alt="imagen" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>  
    </div>
  );
}

export default RecetaPost;
