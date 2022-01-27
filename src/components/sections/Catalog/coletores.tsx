import CatalogCard from './CatalogCard'

const coletores = [
  {
    title: 'Coletor de Pó DC100',
    category: 'Coletores de Pó',
    description: '',
    image: '/images/coletores/dc100.png',
    comprimento: '',
    largura: '',
    altura: '',
    peso: '',
  },
]

const mappedColetores = coletores.map((b: any) => (
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
  return <ul>{mappedColetores}</ul>
}
