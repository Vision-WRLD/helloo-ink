export interface Artist {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  inspirations: string;
  image: string;
  styles: string[];
}

export interface PortfolioItem {
  id: number;
  artistSlug: string;
  artistName: string;
  style: string;
  image: string;
  title: string;
  aspectRatio: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  artist: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface AftercareStep {
  day: string;
  description: string;
  phase: string;
}

export const artists: Artist[] = [
  {
    slug: "kaizen",
    name: "Kaizen",
    specialty: "Blackwork & Geometric",
    bio: "Kaizen has been pushing the boundaries of blackwork and geometric tattooing for over 12 years. With a background in architectural design, his precision and attention to detail are unmatched. Every piece he creates is a calculated fusion of sacred geometry and bold black ink, resulting in tattoos that feel both ancient and futuristic.",
    inspirations: "Sacred geometry, brutalist architecture, Japanese ink painting, sacred symbols",
    image: "/images/artist-kaizen.jpg",
    styles: ["Blackwork", "Geometric", "Dotwork", "Mandala"],
  },
  {
    slug: "nova",
    name: "Nova",
    specialty: "Realism & Portraits",
    bio: "Nova is a photorealism specialist whose portraits and nature pieces look like they could breathe. With 8 years of dedicated practice in realism, she has developed a unique ability to capture life-like detail in skin. Her work ranges from hyper-realistic portraits to sweeping landscapes and wildlife pieces that tell a story.",
    inspirations: "Renaissance art, photography, nature documentaries, human emotion",
    image: "/images/artist-nova.jpg",
    styles: ["Realism", "Portraits", "Nature", "Black & Grey"],
  },
  {
    slug: "rix",
    name: "Rix",
    specialty: "Neo-Traditional & Color",
    bio: "Rix brings a vibrant, illustrative energy to every piece. Specializing in neo-traditional and new school styles, his work is characterized by bold lines, saturated colors, and dynamic compositions. With 10 years in the industry, he's known for his custom sleeves and large-scale pieces that push creative boundaries.",
    inspirations: "Comic books, street art, Japanese woodblock prints, music album art",
    image: "/images/artist-rix.jpg",
    styles: ["Neo-Traditional", "New School", "Traditional", "Color"],
  },
  {
    slug: "lyric",
    name: "Lyric",
    specialty: "Fineline & Watercolor",
    bio: "Lyric is the studio's fineline and watercolor specialist, creating delicate, ethereal pieces that seem to float on the skin. With 6 years of experience, she has mastered the art of minimalist elegance, crafting tattoos that are both subtle and deeply meaningful. Her watercolor pieces are renowned for their dreamy, flowing quality.",
    inspirations: "Botanical illustration, poetry, watercolor painting, minimalist design",
    image: "/images/artist-lyric.jpg",
    styles: ["Fineline", "Watercolor", "Botanical", "Minimalist"],
  },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, artistSlug: "kaizen", artistName: "Kaizen", style: "Blackwork", image: "/images/portfolio/blackwork-1.jpg", title: "Sacred Geometry Sleeve", aspectRatio: "3/4" },
  { id: 2, artistSlug: "kaizen", artistName: "Kaizen", style: "Geometric", image: "/images/portfolio/geometric-1.jpg", title: "Mandala Back Piece", aspectRatio: "4/5" },
  { id: 3, artistSlug: "kaizen", artistName: "Kaizen", style: "Blackwork", image: "/images/portfolio/blackwork-1.jpg", title: "Dotwork Mandala", aspectRatio: "1/1" },
  { id: 4, artistSlug: "kaizen", artistName: "Kaizen", style: "Dotwork", image: "/images/portfolio/geometric-1.jpg", title: "Geometric Animal", aspectRatio: "3/4" },
  { id: 5, artistSlug: "nova", artistName: "Nova", style: "Realism", image: "/images/portfolio/realism-1.jpg", title: "Portrait Study", aspectRatio: "4/5" },
  { id: 6, artistSlug: "nova", artistName: "Nova", style: "Realism", image: "/images/portfolio/realism-1.jpg", title: "Wolf Portrait", aspectRatio: "1/1" },
  { id: 7, artistSlug: "nova", artistName: "Nova", style: "Black & Grey", image: "/images/portfolio/realism-1.jpg", title: "Rose Realism", aspectRatio: "3/4" },
  { id: 8, artistSlug: "nova", artistName: "Nova", style: "Nature", image: "/images/portfolio/geometric-1.jpg", title: "Mountain Landscape", aspectRatio: "16/9" },
  { id: 9, artistSlug: "rix", artistName: "Rix", style: "Neo-Traditional", image: "/images/portfolio/neotrad-1.jpg", title: "Eagle Neo-Traditional", aspectRatio: "3/4" },
  { id: 10, artistSlug: "rix", artistName: "Rix", style: "Traditional", image: "/images/portfolio/neotrad-1.jpg", title: "Traditional Rose", aspectRatio: "1/1" },
  { id: 11, artistSlug: "rix", artistName: "Rix", style: "Color", image: "/images/portfolio/watercolor-1.jpg", title: "Vibrant Sleeve", aspectRatio: "4/5" },
  { id: 12, artistSlug: "rix", artistName: "Rix", style: "New School", image: "/images/portfolio/neotrad-1.jpg", title: "New School Character", aspectRatio: "3/4" },
  { id: 13, artistSlug: "lyric", artistName: "Lyric", style: "Fineline", image: "/images/portfolio/fineline-1.jpg", title: "Fineline Botanical", aspectRatio: "3/4" },
  { id: 14, artistSlug: "lyric", artistName: "Lyric", style: "Watercolor", image: "/images/portfolio/watercolor-1.jpg", title: "Watercolor Flowers", aspectRatio: "4/5" },
  { id: 15, artistSlug: "lyric", artistName: "Lyric", style: "Botanical", image: "/images/portfolio/fineline-1.jpg", title: "Botanical Arm", aspectRatio: "1/1" },
  { id: 16, artistSlug: "lyric", artistName: "Lyric", style: "Minimalist", image: "/images/portfolio/fineline-1.jpg", title: "Minimalist Line Art", aspectRatio: "3/4" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus T.",
    text: "Vision Wrld completely changed my perception of tattoo studios. The space is immaculate, the artists are true professionals, and Kaizen turned my rough idea into a geometric masterpiece. Couldn't be happier.",
    rating: 5,
    artist: "Kaizen",
  },
  {
    id: 2,
    name: "Sarah L.",
    text: "Nova did a portrait of my grandmother and it literally brings tears to my eyes every time I look at it. The detail is insane. The whole process from consultation to the finished piece was seamless.",
    rating: 5,
    artist: "Nova",
  },
  {
    id: 3,
    name: "James K.",
    text: "This studio is next level. The vibe, the art on the walls, the music—everything. Rix did a full neo-trad sleeve for me and every session was an experience. Highly recommend.",
    rating: 5,
    artist: "Rix",
  },
  {
    id: 4,
    name: "Emily R.",
    text: "I was nervous for my first tattoo and Lyric made me feel completely at ease. Her fineline work is incredibly delicate and beautiful. The studio is spotless and the aftercare instructions were super detailed.",
    rating: 5,
    artist: "Lyric",
  },
  {
    id: 5,
    name: "David P.",
    text: "The consultation process was thorough and I never felt rushed. Kaizen took the time to understand my vision and the result exceeded my expectations. Best tattoo experience I've ever had.",
    rating: 5,
    artist: "Kaizen",
  },
  {
    id: 6,
    name: "Aisha M.",
    text: "Vision Wrld is the real deal. The hygiene standards are top-notch, the artists are incredibly talented, and the whole atmosphere is just cool. Nova's realism work is on another level.",
    rating: 5,
    artist: "Nova",
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do you take walk-ins?",
    answer: "We primarily work by appointment to ensure each client gets the dedicated time and attention they deserve. However, we do occasionally have same-day availability. Follow our Instagram (@visionwrld) for walk-in announcements, or give us a call to check for last-minute openings.",
    category: "Appointments",
  },
  {
    id: 2,
    question: "How do I prepare for my appointment?",
    answer: "Get a good night's sleep, stay hydrated, and eat a substantial meal before your session. Avoid alcohol for at least 24 hours prior, and don't apply lotion or sunscreen to the area being tattooed. Wear comfortable, loose-fitting clothing that gives easy access to the tattoo placement. If you're getting a long session, bring snacks and water.",
    category: "Appointments",
  },
  {
    id: 3,
    question: "Can I bring a friend to my appointment?",
    answer: "You're welcome to bring one friend or support person to your appointment. However, due to space and hygiene considerations, we ask that you limit it to one guest. Children are not permitted in the studio during tattoo sessions.",
    category: "Appointments",
  },
  {
    id: 4,
    question: "Do you do cover-ups?",
    answer: "Yes! We love a good cover-up challenge. Cover-ups require a consultation so the artist can assess the existing tattoo, discuss options, and develop a design that effectively covers the old work. Some cover-ups may require laser lightening sessions first—your artist will advise you during the consultation.",
    category: "Services",
  },
  {
    id: 5,
    question: "What is the minimum charge?",
    answer: "Our minimum charge is $150. This covers the cost of setup, sterilization, and the artist's time for smaller pieces. Prices vary based on the artist, size, complexity, and placement of the tattoo. We'll provide a quote during your consultation.",
    category: "Pricing",
  },
  {
    id: 6,
    question: "How much will my tattoo cost?",
    answer: "Pricing depends on several factors: the artist, the size, the complexity of the design, and the placement on the body. Our hourly rates range from $160-$220 depending on the artist. During your consultation, your artist will provide an estimate. Large pieces like sleeves are typically quoted as a project rate.",
    category: "Pricing",
  },
  {
    id: 7,
    question: "What is your deposit policy?",
    answer: "A $50 non-refundable deposit is required to book your appointment. This deposit is applied to the cost of your final session. Deposits can be transferred to a new date if you reschedule at least 48 hours in advance. No-shows or last-minute cancellations forfeit the deposit.",
    category: "Pricing",
  },
  {
    id: 8,
    question: "What is your cancellation policy?",
    answer: "We require at least 48 hours notice for cancellations or reschedules. Cancellations made less than 48 hours before the appointment will forfeit the deposit. Repeat late cancellations may require a larger deposit for future bookings.",
    category: "Pricing",
  },
  {
    id: 9,
    question: "Is there an age requirement?",
    answer: "Yes, you must be 18 years or older to get tattooed at Vision Wrld. No exceptions. We require valid government-issued photo ID at every appointment. Parental consent does not override this policy.",
    category: "Policy",
  },
  {
    id: 10,
    question: "How do I book a consultation?",
    answer: "You can book a consultation through our website's booking form, by calling the studio, or by sending us a DM on Instagram. We'll match you with the artist best suited for your vision and schedule a time to discuss your ideas in detail.",
    category: "Appointments",
  },
  {
    id: 11,
    question: "Can I see the design before my appointment?",
    answer: "Your artist will prepare your custom design based on your consultation. For larger pieces, we typically send a preview 1-2 days before your session. Minor adjustments can be made on the day of your appointment. We want you to be 100% confident before we start tattooing.",
    category: "Services",
  },
  {
    id: 12,
    question: "Do you use sterile equipment?",
    answer: "Absolutely. We follow the highest standards of hygiene and safety. All needles are single-use and disposed of in medical sharps containers after each client. All surfaces are disinfected between sessions, and our autoclave is regularly tested and certified. Your safety is our top priority.",
    category: "Policy",
  },
];

