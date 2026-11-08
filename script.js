
const PROFILE = {
  name: "Yalda Gholami",
  age: 16,

  experience:
    "حدود دو سال فعالیت مستمر در حوزه برنامه‌نویسی و فناوری",

  projects:
    "بیش از ۳۰ پروژه در زمینه‌های مختلف برنامه‌نویسی، هوش مصنوعی و توسعه وب",

  mentors:
    "استاد تجن‌جاری و استاد اصغری",

  mainField: "هوش مصنوعی",

  fields: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Python Programming",
    "Web Development",
    "Robotics"
  ],

  robotics:
    "حدود چهار ماه فعالیت تخصصی در حوزه رباتیک",

  awards:
    "کسب مدال نقره در یک رقابت علمی در ترکیه",

  certificates:
    "دارای گواهی‌نامه‌های تخصصی در حوزه هوش مصنوعی و توسعه وب",

  education:
    "در حال دنبال کردن مسیر تحصیلی به‌صورت جهشی، با تمرکز بر توسعه دانش و مهارت‌های تخصصی"
};

function getAIResponse(message, language = "fa") {
  const q = message.toLowerCase().trim();

  const isEnglish =
    language === "en" ||
    /^[a-z0-9\s.,!?'-]+$/i.test(q);

  const fa = {
    greeting: `
درود و خوش آمدید.

من دستیار هوشمند معرفی یلدا غلامی هستم.
می‌توانم اطلاعات جامعی درباره سوابق علمی، مهارت‌های تخصصی،
پروژه‌ها، افتخارات و فعالیت‌های ایشان در اختیار شما قرار دهم.

باعث افتخار است که بتوانم راهنمای شما باشم.
`,

    introduction: `
یلدا غلامی، برنامه‌نویس و فعال حوزه فناوری با تمرکز اصلی بر هوش مصنوعی است.

ایشان در سن ${PROFILE.age} سالگی، حدود دو سال است که در حوزه برنامه‌نویسی و فناوری فعالیت می‌کنند و تاکنون در بیش از ۳۰ پروژه مختلف مشارکت داشته‌اند.

حوزه فعالیت ایشان شامل هوش مصنوعی، یادگیری ماشین، یادگیری عمیق، بینایی ماشین، توسعه وب و رباتیک است.

ایشان همچنین در مسیر تحصیلی خود از روش جهشی استفاده می‌کنند تا زمان بیشتری را به یادگیری تخصصی، پژوهش و توسعه پروژه‌های فناورانه اختصاص دهند.
`,

    experience: `
یلدا غلامی حدود دو سال سابقه فعالیت و یادگیری مستمر در حوزه برنامه‌نویسی و فناوری دارند.

در این مدت، روی پروژه‌های متعددی کار کرده‌اند و تجربه‌هایی در زمینه توسعه نرم‌افزار، هوش مصنوعی و طراحی و توسعه وب به دست آورده‌اند.

تأکید ایشان بر یادگیری عملی، توسعه پروژه‌های واقعی و ارتقای مداوم دانش فنی است.
`,

    projects: `
تا امروز بیش از ۳۰ پروژه در حوزه‌های مختلف برنامه‌نویسی و فناوری توسط یلدا غلامی انجام شده یا در آن‌ها مشارکت داشته‌اند.

زمینه‌های این پروژه‌ها شامل موارد زیر است:

• پروژه‌های هوش مصنوعی و یادگیری ماشین
• مدل‌های یادگیری عمیق
• پردازش و تحلیل تصویر
• تشخیص و شناسایی چهره
• توسعه وب و طراحی رابط کاربری
• پروژه‌های مرتبط با رباتیک

این پروژه‌ها بخشی از مسیر یادگیری عملی و توسعه توانایی‌های فنی ایشان هستند.
`,

    ai: `
هوش مصنوعی حوزه اصلی تمرکز یلدا غلامی است.

زمینه‌های تخصصی مورد مطالعه و فعالیت ایشان عبارت‌اند از:

• Artificial Intelligence
• Machine Learning
• Deep Learning
• Computer Vision
• Image Processing
• Python for AI
• Data Analysis

هدف ایشان توسعه توانایی‌های فنی در سطح پیشرفته‌تر و حرکت به سمت اجرای پروژه‌های کاربردی و پژوهش‌محور در حوزه هوش مصنوعی است.
`,

    robotics: `
یلدا غلامی حدود چهار ماه است که فعالیت تخصصی خود را در حوزه رباتیک آغاز کرده‌اند.

این حوزه را در کنار هوش مصنوعی دنبال می‌کنند و علاقه‌مند به توسعه پروژه‌هایی هستند که در آن‌ها نرم‌افزار، هوش مصنوعی و سیستم‌های رباتیکی با یکدیگر ترکیب می‌شوند.
`,

    awards: `
یکی از افتخارات یلدا غلامی، کسب مدال نقره در یک رقابت علمی در کشور ترکیه است.

این موفقیت در کنار فعالیت‌های پروژه‌محور و یادگیری تخصصی، بخشی از سوابق علمی و رقابتی ایشان محسوب می‌شود.
`,

    certificates: `
یلدا غلامی دارای گواهی‌نامه‌های تخصصی در حوزه هوش مصنوعی و توسعه وب هستند.

همچنین مسیر یادگیری خود را با تمرکز بر مباحث تخصصی‌تر مانند یادگیری ماشین و یادگیری عمیق ادامه می‌دهند.

گواهی‌نامه‌ها در کنار پروژه‌های عملی، بخشی از سوابق آموزشی و فنی ایشان هستند.
`,

    mentors: `
بخشی از مسیر آموزشی و فعالیت‌های پروژه‌محور یلدا غلامی با راهنمایی استاد تجن‌جاری و استاد اصغری دنبال شده است.

ایشان از راهنمایی و تجربیات این اساتید در مسیر یادگیری و توسعه مهارت‌های خود بهره برده‌اند.
`,

    education: `
یلدا غلامی ۱۶ سال دارند و مسیر تحصیلی خود را به‌صورت جهشی دنبال می‌کنند.

تمرکز اصلی ایشان بر یادگیری تخصصی در حوزه فناوری، هوش مصنوعی و برنامه‌نویسی است.

ایشان تلاش می‌کنند در کنار مسیر تحصیلی، دانش نظری و تجربه عملی خود را نیز توسعه دهند.
`,

    goals: `
از اهداف حرفه‌ای یلدا غلامی می‌توان به موارد زیر اشاره کرد:

• توسعه پروژه‌های کاربردی در حوزه هوش مصنوعی
• فعالیت در پروژه‌های پژوهشی و فناورانه
• گسترش دانش در زمینه یادگیری عمیق و بینایی ماشین
• حضور در رقابت‌ها و رویدادهای علمی بین‌المللی
• همکاری با تیم‌ها و مجموعه‌های فعال در فناوری
• مشارکت در توسعه فناوری و نوآوری در ایران
`,

    contact: `
برای همکاری‌های علمی، آموزشی، فناورانه و پروژه‌ای،
می‌توانید از طریق راه‌های ارتباطی رسمی ارائه‌شده در وب‌سایت یلدا غلامی اقدام کنید.
`,

    unknown: `
از پرسش شما سپاسگزارم.

در حال حاضر اطلاعات ثبت‌شده من برای پاسخ دقیق به این سؤال کافی نیست.

می‌توانم درباره سوابق علمی، پروژه‌ها، مهارت‌های تخصصی،
افتخارات، گواهی‌نامه‌ها و فعالیت‌های یلدا غلامی اطلاعات ارائه کنم.

در صورت تمایل، سؤال خود را کمی دقیق‌تر مطرح بفرمایید.
`
  };

  const en = {
    greeting: `
Welcome.

I am Yalda AI, the official digital assistant introducing Yalda Gholami.

I can provide information about her professional background,
technical skills, projects, achievements, and academic interests.

How may I assist you?
`,

    introduction: `
Yalda Gholami is a 16-year-old programmer and technology enthusiast
whose primary focus is Artificial Intelligence.

She has approximately two years of experience in programming
and technology-related activities and has worked on more than
30 projects.

Her areas of interest and practical activity include Artificial
Intelligence, Machine Learning, Deep Learning, Computer Vision,
Web Development, and Robotics.

She is also pursuing an accelerated educational path while
continuing to develop her technical knowledge and practical skills.
`,

    experience: `
Yalda has approximately two years of experience in programming
and technology-related activities.

During this period, she has participated in more than 30 projects
across different areas of software development, Artificial
Intelligence, and Web Development.

Her approach emphasizes practical learning, project development,
and continuous technical improvement.
`,

    projects: `
Yalda has worked on more than 30 projects in different areas
of programming and technology.

These projects cover areas such as:

• Artificial Intelligence
• Machine Learning
• Deep Learning
• Computer Vision
• Image Processing
• Face Detection and Recognition
• Web Development
• Robotics

Her projects reflect her commitment to practical learning
and continuous technical development.
`,

    ai: `
Artificial Intelligence is Yalda's primary area of focus.

Her technical interests and areas of activity include:

• Artificial Intelligence
• Machine Learning
• Deep Learning
• Computer Vision
• Image Processing
• Python Programming
• Data Analysis

She aims to further develop her technical expertise
and contribute to practical and research-oriented AI projects.
`,

    robotics: `
Yalda began her specialized activities in Robotics approximately
four months ago.

She is exploring the relationship between Robotics,
Artificial Intelligence, and software development,
with an interest in building integrated technological projects.
`,

    awards: `
One of Yalda's achievements is winning a silver medal
in a scientific competition held in Turkey.

This achievement is part of her academic and competitive background.
`,

    certificates: `
Yalda holds specialized certificates in Artificial Intelligence
and Web Development.

She continues to expand her knowledge in advanced technical
subjects, including Machine Learning and Deep Learning.
`,

    mentors: `
Yalda has pursued part of her educational and project-based
development under the guidance of Professor Tejan-Jari
and Professor Asghari.

Their guidance has contributed to her learning and technical development.
`,

    education: `
Yalda is 16 years old and is pursuing an accelerated educational path.

Alongside her academic studies, she focuses on developing
her knowledge and practical abilities in programming,
technology, and Artificial Intelligence.
`,

    goals: `
Yalda's professional goals include:

• Developing practical Artificial Intelligence solutions
• Participating in research-oriented technology projects
• Advancing her knowledge of Deep Learning and Computer Vision
• Taking part in international scientific competitions
• Collaborating with technology-focused teams
• Contributing to innovation and technological development
`,

    contact: `
For academic, educational, technological, or project-based
collaborations, please use the official contact information
provided on Yalda Gholami's website.
`,

    unknown: `
Thank you for your question.

I currently do not have enough verified information
to provide an accurate answer.

I can assist with questions about Yalda's background,
projects, technical skills, achievements, certificates,
and professional interests.

Please feel free to ask a more specific question.
`
  };

  const responses = isEnglish ? en : fa;

  const rules = [
    {
      key: "greeting",
      words: ["سلام", "درود", "وقت بخیر", "hello", "hi", "good morning"]
    },
    {
      key: "projects",
      words: ["پروژه", "چند تا کار", "نمونه کار", "project", "portfolio"]
    },
    {
      key: "robotics",
      words: ["رباتیک", "ربات", "robotics", "robot"]
    },
    {
      key: "awards",
      words: ["مدال", "ترکیه", "افتخار", "مسابقه", "award", "medal", "competition"]
    },
    {
      key: "certificates",
      words: ["مدرک", "گواهی", "گواهینامه", "certificate", "certification"]
    },
    {
      key: "mentors",
      words: ["استاد", "اساتید", "مدرس", "راهنما", "mentor", "teacher"]
    },
    {
      key: "education",
      words: ["تحصیل", "مدرسه", "سن", "چند سال", "جهشی", "education", "school", "age"]
    },
    {
      key: "experience",
      words: ["سابقه", "تجربه", "چند سال فعالیت", "experience", "background"]
    },
    {
      key: "ai",
      words: ["هوش مصنوعی", "یادگیری ماشین", "یادگیری عمیق", "بینایی ماشین", "machine learning", "deep learning", "computer vision", "artificial intelligence"]
    },
    {
      key: "goals",
      words: ["هدف", "آینده", "برنامه", "چشم انداز", "goal", "future", "vision"]
    },
    {
      key: "contact",
      words: ["ارتباط", "تماس", "همکاری", "ایمیل", "contact", "collaboration", "email"]
    }
  ];

  const matched = rules.find(rule =>
    rule.words.some(word => q.includes(word))
  );

  if (matched) {
    return responses[matched.key];
  }

  if (
    q.includes("یلدا") ||
    q.includes("gholami") ||
    q.includes("yalda")
  ) {
    return responses.introduction;
  }

  return responses.unknown;
}
