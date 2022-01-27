/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const CardMember = (props: any): JSX.Element => {
  return (
    <div className="card text-center bg-white text-gray-800 shadow-2xl mb-10 lg:mx-8 z-10">
      <figure className="px-10 pt-10">
        <img src={props.image} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="font-medium text-xl">{props.name}</h2>
        <h3 className="font-serif -mt-2 text-lg italic text-gray-600 mb-4">
          {props.position}
        </h3>
        <p className="text-left text-sm font-light mb-4 h-32">{props.resume}</p>
        <a
          className="text-xs font-medium text-gray-600 hover:underline transition-all duration-200"
          href={'mailto:' + props.email}
        >
          {props.email}
        </a>
        {/* <div className="justify-center card-actions">
          <button className="btn btn-outline btn-accent">More info</button>
        </div> */}
      </div>
    </div>
  )
}

export default function Team(): JSX.Element {
  return (
    <div
      style={{ backgroundColor: '#171717' }}
      className="min-h-screen w-full text-neutral-content flex flex-wrap justify-center items-start px-2 py-10 z-10"
    >
      <div className="w-full md:w-1/2 lg:w-1/2 lg:px-20 mt-20">
        <h2 className="text-4xl font-medium">Nossa equipe</h2>
        <h3 className="text-2xl italic font-serif mb-6">
          Membros altamente qualificados e titãs do mercado
        </h3>
        <p className="mb-10 text-gray-300">
          Trazemos décadas de experiência no ramo joalheiro.
          <br />
          Nosso time está no alto escalão de nosso segmento.
          <br />
          Já estivemos presentes nas maiores feiras do setor, como a Tecnogold.
          Somos o fornecedor das maiores empresas do ramo presentes em
          território nacional e internacional.
          <br />
          Estamos prontos para alavancarmos sua empresa trazendo qualidade à
          fabricação de joias, pois nossa marca está consolidada no Brasil como
          líder em excelência.
        </p>
      </div>
      <div className="w-full lg:w-1/2 md:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 mt-20">
        <CardMember
          name="Rogério Monteiro"
          position="Diretor Comercial"
          resume={
            <p>
              Há 30 anos atuando no segmento, seis anos como representante da
              OTEC Präzisionsfinish.
              <br />
              Vasta experiência em rebarbação e polimento de superfícies
              metálicas.
            </p>
          }
          email="rogerio@maquinasmonteiro.com.br"
          image="/images/member1.jpg"
        />
        <CardMember
          name="Rodrigo Monteiro"
          position="Diretor Industrial"
          resume={
            <p>
              Eng° Mecânico, MBA, com mais de 20 anos de vivência em empresas
              nacionais e multinacionais.
              <br />
              Atuando nas áreas de P&amp;D, Engenharia, Industrial e
              Administrativa.
            </p>
          }
          email="rodrigo@maquinasmonteiro.com.br"
          image="/images/member2.jpg"
        />
      </div>
    </div>
  )
}