export const allStyles = [
  "Blackwork",
  "Realism",
  "Traditional",
  "Fineline",
  "Watercolor",
  "Neo-Traditional",
  "Geometric",
  "Dotwork",
  "New School",
  "Black & Grey",
  "Nature",
  "Color",
  "Botanical",
  "Minimalist",
  "Portraits",
  "Mandala",
];

export const aftercareStandard = [
  { step: 1, title: "Remove Bandage", description: "Remove the bandage after 2-4 hours. Never re-bandage the tattoo.", time: "2-4 hours after session" },
  { step: 2, title: "Wash Gently", description: "Wash your hands first, then gently wash the tattoo with unscented antibacterial soap and warm water. Use your fingertips only—no washcloths or sponges.", time: "First wash" },
  { step: 3, title: "Pat Dry", description: "Gently pat the tattoo dry with a clean paper towel. Do not rub.", time: "After each wash" },
  { step: 4, title: "Apply Thin Layer of Ointment", description: "Apply a very thin layer of fragrance-free ointment (Aquaphor or equivalent). Less is more—your skin should look slightly shiny, not greasy.", time: "Days 1-3" },
  { step: 5, title: "Switch to Lotion", description: "Switch to a fragrance-free, dye-free lotion. Apply a thin layer 2-3 times daily.", time: "Days 4-14" },
  { step: 6, title: "Keep It Clean", description: "Wash the tattoo 2-3 times daily with unscented soap. Always pat dry.", time: "Days 1-14" },
  { step: 7, title: "Let It Breathe", description: "Wear loose, breathable clothing over the tattoo. Avoid tight or abrasive fabrics.", time: "Days 1-14" },
];

