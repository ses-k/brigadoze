export type Locale = "pt" | "en";

export const translations = {
  pt: {
    meta: {
      title: "Brigadoze | Brigadeiros Artesanais",
      description:
        "Brigadeiros artesanais feitos à mão em Portugal. Sabores únicos, ingredientes de qualidade e um toque português em cada doce.",
    },
    nav: {
      about: "Sobre",
      products: "Produtos",
      flavors: "Sabores",
      order: "Encomendas",
      contact: "Contacto",
    },
    hero: {
      tagline: "Brigadeiros Artesanais",
      subtitle:
        "Brigadeiros artesanais, feitos à mão com ingredientes selecionados e um toque de doçura portuguesa.",
      ctaInstagram: "Seguir no Instagram",
      ctaOrder: "Fazer Encomenda",
    },
    about: {
      title: "A Nossa História",
      p1: "A Brigadoze nasce da paixão pelo brigadeiro — aquele doce cremoso que conquista à primeira dentada.",
      p2: "Cada brigadeiro é moldado à mão, sem corantes artificiais, com receitas pensadas para surpreender o paladar.",
      values: [
        { title: "Artesanal", desc: "Produção manual, lote a lote" },
        { title: "Qualidade", desc: "Ingredientes selecionados" },
        { title: "Portugal", desc: "Sabores com identidade portuguesa" },
      ],
    },
    products: {
      title: "Os Nossos Produtos",
      subtitle: "Descobre as nossas criações — atualiza com os produtos do Instagram",
      items: [
        {
          name: "Brigadeiro Tradicional",
          desc: "O clássico de chocolate, cremoso e irresistível.",
          price: "[Preço a definir]",
        },
        {
          name: "Caixa de Brigadeiros",
          desc: "Seleção de sabores para oferecer ou saborear em casa.",
          price: "[Preço a definir]",
        },
        {
          name: "Edição Especial",
          desc: "[Nome e descrição do produto em destaque no Instagram]",
          price: "[Preço a definir]",
        },
        {
          name: "Encomenda Personalizada",
          desc: "Para festas, casamentos e momentos especiais.",
          price: "Sob consulta",
        },
      ],
    },
    flavors: {
      title: "Sabores",
      subtitle:
        "[Lista de sabores disponíveis — atualizar com os sabores publicados no Instagram]",
      list: [
        "Chocolate Tradicional",
        "Côco",
        "[Sabor a definir]",
        "[Sabor a definir]",
        "[Sabor a definir]",
        "[Sabor a definir]",
      ],
    },
    order: {
      title: "Como Encomendar",
      steps: [
        {
          title: "Escolhe os produtos",
          desc: "Indica os sabores e quantidades que pretendes.",
        },
        {
          title: "Contacta-nos",
          desc: "Envia mensagem pelo Instagram, email ou telefone.",
        },
        {
          title: "Confirma e paga",
          desc: "Acordamos a data de entrega ou recolha e o pagamento.",
        },
        {
          title: "Recebe e desfruta",
          desc: "Os teus brigadeiros chegam frescos e prontos a saborear.",
        },
      ],
      note: "Encomendas com antecedência mínima de 3 dias.",
    },
    contact: {
      title: "Contacto",
      subtitle: "Estamos à tua disposição para encomendas e informações.",
      instagram: "@brigadoze",
      instagramUrl: "https://www.instagram.com/brigadoze/",
      email: "1brigadoze2@gmail.com",
      phone: "+351 910 400 281",
      address: "Setúbal",
      hours: "Por encomenda — sem horário fixo",
      labels: {
        instagram: "Instagram",
        email: "Email",
        phone: "Telefone",
        address: "Localização",
        hours: "Horário",
      },
    },
    footer: {
      rights: "© {year} Brigadoze. Todos os direitos reservados.",
      madeWith: "Feito com amor em Portugal",
    },
    lang: {
      switch: "EN",
      current: "PT",
    },
  },
  en: {
    meta: {
      title: "Brigadoze | Handcrafted Brigadeiro Sweets",
      description:
        "Handcrafted brigadeiros made in Portugal. Unique flavours, quality ingredients, and a Portuguese touch in every sweet.",
    },
    nav: {
      about: "About",
      products: "Products",
      flavors: "Flavours",
      order: "Orders",
      contact: "Contact",
    },
    hero: {
      tagline: "Handcrafted Brigadeiro Sweets",
      subtitle:
        "Handcrafted brigadeiros made with selected ingredients and a touch of Portuguese sweetness.",
      ctaInstagram: "Follow on Instagram",
      ctaOrder: "Place an Order",
    },
    about: {
      title: "Our Story",
      p1: "Brigadoze was born from a passion for brigadeiros — that creamy sweet that wins you over at first bite.",
      p2: "Each brigadeiro is hand-rolled, free from artificial colourings, with recipes designed to surprise the palate.",
      values: [
        { title: "Artisan", desc: "Handmade, batch by batch" },
        { title: "Quality", desc: "Selected ingredients" },
        { title: "Portugal", desc: "Flavours with Portuguese identity" },
      ],
    },
    products: {
      title: "Our Products",
      subtitle: "Discover our creations — update with products from Instagram",
      items: [
        {
          name: "Traditional Brigadeiro",
          desc: "The classic chocolate, creamy and irresistible.",
          price: "[Price TBD]",
        },
        {
          name: "Brigadeiro Gift Box",
          desc: "A selection of flavours to gift or enjoy at home.",
          price: "[Price TBD]",
        },
        {
          name: "Special Edition",
          desc: "[Featured product name and description from Instagram]",
          price: "[Price TBD]",
        },
        {
          name: "Custom Order",
          desc: "For parties, weddings, and special occasions.",
          price: "On request",
        },
      ],
    },
    flavors: {
      title: "Flavours",
      subtitle:
        "[List of available flavours — update with flavours posted on Instagram]",
      list: [
        "Traditional Chocolate",
        "Coconut",
        "[Flavour TBD]",
        "[Flavour TBD]",
        "[Flavour TBD]",
        "[Flavour TBD]",
      ],
    },
    order: {
      title: "How to Order",
      steps: [
        {
          title: "Choose your products",
          desc: "Tell us the flavours and quantities you want.",
        },
        {
          title: "Get in touch",
          desc: "Send us a message on Instagram, email, or phone.",
        },
        {
          title: "Confirm and pay",
          desc: "We agree on delivery or pickup date and payment.",
        },
        {
          title: "Receive and enjoy",
          desc: "Your brigadeiros arrive fresh and ready to savour.",
        },
      ],
      note: "Orders require a minimum of 3 days' advance notice.",
    },
    contact: {
      title: "Contact",
      subtitle: "We're here for orders and enquiries.",
      instagram: "@brigadoze",
      instagramUrl: "https://www.instagram.com/brigadoze/",
      email: "1brigadoze2@gmail.com",
      phone: "+351 910 400 281",
      address: "Setúbal",
      hours: "By order — no fixed hours",
      labels: {
        instagram: "Instagram",
        email: "Email",
        phone: "Phone",
        address: "Location",
        hours: "Hours",
      },
    },
    footer: {
      rights: "© {year} Brigadoze. All rights reserved.",
      madeWith: "Made with love in Portugal",
    },
    lang: {
      switch: "PT",
      current: "EN",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
