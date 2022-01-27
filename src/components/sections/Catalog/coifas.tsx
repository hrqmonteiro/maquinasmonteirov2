import CatalogCard from './CatalogCard'

const coifas = [
  {
    title: 'Coifa p/ Fundição CF125',
    category: 'Coifas',
    description: '',
    image: '/images/coifas/cf125.png',
    comprimento: '',
    largura: '',
    altura: '',
    peso: '',
  },
]

const mappedCoifas = coifas.map((b: any) => (
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
  return <ul>{mappedCoifas}</ul>
}
