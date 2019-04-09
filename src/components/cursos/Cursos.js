import React from 'react'
import cursos from '../../media/curso.jpg'

const Cursos = () => (
  <div className="container">
    <div className="image">
      <img src={cursos} alt="cursos"/>
    </div>
    <div className="info">
      <h2>Te ofrecemos cursos</h2>
      <h4>Para la formacion de profesionales y técnicos del medio Aeronáutico</h4>
      <p>
        Te brindaremos una guía direccional, adaptable a las circunstancias del momento,
        para alcanzar los fines y objetivos de le Empresa.
      </p>
    </div>
  </div>
)

export default Cursos
