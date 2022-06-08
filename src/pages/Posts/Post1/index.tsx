import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import postImage from '../../../assets/images/post_1.png';
import infografico from '../../../assets/images/infografico.png';

import posts from '../../../services/data';

import {
  ImageWrapper,
  LastPostsWrapper,
  MainWrapper,
  PostContent,
  PostInfoContainer,
  TextWrapper,
} from '../styles';
import LastPost from '../../../components/LastPost';

const Post1 = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>5 efeitos das redes sociais e como evitá-los</h1>
          <span>Grupo Sete • 31/05/2022 - 14:09</span>
          <ImageWrapper>
            <img src={postImage} alt='Imagem do Post' />
          </ImageWrapper>
        </PostInfoContainer>
        <PostContent>
          <TextWrapper>
            <p>
              Com o advento dos smartphones, em conjunto com as redes sociais e
              a facilidade e rapidez com que as informações atravessam de um
              lado do planeta para o outro, acabamos não percebendo que estamos
              conectados quase todas as horas do nosso dia. Porém, isso pode
              acarretar problemas mentais e de saúde.
            </p>
            <p>
              É importante prestar atenção em quanto tempo estamos passando nas
              redes sociais e os efeitos que elas estão nos causando, para que
              possamos nos prevenir e não deixar que essas coisas aconteçam!
            </p>
            <p>
              Convidamos você a conferir com a gente os 5 efeitos das redes
              sociais e como evitá-los, e perceber se algum deles está presente
              no seu dia a dia:
            </p>
            <h2>#1. VÍCIO</h2>
            <p>
              Estamos o tempo todo com o celular ao nosso lado. Automaticamente,
              temos o costume de abrir as redes sociais e ficarmos por lá,
              navegando por incontáveis minutos, até guardarmos o telefone e
              pouco tempo depois voltarmos a abrir o aparelho para checar as
              mesmas redes sociais que acabamos de ver. Essa ação, quando
              repetida várias vezes ao dia, caracteriza um sintoma claro de
              dependência, um problema que reflete diretamente os nossos
              hábitos.
            </p>

            <p>
              O vício acontece uma vez que as redes sociais são visualmente
              atraentes e nos oferecem uma gama quase infinita de conteúdo, mas
              a sua principal causa está ligada na forma como elas funcionam,
              pensadas para promover a repetição de seu uso por meio de algumas
              características que todas elas têm em comum.
            </p>

            <p>
              Um dos principais aspectos é o botão de “curtir”, da qual o
              usuário, ao compartilhar uma foto ou comentar uma publicação,
              recebe um retorno capaz de causar um sentimento equivalente a
              ganhar dinheiro e outras recompensas sociais responsáveis por
              liberar substâncias químicas em nosso cérebro que aguçam a
              sensação de “querer mais”. E por sermos altamente sociais, isso
              gera vulnerabilidades mentais na tentativa de buscar suprir uma
              carência inesgotável por validação.
            </p>
            <p>
              Dessa forma, embora ainda não haja um diagnóstico formal que
              caracterize o vício em redes sociais, é evidente que isso é um
              problema que têm afetado cada vez mais pessoas e por isso é
              importante achar alternativas para combatê-lo.
            </p>

            <h2>#1. COMO EVITÁ-LO</h2>
            <p>
              Uma dica para evitar o vício é optando pela mudança de hábito. Ao
              buscar, por exemplo, desligar as notificações e realizar
              atividades para fazer no tempo livre que foquem em distrair a
              mente de outras formas que não seja rolando o feed, isto é,
              estabelecendo limites para o uso da internet, nós melhoramos a
              nossa saúde e se tornamos menos dependentes.
            </p>
            <h2>#2. ATAQUES CIBERNÉTICOS E GOLPES</h2>
            <p>
              O crescimento exponencial da internet abriu espaço para que
              pessoas más intencionadas realizassem crimes cibernéticos com
              maior abrangência, principalmente com usuários que não possuem
              tanto conhecimento de segurança na web. Dentre os golpes mais
              conhecidos, o Phishing é de longe o mais aplicado. Sua efetivação
              se dá a partir do momento que o usuário desatento clica em um link
              ou e-mail fraudulento, normalmente contendo o direcionamento para
              uma página falsa de banco, rede social ou site de entretenimento.
            </p>
            <p>
              A partir do momento que a pessoa digita as informações, o
              cibercriminoso ganha acesso a todos os dados da vítima,
              requisitando na maioria das vezes uma quantia para resgaste.
            </p>
            <h2>#2. COMO EVITÁ-LOS </h2>
            <p>
              Há diversas formas de não cair em um golpe e dificultar a vida de
              alguém que deseja roubar suas informações. Não compartilhar senhas
              por meio de plataformas não seguras, como chats e e-mail,
              desconfiar de cobranças que não deveriam ser realizadas, sempre
              verificar a url do domínio, onde normalmente sites maliciosos
              possuem erros ortográficos, baixar arquivos de fontes não
              confiáveis, todas essas opções ajudam a impedir que sejamos
              vítimas de ataques cibernéticos.
            </p>
            <h2>#3. FAKE NEWS</h2>
            <p>
              Em tempos de expansão das redes sociais e eleições, informação é
              sempre algo que temos de analisar mais de uma vez para não
              absorvermos conteúdos distorcidos. Sua definição está presente na
              própria construção das palavras “notícias falsas”. Sua
              disseminação se encontra principalmente por meio de aplicativos de
              mensageria, como WhatsApp e Facebook, mas pode ser vista também em
              meios audiovisuais, como no Youtube e na própria televisão.
            </p>
            <h2>#3. COMO EVITÁ-LAS </h2>
            <p>
              É extremamente importante olhar o site em que a notícia foi
              publicada, pois existem sites que possuem o intuito de espalhar
              fake news. Logo, busque sempre buscar a notícia em portais que tem
              mais credibilidade e pesquise a notícia na internet para ver a sua
              veracidade, se atentando sempre em olhar a sua fonte.
            </p>
            <p>
              Outro ponto crucial é ler a notícia completa, pois muitos utilizam
              títulos e manchetes não condizentes com a realidade ou
              sensacionalistas, fazendo com que seja necessário ler a matéria
              completa.
            </p>
            <p>
              Abaixo, podemos ver um infográfico que demonstra o alto grau de
              uso e influência das redes sociais no mundo e no Brasil!
            </p>
            <img className='infografico' src={infografico} alt='Infográfico' />
            <p>
              Destaca-se atenção para a porcentagem de brasileiros usuários das
              redes sociais, que chega a ser 66% da população nacional e a
              utilização destas plataformas como meio de informação pela maioria
              dos brasileiros.
            </p>
            <h2>#4. PROBLEMAS DE AUTOIMAGEM: </h2>
            <p>
              Pesquisa da Royal Society for Public Health aponta que muitos
              jovens não estão satisfeitos com a sua imagem física corporal,
              principalmente jovens do sexo feminino que estão na adolescência
              ou início da fase adulta, e que até 9 em cada 10 garotas
              adolescentes estão descontentes com seus corpos.
            </p>
            <p>
              A pesquisa mostra os resultados de estudos como o da The British
              Association of Aesthetic Plastic Surgeons, sugerindo que as mídias
              sociais estão por trás da necessidade das meninas de alterarem
              suas aparências através de cirurgias estéticas para ficarem melhor
              nas fotos, apontando para uma porcentagem de 70% das pessoas de 18
              a 24 anos que realizariam o procedimento.
            </p>
            <h2>#4. COMO EVITÁ-LOS</h2>
            <p>
              A utilização das redes sociais de uma forma benéfica pode ser
              realizada por meio da interação na plataforma com outros usuários
              ou grupos para apoio emocional. A mesma pesquisa sugere que o
              Facebook é o local onde os usuários recebem maior apoio emocional.
            </p>
            <p>
              Procurar um grupo na rede e interagir com pessoas que estão
              passando por esses problemas ou que desejam ajudar é uma boa
              ideia. Quando se juntam em páginas ou grupos do mesmo interesse,
              seus usuários podem compartilhar suas preocupações, sentimentos,
              dúvidas, sendo que mesmo distantes uns dos outros, podem se
              comunicar e se aproximar através das mídias.
            </p>
            <h2>#5. BAIXA QUALIDADE DE SONO</h2>
            <p>
              O uso excessivo e indevido das redes sociais, principalmente nas
              horas finais do dia, tem causado efeitos negativos e alarmantes
              nos usuários (principalmente nos jovens). Uma pesquisa realizada
              no Canadá com jovens entre 11 e 20 anos mostraram que 59,6% dos
              meninos e 67,9% das meninas dormem pouco, podendo desenvolver
              transtornos de sono mais rapidamente e de forma mais severa.{' '}
            </p>
            <p>
              Jean Ragnini, médico neurologista, diz que o ritmo biológico do
              usuário pode ser afetado e desregulado, por conta das células
              presentes na retina que ajudam o cérebro a regular o relógio
              biológico. Além disso, são problemas recorrentes de pessoas que
              usam excessivamente as redes sociais (principalmente no período
              noturno) a insônia, ansiedade, o Transtorno do Déficit de Atenção
              e Hiperatividade (TDAH), trazendo dificuldades de aprendizado,
              dores nas pernas e no corpo e etc.
            </p>
            <h2>#5. COMO EVITÁ-LA</h2>
            <p>
              Possuindo um horário de sono regular, com um ambiente confortável
              e, principalmente, evitando o máximo possível o contato com
              qualquer dispositivo móvel (smartphones em especial), já será
              possível ter uma boa noite de sono, evitando problemas e queixas
              posteriores.
            </p>
            <h2>
              {/* VIU SÓ COMO É IMPORTANTE ESTARMOS ATENTOS AOS EFEITOS DAS REDES
              SOCIAIS? */}
              Viu só como é importante estarmos atentos aos efeitos das redes
              sociais?
            </h2>
            <p>
              Nós sabemos que é muito divertido navegar pelo Facebook e
              Instagram, mas devemos estar alertas, pois não podemos deixar que
              as redes sociais ocupem todo o nosso tempo e afetem nossa
              qualidade de vida.
            </p>
            <p>
              Devemos deixar espaço para outras atividades e hobbies que são
              positivos para o nosso bem-estar. Sair com os amigos, ler um livro
              novo, praticar um esporte, aproveitar um pôr-do-sol ou caminhar na
              praia sem os dispositivos são opções interessantes e muito
              benéficas para nós.
            </p>
            <p>
              Sempre que sentir algum desses efeitos, corre aqui para a página e
              confere a forma de evitá-lo para tentar colocar em prática!
            </p>
            <h2 className='referencia'>REFERÊNCIAS BIBLIOGRÁFICAS:</h2>

            <p>
              CNN BRASIL. Carência por like está quimicamente relacionada ao
              vício, alerta especialista, 30 de out. de 2020. Disponível em
              https://www.cnnbrasil.com.br/tecnologia/carencia-por-like-esta-quimicamente-relacionada-ao-vicio-alerta-especialista/.
              Acesso em: 07 de jun. de 2022.
            </p>
            <p>
              ROYAL SOCIETY FOR PUBLIC HEALTH. #StatusOfMind: Social Media and
              Young People’s Mental Health and Wellbeing, maio de 2017.
              Disponível em:
              https://www.rsph.org.uk/static/uploaded/d125b27c-0b62-41c5-a2c0155a8887cd01.pdf.
              Acesso em: 07 de jun. de 2022.
            </p>
            <p>
              TCA Informática. Segurança na Web: como evitar golpes e ataques de
              hackers. Disponível em:
              https://www.tca.com.br/blog/seguranca-na-web-como-evitar-golpes-e-ataques-de-hackers/.
              Acesso em: 07 de jun. de 2022.
            </p>
            <p>
              PSICÓLOGO E TERAPIA. Vício em redes sociais e seus impactos no dia
              a dia. Disponível em:
              https://www.psicologoeterapia.com.br/blog/vicio-em-redes-sociais-e-seus-impactos-no-dia-a-dia/.
              Acesso em: 07 de jun. de 2022.
            </p>
            <p>
              PSICOLOGIA DOCKHORN. Como se livrar do vício em redes sociais.
              Disponível em:
              https://psicologiadockhorn.com/blog/vicio-em-redes-sociais/.
              Acesso em: 07 de jun. de 2022.
            </p>
            <p>
              APPTUTS.NET. O que são fake news e 10 dicas para evitá-las.
              Disponível em:
              https://www.apptuts.net/tutorial/web/fake-news-dicas-para-evita-las/
              . Acesso em: 07 de jun. de 2022.
            </p>
            <p>
              BITTENCOURT, ANA P. Redes sociais e qualidade do sono: tempo
              demais na internet faz você dormir mal? 22 de out. de 2019.
              Disponível em:
              https://comparaplano.com.br/blog/redes-sociais-e-qualidade-do-sono/
              . Acesso em: 07 de jun. de 2022.{' '}
            </p>
            <p>
              VITA CHECKUP CENTER. Conheça os fatores que interferem no sono com
              qualidade. Disponível em:
              https://vitacheckup.com.br/2019/01/conheca-os-fatores-que-interferem-no-sono-com-qualidade/
              . Acesso em: 07 de jun. de 2022.
            </p>
          </TextWrapper>
          <LastPostsWrapper>
            <span className='lastPostTitle'>Últimos posts</span>
            <LastPost {...posts[1]} className='isPostPage'></LastPost>
            <LastPost {...posts[2]} className='isPostPage'></LastPost>
            <LastPost {...posts[3]} className='isPostPage'></LastPost>
          </LastPostsWrapper>
        </PostContent>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Post1;
