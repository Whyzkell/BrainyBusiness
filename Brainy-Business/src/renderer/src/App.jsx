import React from 'react'
import { useAuth } from '../AuthContext'
import { Navigate } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Grafiquita from './components/Grafiquita'
import Grafiquita2 from './components/Grafiquita_2'
import Colorsito from './components/Colorsito'
import Lista1 from './components/Listitas/Lista1'
import Lista2 from './components/Listitas/lista2'
import Lista3 from './components/Listitas/Lista3'
import Titulon from './components/Titulos/Top'

import Rosadita from '../../../resources/rosadita.png'
import Moradita from '../../../resources/moradita.png'
import NuevosClientes from '../../../resources/nuevos clieentes.png'
import Vendedores from '../../../resources/Vendedores.png'
import Component5 from '../../../resources/Component 5.png'
import Up3 from '../../../resources/up_3.png'
import Joven1 from '../../../resources/Joven1.png'
import Gorisol from '../../../resources/Gorisol.png'
import Señor1 from '../../../resources/señor1.png'
import SOlitarioGamer from '../../../resources/SOlitarioGamer.png'

function App() {
  const { user, loading, fetchUserData } = useAuth()

  if (loading && !localStorage.getItem('token')) {
    return <div>Cargando...</div>
  }

  //if (!user) {
  //  const token = localStorage.getItem('token')
  //  if (token) {
  //    // Autenticar al usuario con el token
  //    fetchUserData(token)
  //  } else {
  //    return <Navigate to="/login" />
  //  }
  //}
  return (
    <>
      <div className="drawer w-full ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          <div className="flex w-full justify-between bg-white z-0 ">
            <div className="flex flex-col   w-full  items-center ">
              <Navbar titulito="Administracion" tamanito={'w-11/12'} />
              <div className=" w-11/12 mt-10 grid grid-cols-2 md:gap-4 md:w-full ">
                <Colorsito
                  imagencita={Rosadita}
                  nombrecito="Productos Vendidos"
                  valorcito="203,405"
                />
                <Colorsito imagencita={Moradita} nombrecito="Ganancias" valorcito="1,504.30" />
                <Colorsito imagencita={NuevosClientes} nombrecito="Clientes" valorcito="2,607" />
                <Colorsito imagencita={Vendedores} nombrecito="Vendedores" valorcito="452" />
              </div>
              <div className="flex justify-around mt-8 w-11/12 xl:flex-row flex-col items-center">
                <div className="flex flex-col xl:w-8/12 w-11/12">
                  <div className="flex justify-around w-full">
                    <p className="text-3xl font-medium text-slate-700 w-1/3">Ventas</p>
                    <div className="flex justify-around w-1/2">
                      <div className="flex justify-around w-1/3 items-center bg-teal-50 rounded-lg">
                        <div className="h-5 w-5 bg-violet-400 rounded-lg" />
                        <p className="text-sm">Aguacate</p>
                      </div>
                      <div className="flex justify-around w-1/3 items-center bg-teal-50 rounded-lg">
                        <div className="h-5 w-5 bg-cyan-500 rounded-lg" />
                        <p className="text-sm">Potaxio</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full xl:mt-5 sm:-mt-10 phone:-mt-22  lg:h-[400px] sm:h-[300px] h-[275px]">
                    <Grafiquita />
                  </div>
                  <Titulon titulon="Productos más vendidos" />

                  <div className="flex flex-col w-full mt-3">
                    <Lista1 />
                    <Lista2
                      num="01"
                      color={'bg-sky-300'}
                      color2={'text-sky-800'}
                      color3={'text-green-500'}
                      producto="Aguacate"
                      cantidad="4750"
                      compo={Component5}
                      porciento="+15.02%"
                      ganancia="$350,582"
                    />
                    <Lista2
                      num="02"
                      color={'bg-green-300'}
                      color2={'text-green-800'}
                      color3={'text-green-500'}
                      producto="Potaxio"
                      cantidad="3550"
                      compo={Component5}
                      porciento="+19.33%"
                      ganancia="$299,423"
                    />
                    <Lista2
                      num="03"
                      color={'bg-fuchsia-300'}
                      color2={'text-fuchsia-800'}
                      color3={'text-red-500'}
                      producto="Frijoles"
                      cantidad="2985"
                      compo={Up3}
                      porciento="-3.33%"
                      ganancia="$299,423"
                    />
                    <Lista2
                      num="04"
                      color={'bg-yellow-300'}
                      color2={'text-yellow-800'}
                      color3={'text-green-500'}
                      producto="Potaxio"
                      cantidad="2021"
                      compo={Component5}
                      porciento="+4.33%"
                      ganancia="$299,423"
                    />
                    <Lista2
                      num="05"
                      color={'bg-gray-300'}
                      color2={'text-gray-800'}
                      color3={'text-red-500'}
                      producto="Leche Chabo"
                      cantidad="1534"
                      compo={Up3}
                      porciento="-3.33%"
                      ganancia="$299,423"
                    />
                  </div>
                </div>
                <div className="flex flex-col xl:w-3/12 w-11/12 xl:mt-0 mt-8">
                  <div className="flex justify-between">
                    <p className="text-2xl font-medium text-slate-700 w-6/12 ">Top Categorias</p>
                    <select className="w-5/12 font-medium bg-white outline-none">
                      <option className="font-medium">Anualmente</option>
                      <option>Mensualmente</option>
                    </select>
                  </div>
                  <div className="flex w-11/12 mt-4 justify-center items-center ">
                    <Grafiquita2 />
                  </div>
                  <Titulon titulon="Top Compradores" />

                  <Lista3 imagen={Joven1} nombre="Braulio" money="$20,123" />
                  <Lista3 imagen={Gorisol} nombre="Gorisol" money="$16,564" />
                  <Lista3 imagen={Señor1} nombre="Mario" money="$10,497" />

                  <Titulon titulon="Top Vendedores" />

                  <Lista3 imagen={SOlitarioGamer} nombre="Solitario" money="$200,497" />
                  <Lista3 imagen={Gorisol} nombre="Ashaila" money="$160,165" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default App
