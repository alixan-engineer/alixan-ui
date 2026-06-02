<script setup lang="ts">
const frameworks = [
  {
    name: 'Nuxt',
    status: 'Available',
    description: 'Vue and Nuxt components for SaaS, dashboards, landing pages and product interfaces.',
    href: 'https://nuxt.ui.alixan.kz',
    accent: 'emerald',
  },
  {
    name: 'Angular',
    status: 'Coming soon',
    description: 'Typed Angular primitives for admin panels, enterprise products and internal tools.',
    href: '',
    accent: 'rose',
  },
  {
    name: 'Flutter',
    status: 'Coming soon',
    description: 'Mobile-first UI components for marketplace apps, startup MVPs and product experiments.',
    href: '',
    accent: 'blue',
  },
]

const benefits = [
  'Product-first components',
  'Dark premium aesthetics',
  'Reusable UI primitives',
  'Built for fast MVPs',
]

useHead({
  title: 'Alixan UI — Product UI system for Nuxt, Angular and Flutter',
  meta: [
    {
      name: 'description',
      content:
        'Alixan UI is a personal open-source UI system for building SaaS, dashboards, landing pages and startup products faster across Nuxt, Angular and Flutter.',
    },
    { property: 'og:title', content: 'Alixan UI — Product UI system' },
    {
      property: 'og:description',
      content:
        'Reusable UI components and product patterns for Nuxt, Angular and Flutter projects.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ui.alixan.kz' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div class="site-shell">
    <div class="noise" />

    <header class="header">
      <a href="#" class="logo" aria-label="Alixan UI home">
        <span>Alixan</span>
        <strong>UI</strong>
      </a>

      <nav class="nav" aria-label="Primary navigation">
        <a href="#why">Why</a>
        <a href="#frameworks">Frameworks</a>
        <a href="#preview">Preview</a>
      </nav>

      <a class="header-cta" href="https://nuxt.ui.alixan.kz">
        Open Nuxt
      </a>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">UI system for product builders</p>
          <h1>
            Build polished interfaces faster with
            <span>Alixan UI.</span>
          </h1>
          <p class="hero-text">
            A growing open-source component system for SaaS, dashboards,
            marketplaces and startup MVPs. Start with Nuxt today, then expand
            into Angular and Flutter when those libraries are ready.
          </p>

          <div class="hero-actions">
            <a class="button button--primary" href="https://nuxt.ui.alixan.kz">
              Explore Nuxt UI
            </a>
            <a class="button button--ghost" href="#frameworks">
              View frameworks
            </a>
          </div>

          <div class="benefits" aria-label="Alixan UI benefits">
            <span v-for="benefit in benefits" :key="benefit">
              {{ benefit }}
            </span>
          </div>
        </div>

        <aside id="preview" class="preview-card" aria-label="Alixan UI preview">
          <div class="preview-toolbar">
            <span />
            <span />
            <span />
            <strong>alixan/ui</strong>
          </div>

          <div class="preview-window">
            <div class="preview-sidebar">
              <span class="active" />
              <span />
              <span />
              <span />
            </div>

            <div class="preview-content">
              <div class="component-card">
                <p>Dashboard Card</p>
                <strong>Revenue overview</strong>
                <div class="chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div class="component-grid">
                <button>Button</button>
                <label>
                  <span>Input</span>
                  <i />
                </label>
                <small>Badge</small>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section id="why" class="section section--split">
        <div>
          <p class="eyebrow">Why it exists</p>
          <h2>One design language for real products.</h2>
        </div>
        <p>
          Alixan UI is not just a set of pretty buttons. It is a practical
          foundation for building product interfaces faster: consistent spacing,
          reusable primitives, premium dark visuals and components shaped around
          SaaS, e-commerce and marketplace workflows.
        </p>
      </section>

      <section id="frameworks" class="section">
        <div class="section-heading">
          <p class="eyebrow">Framework navigation</p>
          <h2>Choose your stack.</h2>
          <p>
            Start with the Nuxt implementation now. Angular and Flutter versions
            are planned as separate libraries inside the Alixan UI ecosystem.
          </p>
        </div>

        <div class="framework-grid">
          <article
            v-for="framework in frameworks"
            :key="framework.name"
            class="framework-card"
            :class="`framework-card--${framework.accent}`"
          >
            <div class="framework-card__top">
              <h3>{{ framework.name }}</h3>
              <span>{{ framework.status }}</span>
            </div>
            <p>{{ framework.description }}</p>
            <a
              v-if="framework.href"
              class="framework-card__link"
              :href="framework.href"
            >
              Open {{ framework.name }}
            </a>
            <button v-else class="framework-card__link is-disabled" disabled>
              Coming soon
            </button>
          </article>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>Alixan UI</p>
      <span>Open-source UI system from Kazakhstan.</span>
    </footer>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  --background: #050505;
  --card: rgba(255, 255, 255, 0.045);
  --card-strong: rgba(255, 255, 255, 0.075);
  --border: rgba(255, 255, 255, 0.11);
  --text: #ffffff;
  --muted: rgba(255, 255, 255, 0.66);
  --soft: rgba(255, 255, 255, 0.42);
  --emerald: #69f5bd;
  --blue: #75a7ff;
  --rose: #ff7aa8;
  --radius: 28px;
  font-family: Geist, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 80% 12%, rgba(105, 245, 189, 0.12), transparent 30rem),
    radial-gradient(circle at 18% 22%, rgba(117, 167, 255, 0.12), transparent 28rem),
    linear-gradient(180deg, #080808 0%, var(--background) 36%, #020202 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.site-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 22px;
}

.noise {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.06;
  background-image:
    radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.9) 1px, transparent 0);
  background-size: 4px 4px;
}

.header,
.hero,
.section,
.footer {
  width: min(1180px, 100%);
  margin-inline: auto;
}

.header {
  position: sticky;
  top: 16px;
  z-index: 20;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 22px;
  align-items: center;
  min-height: 68px;
  padding: 10px 12px 10px 18px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: rgba(5, 5, 5, 0.72);
  backdrop-filter: blur(24px);
  box-shadow: 0 24px 90px rgba(0, 0, 0, 0.34);
}

.logo {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.logo strong {
  color: var(--emerald);
}

.nav {
  display: flex;
  gap: 24px;
  justify-content: center;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
}

.nav a,
.header-cta,
.button,
.framework-card__link {
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    color 180ms ease;
}

.nav a:hover {
  color: var(--text);
}

.header-cta,
.button,
.framework-card__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-weight: 700;
}

.header-cta {
  min-height: 44px;
  padding: 0 18px;
  background: rgba(255, 255, 255, 0.08);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.78fr);
  gap: 44px;
  align-items: center;
  min-height: calc(100vh - 112px);
  padding: 70px 0 50px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
  color: var(--emerald);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.eyebrow::before {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 18px currentColor;
  content: '';
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 860px;
  margin-bottom: 24px;
  font-size: clamp(3.3rem, 8.4vw, 7.8rem);
  line-height: 0.9;
  letter-spacing: -0.085em;
}

h1 span {
  display: block;
  background: linear-gradient(90deg, #ffffff, #9effd7 42%, #89aaff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-text {
  max-width: 650px;
  margin-bottom: 30px;
  color: var(--muted);
  font-size: clamp(1.06rem, 1.9vw, 1.3rem);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 34px;
}

.button {
  min-height: 54px;
  padding: 0 24px;
  font-size: 0.98rem;
}

.button--primary {
  border-color: rgba(255, 255, 255, 0.82);
  background: #ffffff;
  color: #050505;
}

.button--ghost {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.button:hover,
.header-cta:hover,
.framework-card__link:hover {
  transform: translateY(-2px);
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.benefits span {
  padding: 10px 13px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}

.preview-card {
  position: relative;
  min-height: 560px;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 34px;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.14), transparent 18rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.018)),
    rgba(255, 255, 255, 0.035);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.08),
    0 34px 120px rgba(0, 0, 0, 0.42);
}

