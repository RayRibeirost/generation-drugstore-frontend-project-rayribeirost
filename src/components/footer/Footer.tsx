import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, WhatsappLogoIcon, TelegramLogoIcon, EnvelopeIcon, PhoneIcon  } from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="container flex-row w-full flex-wrap">
      <div className="flex bg-gray-900 text-white px-8 pt-6 pb-10 justify-between flex-wrap">
        <div className="flex flex-col items-start gap-3">
          <span className="font-bold">Institucional</span>
          <div className="flex flex-col items-start text-sm gap-1">
            <a href="">Nossa história</a>
            <a href="">Trabalhe conosco</a>
            <a href="">Termo de uso</a>
            <a href="">Política de Privacidade</a>
            <a href="">Responsabilidade</a>
            <a href="">Mapa do Site</a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 flex-wrap">
          <span className="font-bold">Serviços</span>
          <div className="flex flex-col items-start text-sm gap-1">
            <a href="">Bulário Anvisa</a>
            <a href="">Central de atendimento</a>
            <a href="">Como comprar</a>
            <a href="">Aplicação de Vacina</a>
            <a href="">Testes Covid-19</a>
            <a href="">Indique um amigo</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex gap-6 flex-wrap">
            <div className="flex border p-4 gap-3 w-60 items-center rounded-md">
              <EnvelopeIcon size={35} />
              <div className="text-xs text-left">
                <p>SAC: (11) 3000-0000 ou sac@farmagen.com.br</p>
                <p>Segunda à Sexta, das 8h às 18h.</p>
              </div>
            </div>
            <div className="flex border p-4 gap-3 w-60 items-center rounded-md">
              <PhoneIcon size={35} weight="fill" />
              <div className="text-xs text-left">
                <p>Televendas: (11) 3111-1111 ou vendas@farmagen.com.br</p>
                <p>Segunda à Sexta, das 8h às 20h.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full flex-wrap">
            <span>Redes Sociais:</span>
            <button className="text-red-500 bg-gray-950 p-3 rounded-full">
              <FacebookLogoIcon size={25} />
            </button>
            <button className="text-red-500 bg-gray-950 p-3 rounded-full">
              <InstagramLogoIcon size={25} />
            </button>
            <button className="text-red-500 bg-gray-950 p-3 rounded-full">
              <YoutubeLogoIcon size={25} />
            </button>
            <button className="text-red-500 bg-gray-950 p-3 rounded-full">
              <WhatsappLogoIcon size={25} />
            </button>
            <button className="text-red-500 bg-gray-950 p-3 rounded-full">
              <TelegramLogoIcon size={25} />
            </button>
            <button className="text-red-500 bg-gray-950 p-3 rounded-full">
              <EnvelopeIcon size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-500 text-white py-4 px-8 flex-wrap">
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-3 flex-wrap">
            <span className="font-bold">Formas de pagamento</span>
            <img src="src/assets/cards.svg" alt="" />
          </div>
          <div className="flex flex-col items-start gap-3 flex-wrap">
            <span className="font-bold">A FarmaGen apoia</span>
            <img src="src/assets/ias_partner.svg" alt="" />
          </div>
          <div className="flex flex-col items-start gap-3">
            <div>
              <span className="font-bold">Assine nossa newsletter</span>
            </div>
            <div>
              <form className="flex items-center flex-wrap">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="bg-white placeholder:text-gray-400 placeholder:text-sm px-2 py-1 rounded text-black w-45 mr-2.5"
                />
                <input
                  type="email"
                  placeholder="Digite seu email"
                  className="bg-white placeholder:text-gray-400 placeholder:text-sm px-2 py-1 rounded-l text-black w-45"
                />
                <button className="bg-emerald-400 p-1.5 rounded-r text-sm">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10 pb-4">
          <p className="text-xs text-left font-bold mb-2">
            Todas as informações contidas neste site não devem ser usadas para
            auto medicação. Ao persistirem os sintomas o médico deverá ser
            consultado.
          </p>
          <p className="text-xs text-left">
            O nome FarmaGen e o domínio www.farmagen.com.br são marcas
            registradas por Drogaria FarmaGen, fundada em 2022 sob o C.N.P.J:
            40.0000.000/0001-10 – Inscrição Estadual: 100.000.000.000 - situada
            na Av. Não Existe no 10, Nemtem - Fictícia / FC - CEP: 01000-010 -
            Licença municipal para funcionamento: 000.000.000-1 – ANVISA
            Autorização / MS 0.10000.1 - COVISA Autorização 1.10101.1 -
            Farmacêuticos: Dra. Fulana C. Beltrana - CRF: 10101, Dra. Ciclana F.
            Beltrana - CRF 01010.. As receitas médicas devem ser apresentadas
            para o e-mail: farmaceutico@farmagen.com.br. Copyright 2022 Drogaria
            FarmaGen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer