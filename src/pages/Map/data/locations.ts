import { Hospital, Siren, Heart, Shield, Bus, GraduationCap, Users, ShoppingBasket, Fuel } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Category =
  | 'hospital'
  | 'emergency'
  | 'nursing_home'
  | 'shelter'
  | 'evacuation'
  | 'school'
  | 'community'
  | 'food'
  | 'gas'

export interface Location {
  id: string
  name: string
  category: Category
  address: string
  lat: number
  lng: number
  phone?: string
  capacity?: number
  notes?: string
}

export const CATEGORY_LABELS: Record<Category, string> = {
  hospital:    'בתי חולים ומרפאות',
  emergency:   'ארגוני חירום',
  nursing_home:'בתי אבות',
  shelter:     'מקלטים',
  evacuation:  'מתקני פינוי',
  school:      'בתי ספר',
  community:   'שירותי קהילה',
  food:        'רשתות מזון',
  gas:         'תחנות דלק',
}

export const CATEGORY_COLORS: Record<Category, string> = {
  hospital:    '#EF4444', // red
  emergency:   '#F97316', // orange
  nursing_home:'#EC4899', // pink
  shelter:     '#3B82F6', // blue
  evacuation:  '#8B5CF6', // purple
  school:      '#EAB308', // yellow
  community:   '#14B8A6', // teal
  food:        '#22C55E', // green
  gas:         '#6B7280', // gray
}

export const CATEGORY_ICONS: Record<Category, LucideIcon> = {
  hospital:     Hospital,
  emergency:    Siren,
  nursing_home: Heart,
  shelter:      Shield,
  evacuation:   Bus,
  school:       GraduationCap,
  community:    Users,
  food:         ShoppingBasket,
  gas:          Fuel,
}

