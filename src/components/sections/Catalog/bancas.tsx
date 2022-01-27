import CatalogCard from './CatalogCard'

const bancas = [
  {
    title: 'Bancada p/ Ourives MG',
    category: 'Bancadas',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação LED, apoio para braço, suporte p/ ferramentas, gavetas de ferramentas, gaveta de limalha revestido em inox, tampo de MDF revestido em inox.',
    image: '/images/bancadas/mg.png',
    comprimento: '1200mm',
    largura: '560mm',
    altura: '900mm',
    peso: '65kg',
  },
  {
    title: 'Bancada p/ Ourives MJ',
    category: 'Bancadas',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação retrátil, lâmpadas de LED, apoio para braço, pés niveladores, haste p/ motor de suspensão, tampo e gavetas de madeira maciça, estileira laterais e estileira central.',
    image: '/images/bancadas/mj.png',
    comprimento: '1150mm',
    largura: '550mm',
    altura: '900mm',
    peso: '60kg',
  },
  {
    title: 'Bancada p/ Ourives MJC',
    category: 'Bancadas',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação retrátil, lâmpadas de LED, apoio para braço, pés niveladores, haste p/ motor de suspensão, apoio para braço, tampo e gavetas de madeira maciça, estileira lateral e estileira central.',
    image: '/images/bancadas/mjc.png',
    comprimento: '950mm',
    largura: '550mm',
    altura: '900mm',
    peso: '45kg',
  },
  {
    title: 'Bancada p/ Ourives ML',
    category: 'Bancadas',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação retrátil, lâmpada de LED, pés niveladores, tampo de MDF revestido em inox, gavetas padrão Tauari.',
    image: '/images/bancadas/ml.png',
    comprimento: '800mm',
    largura: '560mm',
    altura: '900mm',
    peso: '45kg',
  },
  {
    title: 'Bancada p/ Ourives MM',
    category: 'Bancadas',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação LED, gavetas de ferramentas, gaveta de limalha revestida em aço inox. Haste para motor de suspensão, tampo revestindo em inox.',
    image: '/images/bancadas/mm.png',
    comprimento: '900mm',
    largura: '560mm',
    altura: '900mm',
    peso: '45kg',
  },
  {
    title: 'Bancada p/ Ourives MSS',
    category: 'Bancadas',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação móvel, lâmpada de LED, haste p/ motor de suspensão, tampo em inox 1,5mm escovado, moldura em MDF formicado, gaveta de ferramenta em aço inox escovado, gaveta de trabalho em aço inox escovado, cabine de trabalho em acrílico cristal, exaustor radial, filtro de celulose, separador de sólidos, dispenser em acrílico. Baixo índice de ruído. Ideal para trabalhos como: lixamento, micro polimento, limagem, cravação no metal, etc. Proporciona o armazenamento do material retirado das peças',
    image: '/images/bancadas/mss.png',
    comprimento: '1150mm',
    largura: '650mm',
    altura: '1450mm',
    peso: '85kg',
  },
]

const mappedBancas = bancas.map((b: any) => (
  <li key={b}>
    <CatalogCard
      title={b.title}
      category={b.category}
      description={b.description}
      image={b.image}
      comprimento={b.comprimento}
      largura={b.largura}
      altura={b.altura}
      peso={b.peso}
    />
  </li>
))

export default function Bancas(): JSX.Element {
  return <ul>{mappedBancas}</ul>
}
