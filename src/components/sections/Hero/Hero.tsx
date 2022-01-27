/* eslint-disable @next/next/no-img-element */
export default function Hero(): JSX.Element {
  return (
    <div className="min-h-screen w-full flex flex-wrap justify-center items-center p-2">
      <div className="w-full md:w-1/2 lg:w-1/2 lg:px-20">
        <h1 className="text-6xl font-medium">Máquinas Monteiro</h1>
        <h2 className="text-4xl italic font-serif mb-6">
          Há mais de 30 anos no mercado trazendo excelência
        </h2>
        <p className="mb-6">
          Somos referência na fabricação de máquinas e equipamentos para o
          segmento joalheiro.
          <br />
          Dentre nossas soluções estão: politrizes de bancadas, coletores de pó,
          lixadeiras, bancadas de trabalho, entre outras.
        </p>
        <p className="mb-10">
          Fornecemos nossos produtos para: atelier de joias, joalherias,
          relojoarias, indústrias e escolas de joias.
        </p>
        <button className="btn btn-lg mr-6">Contato</button>
        <button className="btn btn-lg mr-6">Catálogo</button>
      </div>
      <div>
        <img width={500} src="/images/maquina.png" alt="Máquinas Monteiro" />
      </div>
    </div>
  )
}
