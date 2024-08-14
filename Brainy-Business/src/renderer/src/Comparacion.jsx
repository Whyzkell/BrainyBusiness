import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Grafiquita4 from './components/Grafiquita_4'
import Anitos from './components/Selects/Anitos'
import Mesesitos from './components/Selects/Mesesitos'
import ProCate from './components/Titulos/ProCate'

export default function Categorias() {
  return (
    <>
      <div className="drawer w-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          <div className="flex w-full justify-between bg-white">
            <div className="flex flex-col  w-full min-h-screen items-center justify-between bg-slate-50">
              <div className="flex w-11/12 flex-col items-center">
                <Navbar titulito="Product Comparision" tamanito={'w-full'} />
                <div className="bg-white w-full mt-6 rounded-lg">
                  <div className="flex justify-between ">
                    <div className="flex w-1/3 justify-start">
                      <Anitos />
                      <Mesesitos />
                    </div>
                    <div className="flex flex-row w-3/5 justify-end mr-3">
                      <ProCate nombre="Tomate" color={'bg-indigo-500'} />
                      <ProCate nombre="Leche" color={'bg-violet-400'} />
                      <ProCate nombre="Platano" color={'bg-sky-400'} />
                    </div>
                  </div>
                  <div className="flex w-full justify-center items-center mt-6 mb-6">
                    <Grafiquita4 />
                  </div>
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
