export function charactersView() {
  return `
    <main class="characters">
      <section class="characters__content">
        <p class="characters__eyebrow">Personajes</p>

        <h1 class="characters__title">Elegí una emoción</h1>

        <p class="characters__description">
          Seleccioná el personaje con el que querés conversar.
        </p>

        <div class="characters__grid">
          <button class="character-card" type="button" data-character="furia">
          <img
            class="character-card__image"
            src="/src/assets/characters/furia.png"
            alt="Furia"
          />
            <span class="character-card__name">Furia</span>
          </button>

          <button class="character-card" type="button" data-character="alegria">
          <img
            class="character-card__image"
            src="/src/assets/characters/alegria.png"
            alt="Alegría"
          />
            <span class="character-card__name">Alegría</span>
          </button>

          <button class="character-card" type="button" data-character="tristeza">
          <img
            class="character-card__image"
            src="/src/assets/characters/tristeza.png"
            alt="Tristeza"
          />
            <span class="character-card__name">Tristeza</span>
          </button>

          <button class="character-card" type="button" data-character="desagrado">
          <img
            class="character-card__image"
            src="/src/assets/characters/desagrado.png"
            alt="Desagrado"
          />
            <span class="character-card__name">Desagrado</span>
          </button>

          <button class="character-card" type="button" data-character="temor">
          <img
            class="character-card__image"
            src="/src/assets/characters/temor.png"
            alt="Temor"
          />
            <span class="character-card__name">Temor</span>
          </button>
        </div>

        <button
          class="characters__back-button"
          type="button"
          data-link="/home"
        >
          Volver al inicio
        </button>
      </section>
    </main>
  `;
}