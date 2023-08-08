import { useEffect } from "react";
import { connect } from "react-redux";
import "./style/about.css";
import Tarjeta from "Components/Tarjeta";
import grados from "Components/img/grados.jpg";
import perfil from "Components/img/tatacoa.jpg";
import {} from "redux/actions/about"
import FullWidthLayout from "hocs/layouts/FullWidthLayout";

function About(data,{ get_abouts}) {
  useEffect(() => {
    get_abouts();
  }, []);
  let post = data && data.data;
  console.log(data);
  return (
    <>
     <FullWidthLayout>

   
      <div className="About" >
        <div className="aside1"></div>
        <section>
          <div className="About-header">
            <h2>Hola</h2>
            <article>
              <p >
                Ingeeniera de procesos y Analista de datos con buenas
                capacidades de análisis. con más de 2 años de experiencia en
                investigación, análisis y visualización de datos además de
                liderar proyectos de mejoramiento, así como de proyectos de
                desarrollo e implementación de nuevos productos y procesos. Con
                habilidades de liderazgo de equipos interdisciplinarios,
                excelente relacionamiento y energía, capacidad de aprender y
                enseñar, pensamiento analítico y resolución de problemas.
              </p>
            </article>
          </div>
          <hr />
          <div className="About-main">
            <h2>Quien Soy </h2>
            <article className="About-main-1">
              <ul>
                <li>Ingri Carolina Mosquera Moreno</li>
                <li>Ingeniera de procesos</li>
                <li>Eterna Autodidacta</li>
                <li>Medellín - Antioquia</li>
                <li>1998</li>
              </ul>
              <img src={perfil} className="avatar" alt="yo" />
            </article>
          </div>
          <hr />
          <div className="About-main">
            <h2>Acerca </h2>
            <div className="Article">
              <article className="About-main-2">
                <p>
                  Ingeniera de procesos con formación en metodologías de
                  investigación, recolección, manipulación y visualización de
                  datos. Adicionalmente tengo un amplio conocimiento en control
                  de procesos, desarrollo e implementación de metodologías cuyo
                  objetivo es mejorar los procesos, con el propósito de
                  incrementar la rentabilidad y productividad. con más de 2 años
                  de experiencia en investigación, análisis y visualización de
                  datos además de liderar proyectos de mejoramiento, así como de
                  proyectos de desarrollo e implementación de nuevos productos y
                  procesos. Con habilidades de liderazgo de equipos
                  interdisciplinarios, excelente relacionamiento y energía,
                  capacidad de aprender y enseñar, pensamiento analítico y
                  resolución de problemas.
                </p>
              </article>
            </div>
          <hr/>
            <div className="Article">
              <h2>Formación </h2>
              <article className="About-main-3">
                <Tarjeta image={grados} />
                <ul>
                  <li>
                    <h3>Ingenieria de procesos</h3>
                    Universidad EAFIT -2021
                  </li>
                  <li>
                    <h4> Auditoria Interna De Calidad- NTC ISO 9001</h4>
                    SENA -2021
                  </li>
                  <li>
                    <h4>Analítica de datos</h4>
                    PROASEDU S.A.S -2021
                  </li>
                  <li>
                    <h4> Data Analytics for Lean Six Sigma</h4>
                    University of Amsterdam and offered through -2021
                  </li>
                </ul>
              </article>
            </div>
            <hr/>
            <div className="Article">
              <h2>¿Qué Hago? </h2>
              <article className="About-main-4">
                <ul className="procesos">
                  <h3> Ingenieria de Procesos</h3>
                  <li>Diseño y optimización de procesos</li>
                  <li>
                    Diseño de Controladores para la automatización de procesos
                  </li>
                  <li> diagramas PFD/P&ID</li>
                  <li>Modelación y simulación de procesos</li>
                  <li>Construcción de algoritmos eficiente</li>
                </ul>
                <ul className="data">
                  <h3> Data scientist</h3>
                  <li>Extracción de datos</li>
                  <li>Limpieza de datos</li>
                  <li>Procesamiento de datos</li>
                  <li>Visualización de datos</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <div className="aside2"></div>
      </div>
      </FullWidthLayout>
    </>
  );
}
const mapStateToProps = (state) => ({
  get_abouts: state.about.get_abouts,
});

export default connect(mapStateToProps, {
  get_abouts,

})(About);

