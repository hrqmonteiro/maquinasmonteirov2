import { useState } from 'react'

/* eslint-disable @next/next/no-img-element */
export default function History(): JSX.Element {
  const [tabs, setTabs] = useState<Number>(1)

  return (
    <div className="min-h-screen bg-base-200 w-full flex flex-wrap justify-center items-center p-2">
      <div>
        <img width={700} src="/images/history.jpg" alt="Máquinas Monteiro" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 lg:px-20">
        <h2 className="text-4xl font-medium">História</h2>
        <h3 className="text-2xl italic font-serif mb-6">
          Um pouco de nossa trajetória
        </h3>
        <p className="mb-10">
          Em 2019, Rogério Ap. Monteiro funda a Máquinas Monteiro Eireli, com
          uma visão inovadora de gestão, focando em melhoria contínua dos
          processos, parcerias estratégicas com fornecedores, ampliação do
          portfólio de produtos para atender com excelência os clientes.
        </p>

        <div className="tabs mb-10">
          <button
            onClick={() => setTabs(1)}
            className={
              tabs === 1 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 1 ? 'font-medium text-black' : ''}>
              Missão
            </span>
          </button>
          <button
            onClick={() => setTabs(2)}
            className={
              tabs === 2 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 2 ? 'font-medium text-black' : ''}>
              Valores
            </span>
          </button>
          <button
            onClick={() => setTabs(3)}
            className={
              tabs === 3 ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
            }
          >
            <span className={tabs === 3 ? 'font-medium text-black' : ''}>
              Visão
            </span>
          </button>
        </div>
        <div className="min-h-full lg:h-24">
          {tabs === 1 ? (
            <>
              <h3 className="text-2xl font-medium mb-4">Ser referência</h3>
              <p>
                Nossa missão é: ser referência no segmento joalheiro como
                empresa fornecedora de equipamentos para recuperação de metal.
              </p>
            </>
          ) : tabs === 2 ? (
            <>
              <h3 className="text-2xl font-medium mb-4">Honrar compromissos</h3>
              <p className="mb-4">Temos como valores de nossa empresa:</p>
              <ul>
                <li>Honrar compromissos;</li>
                <li>Agir com empatia nas relações;</li>
                <li>Evitar dívidas como forma de alavancar o negócio;</li>
                <li>Espírito inovador.</li>
              </ul>
            </>
          ) : tabs === 3 ? (
            <>
              <h3 className="text-2xl font-medium mb-4">
                Atender os segmentos
              </h3>
              <p className="mb-4">
                Desenvolver soluções e produtos de qualidade para atender os
                segmentos de joalheria, ourivesaria e relojoaria.
              </p>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
