export type ServiceId =
  | "audio"
  | "video"
  | "chat"
  | "customs"
  | "premade"
  | "therapy"
  | "games"
  | "tribute";

export type Service = {
  id: ServiceId;
  href: string;
  name: string;
  short: string;
  tease: string;
  from: number;
  unit: string;
  body: string[];
  includes: string[];
  rules: string[];
};

export const SERVICES: Service[] = [
  {
    id: "audio",
    href: "/sessions/audio",
    name: "Audio call",
    short: "Voice. Instructions. You don’t get the view — you get the tone that ruins you.",
    tease: "I talk. You drip. You send.",
    from: 80,
    unit: "15 min",
    body: [
      "You don’t need my face to fall apart. My voice is enough to put a grown man on the floor with his phone in one hand and his wallet in the other.",
      "Audio is for the ones who get hard from being told. I will walk you through worship, sniffing, licking the air like a desperate dog, counting out tributes, and staying denied because pretty feet don’t owe you a finish.",
      "This is not a girlfriend check-in. This is a paid owner call. You greet properly. You don’t ramble. You don’t ask for free extras. You listen like the weak little foot boy you actually are.",
    ],
    includes: [
      "Live voice, my rules",
      "Foot worship / JOI / findom tone",
      "Name-use if you pay for it",
      "Tribute prompts during the call",
    ],
    rules: [
      "Tribute first, then the call happens.",
      "No recording unless I say so.",
      "If you go quiet and cheap, I hang up and keep it.",
    ],
  },
  {
    id: "video",
    href: "/sessions/video",
    name: "Video call",
    short: "Cam on. Soles up. Wallet open. Drain during the session if I’m in the mood.",
    tease: "You wanted the view. Pay for the view.",
    from: 150,
    unit: "15 min",
    body: [
      "Video is where foot bois lose their last bit of dignity. You will see the soles you jerk off to — closer than your gf ever let you — and you will still not be allowed to touch.",
      "I dangle. I flex the arch. I put a Louboutin in your face through the glass and laugh when you whimper like that’s a personality. If I want your wallet during the call, you send. Mid-sentence. Mid-moan. Mid-excuse.",
      "Cam is a privilege. I can sit pretty in silence and still own you. You will keep your camera as I say. You will not screenshot. You will not ‘lose connection’ when it’s time to pay.",
    ],
    includes: [
      "Live video, feet / heels / face as I choose",
      "Dangling, soles, toes, worship commands",
      "Optional drain during the call",
      "Aftercare is not included. Tribute is.",
    ],
    rules: [
      "No nudity. Don’t ask. Instant block.",
      "No recording. No screenshots. No ‘just one still’.",
      "If you stall on a send, the call is over and you still paid.",
    ],
  },
  {
    id: "chat",
    href: "/sessions/chat",
    name: "Chat session",
    short: "Typed ownership. Slow, mean, expensive. For piggies who live in their inbox.",
    tease: "You text like a beggar. I reply like an owner.",
    from: 50,
    unit: "15 min",
    body: [
      "Chat is for the obsessed. The ones who need a caption under their ribs all day. I will write you into the floor — dirty, specific, and not impressed.",
      "You will describe what you’d do to my dirty soles if you were allowed. You are not allowed. That’s the whole session. I will make you admit you stare at pretty feet and call it love. It isn’t love. It’s a leak in your skull and I collect the drip.",
      "Loyal slaves only. If you vanish after two paragraphs, don’t come back acting brand new.",
    ],
    includes: [
      "Focused 1:1 typed session",
      "Humiliation, worship, findom, foot filth",
      "Tasks you actually do",
      "Screenshot of sends expected",
    ],
    rules: [
      "Don’t dump a novella before tribute.",
      "I set the pace. You don’t double-text me into a free session.",
      "If you get blocked, that’s part of your education.",
    ],
  },
  {
    id: "customs",
    href: "/customs",
    name: "Customs",
    short: "Your filthiest request, my feet, my rules. Pics or clips made to haunt you.",
    tease: "These feet are available for your naughtiest customs.",
    from: 80,
    unit: "set / clip",
    body: [
      "You have a scene in your head. Soles on a phone. Toes in a glass. Heels on a keyboard. A slow dangle while I tell you your gf would never. I can make it. You cannot direct me like a porn set.",
      "Tell me the filth. I decide the frame. I decide if you’re even worthy of that angle. Customs are not a loophole for nudity. They’re a loophole for your brain — I put my feet in the exact nightmare you can’t shake, then I charge you again when you rewatch.",
      "Rush fees exist because your desperation is not my emergency. Unless you make it expensive enough to be.",
    ],
    includes: [
      "Photo sets or short clips",
      "Your scenario, my veto",
      "Personalised captions if you pay",
      "Delivery when I feel like being generous — after you pay",
    ],
    rules: [
      "Write the request clearly. Don’t be cute and vague.",
      "No real-person involvement, no illegal, no minors, no nudity.",
      "Edits are not free. Getting it ‘slightly different’ is a new custom.",
    ],
  },
  {
    id: "premade",
    href: "/premade",
    name: "Premades",
    short: "Ready pics and clips. Instant rot for your camera roll.",
    tease: "You don’t get originals for peanuts.",
    from: 25,
    unit: "item",
    body: [
      "Premades are the leftovers I still charge for, because even my scraps ruin your night. Soles, toes, arches, Louboutins, dangling — already shot, already mean, already better than whatever your last girl sent you.",
      "You buy. You drool. You come back for the next one because one still is never enough for a brain that lives on the floor.",
    ],
    includes: ["Curated stills", "Short clips", "Vault drops", "No resale, no leak"],
    rules: [
      "Leaking gets you hunted and banned.",
      "Personal use only, loser.",
      "Asking me to recreate a premade as a custom is extra.",
    ],
  },
  {
    id: "therapy",
    href: "/therapy",
    name: "Therapy / JOI",
    short: "Sunday-night medicine. I take the stress. You take the orders. Findom optional, usually not.",
    tease: "Who is up for a therapy session?",
    from: 120,
    unit: "session",
    body: [
      "You worked all week like a good little machine. Now you want the pretty Muslim princess to unscrew your head. Fine. Pay.",
      "Therapy here is JOI, denial, foot worship, and the kind of sweet-mean voice that makes you thank me for wrecking you. Findom / femdom JOI if you need the money pain with the sole pain. I will tell you when you can touch. I will tell you when you can’t. I will tell you when to send.",
      "This is not a licensed anything. This is a spoiled 22-year-old with prettier feet than your entire dating history, charging you to feel owned.",
    ],
    includes: ["Guided JOI / denial", "Foot-focused filth", "Optional wallet drain", "Afterglow humiliation"],
    rules: ["Safeword exists. Broke-word does not.", "You follow instructions or you get laughed at and billed."],
  },
  {
    id: "games",
    href: "/games",
    name: "Games",
    short: "Cards. Red / green light. Dice. Play stupid games, lose real money.",
    tease: "Lucky is not a personality. Paying is.",
    from: 100,
    unit: "round",
    body: [
      "You want to gamble your dignity. Cute. We can play cards, red light / green light, dice — whatever makes your stomach drop when the number lands.",
      "Every loss is tribute. Every win is me letting you lose slower. I don’t play fair. I play pretty. You still send.",
    ],
    includes: ["Live game with me", "Stakes we agree before", "Humiliation on every roll", "Add-on drain"],
    rules: ["Stakes up front.", "No crying about RNG. The house is my feet.", "Cheating is a block."],
  },
  {
    id: "tribute",
    href: "/tribute",
    name: "Tribute / drain",
    short: "Sending is devotion. You get nothing in return. That’s how you know it’s real.",
    tease: "Coffee. Heels. Wallet. Drain.",
    from: 15,
    unit: "any",
    body: [
      "Tribute is not a session. Tribute is you understanding your place. Coffee reimbursement. Heels tax. Drain until I smile. You do not get a pic because you were a good boy. You get to stay in my atmosphere.",
      "The ones who send without being told? That’s actually hot. The ones who negotiate? That’s a block waiting to happen.",
    ],
    includes: ["Coffee from $15", "Heels / nails / spoiled princess", "Full drain by agreement", "Silent sends welcome"],
    rules: ["No ‘what do I get’.", "No refunds on devotion.", "Proof of send or it didn’t happen."],
  },
];

export function serviceById(id: string) {
  return SERVICES.find((s) => s.id === id);
}
