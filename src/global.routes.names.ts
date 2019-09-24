/*

Global Routes:
  - onlyGuest: only guests can view this page.
  - sideBar: this page has side bar enabled.
  - invisible: this page can't be seen in the top menu bar.
*/

export const globalRoutesNames = {
  DEFAULT: {
    url: '',
    title: 'undefined'
  },
  ERROR: {
      url: 'error',
      title: 'Error'
  },
  GUEST: {
    url: '',
    title: 'GUEST',
    children: {
      LOGIN: 
      {
        url: '',
        title: 'Login',
        onlyGuest: true
      },
      REGISTER: 
      {
        url: 'quickregister',
        title: 'Registro',
        onlyGuest: true
      }
    }
  },
  USER: {
    url: '',
    title: 'USER',
    children: {
      HABBO: {
        url: '',
        directURL: 'me',
        title: '%USERNAME%',
        children: {
          HOME: {
            url: 'me',
            title: 'Home',
            sideBar: true
          },
          PROFILE: {
            url: 'profile',
            title: 'Mi Perfil',
          },
          SETTINGS: {
            url: 'settings',
            title: 'Ajustes',
            sideBar: true,
            children: {
              GENERAL: {
                url: '',
                title: 'General',
              },
              PREFERENCES: {
                url: 'preferences',
                title: 'Preferencias',
              },
              CUSTOMIZATION: {
                url: 'customization',
                title: 'Personalización',
              },
            }
          },
        }
      },
      COMMUNITY: {
        url: 'community',
        title: 'Comunidad',
        children: {
          ARTICLES: {
            url: 'articles',
            title: 'Noticias'
          },
          PHOTO_GALLERY: {
            url: 'photo-gallery',
            title: 'Galería de Fotos'
          },
          TOP: {
            url: 'top',
            title: 'Tops'
          },
          TEAM: {
            url: 'team',
            title: 'Equipo Staff'
          }
        }
      },
      DISCOVER: {
        url: 'playing',
        title: 'Descubre %HOTELNAME%',
        directURL: 'what-is',
        children: {
          WHATIS: {
            url: 'what-is',
            title: '¿Qué es %HOTELNAME%?'
          },
          HOWTOPLAY: {
            url: 'how-to-play',
            title: '¿Cómo Jugar?'
          },
          HELP: {
            url: 'help',
            title: 'Ayuda'
          }
        }
      },
    }
  }
}