.preview-card::before {
  position: absolute;
  inset: 84px 26px auto auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(105, 245, 189, 0.16);
  filter: blur(50px);
  content: '';
}

.preview-toolbar {
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.28);
}

.preview-toolbar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--soft);
}

.preview-toolbar strong {
  margin-left: auto;
  color: var(--muted);
  font-size: 0.82rem;
}

.preview-window {
  position: relative;
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 16px;
  min-height: 456px;
  margin-top: 16px;
}

.preview-sidebar,
.preview-content,
.component-card,
.component-grid > * {
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(18px);
}

.preview-sidebar {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 12px;
  padding-top: 18px;
  border-radius: 22px;
}

.preview-sidebar span {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
}

.preview-sidebar .active {
  background: linear-gradient(135deg, rgba(105, 245, 189, 0.8), rgba(117, 167, 255, 0.72));
}

.preview-content {
  display: grid;
  gap: 16px;
  align-content: center;
  padding: 18px;
  border-radius: 24px;
}

.component-card {
  padding: 22px;
  border-radius: 22px;
}

.component-card p {
  margin-bottom: 8px;
  color: var(--soft);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.component-card strong {
  display: block;
  margin-bottom: 24px;
  font-size: 1.35rem;
}

.chart {
  display: flex;
  align-items: end;
  gap: 12px;
  height: 138px;
}

.chart span {
  flex: 1;
  min-height: 34px;
  border-radius: 999px 999px 10px 10px;
  background: linear-gradient(180deg, rgba(105, 245, 189, 0.9), rgba(117, 167, 255, 0.2));
}

.chart span:nth-child(2) {
  height: 64%;
}

.chart span:nth-child(3) {
  height: 88%;
}

.chart span:nth-child(4) {
  height: 52%;
}

.chart span:nth-child(5) {
  height: 76%;
}

.component-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr auto;
  gap: 12px;
}

