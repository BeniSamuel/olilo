const boarding_data = [
  {
    id: 1,
    type: "interactive",
    question: `What languages do \n you want to use \n for Olilo?`,
    options: [
      {
        country: "United State",
        icon: require("../../../assets/boarding/american_flag.png"),
      },
      {
        country: "French",
        icon: require("../../../assets/boarding/france_flag.png"),
      },
      {
        country: "Kinyarwanda",
        icon: require("../../../assets/boarding/rwanda_flag.png"),
      },
      {
        country: "Spanish",
        icon: require("../../../assets/boarding/spanish_flag.png"),
      },
    ],
  },
  {
    id: 2,
    type: "interactive",
    question: "Why are you using \n Olilo?",
    options: [
      {
        country: "To review books i read",
        icon: require("../../../assets/boarding/book_icon.png"),
      },
      {
        country: "Support my education",
        icon: require("../../../assets/boarding/graduation_icon.png"),
      },
      {
        country: "Vacation usage",
        icon: require("../../../assets/boarding/plane_icon.png"),
      },
      {
        country: "Just for fun",
        icon: require("../../../assets/boarding/just_fun.png"),
      },
      {
        country: "Others reason",
        icon: require("../../../assets/boarding/reason.png"),
      },
    ],
  },
  {
    id: 3,
    type: "interactive",
    question: "This is what you can \n achieve with Olilo?",
    options: [
      {
        icon: require("../../../assets/boarding/record.png"),
        topic: "Record easily what you\nread from several books",
        subject: "Write key points from the books\nand your own insights",
      },
      {
        icon: require("../../../assets/boarding/review.png"),
        topic: "Review easily what you\nread from several books",
        subject: "Review the key points your\nwrote from several books",
      },
      {
        icon: require("../../../assets/boarding/reminder.png"),
        topic: "Cultivate reviewing habit",
        subject: "Smart reminders and fun challenges.",
      },
    ],
  },
  {
    id: 4,
    type: "interactive",
    question: "What are your daily \n review time?",
    options: [
      { time: "5 mins / day", status: "Relax" },
      { time: "10 mins / day", status: "Normal" },
      { time: "15 mins / day", status: "Serious" },
      { time: "30 mins / day", status: "Great" },
      { time: "60 mins / day", status: "Wow" },
    ],
  },
];

export default boarding_data;
