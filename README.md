# Landing Page - Amazon Associates Dashboard Pro

## 📁 Estrutura

```
lp/
├── index.html       # Página principal
├── styles.css       # Estilos (design moderno e responsivo)
└── script.js        # Interações e animações
```

## 🚀 Como Usar

### 1. **Abrir Localmente**
Basta abrir o arquivo `index.html` no navegador:
```bash
cd lp
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### 2. **Hospedar Online**

#### Opção A: Vercel (Recomendado - Grátis)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Dentro da pasta lp/
cd lp
vercel

# Seguir instruções (primeiro deploy é grátis)
# URL final: https://seu-projeto.vercel.app
```

#### Opção B: Netlify (Grátis)
1. Arraste a pasta `lp` para https://app.netlify.com/drop
2. Pronto! URL gerada automaticamente

#### Opção C: GitHub Pages (Grátis)
```bash
# Criar repo e fazer push da pasta lp
git init
git add .
git commit -m "Landing page"
git branch -M main
git remote add origin https://github.com/SEU_USER/SEU_REPO.git
git push -u origin main

# Nas configurações do repo: Settings > Pages > Source: main branch
# URL: https://SEU_USER.github.io/SEU_REPO/
```

## 🔗 Links Configurados

### Chrome Web Store (Configurado ✅)
- **Extensão Grátis:** https://chromewebstore.google.com/detail/amazon-associates-dashboa/lmgafbcblmllgldhgdadahodfaenonhi

### Stripe Payment Links (Configurados ✅)
- **Mensal:** https://buy.stripe.com/3cI14o5uF9KxarL6Xj9k40d
- **Anual:** https://buy.stripe.com/aFa8wQ8GRcWJarLgxT9k40e

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `styles.css` (linhas 1-20):
```css
:root {
    --primary: #FF9900;        /* Laranja Amazon */
    --secondary: #232F3E;      /* Azul escuro Amazon */
    --success: #00D084;        /* Verde para sucesso */
    /* ... */
}
```

### Preços
Edite em `script.js` (linhas 8-22):
```javascript
const prices = {
    monthly: {
        amount: '9,90',
        period: '/mês',
        // ...
    },
    // ...
}
```

### Cupom de Desconto
O cupom `EARLYBIRD50` está destacado na seção de preços. Para alterar:
- HTML: `index.html` linha ~340 (`.coupon-code`)
- Funcionalidade de copiar: já implementada em `script.js`

## ✨ Recursos Implementados

### Interatividade
- ✅ Toggle mensal/anual de preços
- ✅ Smooth scroll para âncoras
- ✅ Copiar cupom ao clicar
- ✅ Animações ao scroll
- ✅ Navbar com backdrop blur ao scrollar
- ✅ Gráfico animado
- ✅ Notificação em loop
- ✅ Easter egg (código Konami) 🎮

### Design
- ✅ Totalmente responsivo (desktop, tablet, mobile)
- ✅ Gradientes modernos
- ✅ Sombras e efeitos de profundidade
- ✅ Typography scale profissional
- ✅ Browser mockup 3D
- ✅ Cards com hover effects
- ✅ Pricing cards destacados

### Seções
1. **Hero** - Chamada principal + preview do dashboard
2. **Problema** - Pain points dos afiliados
3. **Features** - 6 recursos principais
4. **How It Works** - 3 passos simples
5. **Pricing** - FREE vs PRO com toggle
6. **Early Bird Offer** - Banner de lançamento
7. **Social Proof** - 3 depoimentos
8. **FAQ** - 8 perguntas frequentes
9. **CTA Final** - Call to action grande
10. **Footer** - Links e disclaimer

## 🎁 Cupons Disponíveis

### Visível na LP
- `EARLYBIRD50` - 50% OFF no primeiro pagamento (primeiros 100)

### Easter Egg (Código Konami)
- `GAMER75` - 75% OFF no primeiro mês
- **Como ativar:** ↑ ↑ ↓ ↓ ← → ← → B A

## 📱 Compatibilidade

Testado e otimizado para:
- ✅ Chrome/Edge/Brave (desktop e mobile)
- ✅ Safari (macOS e iOS)
- ✅ Firefox
- ✅ Resoluções: 320px até 4K

### Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: até 767px

## 🔧 Manutenção

### Adicionar novo depoimento
Em `index.html`, seção `.testimonials`:
```html
<div class="testimonial">
    <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">"Seu texto aqui..."</p>
    <div class="testimonial-author">
        <div class="author-avatar">A</div>
        <div class="author-info">
            <strong>Nome</strong>
            <span>Profissão</span>
        </div>
    </div>
</div>
```

### Adicionar nova FAQ
Em `index.html`, seção `.faq-grid`:
```html
<div class="faq-item">
    <h3 class="faq-question">❓ Sua pergunta?</h3>
    <p class="faq-answer">Sua resposta aqui...</p>
</div>
```

### Atualizar stats no hero
Em `index.html`, seção `.hero-stats`:
```html
<div class="stat">
    <span class="stat-number">100</span>
    <span class="stat-label">Usuários</span>
</div>
```

## 📊 Analytics (Recomendado)

Adicione Google Analytics ou Plausible antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🚀 Checklist de Lançamento

- [x] Publicar extensão na Chrome Web Store
- [x] Atualizar link "Instalar Grátis" no HTML
- [ ] Configurar cupons no Stripe (`EARLYBIRD50`, `GAMER75`)
- [ ] Testar checkout completo
- [ ] Adicionar Analytics
- [ ] Hospedar LP (Vercel/Netlify)
- [ ] Configurar domínio customizado (opcional)
- [ ] Testar em mobile real
- [ ] Screenshot/vídeo demo para social proof
- [ ] Preparar email pós-compra com licença

## 💡 Dicas de Marketing

1. **SEO**: A LP já tem meta tags básicas, mas adicione Open Graph:
```html
<meta property="og:title" content="Amazon Associates Dashboard Pro">
<meta property="og:description" content="Monitore vendas em tempo real">
<meta property="og:image" content="URL_DA_IMAGEM_PREVIEW">
```

2. **Pixel do Facebook**: Para remarketing
3. **Hotjar/Microsoft Clarity**: Heatmaps grátis
4. **A/B Testing**: Teste variações de preço/copy

## 📧 Suporte

Para dúvidas sobre a landing page, edite este README ou crie issues no repo.

---

**Feito com 💪 e ☕ para vender sua extensão!**
