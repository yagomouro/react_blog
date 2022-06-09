import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import postImage from '../../../assets/images/post_4.png';
import smartLock from '../../../assets/images/smartLock.png';
import smartTv from '../../../assets/images/smartTv.png';

import { IPost } from '../../../types/IPost';

import {
  ImageWrapper,
  LastPostsWrapper,
  MainWrapper,
  PostContent,
  PostInfoContainer,
  TextWrapper,
} from '../styles';
import LastPost from '../../../components/LastPost';
import posts from '../../../services/data';

const Post4 = ({ authorName }: IPost) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>IOT: A Internet das Coisas</h1>
          <span>Talissa Talamoni • 31/05/2022 - 14:09</span>
          <ImageWrapper>
            <img src={postImage} alt='Imagem do Post' />
          </ImageWrapper>
        </PostInfoContainer>
        <PostContent>
          <TextWrapper>
            <p>
              A Internet das Coisas (em inglês, Internet of Things) é uma das
              tecnologias mais importantes do nosso século. Uma definição
              simples do conceito de Internet das Coisas é a conexão dos
              aparelhos que utilizamos diariamente - nossa geladeira, cafeteira,
              torradeira elétrica, televisor, veículo, aspirador de pó,
              ar-condicionado, maçanetas e até mesmo as nossas lâmpadas - com a
              internet.
            </p>
            <p>
              Esse tipo de tecnologia ajuda no cotidiano daqueles que a
              utilizam, pois automatizam suas tarefas. A cafeteira é um ótimo
              exemplo dessa facilitação, pois pode-se deixar programado para que
              ela faça seu café no horário que você acorda, ou solicitar por
              meio da voz para que o faça. O aspirador de pó é outro objeto que
              auxilia na rotina de seu usuário, pois realiza a limpeza de forma
              independente em horários que for programado para tal.
            </p>
            <p>
              O uso de tecnologias vestíveis também é uma realidade, com a
              criação e popularização dos famosos relógios inteligentes (em
              inglês, Smartwatches), bem como dos óculos e pulseiras
              inteligentes. Os óculos, por exemplo, têm a capacidade de mostrar
              informações nas lentes e pode até mesmo compartilhar com outros.
            </p>
            <p>
              A relação entre a realidade física e a digital se torna cada vez
              mais próxima e interligada. Nesse sentido, novas ideias estão
              surgindo a cada dia para unificar a Internet das Coisas e também a
              criação do termo cidades inteligentes, que são cidades conectadas
              com a internet com a integração com sistemas que facilitam a vida
              das pessoas que ali residem. Antes de entrarmos nos conceitos mais
              atuais e modernos de Internet das Coisas, como as ideias de
              unificação ou de cidades inteligentes, precisamos entender quando
              surgiu e como funciona essa tecnologia em seus mais diversos tipos
              e dispositivos!
            </p>
            <h2>ENTÃO...COMO SURGIU A INTERNET DAS COISAS?</h2>
            <p>
              O termo "Internet das Coisas" apareceu pela primeira vez em 1999,
              quando Kevin Ashton (MIT) se referiu a ideia do cofundador da Sun
              Microsystems, Bill Joy de realizar conexões de um dispositivo para
              outro dispositivo (Devide to Device - D2D). Em junho de 2009,
              Ashton escreveu um artigo para o RFID Journal, onde, além de
              reforçar o termo, também fez previsões sobre o que viria a se
              tornar essa nova tecnologia e suas utilidades na rotina do "novo
              cotidiano".
            </p>
            <p>
              Já nos dias de hoje, existem muitos objetos conectados como
              geladeiras, carros, televisões e elevadores. As redes podem
              interferir tanto em pequenos dispositivos quanto nos de
              infraestrutura mais complexa. Essa facilidade de uso deu origem a
              iniciativas envolvendo grandes corporações para que integrem a
              Internet das Coisas.
            </p>
            <p>
              Portanto, a ideia da IoT existe há muito tempo, mas uma coleção de
              avanços recentes em várias tecnologias a torna prática como por
              exemplo:
            </p>
            <p>
              • O acesso à tecnologia de sensores de baixo custo e baixa
              potência, possibilitando mais sensores acessíveis aos fabricantes
              de tecnologia IoT.
            </p>
            <p>
              • Uma série de protocolos de rede para a Internet facilitaram a
              conexão de sensores, podendo conectar facilmente o sensor à nuvem
              para um download de dados eficiente.
            </p>
            <p>
              • O aumento da disponibilidade de plataformas de nuvem oferece às
              empresas e aos consumidores acesso à infraestrutura de que
              precisam para aumentar a escala sem ter que gerenciar tudo.
            </p>
            <p>
              • Aprendizado de máquina e análise avançada. O surgimento dessas
              tecnologias aliadas ajuda a automatizar ainda mais o processo e os
              dados produzidos pela IoT também alimentam essas tecnologias.
            </p>
            <p>
              • Os avanços nas redes neurais trouxeram o processamento de
              linguagem natural (NLP) para dispositivos IoT (Alexa, Cortana,
              assistentes digitais pessoais da Siri, etc.), criando atrações
              atraentes, acessíveis e viáveis para uso doméstico.
            </p>
            <p>
              Além disso, a IoT impacta diretamente setores diversos como no de
              fabricação, monitorando a linha de produção; setor automotivo,
              detectando falhas nos automóveis e oferecendo dados, mantendo os
              proprietários de carros informados; no de transporte e logística,
              analisando características do estoque, rastreando e enviando
              alerta de quando a temperatura cai ou aumenta para um nível que
              ameaça um produto; no setor público como, por exemplo, serviços do
              governo que alertem seus cidadãos e coletem dados sociais através
              de aplicativos baseados em IoT; de assistência médica monitorando
              pacientes e garantindo outros benefícios como na localização de
              cadeiras de rodas; e assim por diante em praticamente todos os
              demais setores.
            </p>
            <p>Confira abaixo alguns exemplos na prática:</p>
            <h2>#1. FECHADURAS INTELIGENTES (SMARTLOCKS)</h2>
            <img
              className='insideText'
              src={smartLock}
              alt=' Fechadura inteligente'
            />
            Fonte: Freepik
            <p>
              Um exemplo de aplicação da Internet das Coisas que é cada vez mais
              utilizado, são as fechaduras inteligentes (smartlocks). São
              basicamente uma fechadura normal, como vemos em casas ou
              estabelecimentos, mas com formas de acesso mais sofisticadas,
              práticas e seguras.
            </p>
            <p>
              É possível integrar um telefone celular pessoal para que funcione
              como chave de acesso, bastando se aproximar da porta para que
              abra, ou também a identificação biométrica, que é a opção que
              normalmente traz mais segurança. também é possível utilizar uma
              senha, que é digitada através de seu próprio teclado embutido; e
              alguns modelos que até trazem a possibilidade de usar uma chave
              convencional.
            </p>
            <p>
              Os smartlocks trazem uma praticidade e segurança inestimável, com
              funções que façam com que a porta seja trancada automaticamente,
              assim que percebe que o usuário deixou a residência; além das
              funções de detecção de situações de pânico, invasões e assaltos.
            </p>
            <p>
              Os benefícios que os smartlocks trazem são imensamente
              consideráveis, por tudo que foi citado anteriormente, é um
              investimento, de fato, válido!
            </p>
            <h2> #2. SMART TV</h2>
            <img
              src={smartTv}
              alt='Tv inteligente'
              className='insideText'
            />{' '}
            Fonte: Freepik
            <p>
              Um dos exemplos mais famosos aparelhos que usam a internet das
              coisas são as Smart TV’s.
            </p>
            <p>
              O termo Smart TV significa televisão inteligente em português e
              surgiram para trazer uma concepção que une a TV com a internet.
            </p>
            <p>
              Ou seja, com a roupagem semelhante, se torna possível assistir à
              programação oferecida pelos canais de TV aberta ou mesmo aquela
              comprada em um plano por assinatura, mas também ver fotos, jogar,
              seguir redes sociais e utilizar inúmeras outras operações, sem
              precisar usar o celular, tablet ou computador.
            </p>
            <p>
              O comando de voz é uma das funções mais apreciadas por quem gosta
              de equipamentos mais modernos, pois possibilita falar com a
              televisão, desde que suporte Google Assistant ou Amazon Alexa.
              Basta falar e o assistente pessoal pode encontrar aplicativos,
              aumentar o volume, mudar de canal, contar uma piada, pesquisar
              informações de trânsito ou verificar a previsão do tempo. Sua
              plataforma pode até recomendar conteúdo compatível com gostos
              pessoais, como o YouTube já faz de forma intuitiva.
            </p>
            <p>
              Os principais fabricantes estão vendo esse recurso como uma chance
              de atualizar seus dispositivos, que dessa forma se tornam mais
              atraentes aos olhos do público.
            </p>
            <h2>
              VIU SÓ COMO A INTERNET DAS COISAS ESTÁ PRESENTE NO NOSSO DIA A
              DIA?
            </h2>
            <p>
              A internet das coisas está mudando a forma como vivemos e como nos
              conectamos com o mundo. Se pararmos para pensar, a velocidade que
              a tecnologia evoluiu nas últimas duas décadas foi muito grande,
              assim, pode-se dizer que a Internet das Coisas, mesmo que em fase
              inicial, promete muitas inovações.
            </p>
            <p>
              Ainda que em fase inicial, já está presente no cotidiano de muitas
              pessoas, seja por meio de seu fone de ouvido ou assistente pessoal
              até mesmo as tecnologias usadas em empresas.
            </p>
            <p>
              Para o futuro, vemos muitas novidades, como os carros conectados,
              em que o dono pode dirigir seu carro de forma remota, seja
              pré-aquecendo seu automóvel ou chamando um carro através do seu
              telefone.
            </p>
            <p>
              Um dos assuntos que está em voga com relação a Internet das Coisas
              é a chegada do 5G no Brasil e as implicações para essa tecnologia,
              uma vez que o 5G possibilita a comunicação dos dispositivos de
              forma mais eficiente e por ser mais estável, auxilia na
              atualização em tempo real dos aparelhos. Assim, nos resta esperar
              e ficar de olho nas próximas fases dessa tecnologia que veio para
              mudar!
            </p>
            <h2 className='referencia'>BIBLIOGRAFIA</h2>
            <p>
              ORACLE. O que é IoT? Disponível em:
              https://www.oracle.com/br/internet-of-things/what-is-iot/. Acesso
              em: 19 de maio de 2022.
            </p>
            <p>
              TECHTUDO. ‘Internet das Coisas’: entenda o conceito e o que muda
              com a tecnologia. Disponível em:
              https://www.techtudo.com.br/noticias/2014/08/internet-das-coisas-entenda-o-conceito-e-o-que-muda-com-tecnologia.ghtml.
              Acesso em: 19 de maio de 2022.
            </p>
            <p>
              GOVERNO FEDERAL. Internet das Coisas: um passeio pelo futuro que
              já é realidade no dia a dia das pessoas. Disponível em:
              https://www.gov.br/mcom/pt-br/noticias/2021/marco/internet-das-coisas-um-passeio-pelo-futuro-que-ja-e-real-no-dia-a-dia-das-pessoas.
              Acesso em: 19 de maio de 2022.
            </p>
            <p>
              EAD PUC GOIÁS. Internet das Coisas: o que é, como funciona e
              aplicações. Disponível em:
              https://ead.pucgoias.edu.br/blog/internet-das-coisas. Acesso em:
              19 de maio de 2022.
            </p>
            <p>
              CONTROL ID. Fechadura inteligente só traz vantagens para segurança
              da casa. Disponível em:
              https://www.controlid.com.br/blog/outros/fechadura-inteligente-sua-casa/.
              Acesso em: 19 de maio de 2022.
            </p>
            <p>
              MAGRANI, Eduardo. A internet das coisas. Rio de Janeiro: Editora
              FGV, 2018. Disponível em:
              https://bibliotecadigital.fgv.br/dspace/bitstream/handle/10438/23898/A%20internet%20das%20coisas.pdf.
              Acesso em: 19 de maio de 2022.
            </p>
          </TextWrapper>
          <LastPostsWrapper>
            <span className='lastPostTitle'>Últimos posts</span>
            <LastPost {...posts[0]} className='isPostPage'></LastPost>
            <LastPost {...posts[1]} className='isPostPage'></LastPost>
            <LastPost {...posts[2]} className='isPostPage'></LastPost>
          </LastPostsWrapper>
        </PostContent>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Post4;
