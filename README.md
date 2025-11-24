# DW Service Automation - Website

Site institucional moderno e responsivo para a **DW Service Automation**, empresa especializada em automação industrial.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design moderno com variáveis CSS, Grid e Flexbox
- **JavaScript (Vanilla)** - Interatividade sem dependências externas
- **Font Awesome 6.4.0** - Ícones profissionais
- **Google Fonts (Poppins)** - Tipografia moderna

## 📁 Estrutura do Projeto

```
dw-service-automation/
│
├── index.html              # Página inicial
├── servicos.html           # Página de serviços
├── setores.html            # Página de setores atendidos
├── sobre.html              # Página sobre a empresa
├── contato.html            # Página de contato
├── README.md               # Este arquivo
│
├── css/
│   ├── styles.css          # Estilos globais
│   ├── servicos.css        # Estilos da página de serviços
│   ├── setores.css         # Estilos da página de setores
│   ├── sobre.css           # Estilos da página sobre
│   └── contato.css         # Estilos da página de contato
│
└── js/
    └── main.js             # JavaScript principal
```

## 🎨 Características do Design

### Paleta de Cores (Identidade Visual DW)
- **Primária**: #313367 (Azul Marinho - Logo)
- **Secundária**: #353639 (Cinza Escuro)
- **Accent**: #c8c1bf (Bege/Cinza Claro)
- **Neutras**: Branco e Preto

### Layout
- Design **Clean e Minimalista**
- **Totalmente Responsivo** (Mobile, Tablet, Desktop)
- **Animações Suaves** ao scroll
- **Tipografia Moderna** (Poppins)

## ✨ Funcionalidades

### Navegação
- [x] Menu responsivo com hambúrguer para mobile
- [x] Links ativos baseados na página atual
- [x] Navegação suave (smooth scroll)
- [x] Header com sombra dinâmica ao scroll

### Interatividade
- [x] Botão WhatsApp flutuante
- [x] Botão "Voltar ao topo"
- [x] Animações ao scroll (AOS-like)
- [x] Formulário de contato funcional
- [x] Menu mobile com fechamento automático

### Seções Principais

#### Home
- Hero section com call-to-action
- Seção de credibilidade (anos de experiência, certificações)
- Serviços em destaque
- Setores atendidos
- CTA final

#### Serviços
- Manutenção e Calibração
- Integração de Sistemas
- Instrumentação Industrial
- Válvulas Guilhotina (Fabricação Própria) - **Destaque**
- Seção de Segurança (NR 10, 33, 35)

#### Setores
- Indústria Sucroenergética
- Armazenamento e Processamento de Grãos
- Frigoríficos e Indústria de Alimentos
- Indústria de Fertilizantes
- Indústria de Óleo Vegetal

#### Sobre
- História da empresa
- Missão, Visão e Valores
- Equipe especializada
- Diferenciais competitivos
- Certificações

#### Contato
- Formulário de contato
- Informações de contato (Comercial e Técnico)
- Endereço e horário de funcionamento
- Mapa interativo do Google Maps
- CTA WhatsApp rápido

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## 🔧 Como Usar

### 1. Abrir o Site

Basta abrir o arquivo `index.html` em qualquer navegador moderno:

```bash
# No Windows
start index.html

# No Linux
xdg-open index.html

# No Mac
open index.html
```

### 2. Personalização

#### Alterar Cores
Edite as variáveis CSS no arquivo `css/styles.css`:

```css
:root {
    /* Cores da Marca DW */
    --primary-color: #313367;    /* Azul Marinho */
    --secondary-color: #353639;   /* Cinza Escuro */
    --accent-color: #c8c1bf;      /* Bege/Cinza Claro */
    /* ... outras cores */
}
```

#### Alterar Informações de Contato
Edite diretamente nos arquivos HTML:
- Telefones: Busque por `tel:+55`
- E-mails: Busque por `mailto:`
- WhatsApp: Busque por `wa.me`
- Endereço: Busque por "Av. Rio Branco"

#### Integrar Formulário
O formulário está preparado no arquivo `js/main.js`. Para integrar com backend:

1. Encontre a função `initContactForm()`
2. Adicione sua lógica de envio (ex: fetch API, emailJS, etc.)

Exemplo com Fetch API:
```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('sua-api-aqui', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            showMessage('Mensagem enviada!', 'success');
            contactForm.reset();
        }
    } catch (error) {
        showMessage('Erro ao enviar!', 'error');
    }
});
```

### 3. Adicionar Imagens Reais

Para substituir os ícones por imagens reais:

1. Crie uma pasta `images/` na raiz do projeto
2. Adicione suas imagens
3. Substitua os elementos `.hero__icon` e `.service-detail__icon-large` por tags `<img>`

Exemplo:
```html
<!-- De: -->
<div class="hero__icon">
    <i class="fas fa-industry"></i>
</div>

<!-- Para: -->
<div class="hero__image">
    <img src="images/hero-image.jpg" alt="Automação Industrial">
</div>
```

## 🌐 Deploy

### Opção 1: Hospedagem Tradicional
- Faça upload de todos os arquivos via FTP para seu servidor
- Configure o domínio para apontar para a pasta

### Opção 2: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin sua-url-github
git push -u origin main
```
Depois ative o GitHub Pages nas configurações do repositório.

### Opção 3: Netlify/Vercel
- Arraste a pasta do projeto para o Netlify Drop ou Vercel
- O deploy é automático

## 📞 Informações de Contato

### Departamento Comercial
- **Telefone**: (44) 3039-4542
- **WhatsApp**: (44) 98821-5020
- **E-mail**: dwservice@dwservice.com.br

### Departamento Técnico
- **Telefone**: (44) 99984-5900
- **E-mail**: daniel@dwservice.com.br

### Endereço
**Av. Rio Branco, 240**  
Cianorte - PR  
CEP: 87200-000

**Horário de Funcionamento:**
- Segunda a Sexta: 08h às 18h
- Sábado: 08h às 12h

## 🎯 Diferenciais do Site

✅ **Performance**: Código otimizado, carregamento rápido  
✅ **SEO Friendly**: Meta tags, estrutura semântica  
✅ **Acessibilidade**: ARIA labels, contraste adequado  
✅ **Mobile First**: Totalmente responsivo  
✅ **Sem Dependências**: JavaScript vanilla, sem jQuery  
✅ **Moderno**: CSS Grid, Flexbox, variáveis CSS  
✅ **Identidade Visual**: Cores oficiais da marca DW

## 📝 Licença

Este projeto foi desenvolvido para **DW Service Automation**.  
© 2025 DW Service Automation. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para automação industrial de excelência**