export const aftercareSaniderm = [
  { step: 1, title: "Leave Saniderm On", description: "Keep the Saniderm/second skin on for 3-5 days as directed by your artist. It's normal for fluid to collect under the film—this is part of the healing process.", time: "Days 1-3" },
  { step: 2, title: "Remove Saniderm", description: "Remove the Saniderm in the shower under warm running water. Peel slowly, parallel to the skin, like peeling a Command Strip.", time: "Day 3-5" },
  { step: 3, title: "Wash Gently", description: "Wash the tattoo with unscented antibacterial soap and warm water. Use your fingertips only.", time: "After removal" },
  { step: 4, title: "Pat Dry", description: "Gently pat dry with a clean paper towel.", time: "After each wash" },
  { step: 5, title: "Apply Lotion", description: "Apply a thin layer of fragrance-free lotion 2-3 times daily.", time: "Days 5-14" },
  { step: 6, title: "Keep It Clean", description: "Continue washing 2-3 times daily with unscented soap.", time: "Days 5-14" },
];

export const healingTimeline: AftercareStep[] = [
  { day: "Day 1", description: "Fresh tattoo—may be slightly swollen, red, and tender. This is normal.", phase: "Fresh" },
  { day: "Day 2-3", description: "Redness begins to fade. The tattoo may feel warm and slightly raised. Continue washing and moisturizing.", phase: "Healing" },
  { day: "Day 4-5", description: "The tattoo will start to feel tight and dry. Light flaking may begin. Do NOT pick or scratch.", phase: "Peeling" },
  { day: "Day 6-8", description: "Flaking and peeling is in full swing. The tattoo may look dull or cloudy—this is normal. Let flakes fall off naturally.", phase: "Peeling" },
  { day: "Day 9-11", description: "Most peeling should be done. The skin may still be dry and slightly shiny. Continue moisturizing.", phase: "Settling" },
  { day: "Day 12-14", description: "Surface healing is nearly complete. The tattoo may still appear slightly cloudy beneath the skin. Full healing continues for 4-6 weeks.", phase: "Nearly Healed" },
];

