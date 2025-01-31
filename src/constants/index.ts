import {
  Content,
  FAQItem,
  GalleryImage,
  NavLink,
  Service,
  SocialLink,
  Testimonial,
} from "@/interfaces";
import { Facebook, Instagram, Youtube } from "lucide-react";

export const navLinks: NavLink[] = [
  { id: 1, route: "/", label: "Home" },
  { id: 2, route: "/about", label: "About" },
  { id: 3, route: "/services", label: "Services" },
  { id: 4, route: "/specialists", label: "Specialists" },
  { id: 5, route: "/gallery", label: "Gallery" },
  { id: 6, route: "/testimonials", label: "Testimonials" },
  { id: 7, route: "/faqs", label: "FAQs" },
  { id: 8, route: "/blogs", label: "Blogs" },
  { id: 9, route: "/contact", label: "Contact" },
];

export const policyLinks: NavLink[] = [
  { id: 1, route: "/terms-of-use", label: "Terms of Use" },
  { id: 2, route: "/privacy-policy", label: "Privacy Policy" },
  { id: 3, route: "/cookie-policy", label: "Cookie Policy" },
  { id: 4, route: "/nudity-consent-policy", label: "Nudity Consent Policy" },
];

export const socialLinks: SocialLink[] = [
  { id: 1, label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { id: 2, label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { id: 3, label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Relaxing Massage Therapy",
    shortDescription: "Professional tension relief with various techniques",
    longDescription:
      "Full-body massage combining Swedish, deep tissue and aromatherapy elements for complete relaxation",
    procedures: [
      "Deep tissue manipulation",
      "Swedish techniques",
      "Aromatherapy oils application",
    ],
    specialists: [
      {
        id: "1",
        name: "Elena Rodriguez",
        image:
          "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Senior Massage Therapist",
        bio: "10+ years experience in deep tissue and sports massage",
        background: "Certified in multiple international massage techniques",
        dateOfBirth: new Date("1985-08-22"),
        sex: "female",
        hireCost: 80,
        services: [] as Service[],
        secretOfferings: ["Hot stone add-on", "Custom herbal compresses"],
        tips: ["Stay hydrated before session", "Avoid heavy meals 2hrs prior"],
        bodyMeasurements: {
          height: 168,
          weight: 65,
          chest: 92,
          waist: 68,
          hips: 94,
        },
        hotness: 92,
        nudityLevel: "partial",
      },
      {
        id: "2",
        name: "Clara Bennett",
        image:
          "https://images.unsplash.com/photo-1525284890203-9ee752d3f44f?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Aromatherapy Specialist",
        bio: "Expert in essential oil blends for stress relief",
        background: "Certified aromatherapist from London Institute",
        dateOfBirth: new Date("1990-12-15"),
        sex: "female",
        hireCost: 75,
        services: [] as Service[],
        secretOfferings: ["Custom scent blending", "Chakra balancing"],
        tips: ["Share preferred scents beforehand", "Bring loose clothing"],
        bodyMeasurements: {
          height: 172,
          weight: 63,
          chest: 89,
          waist: 66,
          hips: 92,
        },
        hotness: 88,
        nudityLevel: "partial",
      },
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    perks: [
      "Muscle tension relief",
      "Stress reduction",
      "Improved circulation",
    ],
    durations: [60, 90],
    baseCost: 120,
    conversionRate: 1.75,
  },
  {
    id: "2",
    title: "Luxury Facial Treatment",
    shortDescription: "Rejuvenating skin care experience",
    longDescription:
      "Multi-step facial with premium products for glowing complexion",
    procedures: [
      "Deep cleansing",
      "Exfoliation",
      "Hydration boost",
      "LED therapy",
    ],
    specialists: [
      {
        id: "3",
        name: "Sophia Chen",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Master Esthetician",
        bio: "Specialist in anti-aging treatments",
        background: "Trained in Parisian skincare techniques",
        dateOfBirth: new Date("1988-04-03"),
        sex: "female",
        hireCost: 90,
        services: [] as Service[],
        secretOfferings: ["24k gold mask upgrade", "Cryotherapy add-on"],
        tips: ["Avoid sun exposure after treatment", "Use gentle cleansers"],
        bodyMeasurements: {
          height: 165,
          weight: 58,
          chest: 86,
          waist: 64,
          hips: 90,
        },
        hotness: 95,
        nudityLevel: "none",
      },
      {
        id: "4",
        name: "Mia Kowalski",
        image:
          "https://images.unsplash.com/photo-1510259051177-e2ca96048337?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Organic Skincare Expert",
        bio: "Focus on natural and sustainable products",
        background: "Certified organic skincare formulator",
        dateOfBirth: new Date("1993-07-19"),
        sex: "female",
        hireCost: 85,
        services: [] as Service[],
        secretOfferings: ["CBD-infused serum", "Guasha stone therapy"],
        tips: [
          "Bring your own moisturizer for analysis",
          "Avoid makeup before",
        ],
        bodyMeasurements: {
          height: 170,
          weight: 60,
          chest: 88,
          waist: 65,
          hips: 91,
        },
        hotness: 90,
        nudityLevel: "none",
      },
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    perks: ["Deep hydration", "Pore refinement", "Even skin tone"],
    durations: [45, 75],
    baseCost: 95,
    conversionRate: 1.95,
  },
];

export const aboutContents: Content[] = [
  {
    id: 1,
    title: "Our Story",
    descriptions: [
      "Our journey began with a vision to create a sanctuary for relaxation and rejuvenation. We wanted to build a space where everyone could escape the stresses of everyday life and feel truly pampered. The founders, passionate about wellness and beauty, combined their expertise in the spa industry with a deep love for nature. Over the years, our commitment to providing exceptional service and creating a warm, inviting atmosphere has made us a favorite destination for those seeking tranquility.",
      "From our humble beginnings, we have grown to become one of the top-rated spas in the area. With each step of our journey, we’ve remained true to our roots of offering personalized experiences to every guest. Our team of dedicated professionals continues to refine our services, ensuring that we stay ahead of trends while maintaining the timeless essence of what makes our spa unique.",
    ],
  },
  {
    id: 2,
    title: "Our Mission",
    descriptions: [
      "Our mission is to provide a transformative spa experience that promotes holistic wellness, relaxation, and beauty. We believe in the power of self-care and are dedicated to creating a space where every individual can unwind, recharge, and rejuvenate both physically and mentally. We aim to make wellness accessible to all, offering personalized treatments designed to meet the unique needs of our clients, whether they are seeking relief from stress, enhanced beauty, or overall wellness.",
      "We are committed to using high-quality, natural ingredients in all of our treatments, ensuring that each service not only nurtures your body but also contributes to a healthier planet. Our mission extends beyond simply pampering our clients; we strive to help them feel their best, both inside and out, fostering an environment where relaxation is more than just a moment – it’s a lasting experience.",
    ],
  },
  {
    id: 3,
    title: "Our Passion",
    descriptions: [
      "At the heart of everything we do is a deep passion for enhancing the lives of our clients through holistic care. We are driven by a genuine love for wellness, beauty, and relaxation. Each treatment we offer is carefully crafted to bring the best out of our guests, helping them feel rejuvenated and ready to take on the world. Our passion extends to providing a sanctuary where clients can disconnect from the chaos of their everyday lives and find true peace.",
      "Our team of experts shares a collective love for helping others feel their best, whether it’s through a soothing massage, a rejuvenating facial, or simply providing a moment of peace. The energy we pour into every aspect of our spa creates an atmosphere that promotes healing, self-love, and well-being. This passion fuels our dedication to offering the best spa experience possible.",
    ],
  },
  {
    id: 4,
    title: "Founder",
    descriptions: [
      "Sabine Jovana, the visionary founder of our spa, has always been passionate about the intersection of wellness and beauty. With years of experience in the spa industry, she has built a reputation for her commitment to providing exceptional, personalized care. Sabine’s journey began as a therapist herself, but over time, her dedication to creating the perfect spa environment led her to establish this sanctuary where guests could experience truly transformative treatments.",
      "What makes Sabine’s vision unique is her belief that a spa is not just a place for relaxation but a community where clients can build meaningful connections. Through regular engagements and intimate sessions, Sabine ensures that every client feels valued, heard, and cared for. She’s always available to chat and share her passion for wellness, allowing clients to get to know her on a personal level and become a part of the spa’s extended family.",
    ],
  },
  {
    id: 5,
    title: "Our Environment",
    descriptions: [
      "Our spa environment is designed to be a peaceful haven where you can disconnect from the outside world. From the moment you walk through our doors, you are welcomed by calming scents, soothing sounds, and a serene atmosphere that immediately puts your mind at ease. The design is inspired by natural elements, creating a space that feels organic, inviting, and full of tranquility. Whether you’re enjoying a treatment in one of our luxurious treatment rooms or relaxing in our waiting area, the environment is crafted to help you feel relaxed and rejuvenated.",
      "We believe that the right environment can greatly enhance the overall spa experience. That’s why we’ve invested in creating spaces that promote comfort and serenity. The décor combines elegance with simplicity, and every detail is chosen with relaxation in mind. We want our guests to feel like they’ve entered a peaceful oasis, far away from the hustle and bustle of everyday life, where they can truly unwind.",
    ],
  },
  {
    id: 6,
    title: "Our Standards",
    descriptions: [
      "We hold ourselves to the highest standards of quality, service, and excellence. Every treatment we offer is performed by highly skilled professionals who are dedicated to ensuring that your experience is nothing short of perfect. We use only the finest products and treatments, handpicked to ensure that every service we provide is effective, safe, and beneficial for your health and well-being. Our standards extend beyond the treatment room – from the cleanliness of our facility to the friendliness of our staff, we strive for excellence in everything we do.",
      "Our commitment to quality is unwavering, and we believe that each client deserves a personalized, unforgettable experience. Whether you are visiting us for a quick treatment or indulging in a full day of pampering, we maintain the same level of care and attention to detail, ensuring that your visit is as comfortable and enjoyable as possible.",
    ],
  },
  {
    id: 7,
    title: "Our Commitments",
    descriptions: [
      "We are committed to providing a spa experience that exceeds your expectations every time. We strive to continuously improve our services, ensuring that we offer the latest in spa treatments, wellness techniques, and relaxation methods. Our commitment is to make your well-being a priority, offering personalized treatments that address your specific needs and goals. We’re here not only to pamper you but also to support your journey to wellness, helping you achieve balance, peace, and beauty.",
      "In addition to our dedication to quality, we are also committed to sustainability and environmental responsibility. We use eco-friendly products, and we are continuously working to reduce our carbon footprint. We believe that taking care of yourself should not come at the expense of the planet, and we are committed to doing our part in creating a better, more sustainable world for future generations.",
    ],
  },
  {
    id: 8,
    title: "Our Community",
    descriptions: [
      "At the heart of our spa is a vibrant and supportive community of clients and professionals who share a common passion for wellness, self-care, and healing. We believe that true wellness extends beyond physical treatments – it’s about nurturing relationships and creating a space where people feel connected and supported. Our community is a place where clients not only come to relax and recharge but also find inspiration, support, and like-minded individuals who value personal growth and well-being.",
      "We are proud to foster a sense of belonging among our clients. Through special events, wellness workshops, and social gatherings, we create opportunities for our guests to engage with one another, learn, and grow together. Whether it's a group meditation session, a skincare tutorial, or a wellness talk, our community initiatives are designed to inspire and uplift. We see our spa as more than just a business – it’s a place where people come together to build lasting connections, support one another, and create a sense of belonging that goes beyond just a spa visit.",
    ],
  },
];

export const termsOfUseContents: Content[] = [
  {
    id: 1,
    title: "Introduction",
    descriptions: [
      "Welcome! By using our website and services, you agree to comply with and be bound by the following Terms of Use. These terms govern your use of our website, services, and all content provided. Please read these terms carefully before accessing or using our site. If you do not agree to these terms, you may not use our website or services. We reserve the right to update or change these terms at any time, and it is your responsibility to review them periodically for any changes.",
      "By accessing or using our services, you accept and agree to be bound by the latest version of these Terms of Use. If you do not agree with these terms, please refrain from using our services or website.",
    ],
  },
  {
    id: 2,
    title: "Use of Services",
    descriptions: [
      "Our services, including spa treatments, products, and wellness programs, are provided for personal use only. You must be at least 18 years old or have the consent of a parent or guardian to book services. By using our services, you confirm that you meet these eligibility requirements. We reserve the right to refuse service to anyone who violates these terms or engages in inappropriate behavior, including but not limited to harassment, abuse, or any activity that disrupts the operation of the services.",
      "We provide services with the utmost care and attention to your well-being. However, we are not liable for any injuries, reactions, or adverse effects that may occur during or after spa treatments. You agree to provide accurate and complete information about your health conditions and allergies to ensure a safe experience.",
    ],
  },
  {
    id: 3,
    title: "Intellectual Property",
    descriptions: [
      "All content on the website, including text, images, videos, logos, and other materials, is the property of the service provider and is protected by intellectual property laws, including copyright, trademark, and other applicable laws. You may not use, reproduce, or distribute any of our content without prior written consent.",
      "Unauthorized use of any content from our website, including reproducing, modifying, or distributing it for commercial purposes, is strictly prohibited. All trademarks, service marks, and logos displayed on the site are the property of their respective owners.",
    ],
  },
  {
    id: 4,
    title: "Privacy Policy",
    descriptions: [
      "Your privacy is important to us. Please refer to our Privacy Policy, which outlines how we collect, use, and protect your personal information when you use our services or website. By agreeing to these Terms of Use, you also consent to our Privacy Policy, which is an integral part of this agreement.",
      "We are committed to safeguarding your privacy and protecting your personal information. We do not share your information with third parties without your consent, except as required by law.",
    ],
  },
  {
    id: 5,
    title: "Limitation of Liability",
    descriptions: [
      "In no event will we be liable for any damages arising out of your use or inability to use our website or services, including but not limited to damages for loss of profits, data, or other intangible losses. This limitation of liability applies to the fullest extent permitted by law.",
      "We do not guarantee that our website and services will meet your expectations or be free from errors, interruptions, or defects. You agree to use our services at your own risk and to take appropriate precautions to protect yourself and your data.",
    ],
  },
  {
    id: 6,
    title: "Governing Law",
    descriptions: [
      "These Terms of Use will be governed by and construed in accordance with the laws of the jurisdiction in which our services are provided. Any disputes arising from these terms or your use of the website and services will be subject to the exclusive jurisdiction of the courts in that jurisdiction.",
      "By using our services, you consent to the jurisdiction and venue of these courts and agree to resolve any disputes through binding arbitration if required by law.",
    ],
  },
];

export const privacyPolicyContents: Content[] = [
  {
    id: 1,
    title: "Introduction",
    descriptions: [
      "Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services. By using our website or services, you consent to the practices described in this policy. Please read it carefully to understand how your data will be handled.",
      "We are committed to protecting your privacy and ensuring that your personal information is used only in ways that are necessary for providing the best possible experience when using our services.",
    ],
  },
  {
    id: 2,
    title: "Information We Collect",
    descriptions: [
      "We collect personal information that you provide to us directly, such as when you make a booking, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, payment details, and other information necessary to provide our services. We may also collect information about your preferences, past services, and feedback to improve our offerings.",
      "In addition, we automatically collect certain data when you visit our website, such as IP addresses, browser type, and pages viewed. This information helps us improve our website and tailor our services to better suit your needs.",
    ],
  },
  {
    id: 3,
    title: "How We Use Your Information",
    descriptions: [
      "We use your personal information to provide and enhance the services you request, communicate with you about your bookings, send promotional material (if you opt-in), and process payments. Additionally, we may use your information to improve our website and services based on feedback and usage patterns.",
      "We may also use your information to personalize your experience, respond to customer service inquiries, and send you updates about changes to our services or policies. If you subscribe to our newsletter or marketing materials, we will use your information to send relevant updates and offers.",
    ],
  },
  {
    id: 4,
    title: "How We Protect Your Information",
    descriptions: [
      "We take the security of your personal information seriously and implement a variety of measures to protect it. This includes encryption, secure servers, and other industry-standard security protocols to prevent unauthorized access, disclosure, alteration, or destruction of your data.",
      "Despite these measures, please note that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.",
    ],
  },
  {
    id: 5,
    title: "Sharing Your Information",
    descriptions: [
      "We do not sell, rent, or trade your personal information to third parties. However, we may share your information with trusted service providers who assist in the operation of our website, booking system, payment processing, or customer service. These third parties are required to maintain the confidentiality of your information and use it only for the purposes for which it was provided.",
      "We may also disclose your information if required by law, such as in response to a subpoena or other legal process, or when we believe in good faith that such action is necessary to protect the rights, property, or safety of our clients, employees, or the public.",
    ],
  },
  {
    id: 6,
    title: "Cookies and Tracking Technologies",
    descriptions: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience. These technologies help us remember your preferences, improve site functionality, and analyze user activity. Cookies are small data files stored on your device that allow us to personalize your experience and track usage patterns.",
      "You can control the use of cookies through your browser settings. However, please note that disabling cookies may affect certain functionalities on our website and limit your ability to use some features.",
    ],
  },
  {
    id: 7,
    title: "Your Rights",
    descriptions: [
      "You have the right to access, correct, or delete your personal information at any time. If you wish to update or delete the information we hold about you, please contact us through our customer service channels. You also have the right to withdraw your consent to receive marketing communications at any time, and we will promptly honor your request.",
      "In some cases, you may have the right to object to or restrict certain processing of your personal data, as well as the right to request a copy of your data in a portable format. If you have any concerns about how your personal data is being handled, you can contact us for further assistance.",
    ],
  },
  {
    id: 8,
    title: "Changes to This Privacy Policy",
    descriptions: [
      "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we will update the 'Last Revised' date at the top of the page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
      "If significant changes are made, we may notify you by email or through a notice on our website. Continued use of our services after any changes to this Privacy Policy constitutes acceptance of the updated terms.",
    ],
  },
];

export const cookiePolicyContents: Content[] = [
  {
    id: 1,
    title: "Introduction",
    descriptions: [
      "This Cookie Policy explains how we use cookies and similar tracking technologies on our website. By using our website, you consent to our use of cookies in accordance with this policy. Please read it carefully to understand the types of cookies we use, the purposes for which we use them, and how you can manage your cookie preferences.",
      "Cookies are small text files that are stored on your device to help us improve your user experience. This policy outlines the types of cookies we use and the control you have over them.",
    ],
  },
  {
    id: 2,
    title: "What Are Cookies?",
    descriptions: [
      "Cookies are small pieces of data stored on your device (computer, tablet, smartphone, etc.) when you visit a website. These cookies allow the website to remember your preferences, improve functionality, and track user behavior to enhance your browsing experience. Cookies can either be session cookies, which expire once you close your browser, or persistent cookies, which stay on your device until they expire or you delete them.",
      "We also use similar technologies like web beacons and pixels, which function in a similar way to cookies, to track user behavior and improve our services.",
    ],
  },
  {
    id: 3,
    title: "Types of Cookies We Use",
    descriptions: [
      "We use several categories of cookies on our website. Essential cookies are necessary for the basic functionality of our website. They allow you to navigate the site and access secure areas, such as your account or booking page. Performance cookies collect anonymous data about how users interact with our website. This helps us improve our website by analyzing user behavior, such as pages visited or error messages encountered. Functionality cookies enable our website to remember your preferences, such as language or region, and provide enhanced features, making your experience more personalized. Advertising or targeting cookies are used to deliver relevant ads based on your interests. They track your browsing behavior and can be used to limit the number of times you see an ad.",
    ],
  },
  {
    id: 4,
    title: "How We Use Cookies",
    descriptions: [
      "We use cookies for several purposes. They help enhance your user experience by remembering your preferences and settings, analyze how our website is used and improve its performance, provide targeted advertising that aligns with your interests and browsing history, and ensure the security and functionality of our website and services.",
    ],
  },
  {
    id: 5,
    title: "Managing Your Cookie Preferences",
    descriptions: [
      "You have the ability to manage your cookie preferences at any time. Most browsers allow you to block or delete cookies through your browser settings. However, please note that if you block or delete cookies, some features of our website may not function as intended. To manage cookies in your browser, you can usually find the options under the 'Privacy' or 'Security' settings. You can also configure your browser to alert you when cookies are being used or to automatically reject all cookies.",
      "If you would like to learn more about how to manage cookies in popular browsers, you can visit their support pages for detailed instructions.",
    ],
  },
  {
    id: 6,
    title: "Third-Party Cookies",
    descriptions: [
      "We may allow third-party companies to place cookies on our website for various purposes, such as analytics, advertising, and social media integration. These third-party cookies are governed by the privacy policies of the respective companies. For example, we may use services like Google Analytics to analyze how our website is used. These services may place cookies on your device and track your online behavior across multiple websites. We encourage you to review the privacy policies of these third-party providers for more information about their cookie usage.",
    ],
  },
  {
    id: 7,
    title: "Changes to This Cookie Policy",
    descriptions: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, regulations, or our practices. Any changes to this policy will be posted on this page with an updated 'Last Revised' date. We encourage you to review this policy periodically to stay informed about how we use cookies and how you can manage your preferences.",
      "If significant changes are made, we may notify you by email or through a notice on our website.",
    ],
  },
  {
    id: 8,
    title: "Contact Us",
    descriptions: [
      "If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us using the information provided on our website. We will be happy to assist you with any inquiries you may have.",
    ],
  },
];

export const nudityConsentPolicyContents: Content[] = [
  {
    id: 1,
    title: "Nudity Consent",
    descriptions: [
      "At our establishment, we respect the importance of personal choice and comfort when it comes to intimate experiences. We understand that some of our services may involve moments where nudity is required or preferred to provide the most effective treatments. We want to make it clear that nudity is allowed within certain areas of our environment, as per the nature of the service being provided. Our specialists are trained to handle all situations professionally and with the utmost respect for your privacy and dignity.",
      "We provide a safe and comfortable space where clients can choose to be nude for certain treatments, which may include showcasing specific areas of the body, such as breasts, hips, or genital areas, as appropriate. If you feel comfortable with this, you may also engage in more intimate sessions with our specialists, ensuring that all actions are consensual, respectful, and appropriate to your level of comfort. Our priority is to create an atmosphere of trust and consent, where boundaries are respected, and clients feel empowered to make informed decisions about their experiences.",
    ],
  },
  {
    id: 2,
    title: "Professionalism and Boundaries",
    descriptions: [
      "While nudity is permitted within the scope of specific treatments, we emphasize that our environment upholds professionalism at all times. Our specialists are trained to maintain boundaries and to conduct all services with the highest level of respect for your comfort and privacy. Consent is the foundation of our interactions, and we encourage clear communication regarding personal preferences, boundaries, and any concerns you may have during your experience.",
      "We are committed to maintaining a safe, respectful, and professional atmosphere at all times. If you ever feel uncomfortable or wish to make adjustments to your experience, our specialists will be more than willing to accommodate your needs and ensure that your experience remains positive and respectful.",
    ],
  },
  {
    id: 3,
    title: "Your Comfort and Consent",
    descriptions: [
      "Your comfort and well-being are our top priorities. You have full control over your experience and may decide the level of engagement you wish to have. If you feel uncomfortable at any point, you are encouraged to express your preferences, and we will do everything possible to ensure that your boundaries are respected. No action will be taken without your explicit consent, and your decisions will always be honored.",
      "We also encourage open communication with our specialists before, during, and after your treatment. If you have any questions or need further clarification about the services offered, please do not hesitate to ask. Our goal is to create an environment where you feel empowered, comfortable, and respected in every aspect of your experience.",
    ],
  },
  {
    id: 4,
    title: "Respect for All Individuals",
    descriptions: [
      "We believe in fostering a space where respect, dignity, and consent are upheld at all times. We are committed to ensuring that every individual who enters our establishment is treated with the utmost respect, regardless of their personal choices. We maintain a zero-tolerance policy for any form of harassment or inappropriate behavior, ensuring that everyone feels safe and respected throughout their visit.",
      "We encourage you to communicate any preferences, concerns, or questions you may have at any time. Your experience with us should always be one of empowerment, trust, and mutual respect, and we will do our best to support you in every step of the way.",
    ],
  },
  {
    id: 5,
    title: "Intimate Actions with the Founder",
    descriptions: [
      "If you choose to engage in an intimate session with our founder, we want to ensure that you fully understand the nature of the experience. Our founder, Sabine Jovana, is committed to maintaining a professional and respectful atmosphere at all times. Intimate actions with the founder are strictly based on mutual consent and are intended to provide clients with a unique, personal experience, emphasizing comfort and trust.",
      "As with all other services, you are free to decide your level of engagement. If you choose to participate, it is important that you communicate your boundaries clearly and ask any questions you may have to ensure the experience aligns with your preferences. The founder will respect your decisions and will ensure the entire session is conducted in a safe, dignified manner.",
    ],
  },
  {
    id: 6,
    title: "Safe and Respectful Intimate Interactions",
    descriptions: [
      "Any intimate interaction with the founder is based on the principles of respect, consent, and mutual understanding. Our founder is dedicated to fostering an environment where all actions are aligned with your comfort level and personal boundaries. Whether you choose to have one-on-one sessions or engage in more personal experiences, the founder ensures that all interactions are consensual, safe, and free from any form of pressure.",
      "It’s important to note that these experiences are entirely voluntary, and you are free to opt-out at any time. If you wish to discontinue or adjust any part of your experience, we encourage you to communicate openly, and your decision will be respected without hesitation. We are committed to providing you with a space where your choices are honored, and your comfort and privacy remain our top priority.",
    ],
  },
];

export const faqItems: FAQItem[] = [
  {
    title: "What types of treatments do you offer?",
    content:
      "We offer a variety of treatments including facials, massages, body scrubs, manicures, pedicures, and more. Our services are designed to promote relaxation, rejuvenation, and wellness.",
    isDefaultChecked: true,
  },
  {
    title: "How do I book an appointment?",
    content:
      "Appointments can be booked through our website, by calling our spa directly, or by visiting us in person. You can also schedule through our mobile app if you prefer.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "For most treatments, we provide everything you need, including robes, towels, and slippers. However, feel free to bring any personal items that may enhance your comfort, such as your favorite lotion or skincare products.",
  },
  {
    title: "Do I need to arrive early for my appointment?",
    content:
      "We recommend arriving 15-20 minutes before your scheduled appointment to allow time for check-in, filling out any necessary forms, and settling into a relaxing environment.",
  },
  {
    title: "Are your treatments suitable for pregnant women?",
    content:
      "We offer prenatal massage and other treatments tailored to expectant mothers. However, we recommend consulting with your healthcare provider before booking any treatments.",
  },
  {
    title: "What is your cancellation policy?",
    content:
      "We require a 24-hour notice for cancellations or rescheduling. A cancellation fee may apply for appointments missed without prior notice.",
  },
  {
    title: "Do you offer gift cards?",
    content:
      "Yes, we offer gift cards for our treatments, which can be purchased in-store or online. They make the perfect gift for a loved one!",
  },
  {
    title: "Can I request a specific therapist?",
    content:
      "Yes, you can request a specific therapist when booking your appointment. We’ll do our best to accommodate your request based on availability.",
  },
  {
    title: "What is the best time to visit your spa?",
    content:
      "Our spa is open year-round, and each season offers a unique experience. However, weekdays tend to be less crowded, and weekends are ideal for those looking for a lively atmosphere.",
  },
  {
    title: "Are your products cruelty-free?",
    content:
      "Yes, we are committed to using cruelty-free products in all of our treatments. We prioritize eco-friendly and sustainable brands that align with our values.",
  },
  {
    title: "Can I bring my children to the spa?",
    content:
      "We recommend that our spa environment is best suited for adults. However, we do offer special family packages for parents and children. Please contact us to inquire about availability.",
  },
  {
    title: "Do you offer packages for special occasions?",
    content:
      "Yes, we offer special packages for weddings, birthdays, anniversaries, and other celebrations. These packages can be customized to include various treatments and services.",
  },
  {
    title: "Is there a membership program?",
    content:
      "Yes, we offer a membership program that provides exclusive benefits such as discounted treatments, priority booking, and special offers.",
  },
  {
    title: "Are your services suitable for men?",
    content:
      "Absolutely! We offer treatments designed specifically for men, including massages, facials, and grooming services tailored to your needs.",
  },
  {
    title: "What is the difference between a Swedish and deep tissue massage?",
    content:
      "A Swedish massage uses long, flowing strokes for relaxation, while a deep tissue massage focuses on releasing muscle tension and addressing specific pain points using more intense pressure.",
  },
  {
    title: "Do you offer spa parties?",
    content:
      "Yes, we offer spa parties for groups of friends or colleagues. Whether you're celebrating a special occasion or just want to relax together, we’ll create a memorable experience tailored to your group.",
  },
  {
    title: "Do you accept walk-ins?",
    content:
      "While we recommend booking an appointment in advance, we do accept walk-ins based on availability. We suggest calling ahead to check for open slots.",
  },
  {
    title: "Do you have parking available?",
    content:
      "Yes, we provide convenient parking for our guests. There are both free and paid parking options available near the spa.",
  },
  {
    title: "What should I expect during a facial?",
    content:
      "During a facial, your skin will be cleansed, exfoliated, and treated with nourishing products to address your specific skin concerns. You’ll also enjoy a relaxing massage and a rejuvenating mask.",
  },
  {
    title: "Can I combine different treatments during my visit?",
    content:
      "Yes, you can combine multiple treatments during your visit. We offer customizable packages to allow you to enjoy a variety of services in one visit, such as a massage followed by a facial or body scrub.",
  },
  {
    title: "What happens if I arrive late for my appointment?",
    content:
      "If you arrive late, we will do our best to accommodate you, but please note that your treatment may need to be shortened to ensure that we stay on schedule for other guests.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "woman wearing white towel",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man wearing mud mask",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "grayscale photo of woman hugging baby",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506003094589-53954a26283f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "sliced lemon on bathtub",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1623120594168-a6d35474043b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man in white bathrobe holding clear drinking glass with yellow liquid",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a woman getting a back massage at a spa",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "person touching black plastic bottle",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a woman getting her nails done at a nail salon",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1596971041407-9897149951bb?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a woman laying in a bathtub with flowers all around her",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1640058885225-3efdce67628c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a woman with dreadlocks in a pool of water",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1598901978648-4d1c0d66518a?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a woman getting a back massage at a spa",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "This is the point of relaxation, the point where you feel great peace.",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1620051844584-15ac31d5fccd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ostheopathy with two hands formed in a triangle on the back of a woman",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1548695240-f6791ec45757?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a woman with dreadlocks in a pool of water",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Photosession with Lea Kainazarova",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1649751295468-953038600bef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a woman getting a back massage at a spa",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    authorName: "Sophia Reynolds",
    authorDesignation: "Yoga Instructor",
    authorImage:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "An absolutely rejuvenating experience! The staff was warm and welcoming.",
    rating: 5,
  },
  {
    id: 2,
    authorName: "James Carter",
    authorDesignation: "Marketing Executive",
    authorImage:
      "https://images.unsplash.com/photo-1596535769582-ae8ee239e96e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "The massage therapy was beyond relaxing. Highly recommend this spa!",
    rating: 4.5,
  },
  {
    id: 3,
    authorName: "Emily Stone",
    authorDesignation: "Freelance Designer",
    authorImage:
      "https://images.unsplash.com/photo-1605642969091-694bacbbf7d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Great ambiance and professional service. Will visit again!",
    rating: 4,
  },
];
