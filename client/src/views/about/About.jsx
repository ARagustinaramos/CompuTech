import AboutComponent from '../../components/aboutComponent/AboutComponent'

function About() {

  return (
      <section className="justify-center">
        <h3 className="py-4 text-center text-xl font-semibold pb-6">
          <span className="text-sundown-500">Sobre </span>Nosotros
        </h3>
  
        <div className="justify-center">
          {/*DEVELOPERS */}
          <AboutComponent/>
        </div>
      </section>
  );
}

export default About;