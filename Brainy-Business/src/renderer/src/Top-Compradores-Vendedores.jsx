import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Joven from '../../../resources/Joven1.png'
import Graficoa from '../../../resources/Graphic.png'
import Mesesitos from './components/Selects/Mesesitos'
import TopCompra from './components/Cards/TopCompra'
import TituloClasico from './components/Titulos/TituloClasico'

export default function TopComVen() {
  return (
    <>
      <div className="drawer w-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          <div className="flex w-full justify-between bg-white">
            <div className="flex flex-col w-full min-h-screen items-center justify-between bg-slate-50">
              <div className="flex w-11/12 flex-col ">
                <div className="flex justify-center w-full">
                  <Navbar titulito="Top Compradores" tamanito={'w-full'} />
                </div>

                <Mesesitos />
                <div class="carousel rounded-box w-full mt-6">
                  <TopCompra
                    foto={Joven}
                    nombre="Braulio Estrellas"
                    total="$36,245"
                    porciento="+11.12%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Jason"
                    total="$24,221"
                    porciento="+9.12%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Eduardo"
                    total="$22,245"
                    porciento="+8.75%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Tulio"
                    total="$19,224"
                    porciento="+7.42%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Wazazin"
                    total="$16,354"
                    porciento="+5.34%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Wazazin"
                    total="$16,354"
                    porciento="+5.34%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Wazazin"
                    total="$16,354"
                    porciento="+5.34%"
                    grafica={Graficoa}
                  />
                </div>
                <TituloClasico til={'Top Vendedores'} />
                <Mesesitos />
                <div class="carousel rounded-box w-full mt-6">
                  <TopCompra
                    foto={Joven}
                    nombre="Braulio Estrellas"
                    total="$36,245"
                    porciento="+11.12%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Jason"
                    total="$24,221"
                    porciento="+9.12%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Eduardo"
                    total="$22,245"
                    porciento="+8.75%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Tulio"
                    total="$19,224"
                    porciento="+7.42%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Wazazin"
                    total="$16,354"
                    porciento="+5.34%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Wazazin"
                    total="$16,354"
                    porciento="+5.34%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Wazazin"
                    total="$16,354"
                    porciento="+5.34%"
                    grafica={Graficoa}
                  />
                  <TopCompra
                    foto={Joven}
                    nombre="Wazazin"
                    total="$16,354"
                    porciento="+5.34%"
                    grafica={Graficoa}
                  />
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
