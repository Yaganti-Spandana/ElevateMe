const lifeoperatingsystemData = {
lifedashboard: {
    common: {
      name: "Alex",

      goals: [
        { label: "Career", value: 75 },
        { label: "Health", value: 60 },
        { label: "Finance", value: 80 },
        { label: "Personal", value: 50 },
      ],

      habits: [
  { day: "Mon", value: 4 },
  { day: "Tue", value: 5 },
  { day: "Wed", value: 3 },
  { day: "Thu", value: 6 },
  { day: "Fri", value: 4 },
  { day: "Sat", value: 5 },
  { day: "Sun", value: 7 },
],

      finance: {
        income: 4200,
        expenses: 2315,
        savings: 1885,
      },

      plan: [
        "Deep Work - 2h",
        "Workout",
        "Read 20 pages",
        "No Sugar",
        "Plan Tomorrow",
      ],

      notes:
        "Discipline is choosing between what you want now and what you want most.",
    },
  },
  lifedashboard1: {
    common: {
      name: "Alex",

      goals: [
        { label: "Career", value: 75 },
        { label: "Health", value: 60 },
        { label: "Finance", value: 80 },
        { label: "Personal", value: 50 },
      ],

      habits: [
  { day: "Mon", value: 4 },
  { day: "Tue", value: 5 },
  { day: "Wed", value: 3 },
  { day: "Thu", value: 6 },
  { day: "Fri", value: 4 },
  { day: "Sat", value: 5 },
  { day: "Sun", value: 7 },
],

      tracker: {
  sleep: 8,
  steps: 10000,
  calories: 450,
},

      plan: [
        "Deep Work - 2h",
        "Workout",
        "Read 20 pages",
        "No Sugar",
        "Plan Tomorrow",
      ],

      notes:
        "Discipline is choosing between what you want now and what you want most.",
    },
  },
  lifedashboard2: {
  common: {
    name: "Alex",

    // Wellness goals
    goals: [
      { label: "🧘 Yoga", value: 80 },
      { label: "💓 Heart Health", value: 70 },
      { label: "💧 Hydration", value: 90 },
      { label: "🌙 Sleep", value: 65 },
    ],

    // Weekly wellness tracking
    habits: [
      { day: "Mon", value: 6 },
      { day: "Tue", value: 8 },
      { day: "Wed", value: 5 },
      { day: "Thu", value: 9 },
      { day: "Fri", value: 7 },
      { day: "Sat", value: 10 },
      { day: "Sun", value: 8 },
    ],

    // Lifestyle metrics (reuse finance card structure)
    finance: {
      income: "8h",
      expenses: "9500",
      savings: "3L",
    },

    // Daily wellness plan
    plan: [
      "🧘 Morning Yoga - 20 min",
      "🚶 Walk 10,000 steps",
      "💧 Drink 3L Water",
      "📵 Digital Detox",
      "🌙 Sleep before 10 PM",
    ],

    notes:
      "Small healthy habits create big life changes.",
  },
},
  decisionmaking : {
  title: "A Guided Decision Framework",

  decision: {
    from: "Current Role",
    to: "Desired Role",
  },

  factors: [
    { name: "Passion", score: 7 },
    { name: "Income Potential", score: 8 },
    { name: "Work-Life Balance", score: 6 },
    { name: "Growth Opportunities", score: 9 },
    { name: "Skill Match", score: 6 },
    { name: "Lifestyle Fit", score: 7 },
  ],

  pros: [
    "More aligned with passion",
    "Better long-term growth",
    "New opportunities",
  ],

  cons: [
    "Starting over",
    "Income uncertainty",
    "Learning curve",
  ],

  nextSteps: [
    "Research more about the new role",
    "Talk to people in that field",
    "Skill gap analysis",
  ],
},
decisionmaking1 : {
  title: "A Guided Decision Framework",

  decision: {
  from: "Current Role",
  to: "Desired Role",
  deadline: "2026-12-31",
},

  factors: [
    { name: "Passion", score: 7 },
    { name: "Income Potential", score: 8 },
    { name: "Work-Life Balance", score: 6 },
    { name: "Growth Opportunities", score: 9 },
    { name: "Skill Match", score: 6 },
    { name: "Lifestyle Fit", score: 7 },
  ],

  pros: [
    "More aligned with passion",
    "Better long-term growth",
    "New opportunities",
  ],

  cons: [
    "Starting over",
    "Income uncertainty",
    "Learning curve",
  ],

  nextSteps: [
    "Research more about the new role",
    "Talk to people in that field",
    "Skill gap analysis",
  ],
},
decisionmaking2: {
  title: "🌿 Wellness Lifestyle Decision Guide",

  decision: {
    from: "Current Lifestyle",
    to: "Healthier Lifestyle",
  },

  factors: [
    { name: "🧘 Mental Wellness", score: 8 },
    { name: "💪 Physical Fitness", score: 9 },
    { name: "😴 Sleep Quality", score: 7 },
    { name: "🥗 Nutrition", score: 8 },
    { name: "⚖️ Work-Life Balance", score: 7 },
    { name: "❤️ Emotional Health", score: 9 },
  ],

  pros: [
    "More daily energy",
    "Better sleep quality",
    "Improved mood and focus",
    "Stronger immunity",
  ],

  cons: [
    "Requires discipline",
    "Time commitment",
    "Breaking old habits",
  ],

  nextSteps: [
    "Start 20 min yoga daily",
    "Drink 3L water",
    "Sleep before 10 PM",
    "Walk 10,000 steps",
    "Practice meditation",
  ],
},
weeklyplanner: {
    title: "Weekly Life Planner",
    subtitle: "May 19 - May 25, 2026",
    focus: "Consistency",

    priorities: [
      "Finish project proposal",
      "Workout 4x this week",
      "Save $200",
    ],

    schedule: [
  {
    label: "Morning",
    days: ["Workout", "Deep Work", "Deep Work", "", "", "", ""],
  },
  {
    label: "Work",
    days: ["Project", "Project", "Project", "", "Plan", "", "Rest"],
  },
  {
    label: "Evening",
    days: ["Family", "Learning", "Learning", "", "Family", "", ""],
  },
  {
    label: "Night",
    days: ["Journal", "Journal", "Journal", "", "Journal", "", ""],
  },
],
schedule_days: [" ","Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  habitTracker: [
    {
      name: "Workout",
      values: [1, 1, 0, 1, 0, 0, 1],
    },
    {
      name: "Meditate",
      values: [1, 1, 1, 0, 0, 1, 0],
    },
    {
      name: "Read",
      values: [1, 0, 1, 1, 0, 1, 1],
    },
  ],
    reflection: {
      win: "",
      improve: "",
    }
  },
  weeklyplanner1: {
    title: "Weekly Life Planner",
    subtitle: "May 19 - May 25, 2026",
    focus: "Consistency",

    priorities: [
      "Finish project proposal",
      "Workout 4x this week",
      "Save $200",
    ],

    schedule: [
  {
    label: "Morning",
    days: ["Workout", "Deep Work", "Deep Work", "", "", "", ""],
  },
  {
    label: "Work",
    days: ["Project", "Project", "Project", "", "Plan", "", "Rest"],
  },
  {
    label: "Evening",
    days: ["Family", "Learning", "Learning", "", "Family", "", ""],
  },
  {
    label: "Night",
    days: ["Journal", "Journal", "Journal", "", "Journal", "", ""],
  },
],
schedule_days: [" ","Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  habitTracker: [
    {
      name: "Workout",
      values: [1, 1, 0, 1, 0, 0, 1],
    },
    {
      name: "Meditate",
      values: [1, 1, 1, 0, 0, 1, 0],
    },
    {
      name: "Read",
      values: [1, 0, 1, 1, 0, 1, 1],
    },
  ],
    weeklyGoals: {
  goal1: "Launch portfolio",
  goal2: "Exercise 5 days",
  goal3: "Complete course"
}
  },
  weeklyplanner2: {
  title: "🌿 Weekly Wellness Planner",
  subtitle: "May 19 - May 25, 2026",
  focus: "Mind • Body • Balance",

  priorities: [
    "🧘 Practice yoga 5x",
    "💧 Drink 3L water daily",
    "😴 Sleep before 10 PM",
  ],

  schedule: [
    {
      label: "☀️ Morning",
      days: [
        "Yoga",
        "Meditation",
        "Stretching",
        "Breathing",
        "Yoga",
        "Walk",
        "Sunrise Walk"
      ],
    },

    {
      label: "💪 Activity",
      days: [
        "Gym",
        "Walk 10k",
        "Cycling",
        "Workout",
        "Core Training",
        "Nature Walk",
        "Rest"
      ],
    },

    {
      label: "🥗 Nutrition",
      days: [
        "Protein Meal",
        "Green Juice",
        "Salad",
        "Fruit Bowl",
        "Protein Meal",
        "Detox Water",
        "Cheat Meal"
      ],
    },

    {
      label: "🌙 Night",
      days: [
        "Journal",
        "Reading",
        "Meditation",
        "Digital Detox",
        "Journal",
        "Relax",
        "Gratitude"
      ],
    },
  ],

  schedule_days: [" ", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  habitTracker: [
    {
      name: "💧 Hydration",
      values: [1, 1, 1, 0, 1, 1, 1],
    },
    {
      name: "🧘 Meditation",
      values: [1, 1, 0, 1, 1, 0, 1],
    },
    {
      name: "👣 10K Steps",
      values: [1, 0, 1, 1, 1, 1, 0],
    },
    {
      name: "😴 Sleep Early",
      values: [1, 1, 1, 1, 0, 1, 1],
    },
  ],

  reflection: {
    win: "Stayed consistent with hydration and movement.",
    improve: "Reduce screen time before sleep.",
  }
},
  goalssystem: {
  title: "My Goals",
  year: 2026,
  goals: [
    {
      category: "Career",
      title: "Become a Senior Product Manager",
      progress: 70,
      target: "Dec 31, 2026",
      tasks: [
        { text: "Upskill in leadership", done: false },
        { text: "Lead 2 major projects", done: false },
        { text: "Get promoted", done: false }
      ]
    },
    {
      category: "Health",
      title: "Get in best shape",
      progress: 60,
      target: "Sep 30, 2026",
      tasks: [
        { text: "Workout daily/week", done: true },
        { text: "Eat clean 80%", done: false },
        { text: "Sleep 7–8 hours", done: false }
      ]
    },
    {
      category: "Finance",
      title: "Save $10,000",
      progress: 60,
      target: "Nov 30, 2026",
      tasks: [
        { text: "Save $1,000/month", done: true },
        { text: "Invest Monthly", done: false },
        { text: "Reduce Expenses", done: false }
      ]
    },
    {
      category: "Personal Growth",
      title: "Read 50 Books",
      progress: 60,
      target: "July 31, 2026",
      tasks: [
        { text: "Read 30 mins daily", done: true },
        { text: "Join at library", done: false },
        { text: "Learn from e-websites", done: false }
      ]
    }
  ]
},
goalssystem1: {
  title: "My Goals",
  year: 2026,
  goals: [
    {
      category: "Career",
      title: "Become a Senior Product Manager",
      progress: 70,
      target: "Dec 31, 2026",
      tasks: [
        { text: "Upskill in leadership", done: false },
        { text: "Lead 2 major projects", done: false },
        { text: "Get promoted", done: false }
      ]
    },
    {
      category: "Health",
      title: "Get in best shape",
      progress: 60,
      target: "Sep 30, 2026",
      tasks: [
        { text: "Workout daily/week", done: true },
        { text: "Eat clean 80%", done: false },
        { text: "Sleep 7–8 hours", done: false }
      ]
    },
    {
      category: "Finance",
      title: "Save $10,000",
      progress: 60,
      target: "Nov 30, 2026",
      tasks: [
        { text: "Save $1,000/month", done: true },
        { text: "Invest Monthly", done: false },
        { text: "Reduce Expenses", done: false }
      ]
    },
    {
      category: "Personal Growth",
      title: "Read 50 Books",
      progress: 60,
      target: "July 31, 2026",
      tasks: [
        { text: "Read 30 mins daily", done: true },
        { text: "Join at library", done: false },
        { text: "Learn from e-websites", done: false }
      ]
    }
  ]
},
goalssystem2: {
  title: "🌿 My Wellness Goals",
  year: 2026,

  goals: [
    {
      category: "🧘 Mindfulness",
      title: "Build a Daily Meditation Practice",
      progress: 75,
      target: "Dec 31, 2026",

      tasks: [
        { text: "Meditate 15 mins daily", done: true },
        { text: "Practice deep breathing", done: true },
        { text: "Journal gratitude daily", done: false }
      ]
    },

    {
      category: "💪 Fitness",
      title: "Build a Strong & Active Body",
      progress: 65,
      target: "Sep 30, 2026",

      tasks: [
        { text: "Workout 5x/week", done: true },
        { text: "Walk 10K steps daily", done: false },
        { text: "Stretch every morning", done: true }
      ]
    },

    {
      category: "💧 Hydration & Nutrition",
      title: "Fuel My Body Better",
      progress: 70,
      target: "Nov 30, 2026",

      tasks: [
        { text: "Drink 3L water daily", done: true },
        { text: "Eat clean 80%", done: false },
        { text: "Reduce sugar intake", done: false }
      ]
    },

    {
      category: "🌙 Sleep & Recovery",
      title: "Improve Sleep Quality",
      progress: 60,
      target: "Jul 31, 2026",

      tasks: [
        { text: "Sleep before 10 PM", done: true },
        { text: "No screens before bed", done: false },
        { text: "Get 8 hours sleep", done: false }
      ]
    }
  ]
},
habits_routinetracker : {
  title: "Habit & Routine Tracker",
  week: "May 19 – May 25, 2025",

  habits: [
    { name: "Morning Routine", days: [1,1,1,1,1,0,0] },
    { name: "Workout", days: [1,1,1,1,1,0,0] },
    { name: "Meditate", days: [1,1,1,1,1,0,0] },
    { name: "Read", days: [1,1,1,1,1,0,0] },
    { name: "No Sugar", days: [1,1,1,1,1,0,0] },
    { name: "7k Steps", days: [1,1,1,1,1,0,0] },
    { name: "Plan Tomorrow", days: [1,1,1,1,1,0,0] }
  ],

  completionRate: 78,
  bestStreak: 12,

  today: [
    "Wake up 6:00 AM",
    "Drink water",
    "Meditate 10 min",
    "Workout"
  ],

  notes: "Felt great after workout! Energy high."
},
habits_routinetracker1 : {
  title: "Habit & Routine Tracker",
  week: "May 19 – May 25, 2025",

  habits: [
    { name: "Morning Routine", days: [1,1,1,1,1,0,0] },
    { name: "Workout", days: [1,1,1,1,1,0,0] },
    { name: "Meditate", days: [1,1,1,1,1,0,0] },
    { name: "Read", days: [1,1,1,1,1,0,0] },
    { name: "No Sugar", days: [1,1,1,1,1,0,0] },
    { name: "7k Steps", days: [1,1,1,1,1,0,0] },
    { name: "Plan Tomorrow", days: [1,1,1,1,1,0,0] }
  ],

  completionRate: 78,
  bestStreak: 12,

  today: [
    "Wake up 6:00 AM",
    "Drink water",
    "Meditate 10 min",
    "Workout"
  ],

  notes: "Felt great after workout! Energy high."
},
habits_routinetracker2: {
  title: "🌿 Wellness Habit Tracker",
  week: "May 19 – May 25, 2026",

  habits: [
    { name: "☀️ Morning Stretch", days: [1,1,1,1,1,0,1] },
    { name: "💧 Drink 3L Water", days: [1,1,1,1,0,1,1] },
    { name: "🧘 Meditation", days: [1,1,0,1,1,1,0] },
    { name: "👣 10K Steps", days: [1,0,1,1,1,1,0] },
    { name: "💪 Workout", days: [1,1,1,0,1,0,1] },
    { name: "🥗 Clean Eating", days: [1,1,1,1,0,1,1] },
    { name: "🌙 Sleep Before 10PM", days: [1,1,0,1,1,1,1] }
  ],

  completionRate: 85,
  bestStreak: 18,

  today: [
    "☀️ Wake up at 6:00 AM",
    "💧 Drink lemon water",
    "🧘 15 min meditation",
    "🚶 Morning walk",
    "🥗 Eat a healthy breakfast"
  ],

  notes: "Energy levels improved. Sleep quality and hydration were strong this week."
},
financeoverview :{
  month: "May 2025",

  income: 4200,
  expenses: 2315,
  savings: 1885,
  investments: 3640,
expenseBreakdown: [
  { name: "Rent", percent: 40, amount: 926, color: "#3b82f6" },
  { name: "Food", percent: 20, amount: 463, color: "#f59e0b" },
  { name: "Transport", percent: 15, amount: 347, color: "#10b981" },
  { name: "Utilities", percent: 10, amount: 231, color: "#ef4444" },
  { name: "Others", percent: 15, amount: 348, color: "#8b5cf6" }
],
  savingsGoal: 2000,
  saved: 1885,

  goals: [
    { name: "Emergency Fund", progress: 60, target: "Dec 2025" },
    { name: "Invest", progress: 40, target: "Aug 2025" },
    { name: "Pay Credit Card", progress: 80, target: "Oct 2025" }
  ]
},
financeoverview1 :{
  month: "May 2025",

  income: 4200,
  expenses: 2315,
  savings: 1885,
  investments: 3640,
expenseBreakdown: [
  { name: "Rent", percent: 40, amount: 926, color: "#3b82f6" },
  { name: "Food", percent: 20, amount: 463, color: "#f59e0b" },
  { name: "Transport", percent: 15, amount: 347, color: "#10b981" },
  { name: "Utilities", percent: 10, amount: 231, color: "#ef4444" },
  { name: "Others", percent: 15, amount: 348, color: "#8b5cf6" }
],
  savingsGoal: 2000,
  saved: 1885,

  goals: [
    { name: "Emergency Fund", progress: 60, target: "Dec 2025" },
    { name: "Invest", progress: 40, target: "Aug 2025" },
    { name: "Pay Credit Card", progress: 80, target: "Oct 2025" }
  ]
},
financeoverview2: {
  month: "May 2026",

  income: 8,
  expenses: 9500,
  savings: 3,
  investments: 45,

  expenseBreakdown: [
    { name: "😴 Sleep", percent: 30, amount: 8, color: "#3b82f6" },
    { name: "💧 Hydration", percent: 20, amount: 3, color: "#06b6d4" },
    { name: "👣 Steps", percent: 25, amount: 9500, color: "#10b981" },
    { name: "💪 Workout", percent: 15, amount: 45, color: "#f59e0b" },
    { name: "🧘 Recovery", percent: 10, amount: 20, color: "#8b5cf6" }
  ],

  savingsGoal: 10000,
  saved: 9500,

  goals: [
    { name: "🌙 Sleep Goal", progress: 80, target: "Daily" },
    { name: "💧 Hydration Goal", progress: 90, target: "Daily" },
    { name: "👣 Step Goal", progress: 95, target: "Daily" }
  ]
},
}

export default lifeoperatingsystemData