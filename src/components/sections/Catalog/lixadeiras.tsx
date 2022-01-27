import CatalogCard from './CatalogCard'

const lixadeiras = [
  {
    title: 'Lixadeira SSR',
    category: 'Lixadeiras',
    description: '',
    image: '/images/lixadeiras/ssr.png',
    comprimento: '',
    largura: '',
    altura: '',
    peso: '',
  },
  {
    title: 'Lixadeira de Gittus',
    category: 'Lixadeiras',
    description:
      'Estrutura em aço carbono, pintura à pó, iluminação led, motor industrial 1 CV, ponteira com roda expansiva, reservatório de água em alumínio fundido, cabine em acrílico cristal.',
    image: '/images/lixadeiras/gittus.png',
    comprimento: '750mm',
    largura: '500mm',
    altura: '950mm',
    peso: '55kg',
  },
]

const mappedLixadeiras = lixadeiras.map((b: any) => (
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
  return <ul>{mappedLixadeiras}</ul>
}
