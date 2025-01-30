import { Content, NavLink, Service, SocialLink } from "@/interfaces";
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
