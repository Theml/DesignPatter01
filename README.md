# DesignPatter01
Created with CodeSandbox


- **Cenário**: Você precisa compartilhar informações entre vários componentes, você pensa em aplicar o Context API porém percebe que também precisa compartilhar a forma como essa informação é retornada ou alterada e não quer espalhar essa lógica por todo o código que precisa da informação.
- **Solução**: Isolar o contexto com seu estado em um componente que chamamos de Provider, aplicar em Provider no nível mais alto da hierarquia de componentes e usa-lo onde for necessário.
