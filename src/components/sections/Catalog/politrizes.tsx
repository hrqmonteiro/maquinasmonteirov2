import CatalogCard from './CatalogCard'

const politrizes = [
  {
    title: 'Cabine de Polimento M10',
    category: 'Politrizes',
    description:
      'Estrutura metálica, pintura a pó, iluminação LED, vidro de proteção com lente de aumento (temperado), motor industrial de 1/2 CV, exaustor axial, filtro sintético e ponteira cônica.',
    image: '/images/politrizes/m10.png',
    comprimento: '1200mm',
    largura: '600mm',
    altura: '1400mm',
    peso: '85kg',
  },
  {
    title: 'Politriz M50',
    category: 'Politrizes',
    description:
      'Estrutura em aço carbono, pintura a pó, motor industrial 1/2 CV, ponteira cônica, vidro temperado, iluminação LED, filtro de celulose, exaustor radial. Excelente poder de sucção e armazenamento.',
    image: '/images/politrizes/m50.png',
    comprimento: '',
    largura: '',
    altura: '',
    peso: '',
  },
  {
    title: 'Politriz M50 Atelier',
    category: 'Politrizes',
    description:
      'Estrutura em aço carbono, pintura a pó, motor industrial 1/2 CV, ponteira cônica, vidro temperado, iluminação LED, filtro de celulose, exaustor radial. Excelente poder de sucção e armazenamento.',
    image: '/images/politrizes/m50atelier.png',
    comprimento: '',
    largura: '',
    altura: '',
    peso: '',
  },
  {
    title: 'Politriz M70',
    category: 'Politrizes',
    description: '',
    image: '/images/politrizes/m70.png',
    comprimento: '',
    largura: '',
    altura: '',
    peso: '',
  },
  {
    title: 'Politriz M110',
    category: 'Politrizes',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação LED, vidro com lente de aumento(temperado), motor industrial 1/2 CV, exaustor Siroco, 2 filtros de celulose.      Excelente sucção e retenção do material, Ideal para baixo, médio e alto índice de polimento.',
    image: '/images/politrizes/m110.png',
    comprimento: '1200mm',
    largura: '600mm',
    altura: '1400mm',
    peso: '85kg',
  },
  {
    title: 'Politriz M220',
    category: 'Politrizes',
    description:
      'Estrutura em aço carbono, pintura a pó, iluminação LED, vidro com lente de aumento(temperado), motor industrial 1/2 CV, exaustor Siroco, 2 filtros de celulose.      Excelente sucção e retenção do material, Ideal para baixo, médio e alto índice de polimento.',
    image: '/images/politrizes/m110.png',
    comprimento: '1200mm',
    largura: '600mm',
    altura: '1400mm',
    peso: '85kg',
  },
]

const mappedPolitrizes = politrizes.map((b: any) => (
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
  return <ul>{mappedPolitrizes}</ul>
}
