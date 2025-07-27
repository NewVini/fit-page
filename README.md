# 🏋️ FitMotion - Landing Page Premium para Academia

Uma landing page moderna e interativa para academia com elementos 2D/3D, animações motion design e 7 seções impressionantes.

## ✨ Características

- **React + Vite** - Framework moderno e build tool rápida
- **Framer Motion** - Animações fluidas e motion design
- **Three.js + React Three Fiber** - Elementos 3D interativos
- **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- **7 Seções Completas** - Landing page profissional para academia
- **UI/UX Moderno** - Design premium inspirado nas melhores academias

## 🎯 Seções da Landing Page

### 1. **Hero Section**
- Título impactante com animações
- Badges flutuantes com benefícios
- Estatísticas em tempo real
- CTAs principais
- Background com gradientes animados

### 2. **About/Benefícios**
- Cartões de benefícios com ícones animados
- Estatísticas de satisfação
- Efeitos de hover sofisticados
- Grid responsivo

### 3. **Serviços/Planos**
- 4 serviços principais com tecnologia
- 3 planos de membership (Básico, Premium, Elite)
- Seleção interativa de planos
- Preços dinâmicos

### 4. **Tecnologia 3D**
- Cena 3D interativa com Three.js
- Halteres 3D animados
- Partículas flutuantes
- Controles orbitais
- Textos 3D flutuantes

### 5. **Depoimentos**
- Carrossel de depoimentos
- Fotos dos clientes
- Transformações antes/depois
- Auto-play com controles manuais
- Avaliações com estrelas

### 6. **Contato**
- Formulário interativo
- Informações de contato
- Mapa estilizado
- Redes sociais
- Links para WhatsApp

### 7. **Footer**
- Links organizados por categoria
- Redes sociais animadas
- Newsletter
- Informações da empresa
- Botão scroll to top

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório (se aplicável)
git clone <url-do-repositorio>

# Entre no diretório
cd fitness-landing

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
```

## 🛠️ Tecnologias Utilizadas

### Core
- **React 19** - Biblioteca JavaScript
- **Vite** - Build tool e dev server
- **JavaScript/JSX** - Linguagem principal

### Animações e 3D
- **Framer Motion** - Biblioteca de animações
- **Three.js** - Biblioteca 3D
- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers úteis para React Three Fiber

### UI/UX
- **Lucide React** - Ícones modernos e limpos
- **CSS3** - Estilos customizados com CSS variables
- **CSS Grid/Flexbox** - Layout responsivo

## 🎨 Design System

### Cores Principais
```css
--primary: #ff6b35        /* Laranja vibrante */
--primary-dark: #e85a30   /* Laranja escuro */
--secondary: #1a1a1a      /* Cinza escuro */
--accent: #ffd700         /* Dourado */
--background: #000000     /* Preto total */
```

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Funcionalidades Especiais

### Animações Motion Design
- Entrada escalonada dos elementos
- Hover effects sofisticados
- Transições suaves entre seções
- Parallax effect sutil
- Animações de scroll

### Elementos 3D
- Halteres 3D rotativos
- Partículas flutuantes
- Textos 3D no espaço
- Controles de câmera
- Iluminação dinâmica

### Interatividade
- Seleção de planos dinâmica
- Carrossel de depoimentos
- Formulário validado
- Navegação smooth scroll
- Botões com feedback tátil

## 📱 Responsividade

O projeto foi desenvolvido mobile-first e é totalmente responsivo:

- **Mobile (< 768px)**: Layout em coluna única, navegação adaptada
- **Tablet (768px - 1024px)**: Layout híbrido, otimizado para touch
- **Desktop (> 1024px)**: Layout completo com todas as funcionalidades

## 🔧 Customização

### Alterando Cores
Edite as variáveis CSS em `src/index.css`:
```css
:root {
  --primary: #sua-cor-aqui;
  --secondary: #sua-cor-aqui;
  /* ... */
}
```

### Adicionando Seções
1. Crie o componente em `src/components/`
2. Importe e adicione no `src/App.jsx`
3. Siga o padrão de animações existente

### Modificando Conteúdo
Todos os textos, preços e informações estão nos arrays de dados dentro de cada componente.

## 📦 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Hero.jsx        # Seção principal
│   ├── About.jsx       # Sobre/Benefícios
│   ├── Services.jsx    # Serviços/Planos
│   ├── ThreeD.jsx      # Seção 3D
│   ├── Testimonials.jsx # Depoimentos
│   ├── Contact.jsx     # Contato
│   └── Footer.jsx      # Rodapé
├── App.jsx             # Componente principal
├── main.jsx           # Entry point
└── index.css          # Estilos globais
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy a pasta dist/
```

### Netlify
```bash
npm run build
# Arraste a pasta dist/ para o Netlify
```

### Outros
O projeto gera arquivos estáticos na pasta `dist/` que podem ser hospedados em qualquer servidor web.

## 📄 Licença

Este projeto foi criado para fins educacionais e de demonstração. Sinta-se livre para usar como base para seus próprios projetos.

## 🤝 Contribuição

Sugestões e melhorias são sempre bem-vindas! 

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos canais disponíveis na seção de contato da landing page.

---

**Desenvolvido com ❤️ para transformar vidas através do fitness!** 