// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        Home: "Home",
        Culture: "Culture",
        Calendar: "Cultural Calendar",
        "360 View": "360 View",
        "Travel Routes": "Travel Routes",
        "Booking / Participation": "Booking / Participation",

        // Title + About
        "Sikkim: Land of Monasteries, Mountains & Culture":
          "Sikkim: Land of Monasteries, Mountains & Culture",
        "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.":
          "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.",
        "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.":
          "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.",

        // New Sections
        "Cultural Calendar": "Cultural Calendar",
        "Cultural Calendar Intro":
          "Sikkim’s cultural calendar is filled with vibrant festivals like Losar, Saga Dawa, and Pang Lhabsol, which showcase the spiritual and cultural richness of the land. Each festival reflects harmony, unity, and a deep connection with nature and traditions.",

        "Why Choose Sikkim": "Why Choose Sikkim",
        WhyChooseText:
          "Sikkim is not just a travel destination—it is an experience of peace, adventure, and culture. With snow-capped mountains, ancient monasteries, and warm-hearted people, it is the perfect escape from the chaos of city life.",

        "Problems This Website Solves": "Problems This Website Solves",
        "Problem Statement 1":
          "Tourists often struggle to find authentic and structured information about Sikkim’s culture, food, monasteries, and travel routes. This makes planning confusing and reduces the richness of the experience.",
        "Problem Statement 2":
          "Our website solves this by bringing everything together in one place—panoramic monastery views, food guides, cultural calendars, and travel assistance. This helps travelers plan better, connect deeper, and truly experience Sikkim.",
      },
    },

    hi: {
      translation: {
        // Navbar
        Home: "मुखपृष्ठ",
        Culture: "संस्कृति",
        Calendar: "सांस्कृतिक कैलेंडर",
        "360 View": "360 दृश्य",
        "Travel Routes": "यात्रा मार्ग",
        "Booking / Participation": "बुकिंग / भागीदारी",

        // Title + About
        "Sikkim: Land of Monasteries, Mountains & Culture":
          "सिक्किम: मठों, पर्वतों और संस्कृति की भूमि",
        "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.":
          "हिमालय की गोद में बसा सिक्किम प्राकृतिक सुंदरता और सांस्कृतिक समृद्धि का अनमोल रत्न है। कंचनजंगा जैसे बर्फ से ढके शिखर, जीवंत बौद्ध मठ और गर्मजोशी से भरी मेहमाननवाजी के लिए प्रसिद्ध, सिक्किम यात्रियों को रोमांच और शांति का अनूठा संगम प्रदान करता है।",
        "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.":
          "हरी-भरी घाटियों और अल्पाइन घास के मैदानों से लेकर पारंपरिक त्योहारों और विविध व्यंजनों तक, सिक्किम का हर कोना प्रकृति और संस्कृति के सामंजस्य की कहानी कहता है। चाहे आप आध्यात्मिक शांति चाहते हों, रोमांचक ट्रेक्स या बस मनमोहक दृश्य, सिक्किम एक अविस्मरणीय यात्रा का वादा करता है।",

        // New Sections
        "Cultural Calendar": "सांस्कृतिक कैलेंडर",
        "Cultural Calendar Intro":
          "सिक्किम का सांस्कृतिक कैलेंडर लोसर, सागा दावा और पांग ल्हाबसोल जैसे जीवंत त्योहारों से भरा है, जो इस भूमि की आध्यात्मिक और सांस्कृतिक समृद्धि को प्रदर्शित करते हैं। प्रत्येक त्योहार सद्भाव, एकता और प्रकृति व परंपराओं के साथ गहरे संबंध को दर्शाता है।",

        "Why Choose Sikkim": "क्यों चुनें सिक्किम",
        WhyChooseText:
          "सिक्किम केवल एक यात्रा गंतव्य नहीं है—यह शांति, रोमांच और संस्कृति का अनुभव है। बर्फ से ढके पर्वत, प्राचीन मठ और गर्मजोशी से भरे लोग इसे शहर की भीड़-भाड़ से दूर जाने का आदर्श स्थान बनाते हैं।",

        "Problems This Website Solves": "यह वेबसाइट कौन सी समस्याएं हल करती है",
        "Problem Statement 1":
          "पर्यटक अक्सर सिक्किम की संस्कृति, भोजन, मठों और यात्रा मार्गों के बारे में प्रामाणिक और संरचित जानकारी खोजने में संघर्ष करते हैं। इससे योजना बनाना कठिन हो जाता है और अनुभव की गहराई कम हो जाती है।",
        "Problem Statement 2":
          "हमारी वेबसाइट इस समस्या को हल करती है और सब कुछ एक ही जगह पर लाती है—पैनोरामिक मठ दृश्य, भोजन गाइड, सांस्कृतिक कैलेंडर और यात्रा सहायता। इससे यात्रियों को बेहतर योजना बनाने, गहराई से जुड़ने और वास्तव में सिक्किम का अनुभव करने में मदद मिलती है।",
      },
    },

    mr: {
      translation: {
        // Navbar
        Home: "मुख्यपृष्ठ",
        Culture: "संस्कृती",
        Calendar: "सांस्कृतिक दिनदर्शिका",
        "360 View": "३६० दृश्य",
        "Travel Routes": "प्रवास मार्ग",
        "Booking / Participation": "बुकिंग / सहभाग",

        // Title + About
        "Sikkim: Land of Monasteries, Mountains & Culture":
          "सिक्किम: मठ, पर्वत आणि संस्कृतीची भूमी",
        "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.":
          "हिमालयाच्या कुशीत वसलेले सिक्किम हे भारताचे निसर्गसौंदर्य आणि सांस्कृतिक समृद्धीचे लपलेले रत्न आहे. कांचनजंगा सारख्या बर्फाच्छादित शिखरांसाठी, रंगीबेरंगी बौद्ध मठांसाठी आणि उबदार आतिथ्यासाठी प्रसिद्ध, सिक्किम प्रवाशांना साहस आणि शांततेचा परिपूर्ण संगम देते.",
        "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.":
          "समृद्ध दऱ्या आणि आल्प्ससारख्या कुरणांपासून पारंपरिक सण आणि विविध खाद्यसंस्कृतींपर्यंत, सिक्किमचा प्रत्येक कोपरा निसर्ग आणि संस्कृतीच्या सामंजस्याची गोष्ट सांगतो. आपण आध्यात्मिक शांती शोधत असाल, रोमांचक ट्रेक्स किंवा फक्त नयनरम्य दृश्ये, सिक्किम एक अविस्मरणीय प्रवासाचे वचन देते.",

        // New Sections
        "Cultural Calendar": "सांस्कृतिक दिनदर्शिका",
        "Cultural Calendar Intro":
          "सिक्किमचे सांस्कृतिक दिनदर्शिके लोसर, सागा दावा आणि पांग ल्हाबसोल सारख्या रंगीबेरंगी सणांनी भरलेले आहे, जे या भूमीची आध्यात्मिक आणि सांस्कृतिक समृद्धी दाखवतात. प्रत्येक सण सौहार्द, ऐक्य आणि निसर्ग व परंपरांशी असलेले खोल संबंध दर्शवतो.",

        "Why Choose Sikkim": "सिक्किम का निवडावे",
        WhyChooseText:
          "सिक्किम फक्त प्रवासाचे ठिकाण नाही—ते शांती, साहस आणि संस्कृतीचा अनुभव आहे. बर्फाच्छादित पर्वत, प्राचीन मठ आणि उबदार मनाचे लोक हे शहराच्या गोंगाटापासून दूर जाण्यासाठी आदर्श ठिकाण बनवतात.",

        "Problems This Website Solves": "ही वेबसाइट कोणत्या समस्या सोडवते",
        "Problem Statement 1":
          "पर्यटकांना अनेकदा सिक्किमची संस्कृती, खाद्यपदार्थ, मठ आणि प्रवास मार्गांविषयी प्रामाणिक आणि संरचित माहिती शोधण्यात अडचण येते. त्यामुळे नियोजन करणे कठीण होते आणि अनुभवाची समृद्धी कमी होते.",
        "Problem Statement 2":
          "आमची वेबसाईट ही समस्या सोडवते आणि सर्व काही एका ठिकाणी आणते—पॅनोरामिक मठ दृश्ये, खाद्य मार्गदर्शक, सांस्कृतिक दिनदर्शिका आणि प्रवास सहाय्य. यामुळे प्रवाशांना चांगले नियोजन करणे, अधिक खोलवर जोडले जाणे आणि खऱ्या अर्थाने सिक्किमचा अनुभव घेणे शक्य होते.",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
export default i18n;

