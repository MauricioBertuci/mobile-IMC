# Calculadora de IMC (Expo/React Native)

Aplicativo simples em React Native para calcular o Índice de Massa Corporal (IMC). Ele permite inserir peso e altura, calcula o resultado com duas casas decimais e exibe a classificação correspondente em uma tabela de referência.

## Tecnologias
- [Expo](https://expo.dev/) (SDK 54)
- React Native 0.81
- React 19

## Estrutura do projeto
```
mobile-IMC/
├── src/
│   └── componentes/
│       ├── Form/           # Campos de peso/altura, cálculo e tabela de IMC
│       ├── Main/           # Container principal da aplicação
│       └── Title/          # Cabeçalho com título da calculadora
├── index.js                # Registro do componente raiz com Expo
├── package.json
└── app.json
```

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o projeto com o Expo:
   ```bash
   npm start
   ```
3. Use o Expo Go no dispositivo físico ou emulador para visualizar o aplicativo (os atalhos `npm run android`, `npm run ios` e `npm run web` também estão disponíveis).

## Como usar
1. Abra o app e informe sua **altura** (em metros) e **peso** (em quilogramas).
2. Toque em **Calcular IMC**.
3. O resultado do IMC aparece em destaque junto à mensagem de sucesso. Abaixo, consulte a tabela para identificar a classificação correspondente.

## Observações
- Os campos são validados: se algum valor estiver vazio, uma mensagem de aviso será exibida.
- O cálculo usa duas casas decimais (`toFixed(2)`).
