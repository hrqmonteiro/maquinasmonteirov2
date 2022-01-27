import { useState } from 'react'
import Bancas from './bancas'
import Coifas from './coifas'
import Coletores from './coletores'
import Lixadeiras from './lixadeiras'
import Politrizes from './politrizes'

export default function Catalog(): JSX.Element {
  const [tabs, setTabs] = useState<Number>(1)

  return (
    <div className="min-h-screen w-full flex flex-wrap justify-center items-start mt-20 p-2">
      <div className="w-full lg:px-20">
        <h2 className="text-4xl font-medium">Catálogo</h2>
        <h3 className="text-2xl italic font-serif mb-20">
          Confira nossa linha de equipamentos
        </h3>

        <div className="tabs mb-10">
          <button
            onClick={() => setTabs(1)}
            className={
              tabs === 1 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 1 ? 'font-medium text-neutral' : ''}>
              Bancadas
            </span>
          </button>
          <button
            onClick={() => setTabs(2)}
            className={
              tabs === 2 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 2 ? 'font-medium text-neutral' : ''}>
              Coifas
            </span>
          </button>
          <button
            onClick={() => setTabs(3)}
            className={
              tabs === 3 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 3 ? 'font-medium text-neutral' : ''}>
              Coletores de Pó
            </span>
          </button>
          <button
            onClick={() => setTabs(4)}
            className={
              tabs === 4 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 4 ? 'font-medium text-neutral' : ''}>
              Lixadeiras
            </span>
          </button>
          <button
            onClick={() => setTabs(5)}
            className={
              tabs === 5 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 5 ? 'font-medium text-neutral' : ''}>
              Politrizes
            </span>
          </button>
        </div>
        <div className="min-h-full">
          {tabs === 1 && <Bancas />}
          {tabs === 2 && <Coifas />}
          {tabs === 3 && <Coletores />}
          {tabs === 4 && <Lixadeiras />}
          {tabs === 5 && <Politrizes />}
        </div>
      </div>
    </div>
  )
}
