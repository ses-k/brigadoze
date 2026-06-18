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
      cakes: "Bolos",
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
      items: [
        {
          name: "Brigadeiro 20 g",
          desc: "Unidade de 20 g — escolhe entre os nossos sabores.",
          price: "1,00 € / unidade",
        },
        {
          name: "Caixa de Brigadeiros",
          desc: "Seleção de sabores para oferecer ou saborear em casa.",
          price: "6,00 €",
        },
        {
          name: "Encomenda Personalizada",
          desc: "Para festas, casamentos e momentos especiais.",
          price: "Sob consulta",
        },
      ],
    },
    flavors: {
      title: "Sabores de Brigadeiro",
      list: [
        "Bolo de Bolacha",
        "Pastel de Nata",
        "Côco",
        "Salame",
        "Quindim",
        "Chocolate Branco",
        "Moscatel",
        "Limão",
        "Churro",
        "Amêndoa",
        "Morango",
        "Chocolate",
        "Oreo",
        "Café",
        "Maracujá",
        "Doce de Leite com Côco Torrado",
        "Tâmara",
        "Caramelo Salgado",
        "Crème Brûlée",
      ],
    },
    cakes: {
      title: "Bolos Personalizados",
      subtitle: "Combina a massa e o recheio à tua escolha — sob consulta.",
      massaTitle: "Massas",
      massa: [
        "Iogurte",
        "Pão-de-ló Tradicional",
        "Chocolate",
        "Cenoura",
        "Red Velvet",
        "Noz",
      ],
      recheioTitle: "Recheios",
      recheios: [
        "Doce de Ovos",
        "Brigadeiro Branco",
        "Brigadeiro de Chocolate",
        "Chantilly com Frutas",
        "Caramelo Salgado",
        "Doce de Leite",
        "Nutella",
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
      cakes: "Cakes",
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
      items: [
        {
          name: "Brigadeiro 20 g",
          desc: "20 g unit — choose from our range of flavours.",
          price: "€1.00 / unit",
        },
        {
          name: "Brigadeiro Gift Box",
          desc: "A selection of flavours to gift or enjoy at home.",
          price: "€6.00",
        },
        {
          name: "Custom Order",
          desc: "For parties, weddings, and special occasions.",
          price: "On request",
        },
      ],
    },
    flavors: {
      title: "Brigadeiro Flavours",
      list: [
        "Biscuit Cake",
        "Pastel de Nata",
        "Coconut",
        "Salami",
        "Quindim",
        "White Chocolate",
        "Moscatel",
        "Lemon",
        "Churro",
        "Almond",
        "Strawberry",
        "Chocolate",
        "Oreo",
        "Coffee",
        "Passionfruit",
        "Condensed Milk with Toasted Coconut",
        "Date",
        "Salted Caramel",
        "Crème Brûlée",
      ],
    },
    cakes: {
      title: "Custom Cakes",
      subtitle: "Mix and match sponge and filling — on request.",
      massaTitle: "Sponge",
      massa: [
        "Yoghurt",
        "Traditional Sponge Cake",
        "Chocolate",
        "Carrot",
        "Red Velvet",
        "Walnut",
      ],
      recheioTitle: "Fillings",
      recheios: [
        "Egg Yolk Custard",
        "White Brigadeiro",
        "Chocolate Brigadeiro",
        "Whipped Cream with Fruit",
        "Salted Caramel",
        "Dulce de Leche",
        "Nutella",
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
