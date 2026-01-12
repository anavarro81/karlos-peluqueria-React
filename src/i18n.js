import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        menu: {
          about: "Sobre mí",
          gallery: "Galería",
          testimonials: "Testimonios",
          contact: "Contacto",
          services: "servicios",
        },

        hero: {
          subtitle: "Peluquería Canina",
          paw: "huella",
          clover: "clover",
          dog: "Perro",
        },

        services: {
          title: "Servicios",
          items: {
            clinic: "Servicios en clínica o a domicilio",
            baths: "Baños",
            stripping: "Deslanado",
            scissors: "Tijera",
            machine: "Corte a máquina",
            lodging1: "Alojamiento fines de semana y vacaciones",
            lodging2: "Consultar (individual y selecto)"
          },
        },

        gallery: {
          title: "PERROS FELICES, DUEÑOS ENCANTADOS",
          description:
            "Mira algunos de los resultados. Cada corte refleja cariño, paciencia y pasión por los animales.",
        },

        testimonials: {
          title: "LO QUE DICEN NUESTROS CLIENTES",
          description:
            "La satisfacción de las familias y sus mascotas es nuestra mejor recompensa.",
          client_photo: "Foto de cliente",
          star: "estrella",
        },

        contact: {
          title: "CONTÁCTAME FÁCILMENTE",
          description:
            "Reserva una cita o consulta cualquier duda. Estoy disponible para atenderte por WhatsApp o en la clínica.",
          items: {
            whatshapp: {
              title: "WhatsApp",
              description: "La forma más rápida de contactarme",
              buttontext: "Enviar mensaje",
              whatshapp_icon: "Icono de whastsapp",
            },
            location: {
              title: "Ubicación",
              description: "Clínica veterinaria",
              buttontext: "Google Maps",
              googleMaps_icon: "icono google maps",
            },
          },
        },

        footer: {
          text: "© 2025 Peluquería Canina",
        },
      },
    },
    en: {
      translation: {
        menu: {
          about: "About me",
          gallery: "Gallery",
          testimonials: "Testimonials",
          contact: "Contact",
          services: "Services",
        },

        hero: {
          subtitle: "Dog Grooming",
          paw: "paw",
          clover: "clover",
          dog: "Dog",
        },

        services: {
          title: "Services",
          items: {
            clinic: "Clinic or home services",
            baths: "Baths",
            stripping: "Stripping",
            scissors: "Scissors",
            machine: "Machine cut",
            lodging1: "Dog boarding on weekends and holidays ",
            lodging2: "Please inquire (individual and selective)",
          },
        },

        gallery: {
          title: "HAPPY DOGS, DELIGHTED OWNERS",
          description:
            "Look at some of the results. Each cut reflects care, patience and passion for animals.",
        },

        testimonials: {
          title: "WHAT OUR CLIENTS SAY",
          description:
            "The satisfaction of families and their pets is our best reward.",
          client_photo: "Client photo",
          star: "star",
        },

        contact: {
          title: "CONTACT ME EASILY",
          description:
            "Book an appointment or ask any questions. I'm available to assist you via WhatsApp or at the clinic.",
          items: {
            whatshapp: {
              title: "WhatsApp",
              description: "The fastest way to contact me",
              buttontext: "Send message",
              whatshapp_icon: "WhatsApp icon",
            },
            location: {
              title: "Location",
              description: "Veterinary clinic",
              buttontext: "Google Maps",
              googleMaps_icon: "google maps icon",
            },
          },
        },

        footer: {
          text: "© 2025 Dog Grooming",
        },
      },
    },
    fr: {
      translation: {
        menu: {
          about: "À propos de moi",
          gallery: "Galerie",
          testimonials: "Témoignages",
          contact: "Contact",
          services: "Services",
        },

        hero: {
          subtitle: "Toilettage Canin",
          paw: "patte",
          clover: "trèfle",
          dog: "Chien",
        },

        services: {
          title: "Services",
          items: {
            clinic: "Services en clinique ou à domicile",
            baths: "Bains",
            stripping: "Stripping",
            scissors: "Ciseaux",
            machine: "Coupe à la machine",
            lodging1: "Hébergement canin les week-ends et jours fériés",
            lodging2: "Veuillez nous consulter (individuel et sélectif)",

          },
        },

        gallery: {
          title: "CHIENS HEUREUX, PROPRIÉTAIRES RAVIS",
          description:
            "Regardez quelques résultats. Chaque coupe reflète l'affection, la patience et la passion pour les animaux.",
        },

        testimonials: {
          title: "CE QUE DISENT NOS CLIENTS",
          description:
            "La satisfaction des familles et de leurs animaux est notre meilleure récompense.",
          client_photo: "Photo de client",
          star: "étoile",
        },

        contact: {
          title: "CONTACTEZ-MOI FACILEMENT",
          description:
            "Réservez un rendez-vous ou posez vos questions. Je suis disponible pour vous aider via WhatsApp ou à la clinique.",
          items: {
            whatshapp: {
              title: "WhatsApp",
              description: "Le moyen le plus rapide de me contacter",
              buttontext: "Envoyer un message",
              whatshapp_icon: "Icône WhatsApp",
            },
            location: {
              title: "Localisation",
              description: "Clinique vétérinaire",
              buttontext: "Google Maps",
              googleMaps_icon: "icône google maps",
            },
          },
        },

        footer: {
          text: "© 2025 Toilettage Canin",
        },
      },
    },
},
  // Default language  
  lng: "es",
  // Fallback language if a translation is missing
  fallbackLng: "es",
    interpolation: {
        // React already safes from xss attacks
        escapeValue: false,
    },
});

export default i18n;