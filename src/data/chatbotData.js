const chatbotData = [

  // ================= GREETINGS =================
  {
    keywords: ["hi", "hello", "hey", "yo", "good morning", "good evening"],
    reply: "Welcome to EasyCartt 👋 Your one-stop electronics store. How can I help you today?"
  },

  // ================= ABOUT THE APP =================
  {
    keywords: ["what is this", "what is easycart", "about", "app", "platform"],
    reply: "EasyCartt is an online electronics store where you can browse, order, and pay for gadgets like phones, laptops, TVs, and accessories easily."
  },
  {
    keywords: ["how it works", "how do i use", "guide", "first time"],
    reply: "Browse products → Add to cart or purchase → Pay via M-Pesa → Wait for delivery 🚚. It's simple and fast!"
  },

  // ================= HELP =================
  {
    keywords: ["help", "support", "assist", "problem", "issue"],
    reply: "I can help you with products, payments, delivery, tracking, and returns. What do you need?"
  },

  // ================= PRODUCTS =================
  {
    keywords: ["products", "items", "what do you sell"],
    reply: "We sell phones, laptops, TVs, gaming consoles, headphones, and accessories."
  },

  // ================= PHONES =================
  {
    keywords: ["phone", "smartphone", "iphone", "samsung", "android"],
    reply: "We have smartphones from Apple, Samsung, Xiaomi, Tecno, Infinix & more. What’s your budget?"
  },
  {
    keywords: ["cheap phone", "budget phone"],
    reply: "Affordable phones available from Tecno, Infinix, and Redmi starting at low prices."
  },
  {
    keywords: ["best phone", "top phone", "flagship"],
    reply: "Top phones include iPhone 15, Samsung Galaxy S series, and Google Pixel."
  },

  // ================= LAPTOPS =================
  {
    keywords: ["laptop", "computer", "pc"],
    reply: "We have laptops for school, business, and gaming. What are you planning to use it for?"
  },
  {
    keywords: ["gaming laptop"],
    reply: "Gaming laptops available: ASUS ROG, HP Omen, Lenovo Legion."
  },

  // ================= TV =================
  {
    keywords: ["tv", "smart tv"],
    reply: "Smart TVs available from Samsung, LG, TCL in different sizes."
  },

  // ================= GAMING =================
  {
    keywords: ["ps5", "playstation", "xbox"],
    reply: "Gaming consoles available: PS5, Xbox Series X, Nintendo Switch 🎮"
  },

  // ================= AUDIO =================
  {
    keywords: ["headphones", "airpods"],
    reply: "We have JBL, Sony, and Apple AirPods for high-quality sound."
  },

  // ================= PAYMENT =================
  {
    keywords: ["mpesa", "payment", "pay"],
    reply: "You can securely pay using M-Pesa, Visa, or Mastercard."
  },
  {
    keywords: ["is payment safe", "secure payment"],
    reply: "Yes ✅ All payments are secure and encrypted for your safety."
  },

  // ================= ORDERS =================
  {
    keywords: ["order", "buy"],
    reply: "Select a product and click PURCHASE or ADD TO CART to proceed."
  },
  {
    keywords: ["track order", "tracking"],
    reply: "Provide your order ID to track your order status."
  },

  // ================= DELIVERY =================
  {
    keywords: ["delivery", "shipping"],
    reply: "We deliver across Kenya within 2–5 days 🚚"
  },
  {
    keywords: ["same day delivery"],
    reply: "Same-day delivery is available in selected areas."
  },

  // ================= RETURNS =================
  {
    keywords: ["return", "refund"],
    reply: "Returns are accepted within 7–14 days if the product is in good condition."
  },

  // ================= WARRANTY =================
  {
    keywords: ["warranty", "guarantee"],
    reply: "Most electronics come with a warranty depending on the product."
  },

  // ================= ACCOUNT =================
  {
    keywords: ["login", "signin"],
    reply: "Make sure your email and password are correct or reset your password."
  },
  {
    keywords: ["signup", "register"],
    reply: "Create an account to start shopping easily."
  },

  // ================= CONTACT =================
  {
    keywords: ["contact", "customer care"],
    reply: "Reach us via the Contact page, phone, or email support."
  },

  // ================= TRUST BUILDING =================
  {
    keywords: ["is this legit", "is this real"],
    reply: "Yes ✅ EasyCartt is a trusted platform for buying electronics safely."
  },
  {
    keywords: ["location", "where are you"],
    reply: "We are based in Nairobi, Kenya 🇰🇪 but deliver nationwide."
  },

  // ================= RECOMMENDATION =================
  {
    keywords: ["recommend", "suggest"],
    reply: "Tell me your budget and I’ll suggest the best product for you 💡"
  },

  // ================= FAQ =================
  {
    keywords: ["faq", "questions"],
    reply: "Common questions: delivery time, payment methods, returns, and product availability."
  },
  {
    keywords: ["delivery time"],
    reply: "Delivery usually takes 2–5 days depending on location."
  },
  {
    keywords: ["payment methods"],
    reply: "We accept M-Pesa, Visa, and Mastercard."
  },

  // ================= DEFAULT =================
  {
    keywords: [],
    reply: "I’m not sure I understand 🤔 Try asking about products, payments, or delivery."
  }
];

export default chatbotData;