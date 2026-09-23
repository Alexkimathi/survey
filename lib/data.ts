export const statsData = [
  { iconName: 'RiAwardLine', value: 15, label: 'Years of Experience', suffix: '+' },
  { iconName: 'RiMapPinLine', value: 500, label: 'Projects Completed', suffix: '+' },
  { iconName: 'RiTeamLine', value: 200, label: 'Happy Clients', suffix: '+' },
  { iconName: 'RiStarLine', value: 98, label: 'Satisfaction Rate', suffix: '%' },
];

export const services = [
  {
    number: '01',
    iconName: 'RiMapPinFill',
    title: 'Boundary Survey',
    description:
      'Precise determination of property lines and corners using GPS and total station equipment. We provide legally binding survey documents for land registration and dispute resolution.',
    color: '#22c55e',
  },
  {
    number: '02',
    iconName: 'RiMap2Fill',
    title: 'Construction Survey',
    description:
      'Expert layout surveys to ensure structures are built to design specifications. We support engineers and contractors with grading, staking, and as-built surveys.',
    color: '#10b981',
  },
  {
    number: '03',
    iconName: 'RiFileList3Line',
    title: 'Permitting',
    description:
      'Comprehensive assistance with land subdivision approvals, title documentation, and permit acquisition from county and national government bodies.',
    color: '#06b6d4',
  },
  {
    number: '04',
    iconName: 'RiGlobalLine',
    title: 'Digital Mapping',
    description:
      'High-resolution aerial and ground mapping using drone technology and GIS software. We create detailed topographic maps and accurate 3D terrain models.',
    color: '#a78bfa',
  },
];

export const servicesDetailed = [
  {
    iconName: 'RiMapPinFill',
    color: '#22c55e',
    title: 'Boundary Survey',
    description:
      'Precise determination of property lines and corners using GPS and total station equipment. We provide legally binding survey documents accepted by the Lands Registry and county governments for land registration, purchase, sale, and dispute resolution.',
    included: [
      'Field reconnaissance and title deed review',
      'RTK GPS and total station measurements',
      'Boundary peg placement and marking',
      'Survey plan drawn to Kenya Survey Act standards',
      'Title deed mutation documents',
      'Court-admissible survey report',
    ],
  },
  {
    iconName: 'RiMap2Fill',
    color: '#10b981',
    title: 'Construction Survey',
    description:
      'Expert layout surveys to ensure your structures are built exactly to design specifications. We support engineers, architects, and contractors through every phase — from initial grading to final as-built documentation.',
    included: [
      'Site control network establishment',
      'Foundation and column staking',
      'Road and pipeline alignment surveys',
      'Grade and elevation checking',
      'As-built survey and documentation',
      'Building setback verification reports',
    ],
  },
  {
    iconName: 'RiFileList3Line',
    color: '#06b6d4',
    title: 'Permitting & Subdivision',
    description:
      'End-to-end assistance with land subdivision approvals, title documentation, and permit acquisition from county and national government offices. We handle the paperwork so you can focus on your project.',
    included: [
      'Land subdivision scheme design',
      'County government application preparation',
      'Survey plan submission to Ministry of Lands',
      'Title deed processing and follow-up',
      'Change of user and land use applications',
      'Green card and mutation registration',
    ],
  },
  {
    iconName: 'RiGlobalLine',
    color: '#a78bfa',
    title: 'Digital Mapping & GIS',
    description:
      'High-resolution aerial and ground mapping using commercial drones and professional GIS software. We create detailed topographic maps, accurate 3D terrain models, and rich spatial datasets for planning, engineering, and environmental purposes.',
    included: [
      'Drone aerial photogrammetry',
      'Topographic survey and contouring',
      'Orthomosaic and DSM generation',
      'GIS layer creation and analysis',
      '3D terrain and volumetric models',
      'Data delivery in GIS-ready formats',
    ],
  },
];

export const processSteps = [
  {
    num: '01',
    iconName: 'RiPhoneLine',
    title: 'Consultation',
    text: 'We discuss your project scope, boundaries, and requirements to give you a precise quote and clear timeline.',
  },
  {
    num: '02',
    iconName: 'RiMapPin2Line',
    title: 'Field Survey',
    text: 'Our certified surveyors visit the site with GPS and total station equipment to capture accurate data.',
  },
  {
    num: '03',
    iconName: 'RiComputerLine',
    title: 'Data Processing',
    text: 'We process all field data using industry-leading GIS and CAD software to produce precise deliverables.',
  },
  {
    num: '04',
    iconName: 'RiFileTextLine',
    title: 'Final Delivery',
    text: 'You receive certified survey documents, digital maps, and all supporting materials within the agreed timeline.',
  },
];

