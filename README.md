# Iglesia Apostólica & Misionera

**"Somos Una Iglesia Para Toda La Familia"**

## Paleta de Colores

La siguiente paleta de colores está basada en el material oficial de la iglesia:

| Color | Nombre | Hex | RGB | Uso |
|-------|--------|-----|-----|-----|
| ![#7CB342](https://via.placeholder.com/20/7CB342/7CB342?text=+) | Verde Lima | `#7CB342` | `rgb(124, 179, 66)` | Bloques de acento, fondos secundarios |
| ![#8BC34A](https://via.placeholder.com/20/8BC34A/8BC34A?text=+) | Verde Claro | `#8BC34A` | `rgb(139, 195, 74)` | Variante del verde para degradados |
| ![#1A237E](https://via.placeholder.com/20/1A237E/1A237E?text=+) | Azul Marino | `#1A237E` | `rgb(26, 35, 126)` | Texto principal, logo |
| ![#E65100](https://via.placeholder.com/20/E65100/E65100?text=+) | Naranja | `#E65100` | `rgb(230, 81, 0)` | Acentos, títulos destacados |
| ![#F57C00](https://via.placeholder.com/20/F57C00/F57C00?text=+) | Naranja Dorado | `#F57C00` | `rgb(245, 124, 0)` | Variante para highlights |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF?text=+) | Blanco | `#FFFFFF` | `rgb(255, 255, 255)` | Fondo principal |
| ![#424242](https://via.placeholder.com/20/424242/424242?text=+) | Gris Oscuro | `#424242` | `rgb(66, 66, 66)` | Texto secundario |
| ![#757575](https://via.placeholder.com/20/757575/757575?text=+) | Gris Medio | `#757575` | `rgb(117, 117, 117)` | Elementos sutiles |

## Variables CSS

```css
:root {
  /* Colores Primarios */
  --color-verde-lima: #7CB342;
  --color-verde-claro: #8BC34A;
  --color-azul-marino: #1A237E;

  /* Colores de Acento */
  --color-naranja: #E65100;
  --color-naranja-dorado: #F57C00;

  /* Colores Neutros */
  --color-blanco: #FFFFFF;
  --color-gris-oscuro: #424242;
  --color-gris-medio: #757575;
}
```

## Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'iglesia': {
          'verde-lima': '#7CB342',
          'verde-claro': '#8BC34A',
          'azul-marino': '#1A237E',
          'naranja': '#E65100',
          'naranja-dorado': '#F57C00',
          'gris-oscuro': '#424242',
          'gris-medio': '#757575',
        }
      }
    }
  }
}
```

## Uso Recomendado

- **Verde Lima**: Usar para botones de acción, bloques destacados y elementos interactivos
- **Azul Marino**: Texto de encabezados, logo y elementos de navegación
- **Naranja/Dorado**: Llamadas a la acción, iconos importantes y acentos visuales
- **Blanco**: Fondos principales para mantener limpieza visual
- **Grises**: Texto del cuerpo y elementos de soporte

---

**Iglesia Apostólica & Misionera**
Pastores Generales: Gregorio Cruz Y Lucia Gálvez
Calle Respaldo 21 #201 Villas Agrícolas, Santo Domingo, D.N., Rep. Dom.
Tel: 809-581-3396
