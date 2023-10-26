# DesignPatter01
Created with CodeSandbox

Workshop ao qual participei em questão de padrões de design de react. Este código é referente ao modelo de **Provider Pattern**.

**Palestra e Workshop produzido por Leandro Simões.**

- Design Patterns (Padrões de Projeto) são soluções para problemas comuns no desenvolvimento de software, porém para ser considerado um padrão é necessário algum tipo de chancela da comunidade, ou seja, por pessoas mais sênior que reconhecem aquela solução como uma solução boa.
- Mais importante do que conhecer como aplicar padrões é também saber quando não usá-los, pense em padrões como diretrizes e não leis.

- **Dificuldade**: 🟢 ⚪⚪
- **Frequência**: 🟢🟢🟢

- **Cenário**: Você precisa compartilhar informações entre vários componentes, você pensa em aplicar o Context API porém percebe que também precisa compartilhar a forma como essa informação é retornada ou alterada e não quer espalhar essa lógica por todo o código que precisa da informação.
- **Solução**: Isolar o contexto com seu estado em um componente que chamamos de Provider, aplicar em Provider no nível mais alto da hierarquia de componentes e usa-lo onde for necessário.