export const servicesProcessSteps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We discuss your project needs, review existing documents, and provide a detailed quote and timeline.',
  },
  {
    number: '02',
    title: 'Field Survey',
    text: 'Our licensed surveyors mobilise to site with GPS, total stations, and drones to collect precise measurements.',
  },
  {
    number: '03',
    title: 'Data Processing',
    text: 'Raw field data is processed in our office using professional CAD and GIS software to produce accurate outputs.',
  },
  {
    number: '04',
    title: 'Final Delivery',
    text: 'Survey plans, reports, and digital files are delivered and submitted to the relevant government offices on your behalf.',
  },
];

export const reviews = [
  {
    img: '/img/nat-8.jpg',
    name: 'Mabel Kinya',
    role: 'Property Developer',
    rating: 5,
    title: 'Exceptional quality of work',
    text: "PointMapSolutions exceeded all our expectations. Their boundary survey was incredibly precise and delivered ahead of schedule. The team was professional, communicative, and thorough. I wouldn't hesitate to work with them again on future projects.",
  },
  {
    img: '/img/nat-9.jpg',
    name: 'Alex Kim',
    role: 'Civil Engineer',
    rating: 5,
    title: 'Outstanding level of professionalism',
    text: 'Working with this team on our construction survey was a genuine pleasure. Their use of modern GPS equipment and detailed reporting gave us full confidence throughout the build process. The digital maps they produced were precise and easy to integrate.',
  },
];

export const faqs = [
  {
    question: 'What types of surveys do you offer?',
    answer:
      'We offer boundary surveys, construction surveys, topographic surveys, digital mapping, and permitting assistance. Our team uses modern GPS and total station equipment to handle both small residential and large commercial projects.',
  },
  {
    question: 'How long does a typical survey take?',
    answer:
      'Survey duration depends on project scope. A standard residential boundary survey typically takes 1–3 days. Larger commercial or mapping projects may take 1–3 weeks. We provide accurate timelines during the initial consultation.',
  },
  {
    question: 'Are your surveys legally recognized?',
    answer:
      "Yes. All surveys are conducted by licensed professionals and comply with Kenya's Survey Act. Our documents are accepted by county governments, the Ministry of Lands, and financial institutions for property transactions.",
  },
  {
    question: 'Do you serve areas outside of Meru?',
    answer:
      'Yes, we operate across Kenya. While our headquarters is in Meru (International House, Njuri Ncheke Street), our team is mobile and can handle projects throughout the country.',
  },
  {
    question: 'How do I get a quote for my project?',
    answer:
      'Fill out the contact form below or call us at 0712345678. We\'ll schedule a brief consultation to understand your needs and provide a detailed quote within 24 hours.',
  },
];

export const portfolioProjects = [
  {
    image: '/img/nat-1.jpg',
    type: 'Boundary',
    name: 'Tigania West Land Demarcation',
    location: 'Tigania West, Meru County',
    description: 'Boundary survey for 28-acre agricultural parcel with multi-party ownership resolution.',
  },
  {
    image: '/img/nat-2.jpg',
    type: 'Construction',
    name: 'Meru Township Commercial Block',
    location: 'Meru Town Centre',
    description: 'Construction layout and as-built survey for a 6-storey commercial building.',
  },
  {
    image: '/img/nat-3.jpg',
    type: 'Mapping',
    name: 'Tharaka-Nithi Topographic Survey',
    location: 'Tharaka-Nithi County',
    description: 'Large-scale drone photogrammetry and GIS mapping for county road planning.',
  },
  {
    image: '/img/nat-4.jpg',
    type: 'Permitting',
    name: 'Kiirua Estate Subdivision',
    location: 'Kiirua, Buuri Sub-County',
    description: 'Subdivision of 14-acre tract into 42 residential plots with full permit processing.',
  },
  {
    image: '/img/nat-5.jpg',
    type: 'Boundary',
    name: 'Nkubu Smallholder Parcels',
    location: 'Nkubu, Meru County',
    description: 'Re-establishment of boundary begs for 16 smallholder farms following road widening.',
  },
  {
    image: '/img/nat-6.jpg',
    type: 'Construction',
    name: 'Maua-Isiolo Road Alignment',
    location: 'Maua, Igembe North',
    description: 'Route survey and construction staking for 12 km rural road rehabilitation project.',
  },
  {
    image: '/img/nat-7.jpg',
    type: 'Mapping',
    name: 'Mt. Kenya Footprint Mapping',
    location: 'Chuka, Tharaka-Nithi',
    description: 'High-resolution 3D terrain model of forest boundary for conservation authority.',
  },
  {
    image: '/img/nat-8.jpg',
    type: 'Boundary',
    name: 'Imenti North Agricultural Land',
    location: 'Imenti North, Meru',
    description: 'Boundary demarcation for cooperative society land covering 110 acres.',
  },
  {
    image: '/img/nat-9.jpg',
    type: 'Permitting',
    name: 'Timau Gated Community',
    location: 'Timau, Buuri Sub-County',
    description: 'Change of user and subdivision permits for 20-plot gated community development.',
  },
  {
    image: '/img/s1.jpg',
    type: 'Construction',
    name: 'Meru Water Board Pipeline',
    location: 'Meru County',
    description: 'Alignment survey and setting out for 8 km water distribution pipeline upgrade.',
  },
  {
    image: '/img/s2.jpg',
    type: 'Mapping',
    name: 'Meru CBD Digital Basemap',
    location: 'Meru Town',
    description: 'Comprehensive GIS basemap of Meru CBD for urban planning and infrastructure inventory.',
  },
  {
    image: '/img/s4.jpg',
    type: 'Boundary',
    name: 'Laare Tea Farm Survey',
    location: 'Laare, North Imenti',
    description: 'Boundary re-survey and title deed mutation for 340-acre commercial tea estate.',
  },
];

