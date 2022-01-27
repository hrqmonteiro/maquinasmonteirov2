/* eslint-disable @next/next/no-img-element */
export default function CatalogCard(props: any): JSX.Element {
  return (
    <div className="flex flex-wrap justify-around items-center mb-10">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 md:px-10 lg:px-20">
        <h3 className="text-3xl font-serif font-bold">{props.title}</h3>
        <p className="uppercase text-sm mb-6 text-base-400">{props.category}</p>
        <p className="mb-8">{props.description}</p>
        <div>
          <span className="text-gray-500 font-bold text-sm uppercase">
            Comprimento:
          </span>{' '}
          <span className="font-light text-sm">{props.comprimento}</span>
        </div>
        <div>
          <span className="text-gray-500 font-bold text-sm uppercase">
            Largura:
          </span>{' '}
          <span className="font-light text-sm">{props.largura}</span>
        </div>
        <div>
          <span className="text-gray-500 font-bold text-sm uppercase">
            Altura:
          </span>{' '}
          <span className="font-light text-sm">{props.altura}</span>
        </div>
        <div>
          <span className="text-gray-500 font-bold text-sm uppercase">
            Peso:
          </span>{' '}
          <span className="font-light text-sm">{props.peso}</span>
        </div>
      </div>
    </div>
  )
}
