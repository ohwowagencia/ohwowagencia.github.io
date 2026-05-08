# Producción-pack v1 — Calendario Social OH WOW! (14-27 abril 2026)

> Versión production-ready de `calendario.md`. Cada pieza visual tiene aquí TODO el texto literal que aparece renderizado y su `prompt_higgsfield` listo para `/generar-imagen`.
>
> Schema y linter: ver `.claude/skills/produccion-lista/SKILL.md`.

---

## Pieza 11 — Carrusel 25/04 "Anatomía de una landing que convierte al 8%"

```yaml
pieza_id: "carrusel-25abr-anatomia-landing"
fecha: "2026-04-25"
plataforma: "Instagram"
formato: "Carousel"
n_slides: 6
aspect_ratio: "1:1"
dimensiones_px: "1080x1080"
paleta:
  fondo: "#1c1c1c"
  acento_principal: "#c8f135"
  acento_secundario: "#e85d8a"
  texto_principal: "#ffffff"
  texto_secundario: "#a0a0a0"
tipografia:
  display: "Fraunces Serif Bold"
  ui: "Inter Sans Bold"
  meta: "Inter Sans Condensed Caps"
modelo_higgsfield: "gpt_image_2"
quality: "high"
resolution: "2k"

slides:
  - num: 1
    rol: "portada"
    elementos_renderizados:
      eyebrow: "CAPA 1 / 5"
      headline: "Anatomia de una landing."
      headline_palabra_destacada: "landing"
      subtitle_pill: "8% conversion"
      subtitle_texto: "vs 2.35% media del sector"
      cta_visual: "→ Desliza"
      wordmark: "OH WOW!"
    visual_secundario:
      tipo: "wireframe blueprint"
      contenido: "mockup landing en hairlines lima con etiquetas HERO / SOCIAL PROOF / CTA"
    datos_numericos: ["8%", "2.35%"]
    prompt_higgsfield: |
      Instagram carousel cover, 1:1 square, matte black (#1c1c1c) background.
      Right side: blueprint-style landing-page wireframe in lime-green (#c8f135) hairlines with three labeled callouts in a thin lime border: 'HERO', 'SOCIAL PROOF', 'CTA'.
      Left side: editorial headline in two lines: 'Anatomia de una' (white Fraunces serif) and 'landing.' (lime-green Fraunces serif bold, slightly glowing).
      Below the headline: small pink (#e85d8a) pill badge with white text '8% conversion' next to gray subtitle 'vs 2.35% media'.
      Bottom right: lime arrow plus 'Desliza' in lime sans.
      Bottom left: 'OH WOW!' wordmark in lime, condensed sans, all caps.
      Aesthetic: technical blueprint, dissection diagram, premium digital agency, sharp typography, flat vector, generous negative space.
      Part of a 6-slide carousel for OH WOW! agency, slide 1 of 6.
      No photography, no lorem ipsum, no placeholder text.

  - num: 2
    rol: "contenido"
    elementos_renderizados:
      eyebrow: "CAPA 1 / 5"
      titulo_seccion: "HERO:"
      headline_seccion: "Headline que duele."
      mockup_interior:
        eyebrow_pequeno: "TU TRANSFORMACION EMPIEZA AQUI"
        headline_grande: "Tu web tiene tráfico, pero no vende."
        subtitle: "Auditamos tu landing y te decimos los 3 puntos críticos en 48h. Sin coste."
        cta_label: "EMPIEZA AHORA"
      anotaciones:
        - texto: "ESPECIFICIDAD"
          apunta_a: "headline_grande"
          flecha_color: "#e85d8a"
        - texto: "BENEFICIO CLARO"
          apunta_a: "subtitle"
          flecha_color: "#e85d8a"
        - texto: "URGENCIA REAL"
          apunta_a: "cta_label"
          flecha_color: "#e85d8a"
      cta_visual: "→ Desliza"
      wordmark: "OH WOW!"
    prompt_higgsfield: |
      Instagram carousel slide 2 of 6, 1:1 square, matte black (#1c1c1c) background.
      Top-left: small lime-green (#c8f135) tag 'CAPA 1 / 5'.
      Editorial title in two lines: 'HERO:' (white Fraunces serif) and 'Headline que duele.' (lime-green Fraunces serif bold).
      Center: blueprint-style landing-page hero mockup in lime-green hairlines, framed by thin lime rectangle. Inside the mockup, render literally: small caps 'TU TRANSFORMACION EMPIEZA AQUI', large headline 'Tu web tiene tráfico, pero no vende.', a two-line subtitle 'Auditamos tu landing y te decimos los 3 puntos críticos en 48h. Sin coste.', and a solid lime rounded button with text 'EMPIEZA AHORA'.
      Around the mockup: three pink (#e85d8a) annotation arrows pointing inward to white sans labels: 'ESPECIFICIDAD' (top-left, points to headline), 'BENEFICIO CLARO' (left, points to subtitle), 'URGENCIA REAL' (bottom, points to button).
      Bottom-left: 'OH WOW!' lime wordmark all-caps condensed sans.
      Bottom-right: lime arrow plus 'Desliza' in lime sans.
      Aesthetic: technical blueprint, dissection diagram, sharp typography, flat vector.
      Part of a 6-slide carousel for OH WOW! agency, slide 2 of 6.
      No photography, no lorem ipsum, no placeholder text.

  - num: 3
    rol: "prueba_social"
    elementos_renderizados:
      eyebrow: "CAPA 2 / 5"
      titulo_seccion: "PRUEBA SOCIAL:"
      headline_seccion: "numeros que hablan."
      logos_clientes:
        - "Logo placeholder geométrico 1 (triángulo)"
        - "Logo placeholder geométrico 2 (cubo)"
        - "Logo placeholder geométrico 3 (círculo dividido)"
        - "Logo placeholder geométrico 4 (asterisco)"
        - "Logo placeholder geométrico 5 (cadena)"
      cifras_destacadas:
        - cifra: "+187%"
          label: "CONVERSION"
        - cifra: "4.9"
          label: "RATING"
        - cifra: "+50"
          label: "CASOS"
      testimonios:
        - cita: "Triplicamos formularios en 30 días."
          autor: "Marta L."
          cargo: "CEO, Vitae Studio"
        - cita: "Por fin nuestra web vende."
          autor: "Diego R."
          cargo: "Founder, NorteShop"
        - cita: "Inversión recuperada en 6 semanas."
          autor: "Carla M."
          cargo: "Marketing, Bemonk"
      anotacion_lateral:
        texto: "CONFIANZA"
        apunta_a: "cifras_destacadas"
        flecha_color: "#e85d8a"
      cta_visual: "→ Desliza"
      wordmark: "OH WOW!"
    prompt_higgsfield: |
      Instagram carousel slide 3 of 6, 1:1 square, matte black (#1c1c1c) background.
      Top-left: small lime-green (#c8f135) tag 'CAPA 2 / 5'.
      Editorial title in two lines: 'PRUEBA SOCIAL:' (white Fraunces serif) and 'numeros que hablan.' (lime-green Fraunces serif bold).
      Center upper: row of five generic logo placeholders in lime-green hairlines (triangle icon, cube icon, divided circle, asterisk, chain link), each in a thin rounded rectangle.
      Center middle: three large pink (#e85d8a) numeric stats with tiny gray uppercase labels: '+187%' / 'CONVERSION', '4.9' / 'RATING', '+50' / 'CASOS'.
      Center lower: three minimal testimonial cards in lime hairlines. Inside each, render literally a quote and an attribution: card 1 shows '"Triplicamos formularios en 30 días."' with attribution 'Marta L. — CEO, Vitae Studio'; card 2 '"Por fin nuestra web vende."' with 'Diego R. — Founder, NorteShop'; card 3 '"Inversión recuperada en 6 semanas."' with 'Carla M. — Marketing, Bemonk'.
      Pink arrow points to the cifras row with white sans label 'CONFIANZA'.
      Bottom-left: 'OH WOW!' lime wordmark all-caps condensed sans.
      Bottom-right: lime arrow plus 'Desliza' in lime sans.
      Aesthetic: technical blueprint, dissection diagram, sharp typography, flat vector.
      Part of a 6-slide carousel for OH WOW! agency, slide 3 of 6.
      No photography, no lorem ipsum, no placeholder text.

  - num: 4
    rol: "comparativa"
    elementos_renderizados:
      eyebrow: "CAPA 3 / 5"
      titulo_seccion_izq: "BENEFICIOS"
      operador: ">"
      titulo_seccion_der: "CARACTERISTICAS."
      tabla_comparativa:
        columna_izq:
          header: "CARACTERISTICA"
          header_color: "#a0a0a0"
          icono: "X"
          icono_color: "#e85d8a"
          filas:
            - "Stack WordPress + Elementor"
            - "Hosting cloud con CDN incluido"
            - "Auditoría UX trimestral"
        columna_der:
          header: "BENEFICIO"
          header_color: "#c8f135"
          icono: "✓"
          icono_color: "#c8f135"
          filas:
            - "Editas tu web sin tocar código ni pagar a nadie."
            - "Tu web carga en 1.2s en cualquier país, sin sobrecostes."
            - "Detectamos pérdidas de leads antes de que impacten en facturación."
      anotacion_central:
        texto: "TRADUCCION"
        flecha_color: "#e85d8a"
      cta_visual: "→ Desliza"
      wordmark: "OH WOW!"
    prompt_higgsfield: |
      Instagram carousel slide 4 of 6, 1:1 square, matte black (#1c1c1c) background.
      Top-left: small lime-green (#c8f135) tag 'CAPA 3 / 5'.
      Editorial title at top, three parts in one line: 'BENEFICIOS' (white Fraunces serif), then a huge lime-green '>' symbol, then 'CARACTERISTICAS.' (white Fraunces serif).
      Center: split comparison panel as two vertical columns separated by a thin lime divider.
      Left column on dark gray panel — header in muted gray 'CARACTERISTICA' with three rows. Each row: pink 'X' mark + literal text. Row 1: 'Stack WordPress + Elementor'. Row 2: 'Hosting cloud con CDN incluido'. Row 3: 'Auditoría UX trimestral'.
      Right column on subtle lime-tinted panel — header in lime 'BENEFICIO' with three rows. Each row: lime check mark + literal text. Row 1: 'Editas tu web sin tocar código ni pagar a nadie.'. Row 2: 'Tu web carga en 1.2s en cualquier país, sin sobrecostes.'. Row 3: 'Detectamos pérdidas de leads antes de que impacten en facturación.'.
      Horizontal pink (#e85d8a) annotation arrow between the two columns with white sans label 'TRADUCCION'.
      Bottom-left: 'OH WOW!' lime wordmark all-caps.
      Bottom-right: lime arrow plus 'Desliza' in lime sans.
      Aesthetic: technical blueprint, sharp typography, flat vector.
      Part of a 6-slide carousel for OH WOW! agency, slide 4 of 6.
      No photography, no lorem ipsum, no placeholder text.

  - num: 5
    rol: "cta_diseccion"
    elementos_renderizados:
      eyebrow: "CAPA 4 / 5"
      titulo_seccion: "CTA:"
      headline_seccion: "visible, claro, irresistible."
      boton_principal:
        label: "EMPIEZA AHORA"
        color_fondo: "#c8f135"
        color_texto: "#ffffff"
      anotaciones:
        - texto: "COLOR ALTO CONTRASTE"
          posicion: "arriba"
          flecha_color: "#e85d8a"
        - texto: "COPY DE ACCION"
          posicion: "derecha"
          flecha_color: "#e85d8a"
        - texto: "POSICION SOBRE FOLD"
          posicion: "abajo"
          flecha_color: "#e85d8a"
        - texto: "ESPACIO BLANCO"
          posicion: "izquierda"
          flecha_color: "#e85d8a"
      visual_secundario:
        tipo: "silueta landing"
        descripcion: "thin lime hairlines suggesting bottom of a landing page"
      cta_visual: "→ Desliza"
      wordmark: "OH WOW!"
    prompt_higgsfield: |
      Instagram carousel slide 5 of 6, 1:1 square, matte black (#1c1c1c) background.
      Top-left: small lime-green (#c8f135) tag 'CAPA 4 / 5'.
      Editorial title in two lines: 'CTA:' (white Fraunces serif) and 'visible, claro, irresistible.' (lime-green Fraunces serif bold).
      Center: a single huge lime-green (#c8f135) rounded pill button with crisp white sans-serif text 'EMPIEZA AHORA' and a white right arrow, casting a soft lime glow.
      Around the button: four pink (#e85d8a) annotation arrows pointing to it, each with a white sans-serif label: 'COLOR ALTO CONTRASTE' (top), 'COPY DE ACCION' (right), 'POSICION SOBRE FOLD' (bottom), 'ESPACIO BLANCO' (left).
      Below the button: thin lime hairline silhouette of a landing-page bottom section.
      Bottom-left: 'OH WOW!' lime wordmark all-caps.
      Bottom-right: lime arrow plus 'Desliza' in lime sans.
      Aesthetic: technical blueprint, sharp typography, flat vector, generous negative space.
      Part of a 6-slide carousel for OH WOW! agency, slide 5 of 6.
      No photography, no lorem ipsum, no placeholder text.

  - num: 6
    rol: "resultado_cta_final"
    elementos_renderizados:
      eyebrow: "CAPA 5 / 5"
      titulo_arriba: "Resultado:"
      cifra_principal:
        valor: "8%"
        label: "CONVERSION"
      pills_stats:
        - texto: "+187% LEADS"
          color: "#e85d8a"
        - texto: "-62% ABANDONO"
          color: "#e85d8a"
      claim_grande: "Tu landing puede trabajar asi."
      cta_button:
        label: "AUDITORIA GRATUITA"
        color_fondo: "#c8f135"
        color_texto: "#1c1c1c"
      cta_subtitle: "Link en bio."
      wordmark: "OH WOW!"
    prompt_higgsfield: |
      Instagram carousel final slide 6 of 6, 1:1 square, matte black (#1c1c1c) background.
      Top-left: small lime-green (#c8f135) tag 'CAPA 5 / 5'.
      Editorial title at top: 'Resultado:' (white Fraunces serif).
      Center upper: gigantic lime-green Fraunces serif numeral '8%' with thin uppercase white sans label 'CONVERSION' below.
      Below: two pink (#e85d8a) rounded pill stat badges side by side with white sans text: '+187% LEADS' and '-62% ABANDONO'.
      Mid-section: bold white Fraunces serif sentence in two lines: 'Tu landing puede / trabajar asi.'.
      Center-bottom: a single lime-green rounded pill CTA button with crisp black sans-serif text 'AUDITORIA GRATUITA' and a black right arrow.
      Below the button: small white sans-serif text 'Link en bio.'.
      Bottom-left: 'OH WOW!' lime wordmark all-caps condensed sans.
      Aesthetic: premium digital agency, sharp typography, generous negative space, minimal, flat vector.
      Part of a 6-slide carousel for OH WOW! agency, slide 6 of 6.
      No photography, no lorem ipsum, no placeholder text.
```

---

## Notas

- Los logos en slide 3 son placeholders geométricos abstractos. Si el cliente proporciona logos reales (con permiso de uso), añadir `logos_reales_pendientes: true` y reemplazar tras recepción.
- Las cifras son las publicables como "datos agregados de cartera 2025". Validar con CDO/CMO antes de publicar.
- Los testimonios son ficticios para demo. **Antes de publicar:** sustituir por testimonios reales con permiso firmado.
- Resto de piezas del calendario (entradas 01-10, 12-14) requieren su propia sección en este pack. Pendiente de cubrir en próxima iteración.