export const portfolioFilters = ['All', 'Boundary', 'Construction', 'Mapping', 'Permitting'];

export const teamMembers = [
  {
    name: 'James Mwangi',
    role: 'Lead Surveyor',
    image: '/img/nat-1.jpg',
    bio: 'Licensed land surveyor with 18 years of field experience across Kenya. Specialises in boundary surveys and complex terrain analysis.',
  },
  {
    name: 'Grace Njiru',
    role: 'Senior Surveyor',
    image: '/img/nat-2.jpg',
    bio: 'Expert in construction layout and as-built surveys. Grace has delivered over 400 projects for residential and commercial clients.',
  },
  {
    name: 'Peter Kirimi',
    role: 'GIS Analyst',
    image: '/img/nat-3.jpg',
    bio: 'Certified GIS professional skilled in drone photogrammetry, spatial data modelling, and producing high-accuracy digital terrain models.',
  },
  {
    name: 'Alice Murithi',
    role: 'Office Manager',
    image: '/img/nat-4.jpg',
    bio: 'Ensures seamless project coordination, client communication, and permit processing. Alice keeps every project on time and on budget.',
  },
];

export const whyUs = [
  {
    iconName: 'RiShieldCheckLine',
    title: 'Fully Licensed',
    text: 'Registered with the Institution of Surveyors of Kenya and compliant with the Survey Act.',
  },
  {
    iconName: 'RiToolsLine',
    title: 'Modern Equipment',
    text: 'We use RTK GPS, robotic total stations, and commercial drones for maximum precision.',
  },
  {
    iconName: 'RiTimeLine',
    title: 'Fast Turnaround',
    text: 'Most surveys are completed and documented within 3–5 business days.',
  },
  {
    iconName: 'RiMoneyDollarCircleLine',
    title: 'Affordable Rates',
    text: 'Transparent, competitive pricing with no hidden costs. We offer package deals for large projects.',
  },
  {
    iconName: 'RiMapPinLine',
    title: 'Local Expertise',
    text: 'Deep knowledge of Meru County terrain, regulations, and county government requirements.',
  },
];

export const certifications = [
  'Survey Act Compliance',
  'County Government Approved',
  'ISO Standards',
  'ISK Registered',
  'EARSC Member',
];

export const socialLinks = [
  { id: 1, link: 'https://instagram.com', iconName: 'AiOutlineInstagram' },
  { id: 2, link: 'https://twitter.com', iconName: 'AiOutlineTwitter' },
  { id: 3, link: 'https://facebook.com', iconName: 'FaFacebookSquare' },
];

export const CONTACT = {
  phone: '0712345678',
  phoneDisplay: '0712 345 678',
  email: 'piontmap@gmail.com',
  address: 'International House, Mezzanine Floor, Njuri Ncheke Street, Meru',
  floatingPhone: '254708353465',
  floatingPhoneDisplay: '+254 708 353 465',
  waMessage: encodeURIComponent(
    'Hello PointMap Solutions, I would like to enquire about your land surveying services.'
  ),
};

export const MERU_COORDS: [number, number] = [-0.0469, 37.649];