export const aftercareFAQs = [
  { question: "Is scabbing normal?", answer: "Some light scabbing is normal, especially on larger or more saturated pieces. Do NOT pick at scabs—let them fall off naturally. Picking can pull ink out and cause scarring. If scabs are thick or excessive, contact your artist." },
  { question: "When can I go back to the gym?", answer: "We recommend waiting at least 3-5 days before resuming light exercise, and 1-2 weeks before intense workouts. Sweating excessively can irritate a fresh tattoo, and stretching the skin can disrupt healing. Listen to your body and the tattoo." },
  { question: "Can I go in the sun?", answer: "Keep your fresh tattoo completely out of direct sunlight for at least 3-4 weeks. UV exposure is the #1 enemy of fresh ink. After it's fully healed, always apply SPF 50+ sunscreen to protect your tattoo's vibrancy." },
  { question: "Can I swim?", answer: "No swimming (pools, oceans, lakes, hot tubs) for at least 3-4 weeks. Submerging a healing tattoo in water dramatically increases the risk of infection and ink loss. Showers are fine—just don't soak it." },
  { question: "My tattoo looks dull/cloudy—is something wrong?", answer: "Totally normal! During the peeling phase (days 5-10), a layer of dead skin sits over the tattoo, making it look milky or faded. Once the skin fully regenerates (2-4 weeks), the colors will brighten back up." },
  { question: "What should I avoid during healing?", answer: "Avoid: picking/scratching, tight clothing, direct sunlight, swimming/soaking, saunas/hot yoga, excessive sweating, pets sleeping on the tattoo, and applying anything other than recommended aftercare products." },
];

export const placementOptions = [
  "Inner Arm",
  "Outer Arm",
  "Full Sleeve",
  "Half Sleeve",
  "Forearm (Inner)",
  "Forearm (Outer)",
  "Bicep",
  "Shoulder",
  "Chest (Center)",
  "Chest (Side/Pec)",
  "Back (Upper)",
  "Back (Lower)",
  "Full Back",
  "Ribcage",
  "Stomach",
  "Hip",
  "Thigh (Front)",
  "Thigh (Outer)",
  "Thigh (Back)",
  "Full Leg Sleeve",
  "Calf",
  "Shin",
  "Ankle",
  "Foot",
  "Neck",
  "Hand/Knuckles",
  "Finger",
  "Behind Ear",
  "Head/Scalp",
  "Other",
];

export const sizeOptions = [
  "Small (2-4 inches)",
  "Medium (4-8 inches)",
  "Large (8-12 inches)",
  "Half Sleeve",
  "Full Sleeve",
  "Back Piece",
  "Full Leg",
  "Cover-up (existing tattoo)",
];

export const budgetOptions = [
  "Under $200",
  "$200 - $500",
  "$500 - $1,000",
  "$1,000 - $2,000",
  "$2,000 - $3,000",
  "$3,000+",
  "Flexible / Depends on Design",
];
