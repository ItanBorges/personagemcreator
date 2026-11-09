# ⚔️ Personagem Creator — D&D 5e (2014) & D&D 5.5 (2024) em Pt-Br

Aplicativo web completo para montagem e progressão de fichas de personagens de **Dungeons & Dragons 5ª Edição (2014)** e **D&D 5.5 (2024 / Revised 5e)**, traduzido para **Português do Brasil (Pt-Br)** e referenciado a partir do [dnd5e.wikidot.com](https://dnd5e.wikidot.com/).

Desenvolvido com **Vanilla JavaScript (ES Modules)**, **HTML5 Semântico** e **CSS3 Moderno** com arquitetura reativa, salvamento automático no `localStorage`, importação/exportação JSON e layout oficial pronto para impressão em PDF.

---

## 🌟 Funcionalidades Principais

### 1. 📚 Livros e Fontes Oficiais Suportadas
Filtro multi-seleção no topo do aplicativo permitindo habilitar ou desabilitar conteúdos de cada livro fonte:
- **`[PHB'24]`**: *Livro do Jogador (Player's Handbook 2024 / D&D 5.5)*
- **`[PHB'14]`**: *Livro do Jogador (Player's Handbook 2014 / D&D 5e)*
- **`[TCoE]`**: *Caldeirão de Tasha para Tudo (Tasha's Cauldron of Everything)*
- **`[XGtE]`**: *Guia de Xanathar sobre Todas as Coisas (Xanathar's Guide to Everything)*
- **`[BPG]`**: *Bigby Apresenta: A Glória dos Gigantes (Bigby Presents: Glory of the Giants)*
- **`[MPMM]`**: *Monstros do Multiverso (Mordenkainen Presents: Monsters of the Multiverse)*
- **`[FTD]`**: *Tesouro dos Dragões de Fizban (Fizban's Treasury of Dragons)*
- **`[SCAG]`**: *Guia de Aventureiros da Costa da Espada (Sword Coast Adventurer's Guide)*

---

### 2. 🐉 Catálogo Completo de Raças, Espécies e Sub-raças
Seleção dinâmica de raças com suporte a seletores contextuais de sub-raças e ancestralidades:
- **Draconatos (Dragonborn)**:
  - **15 Ancestralidades completas**: Cromáticos (*Negro, Azul, Verde, Vermelho, Branco*), Metálicos (*Latão, Bronze, Cobre, Ouro, Prata*) e Gemas de Fizban (*Ametista, Cristal, Esmeralda, Safira, Topázio*), com tipos de dano elemental, tipo de sopro e resistências integradas.
- **Elfos (Elves)**: *Alto Elfo, Elfo da Floresta, Drow (Elfo Negro), Eladrin e Shadar-kai*.
- **Anões (Dwarves)**: *Anão da Colina (com Tenacidade Anã +1 PV/nível), Anão da Montanha e Duergar*.
- **Tieflings**: 9 Linhagens Infernais completas (*Asmodeus, Baalzebul, Dispater, Fierna, Glasya, Levistus, Mammon, Mefistófeles e Zariel*).
- **Golias (Goliaths)**: Variantes de gigantes (*Colina, Pedra, Gelo, Fogo, Nuvens e Tempestade*).
- **Gnomos (Gnomes)**: *Gnomo da Floresta, Gnomo das Rochas e Svirfneblin (Gnomo das Profundezas)*.
- **Halflings**: *Pés-Leves, Robusto e Fantasma*.
- **Outras Raças**: *Aasimar (Protetor, Flagelo, Caído), Genasis (Água, Fogo, Terra, Ar), Shifters (Beasthide, Longtooth, Swiftstride, Wildhunt), Tabaxi, Forjado Bélico (Warforged), Tortle, Changeling, Fada, Harengon e Firbolg*.
- **Humano Variante e Linhagem Customizada**: Seletor automático de **Talento Bônus de 1º Nível**, com aplicação imediata de benefícios na ficha (ex: PV adicionais do talento *Robusto*).

---

### 3. 🎯 Perícias de Classe e Especialização (Expertise)
- **Seleção Guiada de Perícias**: Cada classe inicial define sua lista oficial de perícias disponíveis e a quantidade exata de escolhas permitidas (ex: Ladino escolhe 4 entre 11 perícias; Guerreiro escolhe 2 entre 8; Bardo escolhe 3 quaisquer).
- **Detecção de Antecedente**: Perícias já concedidas pelo antecedente são sinalizadas com o selo `[Antecedente]` e travadas, evitando escolhas duplicadas.
- **Especialização (Expertise)**: Classes que possuem a característica (como **Ladino**, **Bardo** e **Patrulheiro**) liberam caixas de seleção de especialização, dobrando o bônus de proficiência na perícia e exibindo o selo rúnico **Especialista** na ficha oficial.

---

### 4. ⚖️ Customização de Atributos (Regra de Tasha & ASIs)
- **Na Criação de Personagem**: Opção ativável *"Regra Opcional de Tasha: Customizar Atributos"*, permitindo escolher:
  - `+2 / +1` em dois atributos livres;
  - `+1 / +1 / +1` em três atributos livres;
  - `+1 / +1` em dois atributos livres.
- **A cada Aumento no Valor de Habilidade (ASI)**: Nos níveis 4, 8, 12, 16 e 19 (e adicionais de Guerreiro e Ladino), o construtor oferece três opções:
  1. `🌟 Talento (Feat)`: Seleção de talentos gerais ou de combate.
  2. `💪 +2 em 1 Atributo`: Incrementa +2 em um único atributo à escolha.
  3. `✨ +1 em 2 Atributos (Tasha / 5e)`: Menus independentes para escolher dois atributos diferentes para receber +1 cada.

---

### 5. ⚔️ Progressão Nível a Nível e Multiclasse
- Evolução passo a passo com os botões **"+ Subir de Nível"** e **"✖️ Descer Nível"**.
- **Validação Oficial de Multiclasse**: Analisa em tempo real se o personagem atende aos requisitos de atributos mínimos de 13 para as classes atuais e para a nova classe, alertando caso algum pré-requisito não seja atingido.
- **Pontos de Vida (PV)**:
  - 1º Nível: Dado de vida cheio da classe inicial + Modificador de Constituição.
  - 2º Nível em diante: Escolha entre **Média Fixa** (arredondada para cima) ou **Manual/Dado** (campo para digitar o valor tirado na mesa).
- **Subclasses por Classe**: Desbloqueio de arquétipos no marco exato (nível 1/2/3 no 2014; nível 3 padronizado no 2024), cobrindo todas as classes (incluindo o *Artífice* de Tasha e o *Bárbaro Caminho do Gigante* de Bigby).

---

### 6. 📊 Métodos de Geração de Atributos
- **Compra de Pontos (Point Buy - 27 pts)**: Sistema oficial com custos de 8 a 15, botões interativos `+` e `-`, contador dinâmico e atalho para o **Conjunto Padrão (15, 14, 13, 12, 10, 8)**.
- **Preenchimento Manual**: Campos numéricos livres com suporte a digitação contínua e preservação de foco.

---

### 7. 🔮 Grimório e Catálogo Expandido de Magias
- **Catálogo Oficial Completo com mais de 515 Magias**: Cobrindo de Truques até o 9º Círculo de todas as fontes oficiais (PHB 2014, PHB 2024, *Caldeirão de Tasha*, *Guia de Xanathar*, *Costa da Espada* e *Tesouro de Fizban*).
- **Truques e Magias Marciais e de Combate**: *Lâmina Estrondosa (Booming Blade)*, *Lâmina de Chamas Verdes (Green-Flame Blade)*, *Chicote Relampejante*, *Rajada de Espadas*, *Estilhaço Mental*, *Dobrar os Mortos*, *Selvageria Primitiva*, *Lâmina Sombria*, *Passo Zéfiro*, *Golpe do Vento de Aço*, *Estática Sináptica*, *Raio do Caos*, *Catapulta*, *Faca de Gelo*, etc.
- **Série Completa de Convocação de Tasha**: *Convocar Besta*, *Convocar Feérico*, *Convocar Sombra*, *Convocar Morto-Vivo*, *Convocar Aberração*, *Convocar Construto*, *Convocar Elemental*, *Convocar Celestial*, *Convocar Ínfero* e *Convocar Espírito Dracônico*.
- **Filtros e Busca em Tempo Real**: Filtros instantâneos por círculo, lista de classe, magias no repertório e barra de busca textual sem perda de foco.
- Identificação da **Origem da Magia** (Classe, Subclasse, Talento ou Espécie) e **Livro Fonte** com selos coloridos.
- Cálculo automático de **CD de Magia**, **Bônus de Ataque Mágico** e **Espaços de Magia (Slots)** multiclasse e de pacto de Bruxo.

---

### 8. 🛡️ Equipamentos, CA, Venda Inicial & Loja do Mercador
- **Valores Oficiais de Mercado em Peças de Ouro (PO)**: Todas as 14 armaduras, 37 armas, 7 pacotes de equipamentos e 39 itens de aventura/ferramentas/poções possuem preços de mercado oficiais conforme o *Livro do Jogador*.
- **Opção de Venda de Equipamento Inicial (Regra Oficial D&D 5e)**:
  - Botão de um clique para vender todo o equipamento inicial não utilizado por **50% do valor de mercado** (conforme *PHB p. 144: "Armas, armaduras e equipamentos usados são vendidos por metade do seu custo"*), creditando ouro líquido instantaneamente na carteira do personagem.
  - Venda individual de qualquer item da mochila por metade do valor oficial.
- **Carteira de Moedas Interativa**: Controle em tempo real de **Peças de Ouro (PO)**, **Peças de Prata (PP)** e **Peças de Cobre (PC)** com atalhos de incremento e sincronização na ficha.
- **Catálogo Completo & Loja Integrada**:
  - Abas categorizadas: *Armaduras & Escudos*, *Armas Simples & Marciais*, *Itens de Aventura, Poções & Kits*, e *Pacotes de Aventureiro*.
  - Compra e adição automática à mochila com dedução de moedas.
  - Botões para *Equipar Armadura* e *Empunhar Armas* com atualização instantânea da Classe de Armadura (CA).

---

### 9. 🏹 Opção de Regras do Patrulheiro: Livro do Jogador (2014) vs Revisado de Tasha (TCoE)
Ao escolher ou evoluir níveis na classe **Patrulheiro (Ranger)**, o construtor permite alternar entre:
- **📖 Livro do Jogador (PHB 2014)**: As habilidades clássicas originais (*Inimigo Favorito*, *Explorador Natural* em terrenos específicos, *Consciência Primitiva*, *Ocultar-se em Plena Vista*, *Desaparecer* e *Matador de Inimigos*).
- **🔮 Revisado: Caldeirão de Tasha (TCoE)**: As opções revisadas e aprimoradas (*Inimigo Favorecido* com marca sem gastar ação para +1d4 a +1d8 de dano, *Explorador Hábil* com Especialização em perícia, velocidade de natação/escalada e cura de PV/exaustão, *Percepção Primitiva* com magias gratuitas e *Véu da Natureza* com invisibilidade como ação bônus).
A escolha selecionada ajusta dinamicamente a exibição na ficha oficial e os recursos ativados!

---

### 10. 🎯 Subclasses Oficiais Expandidas (120 Subclasses)
Catálogo oficial expandido para **120 subclasses completas** de todos os livros suportados:
- **Bárbaro (10)**: Caminho do Gigante (BPG), Totêmico/Coração Selvagem, Berserker, Zelo Primitivo, Besta, Guardião Ancestral, Arauto da Tempestade, Magia Selvagem, Combatente da Fúria e Árvore do Mundo.
- **Bardo (9)**: Conhecimento, Espadas, Eloquência, Bravura/Valor, Glamour, Criação, Sussurros, Espíritos e Dança.
- **Bruxo (9)**: Hexblade, Corruptor, Gênio, Arquifada, Grande Antigo, Celestial, Profundezas, Morto-Vivo e Imortal.
- **Clérigo (14)**: Vida, Luz, Guerra, Tempestade, Crepúsculo, Paz, Sepultura, Forja, Enganação/Trapaça, Conhecimento, Natureza, Arcano, Ordem e Morte.
- **Druida (8)**: Lua, Terra, Estrelas, Esporos, Fogo Selvagem, Sonhos, Pastor e Mar.
- **Feiticeiro (7)**: Dracônico, Magia Selvagem, Alma Divina, Mente Aberrante, Mecanismo Cósmico, Sombras e Tempestade.
- **Guerreiro (10)**: Campeão, Mestre da Batalha, Cavaleiro Arcano, Cavaleiro do Eco, Cavaleiro Rúnico, Samurai, Guerreiro Psíquico, Arqueiro Arcano, Cavaleiro/Cavalier e Dragão Púrpura/Banneret.
- **Ladino (9)**: Ladrão, Assassino, Trapaceiro Arcano, Espadachim, Fantasma, Lâmina da Alma, Inquisitivo, Mentor e Batedor.
- **Mago (13)**: Evocação, Abjuração, Adivinhação, Lâmina-Canto, Escribas, Conjuração, Encantamento, Ilusão, Necromancia, Transmutação, Magia de Guerra, Cronurgia e Graviturgia.
- **Monge (10)**: Palma Aberta, Sombras, Misericórdia, Kensei, Dragão Ascendente, Eu Astral, Mestre Bêbado, Quatro Elementos, Alma do Sol e Morte Longa.
- **Paladino (9)**: Devoção, Vingança, Anciões, Conquista, Glória, Redenção, Sentinelas, Coroa e Quebrador de Juramento.
- **Patrulheiro (8)**: Gloom Stalker, Caçador, Andarilho Feérico, Mestre das Bestas, Guardião dos Enxames, Andarilho do Horizonte, Matador de Monstros e Guardião dos Dragões.
- **Artífice (4)**: Armeiro, Artilheiro, Ferreiro de Batalha e Alquimista.

---

### 11. 🎯 Sistema de Escolhas Dinâmicas & Catálogo Unificado
- **Subclasses com Escolhas Mecânicas**:
  - **Mestre da Batalha (Guerreiro)**: Catálogo com as 19 Manobras oficiais de combate com nome, tipo de ação e descrição detalhada; seleção sem repetição com contagem exata (3 no nível 3, 5 no nível 7, 7 no nível 10, 9 no nível 15).
  - **Guerreiro Totêmico / Wild Heart (Bárbaro)**: Escolha do espírito animal (Urso, Águia, Lobo, Alce, Tigre) nos marcos totêmicos.
  - **Caçador (Patrulheiro)**: Escolha de técnicas da Presa do Caçador (Assassino de Colossos, Matador de Gigantes, Quebrador de Hordas).
- **Talentos com Opções Interativas**:
  - **Iniciado em Magia (Magic Initiate)**: Escolha da classe conjuradora (Mago, Clérigo, Druida, Bardo, Bruxo, Feiticeiro), 2 truques exclusivos sem repetição e 1 magia de 1º círculo com dados mecânicos completos.
  - **Hábil (Skilled)**: Escolha de 3 perícias ou ferramentas sem duplicar proficiências existentes.
  - **Iniciado em Combate & Adepto de Metamagia**: Escolha de Estilo de Luta e 2 opções de Metamagia.
  - **Resiliente (Resilient)**: Escolha de atributo para receber +1 e proficiência na Salvaguarda.
- **Raças e Antecedentes Dinâmicos**:
  - **Alto Elfo**: Escolha do Truque Élfico adicional da lista de Mago.
  - **Humano 2024 / Humano Variante / Meio-Elfo**: Escolhas de perícia versátil e talentos bônus de nível 1 com suas sub-escolhas.
  - **Antecedentes 2024 (Acólito, Guia, Charlatão, etc.)**: As magias e perícias do talento de origem aparecem dinamicamente no painel de Identidade.

### 12. 📜 Ficha Oficial em Português (Pt-Br) & Exportação
- Layout autêntico de 3 colunas no padrão oficial de D&D 5e.
- Otimizado para **Impressão em PDF** (`Ctrl+P` ou botão de impressão) com remoção automática de elementos de interface para folhas limpas.
- **Backup JSON**: Botões para **Salvar Ficha (Download JSON)** e **Carregar Ficha (.json)**.
- **Alternância Claro/Escuro**: Modo Escuro (Grimório Arcano) e Modo Claro (Pergaminho Épico).

---

## 🚀 Como Executar

### Opção 1: Abertura Direta (Dois Cliques em `index.html`)
Graças ao bundle consolidado em `js/bundle.js`, você pode simplesmente dar **dois cliques em `index.html`** no seu explorador de arquivos (`file:///...`) e a aplicação funcionará imediatamente sem nenhuma restrição ou erro de CORS!

### Opção 2: Arquivo em Lote (Windows)
Dê um duplo clique no arquivo [`iniciar.bat`](file:///d:/personagemCreator/iniciar.bat). O servidor local será aberto automaticamente na porta 8080 e carregará o navegador em `http://localhost:8080`.

### Opção 3: Linha de Comando (PowerShell / Terminal)
Na pasta raiz do projeto, execute:
```powershell
python -m http.server 8080
```
Em seguida, abra seu navegador em:
```
http://localhost:8080
```

---

## 📁 Estrutura do Projeto

```
personagemCreator/
├── index.html              # Estrutura principal e casca do SPA
├── iniciar.bat             # Inicializador automático para Windows
├── README.md               # Documentação técnica e manual do usuário
├── css/
│   ├── main.css            # Variáveis CSS, temas (Claro/Escuro) e base
│   ├── builder.css         # Estilização do fluxo construtor de personagem
│   └── sheet.css           # Estilização da ficha oficial de 3 colunas e impressão
└── js/
    ├── app.js              # Orquestrador de ciclo de vida e preservação de foco
    ├── state.js            # Store de estado reativo, localStorage e cálculos consolidados
    ├── rules-engine.js     # Regras oficiais de D&D (Point Buy, CA, PV, Multiclasse, Magias)
    ├── data/
    │   ├── sources.js      # Livros fontes oficiais (PHB'24, PHB'14, TCoE, BPG, etc.)
    │   ├── classes.js      # 13 classes com PV, dados, perícias elegíveis e marcos
    │   ├── subclasses.js   # Arquétipos de todas as classes incluindo BPG e TCoE
    │   ├── optionsCatalog.js # Catálogo unificado de manobras, estilos, metamagias, invocações
    │   ├── races.js        # Raças 2014/2024 e árvores de sub-raças completas
    │   ├── backgrounds.js  # Antecedentes 2014, 2024 e BPG com talentos de origem
    │   ├── feats.js        # Talentos de origem, gerais e de gigantes (Bigby)
    │   ├── spells.js       # Grimório de truques até o 9º círculo
    │   └── equipment.js    # Armas, armaduras, escudos e pacotes de equipamentos
    └── views/
        ├── headerView.js   # Topo, controle de livros, tema claro/escuro e JSON I/O
        ├── choiceComponents.js # Componentes reutilizáveis de seleção sem duplicação
        ├── identityView.js # Raças, sub-raças, perícias de classe, especialização e Tasha
        ├── attributesView.js # Compra de pontos e inserção manual de atributos
        ├── levelUpView.js  # Nível a nível, multiclasse, PV, manobras e ASI
        ├── spellsView.js   # Grimório e seleção com busca em tempo real sem perda de foco
        ├── equipmentView.js # Armaduras, armas empunhadas e mochila
        └── sheetView.js    # Ficha de personagem de 3 colunas formatada em Pt-Br
```

---

## 🛡️ Licença e Referências
Projeto de uso estritamente pessoal sem finalidade comercial. Dados, nomes e mecânicas de jogo são propriedades da *Wizards of the Coast LLC* e foram organizados com base nas referências públicas de [dnd5e.wikidot.com](https://dnd5e.wikidot.com/).
