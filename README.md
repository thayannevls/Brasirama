[**jogar**](https://thayannevls.github.io/Brasirama/)

# Brasirama

Brasirama é um jogo (ou site interativo) que busca sensibilizar as pessoas sobre as desigualdades existentes em nossa sociedade.
Ele tenta fazer isso colocando quem joga no lugar de pessoas que vivem nas mais distintas realidades de nosso país.
Como seria ser uma mulher indígena no interior do Pará? Ou uma trans negra paraibana? Ou um branco catarinense?

É claro que representar todas as possibilidades em profundidade seria muito complexo e implicaria descrever realidades que nós não conhecemos.
Em Brasirama tentamos descrever pelo menos uma pequena parte dessas realidades a partir de dados estatísticos e bom humor.

## Estatísticas

Usamos estatísticas da vida real para calcular a probabilidade dos eventos acontecerem dentro do jogo.
Por exemplo, digamos que em nosso jogo você nasça em Salvador, como uma mulher negra e em uma família com poucos recursos.
E digamos que você queira completar o ensino superior.
No mundo real, qual a porcentagem de negras soteropolitanas, nascidas em famílias pobres e com ensino superior completo?
Essa porcentagem será usada para calcular sua dificuldade no jogo de completar o ensino superior.

## Microdados

Em pesquisas estatísticas os microdados são os dados em sua maior granularidade.
Por exemplo, as respostas de cada pessoa à pesquisa do [PNAD](https://www.ibge.gov.br/estatisticas-novoportal/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html?=&t=o-que-e).
A partir dos microdados conseguimos calcular porcentagens mais específicas, e assim traçar um perfil mais individualizado para ilustrar como seria a vida de uma determinada pessoa.

Os microdados nos permitem perceber as desigualdades entre os grupos sociais.
Por exemplo, segundo o [IBGE](https://brasilemsintese.ibge.gov.br/populacao/taxas-de-mortalidade-infantil.html), a mortalidade infantil no Brasil, em 2015, foi de 13,82 por mil nascidos vivos.
Mas será que esse número é proporcionalmente igual para todos os grupos sociais? Ou será que varia de acordo com a cidade, renda da família, escolaridade etc?
Tendo os microdados conseguimos calcular a porcentagem para cada uma dessas combinações de características.

Porém, nem sempre temos dados com esse nível de detalhe...
Neste caso, para este projeto, podemos tentar usar alguns dados mais gerais.

## Características

Algumas características que pretendemos usar nos cálculos das porcentagens para comparação entre perfis sociais:

- Local
- Sexo
- Raça/Cor
- Gênero
- Deficiência

- Renda da família de nascença
- Escolaridade
- Renda atual
- Desemprego
- Migração (entre cidades e entre países)

---

## Deploy no GitHub Pages

    cd brasis_interface
    npm run build
    rm -r ../docs && cp -r dist ../docs
