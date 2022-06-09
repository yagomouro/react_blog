import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import postImage from '../../../assets/images/post_3.png';
import giria1 from '../../../assets/images/giria1.png';
import giria2 from '../../../assets/images/giria2.png';
import giria3 from '../../../assets/images/giria3.png';
import giria4 from '../../../assets/images/giria4.png';
import giria5 from '../../../assets/images/giria5.png';
import giria6 from '../../../assets/images/giria6.png';
import giria7 from '../../../assets/images/giria7.png';
import giria8 from '../../../assets/images/giria8.png';

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

const Post3 = ({ authorName }: IPost) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>8 gírias da internet</h1>
          <span>Carlos Santana • 31/05/2022 - 14:09</span>
          <ImageWrapper>
            <img src={postImage} alt='Imagem do Post' />
          </ImageWrapper>
        </PostInfoContainer>
        <PostContent>
          <TextWrapper>
            <h2>GÍRIAS DA INTERNET QUE TALVEZ VOCÊ NÃO SAIBA O SIGNIFICADO.</h2>
            <p>
              As gírias estão conosco muito antes do surgimento da internet e
              das redes sociais. Elas fazem parte das comunidades, e expressam
              suas culturas locais e modos de viver.{' '}
            </p>
            <p>
              Com o avanço da internet e o uso cada vez mais intenso das redes
              sociais, surgem maneiras de se comunicar mais dinâmicas e
              específicas destas plataformas.
            </p>
            <p>
              Os jovens, afincos usuários das redes sociais, são os que mais
              usam essa forma de comunicação e estão sempre criando novas gírias
              para conversarem, porém, agora, o âmbito das gírias se expande
              para o contexto nacional, e alguns até para o meio internacional.{' '}
            </p>
            <p>
              Nesse sentido, para ajudar você a entender e estar por dentro das
              novidades no mundo das gírias mais conhecidas, montamos uma lista
              com 8 das gírias mais utilizadas e seus significados. Confira
              abaixo!
            </p>
            <h2>#1. OLD</h2>
            <p>
              Comumente usados na internet, principalmente em redes sociais como
              o Twitter. “Old” em seu sentido literal traduzido do inglês
              significa “velho” ou “antigo”, mas quando é usado como gíria tem o
              sentido de algo que já é de conhecimento, muito falado, que deixou
              de ser novidade e pode ser substituído na maioria dos casos pela
              interjeição “Claro”. Por exemplo:
              <br />
              -- Menina, você viu o que rolou ontem? <br /> -- Old que sim,
              estava lá quando aconteceu. Ou na negativa: <br />
              -- Gostou desse jogo? <br />
              -- Old que não, achei os gráficos ruins.
            </p>
            <img className='giria' src={giria1} alt='' />
            Fonte: Twitter
            <h2>#2. POSER</h2>
            <p>
              “Poser” é uma gíria destinada a alguém que finge gostar de alguma
              coisa para se encaixar em algum perfil a fim de receber aceitação
              das outras pessoas.
            </p>
            <p>
              Geralmente eles copiam os comportamentos e modos do grupo que
              fingem fazer parte, muitas vezes apenas repetindo o que é falado
              tentando criar uma boa imagem. Muito usado entre fãs de artistas
              de alguns gêneros musicais e no meio nerd geek. Por exemplo:
              <br />
              -- Sou fã dos filmes da Marvel. <br />
              -- Então qual é o verdadeiro nome do Homem-Aranha? <br />
              -- Clark Kent? <br />
              -- Que poser! Esse é o nome do Super-Homem.{' '}
            </p>
            <img className='giria' src={giria2} alt='' />
            <h2>#3. FLOP</h2>
            <p>
              Flop é um termo comum da língua inglesa e significa em português
              “fracasso”. Bastante usado na internet e redes sociais com o
              sentido de algo que não deu certo, não obteve sucesso e que
              falhou. Por exemplo: <br />
              -- Como foi o show? <br />
              -- Flopou! Ninguém pareceu. Já quando algo dá muito certo, é usado
              a gíria hit no lugar.
            </p>
            <img className='giria' src={giria3} alt='' />
            <h2>#4. CRINGE</h2>
            <p>
              O termo “cringe” ganhou uma intensa repercussão na internet de uns
              tempos pra cá e hoje em dia é bastante popular. A palavra tem
              origem inglesa e é usada para descrever o sentimento relacionado
              às situações muito constrangedoras e desconfortantes podendo ser
              traduzido livremente por “vergonhoso”. Por exemplo: <br />
              -- Olha essa foto sua adolescente, amigo! <br />
              -- Aff, que cringe eu era.
            </p>
            <img className='giria' src={giria4} alt='' />
            <h2>#5. MEC</h2>
            <p>
              Gíria de origem carioca que significa estar tranquilo, suave, ok.
              Apesar da origem carioca, a gíria ganhou destaque e passou a ser
              utilizada no país inteiro, por conta de influenciadores, youtubers
              e streamers que a utilizam constantemente. Exemplo: “Acabei de
              enviar o trabalho, tá mec.”
            </p>
            <img className='giria' src={giria5} alt='' />
            Fonte: Twitter
            <h2>#6. HYPE</h2>
            <p>
              É algo que está sendo muito comentado, que repercute bastante
              entre as pessoas, que está na moda. A partir disso, esse algo que
              está sendo muito repercutido costuma estar "hypado". Exemplo:
              "Muito hype para esse último filme da Marvel..." "Não sei como
              essa música ficou tão hypada assim."
            </p>
            <img className='giria' src={giria6} alt='' />
            Fonte: Twitter
            <h2>#7. TANKAR</h2>
            <p>
              A gíria "tankar" vem de "tank", que normalmente é uma classe de
              personagens em jogos online. Essa classe é caracterizada por ser
              bastante resistente e, então, ter a função de receber dano e
              ataques de personagens inimigos. Logo, a gíria que cada vez mais
              tem saído da bolha dos jogos, possui o significado de "suportar",
              "aguentar". Exemplo: “Impossível tankar isso, cara...”
            </p>
            <img className='giria' src={giria7} alt='' />
            Fonte: Twitter
            <h2>#8. STALKEAR</h2>
            <p>
              A gíria vem do verbo "to stalk", verbo inglês que significa
              perseguir, neste contexto, significa observar constantemente as
              redes sociais de uma pessoa, conferindo todas as informações e
              tudo que a pessoa coloca em suas redes. Exemplo: "Fui stalkear
              ele(a) e curti uma foto antiga sem querer..."
            </p>
            <img className='giria' src={giria8} alt='' />
            Fonte: Twitter
            <h2>
              UFA! E ESSAS SÃO APENAS ALGUMAS DAS GÍRIAS QUE MAIS APARECEM POR
              AÍ...{' '}
            </h2>
            <p>
              Agora gostaríamos de saber: você já conhecia essas gírias? Conta
              pra gente! Na próxima, traremos gírias dos jogos on-line. Elas são
              bem específicas para cada jogo e podem ajudar você a entender a
              dinâmica do game e se comunicar melhor com os seus colegas e
              amigos que jogam junto com você.
            </p>
          </TextWrapper>
          <LastPostsWrapper>
            <span className='lastPostTitle'>Últimos posts</span>
            <LastPost {...posts[0]} className='isPostPage'></LastPost>
            <LastPost {...posts[1]} className='isPostPage'></LastPost>
            <LastPost {...posts[3]} className='isPostPage'></LastPost>
          </LastPostsWrapper>
        </PostContent>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Post3;