export const LOCATIONS: Location[] = [
  // ─── Nursing homes ────────────────────────────────────────────────────────
  {
    id: 'nursing-1',
    name: 'מרגוע',
    category: 'nursing_home',
    address: 'כיכר מאירהוף 1, חיפה',
    lat: 32.8245604,
    lng: 34.9829009,
    phone: '077-6670285',
    capacity: 370,
  },
  {
    id: 'nursing-2',
    name: 'מקבץ דיור בית גיל',
    category: 'nursing_home',
    address: 'רבי יהודה הנשיא 6, חיפה',
    lat: 32.8126134,
    lng: 34.9592429,
    phone: '052-6985369',
    capacity: 85,
  },

  // ─── Hospitals ────────────────────────────────────────────────────────────
  {
    id: 'hospital-1',
    name: 'בית חולים רמב"ם',
    category: 'hospital',
    address: 'העלייה השנייה 8, חיפה',
    lat: 32.8191218,
    lng: 34.9875,
    phone: '1-700-505150',
  },
  {
    id: 'hospital-2',
    name: 'מרכז רפואי לין',
    category: 'hospital',
    address: 'שדרות רוטשילד 37, חיפה',
    lat: 32.8183,
    lng: 35.0018, // corrected — Nominatim returned wrong city
    phone: '04-8568568',
  },
  {
    id: 'hospital-3',
    name: 'מרפאת אחודה נווה דוד',
    category: 'hospital',
    address: 'המלך דוד 10, חיפה',
    lat: 32.8106452,
    lng: 34.9588264,
    phone: '04-8108300',
  },
  {
    id: 'hospital-4',
    name: 'מרפאה אחודה קריית אליהו',
    category: 'hospital',
    address: 'אל אדריסי 10, קריית אליהו, חיפה',
    lat: 32.8260788,
    lng: 34.9867848,
    phone: '04-8141301',
  },

  // ─── Emergency organizations ───────────────────────────────────────────────
  {
    id: 'emergency-1',
    name: 'משטרה — תחנת זבולון',
    category: 'emergency',
    address: 'שדרות ההסתדרות 271, חיפה',
    lat: 32.805007,
    lng: 35.0552386,
    phone: '04-8464444',
  },
  {
    id: 'emergency-2',
    name: 'משטרה — תחנת חיפה',
    category: 'emergency',
    address: 'נתן אלבז 1, חיפה',
    lat: 32.8046415,
    lng: 35.0104678,
    phone: '04-8648444',
  },
  {
    id: 'emergency-3',
    name: 'כב"ה מחוז חוף',
    category: 'emergency',
    address: 'חלץ 9, חיפה',
    lat: 32.7993646,
    lng: 35.0207771,
    phone: '04-8601201',
  },
  {
    id: 'emergency-4',
    name: 'מד"א כרמל',
    category: 'emergency',
    address: 'יצחק שדה 10, חיפה',
    lat: 32.8220374,
    lng: 34.9871966,
    phone: '04-8512233',
  },

  // ─── Evacuation / stay facilities ──────────────────────────────────────────
  {
    id: 'evac-1',
    name: 'מתנ"ס ליאו-בק',
    category: 'evacuation',
    address: 'דרך צרפת 90, חיפה',
    lat: 32.8064,
    lng: 34.9980,
  },
  {
    id: 'evac-2',
    name: 'ביה"ס חטיבת לאו-באק',
    category: 'evacuation',
    address: 'טשרניחובסקי 71, חיפה',
    lat: 32.8166752,
    lng: 34.9791125,
    capacity: 120,
  },
  {
    id: 'evac-3',
    name: 'ביה"ס רמות',
    category: 'evacuation',
    address: 'דרך צרפת 85, חיפה',
    lat: 32.8072,
    lng: 34.9970,
    capacity: 80,
  },
  {
    id: 'evac-4',
    name: 'מתנ"ס נווה הוד',
    category: 'evacuation',
    address: 'יהושפט 6, חיפה',
    lat: 32.8072648,
    lng: 34.9612261,
  },
  {
    id: 'evac-5',
    name: 'בית פאני קפלן',
    category: 'evacuation',
    address: 'הרותם 1, חיפה',
    lat: 32.8197999,
    lng: 34.9566347,
  },
  {
    id: 'evac-6',
    name: "ביה\"ס אבן גבירול",
    category: 'evacuation',
    address: 'ד"ר מקס בודנהיימר 7, חיפה',
    lat: 32.8182,
    lng: 34.9828,
    capacity: 180,
  },
  {
    id: 'evac-7',
    name: "ביה\"ס יאנוש קורצ'אק",
    category: 'evacuation',
    address: 'המלך דוד 29, חיפה',
    lat: 32.8106452,
    lng: 34.9588264,
    capacity: 120,
  },
  {
    id: 'evac-8',
    name: 'ביה"ס דרור',
    category: 'evacuation',
    address: 'דרור 19, חיפה',
    lat: 32.8228672,
    lng: 34.9821014,
    capacity: 80,
  },
  {
    id: 'evac-9',
    name: 'ביה"ס חופית',
    category: 'evacuation',
    address: 'החיננית 3, חיפה',
    lat: 32.8166169,
    lng: 34.9587936,
    capacity: 280,
  },
  {
    id: 'evac-10',
    name: 'ביה"ס יבניאלי',
    category: 'evacuation',
    address: 'יואב 5, חיפה',
    lat: 32.8290166,
    lng: 34.9765038,
    capacity: 220,
  },
  {
    id: 'evac-11',
    name: 'ביה"ס חטיבת ביניים רעות',
    category: 'evacuation',
    address: 'צה"ל 41, חיפה',
    lat: 32.8279943,
    lng: 34.9754636,
    capacity: 160,
  },
  {
    id: 'evac-12',
    name: "ביה\"ס עירוני א'",
    category: 'evacuation',
    address: 'תל אביב 34, חיפה',
    lat: 32.824538,
    lng: 34.9899023,
    capacity: 220,
  },
  {
    id: 'evac-13',
    name: 'ליד סוכנות רכב סוזוקי',
    category: 'evacuation',
    address: 'דרך יפו 145א, חיפה',
    lat: 32.8277409,
    lng: 34.9856111,
  },
  {
    id: 'evac-14',
    name: 'מת"מ — חניון C1',
    category: 'evacuation',
    address: 'אנדרי סחרוב, מת"מ, חיפה',
    lat: 32.7903123,
    lng: 34.9608439,
  },

  // ─── Schools ───────────────────────────────────────────────────────────────
  {
    id: 'school-1',
    name: "תיכון עירוני א'",
    category: 'school',
    address: 'תל אביב 34, חיפה',
    lat: 32.824538,
    lng: 34.9899023,
    phone: '052-3325140',
  },
  {
    id: 'school-2',
    name: 'בסמ"ת',
    category: 'school',
    address: 'המלך דוד 31, חיפה',
    lat: 32.8106452,
    lng: 34.9590,
    phone: '04-8626282',
  },
  {
    id: 'school-3',
    name: 'המרכז הטכנולוגי חיפה',
    category: 'school',
    address: 'המלך דוד 33, חיפה',
    lat: 32.8104,
    lng: 34.9592,
    phone: '076-5310234',
  },
  {
    id: 'school-4',
    name: 'נירים',
    category: 'school',
    address: 'יהושפט המלך 4, חיפה',
    lat: 32.8072648,
    lng: 34.9614,
  },
  {
    id: 'school-5',
    name: 'המרכז הימי',
    category: 'school',
    address: 'רציף פנחס מרגולין 24, חיפה',
    lat: 32.8322267,
    lng: 34.9729867,
    phone: '052-2812762',
  },
  {
    id: 'school-6',
    name: 'תיכון עלמא',
    category: 'school',
    address: 'דרך הים 202, חיפה',
    lat: 32.8057362,
    lng: 34.9815686,
    phone: '054-7634524',
  },
  {
    id: 'school-7',
    name: 'חט"ב רמת הנשיא',
    category: 'school',
    address: 'אלמוג 13, חיפה',
    lat: 32.8110392,
    lng: 34.9626122,
  },
  {
    id: 'school-8',
    name: 'חופית',
    category: 'school',
    address: 'החיננית 6, חיפה',
    lat: 32.8168136,
    lng: 34.9584226,
  },
  {
    id: 'school-9',
    name: 'אלמסאר',
    category: 'school',
    address: 'אנקואה רפאל הרב 20, חיפה',
    lat: 32.8173486,
    lng: 34.9591363,
  },
  {
    id: 'school-10',
    name: 'עין-הים',
    category: 'school',
    address: 'יציאת אירופה 15, חיפה',
    lat: 32.8223, // corrected — Nominatim returned wrong region
    lng: 34.9671,
  },
  {
    id: 'school-11',
    name: 'גניגר',
    category: 'school',
    address: 'דרך הים 200, חיפה',
    lat: 32.8042804,
    lng: 34.9859766,
  },
  {
    id: 'school-12',
    name: 'ניסויי עופר',
    category: 'school',
    address: 'דרך הים 196, חיפה',
    lat: 32.8057962,
    lng: 34.9815851,
  },
  {
    id: 'school-13',
    name: 'עופרים',
    category: 'school',
    address: 'המלך דוד 29, חיפה',
    lat: 32.8108,
    lng: 34.9586,
  },
  {
    id: 'school-14',
    name: 'גיל',
    category: 'school',
    address: 'התשבי 34, חיפה',
    lat: 32.8162779,
    lng: 34.9784116,
  },
  {
    id: 'school-15',
    name: 'רמות',
    category: 'school',
    address: 'דרך צרפת 83, חיפה',
    lat: 32.8072,
    lng: 34.9970,
  },
  {
    id: 'school-16',
    name: 'אבן-גבירול',
    category: 'school',
    address: 'ד"ר מקס בודנהיימר 7, חיפה',
    lat: 32.8182,
    lng: 34.9828,
  },
  {
    id: 'school-17',
    name: 'בית ספר נאות פרס',
    category: 'school',
    address: 'נאות פרס, חיפה',
    lat: 32.7833183,
    lng: 34.969086,
  },

  // ─── Community / hostels ───────────────────────────────────────────────────
  {
    id: 'community-1',
    name: 'הלב הקדוש',
    category: 'community',
    address: 'אלנבי 13, חיפה',
    lat: 32.817882,
    lng: 34.9964833,
    phone: '04-8673890',
    capacity: 53,
  },
  {
    id: 'community-2',
    name: 'ק.ט.ב קהילה תומכת',
    category: 'community',
    address: 'החותרים 9, חיפה',
    lat: 32.8219379,
    lng: 34.9825468,
    phone: '077-5506590',
  },
  {
    id: 'community-3',
    name: 'ק.ט.ב קוללני מתוגבר',
    category: 'community',
    address: 'פינת גן 2, חיפה',
    lat: 32.8325521,
    lng: 34.9744463,
  },
  {
    id: 'community-4',
    name: 'מועדון חברתי מתנ"ס ליאו בק',
    category: 'community',
    address: 'דרך צרפת 90, חיפה',
    lat: 32.8064,
    lng: 34.9981,
    phone: '04-83000504',
  },
  {
    id: 'community-5',
    name: 'מעון יום שיקומי האלה',
    category: 'community',
    address: 'האלה 8, חיפה',
    lat: 32.8168754,
    lng: 34.9566898,
    phone: '04-8511812',
  },
  {
    id: 'community-6',
    name: 'מיח"א צה"ל',
    category: 'community',
    address: 'צה"ל 50, חיפה',
    lat: 32.8279943,
    lng: 34.9756,
    phone: '04-8538276',
  },
  {
    id: 'community-7',
    name: 'משפחותונים רמת חיפה',
    category: 'community',
    address: 'אלנבי 171, חיפה',
    lat: 32.8204282,
    lng: 34.9833319,
    phone: '077-4437549',
  },
  {
    id: 'community-8',
    name: 'שלוחה מעון הוד',
    category: 'community',
    address: 'יצחק שדה 14, חיפה',
    lat: 32.8217,
    lng: 34.9871, // corrected — Nominatim returned wrong region
    phone: '052-5420951',
  },
  {
    id: 'community-9',
    name: 'מקבץ דיור בת גלים — א',
    category: 'community',
    address: 'העלייה השנייה 71, חיפה',
    lat: 32.8226,
    lng: 34.9689, // corrected — Nominatim returned Rambam hospital coords
    phone: '052-7243737',
    capacity: 200,
  },
  {
    id: 'community-10',
    name: 'מקבץ דיור בת גלים — ב',
    category: 'community',
    address: 'החי"ל 10, חיפה',
    lat: 32.8205,
    lng: 34.9670, // corrected — Nominatim returned wrong city
    capacity: 220,
  },
  {
    id: 'community-11',
    name: 'מקבץ דיור נווה דוד-עמיגור',
    category: 'community',
    address: 'המלך דוד 12, חיפה',
    lat: 32.8106452,
    lng: 34.9588264,
    capacity: 86,
  },
  {
    id: 'community-12',
    name: 'מקבץ דיור התקווה',
    category: 'community',
    address: 'התקוה 29, חיפה',
    lat: 32.8250736,
    lng: 34.9861486,
    capacity: 64,
  },

  // ─── Shelters ──────────────────────────────────────────────────────────────
  {
    id: 'shelter-104',
    name: 'מקלט 104',
    category: 'shelter',
    address: 'ציקלג 17, חיפה',
    lat: 32.8064746,
    lng: 34.9626234,
    notes: 'ליד בית הקברות',
  },
  {
    id: 'shelter-102',
    name: 'מקלט 102',
    category: 'shelter',
    address: 'צה"ל 51, חיפה',
    lat: 32.8274462,
    lng: 34.9763682,
    notes: 'ליד קופ"ח',
  },
  {
    id: 'shelter-101',
    name: 'מקלט 101',
    category: 'shelter',
    address: 'עמל 31, חיפה',
    lat: 32.8254645,
    lng: 34.9789565,
  },
  {
    id: 'shelter-99',
    name: 'מקלט 99',
    category: 'shelter',
    address: 'יואב 13, חיפה',
    lat: 32.8290166,
    lng: 34.9765038,
  },
  {
    id: 'shelter-93',
    name: 'מקלט 93',
    category: 'shelter',
    address: 'התקווה 23, חיפה',
    lat: 32.8250736,
    lng: 34.9862,
    notes: "בחצר ביה\"ס עירוני א'",
  },
  {
    id: 'shelter-92',
    name: 'מקלט 92',
    category: 'shelter',
    address: 'הזית 22, חיפה',
    lat: 32.8276916,
    lng: 34.9792168,
  },
  {
    id: 'shelter-91',
    name: 'מקלט 91',
    category: 'shelter',
    address: 'הזית 15, חיפה',
    lat: 32.8282638,
    lng: 34.9792867,
  },
  {
    id: 'shelter-90',
    name: 'מקלט 90',
    category: 'shelter',
    address: 'הקלעים 10, חיפה',
    lat: 32.8315821,
    lng: 34.976031,
    notes: "פינת רח' החייל",
  },
  {
    id: 'shelter-89',
    name: 'מקלט 89',
    category: 'shelter',
    address: 'העלייה 45, חיפה',
    lat: 32.8227,
    lng: 34.9680, // corrected
    notes: 'מאחורי המרכז הקהילתי',
  },
  {
    id: 'shelter-88',
    name: 'מקלט 88',
    category: 'shelter',
    address: 'העלייה 25, חיפה',
    lat: 32.8220,
    lng: 34.9675, // corrected
    notes: 'בגן, בסמוך לכניסה לרכבת',
  },
  {
    id: 'shelter-87',
    name: 'מקלט 87',
    category: 'shelter',
    address: 'העלייה 20, חיפה',
    lat: 32.8215,
    lng: 34.9673, // corrected
    notes: 'בכניסה לרכבת בת גלים',
  },
  {
    id: 'shelter-86',
    name: 'מקלט 86',
    category: 'shelter',
    address: 'המלך דוד 26, חיפה',
    lat: 32.8108,
    lng: 34.9588,
    notes: 'ליד בית הכנסת',
  },
  {
    id: 'shelter-85',
    name: 'מקלט 85',
    category: 'shelter',
    address: 'המלך דוד 7, חיפה',
    lat: 32.8107,
    lng: 34.9588,
  },
  {
    id: 'shelter-84',
    name: 'מקלט 84',
    category: 'shelter',
    address: 'דרך צרפת 85, חיפה',
    lat: 32.8069,
    lng: 34.9970, // corrected
  },

  // ─── Food ──────────────────────────────────────────────────────────────────
  {
    id: 'food-1',
    name: 'קשת טעמים',
    category: 'food',
    address: 'תל אביב 11, חיפה',
    lat: 32.825086,
    lng: 34.9876048,
    phone: '04-8663637',
  },
  {
    id: 'food-2',
    name: 'רמי לוי (מת"מ)',
    category: 'food',
    address: 'פלימן 4, חיפה',
    lat: 32.7819521,
    lng: 34.9765334,
    phone: '04-9994144',
  },
  {
    id: 'food-3',
    name: 'שופרסל דיל',
    category: 'food',
    address: 'כיכר מאירהוף 9, חיפה',
    lat: 32.8245604,
    lng: 34.9829009,
    phone: '04-8352910',
  },
  {
    id: 'food-4',
    name: 'ויקטורי',
    category: 'food',
    address: 'שמואל שלוסברג 1, חיפה',
    lat: 32.817557,
    lng: 34.9584166,
    phone: '074-7157177',
  },

  // ─── Gas stations ─────────────────────────────────────────────────────────
  {
    id: 'gas-1',
    name: 'חוף כרמל פז',
    category: 'gas',
    address: 'כביש 4, יציאה דרומה מחיפה',
    lat: 32.7830,
    lng: 34.9720,
  },
  {
    id: 'gas-2',
    name: 'מבואות חיפה דלק',
    category: 'gas',
    address: 'שדרות ההגנה, חיפה',
    lat: 32.8128,
    lng: 34.9850,
  },
  {
    id: 'gas-3',
    name: 'חיפה פרויד דור אלון',
    category: 'gas',
    address: 'פלימן 4, חיפה',
    lat: 32.7819521,
    lng: 34.9765334,
  },
]
