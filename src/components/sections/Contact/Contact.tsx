export default function Contact(): JSX.Element {
  return (
    <div className="min-h-screen w-full mt-20 p-2">
      <div className="w-full lg:px-20 mb-10">
        <h2 className="text-4xl font-medium">Fale Conosco</h2>
        <h3 className="text-2xl italic font-serif mb-4">
          Como podemos ajudar?
        </h3>
        <p>
          Dúvidas? Informações? Orçamentos?
          <br />
          Para essas e outras informações, nós adoraríamos o seu contato!
          <br />
          Preencha o formulário abaixo com o que deseja, que iremos responder o
          mais rápido possível!
        </p>
      </div>
      <form className="w-full lg:px-20">
        <div className="form-control flex justify-start items-start">
          <div className="w-full lg:pr-5">
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered mr-4 mb-4 w-full lg:w-1/3"
            />
            <input
              type="text"
              placeholder="Empresa (se houver)"
              className="input input-bordered mr-4 mb-4 w-full lg:w-1/3"
            />
          </div>
          <div className="w-full lg:pr-5">
            <input
              type="email"
              placeholder="E-mail"
              className="input input-bordered mr-4 mb-4 w-full lg:w-1/3"
            />
            <input
              type="phone"
              placeholder="Telefone"
              className="input input-bordered mr-4 mb-4 w-full lg:w-1/3"
            />
          </div>
          <div className="w-full mb-4">
            <textarea
              className="textarea h-24 textarea-bordered w-full lg:w-2/3"
              placeholder="Bio"
            />
          </div>
          <div className="w-full lg:w-2/3 flex justify-end">
            <button type="submit" className="btn btn-large">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