.component-grid > * {
  min-height: 54px;
  border-radius: 16px;
  color: var(--text);
}

.component-grid button {
  cursor: pointer;
}

.component-grid label {
  display: grid;
  gap: 4px;
  padding: 8px 14px;
  color: var(--soft);
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
}

.component-grid label i {
  display: block;
  width: 68%;
  height: 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
}

.component-grid small {
  display: inline-grid;
  place-items: center;
  padding-inline: 18px;
  color: var(--emerald);
  font-weight: 900;
}

.section {
  padding: 74px 0;
}

.section--split {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 54px;
  align-items: end;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

h2 {
  margin-bottom: 0;
  font-size: clamp(2.4rem, 5vw, 5.2rem);
  line-height: 0.96;
  letter-spacing: -0.07em;
}

.section--split > p,
.section-heading p {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 30px;
}

.section-heading h2 {
  margin-bottom: 18px;
}

.framework-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.framework-card {
  position: relative;
  min-height: 310px;
  display: grid;
  align-content: space-between;
  gap: 28px;
  padding: 26px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.018)),
    var(--card);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.08);
}

.framework-card::before {
  position: absolute;
  inset: auto -52px -62px auto;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  opacity: 0.28;
  filter: blur(36px);
  content: '';
}

.framework-card--emerald::before {
  background: var(--emerald);
}

.framework-card--rose::before {
  background: var(--rose);
}

.framework-card--blue::before {
  background: var(--blue);
}

.framework-card__top {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}

.framework-card h3 {
  margin-bottom: 0;
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.framework-card__top span {
  padding: 7px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.framework-card p {
  color: var(--muted);
  line-height: 1.7;
}

.framework-card__link {
  position: relative;
  min-height: 46px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.06);
}

.framework-card__link.is-disabled {
  cursor: not-allowed;
  color: var(--soft);
}

.footer {
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
}

.footer p {
  margin-bottom: 0;
  color: var(--text);
  font-weight: 800;
}

@media (max-width: 940px) {
  .site-shell {
    padding: 14px;
  }

  .header {
    grid-template-columns: 1fr auto;
  }

  .nav {
    display: none;
  }

  .hero,
  .section--split {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-top: 54px;
  }

  .preview-card {
    min-height: 480px;
  }

  .framework-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .header {
    min-height: 60px;
    border-radius: 20px;
  }

  .header-cta {
    min-height: 40px;
    padding-inline: 14px;
    font-size: 0.9rem;
  }

  h1 {
    font-size: clamp(3rem, 17vw, 4.6rem);
  }

  .hero-actions,
  .footer {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .preview-window {
    grid-template-columns: 1fr;
  }

  .preview-sidebar {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    padding: 12px;
  }

  .component-grid {
    grid-template-columns: 1fr;
  }
}
</style>
