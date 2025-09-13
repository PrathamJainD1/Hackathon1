// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Welcome to Sikkim",
      para1:
        "Sikkim is a land of towering mountains, serene monasteries, and vibrant culture. Nestled in the Himalayas, it is home to Kanchenjunga, the world’s third-highest peak. This state is blessed with natural beauty, ancient traditions, and warm people that make it one of India’s most enchanting destinations.",
      para2:
        "Whether it’s exploring age-old monasteries, tasting authentic Himalayan cuisine, or immersing yourself in colorful festivals, Sikkim offers a unique experience that blends spirituality, adventure, and culture. Step in to discover its timeless charm.",
      Food: "Food",
      Culture: "Culture",
      Monasteries: "Monasteries",
      View360: "360 View"
    }
  },
  hi: {
    translation: {
      title: "सिक्किम में आपका स्वागत है",
      para1:
        "सिक्किम ऊँचे पर्वतों, शांत मठों और समृद्ध संस्कृति की भूमि है। हिमालय की गोद में बसा यह राज्य कंचनजंगा, दुनिया की तीसरी सबसे ऊँची चोटी का घर है। प्राकृतिक सुंदरता, प्राचीन परंपराओं और स्नेही लोगों से परिपूर्ण सिक्किम भारत के सबसे आकर्षक स्थलों में से एक है।",
      para2:
        "चाहे प्राचीन मठों की खोज हो, पारंपरिक हिमालयी भोजन का स्वाद लेना हो, या रंगीन त्योहारों में डूबना हो — सिक्किम अध्यात्म, रोमांच और संस्कृति का अद्वितीय मिश्रण प्रस्तुत करता है।",
      Food: "भोजन",
      Culture: "संस्कृति",
      Monasteries: "मठ",
      View360: "३६० दृश्य"
    }
  },
  mr: {
    translation: {
      title: "सिक्कीममध्ये आपले स्वागत आहे",
      para1:
        "सिक्कीम ही उंच डोंगरांची, शांत मठांची आणि समृद्ध संस्कृतीची भूमी आहे. हिमालयाच्या कुशीत वसलेले हे राज्य जगातील तिसऱ्या क्रमांकाच्या कंचनजंगा शिखराचे घर आहे. नैसर्गिक सौंदर्य, प्राचीन परंपरा आणि आपुलकीने भरलेले लोक यामुळे सिक्कीम भारतातील सर्वात आकर्षक ठिकाणांपैकी एक आहे.",
      para2:
        "प्राचीन मठांचा शोध घेणे असो, पारंपरिक हिमालयी खाद्यपदार्थांची चव घेणे असो किंवा रंगीबेरंगी उत्सवांमध्ये सहभागी होणे असो — सिक्कीम अध्यात्म, साहस आणि संस्कृतीचे अनोखे मिश्रण देते.",
      Food: "अन्न",
      Culture: "संस्कृती",
      Monasteries: "मठ",
      View360: "३६० दृश्य"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
