import { BabySizes, WeeklyNotes } from '../types';

// Baby sizes by week
export const babySizes: BabySizes = {
    1: { 
        size: "Poppy seed", 
        length: "0.1-0.2 mm", 
        weight: "< 0.1 g",
        description: "The fertilized egg implants in your uterus and begins to form the amniotic sac and placenta.",
        milestones: ["Implantation occurs", "Cells begin to differentiate", "Placenta starts forming"]
      },
      2: { 
        size: "Sesame seed", 
        length: "0.2-1.0 mm", 
        weight: "< 0.1 g",
        description: "The embryo forms a primitive heart tube that will begin to beat around day 16.",
        milestones: ["Neural tube (brain, spinal cord) begins forming", "Primitive heart tube develops", "Amniotic sac forms"]
      },
      3: { 
        size: "Lentil", 
        length: "2-4 mm", 
        weight: "< 0.1 g",
        description: "The embryo's heart begins beating and facial features start to form.",
        milestones: ["Heart begins beating", "Arm and leg buds appear", "Neural tube closes", "Blood circulation begins"]
      },
      4: { 
        size: "Blueberry", 
        length: "4-6 mm", 
        weight: "0.1 g",
        description: "Facial features continue developing, and limb buds grow into paddle-shaped hands and feet.",
        milestones: ["Eyes, ears, and nose begin to form", "Limb buds elongate", "Tail begins to disappear"]
      },
      5: { 
        size: "Raspberry", 
        length: "8-10 mm", 
        weight: "1 g",
        description: "The embryo begins moving, though you won't feel it yet. Major organ systems continue forming.",
        milestones: ["Primitive stomach, liver, kidneys, and lungs form", "Digits (fingers/toes) begin to form", "First movements occur"]
      },
      6: { 
        size: "Green pea", 
        length: "11-13 mm", 
        weight: "2-3 g",
        description: "The embryo is now called a fetus. Facial features become more defined.",
        milestones: ["Nose and upper lip form", "Fingers and toes separate", "Brain activity begins", "Intestines forming"]
      },
      7: { 
        size: "Blueberry", 
        length: "15-17 mm", 
        weight: "5-6 g",
        description: "The fetus begins producing urine and can make different facial expressions.",
        milestones: ["Eyelids form and fuse shut", "Teeth buds form", "Joints begin to form", "Kidneys producing urine"]
      },
      8: { 
        size: "Raspberry", 
        length: "18-22 mm", 
        weight: "8-10 g",
        description: "All essential organs have begun forming, and distinct fingers and toes develop.",
        milestones: ["All essential organs have begun to form", "Unique fingerprints forming", "Baby can make sucking motions"]
      },
      9: { 
        size: "Green olive", 
        length: "23-27 mm", 
        weight: "12-14 g",
        description: "Tiny muscles develop, allowing for more movement. External genitalia begin to form.",
        milestones: ["External genitalia begin to form", "Can swallow and produce digestive enzymes", "Heart fully formed with 4 chambers"]
      },
      10: { 
        size: "Prune", 
        length: "30-35 mm", 
        weight: "14-18 g",
        description: "The fetus can now make coordinated limb movements. All vital organs are formed.",
        milestones: ["All vital organs formed", "Can move arms and legs", "Digestive system begins functioning"]
      },
      11: { 
        size: "Lime", 
        length: "40-45 mm", 
        weight: "20-25 g",
        description: "The fetus has developed reflexes and can open and close fingers.",
        milestones: ["Reflexes developing", "Fingernails & toenails forming", "Can make breathing motions"]
      },
      12: { 
        size: "Plum", 
        length: "55-60 mm", 
        weight: "30-35 g",
        description: "The fetus can make facial expressions and begins practicing breathing movements.",
        milestones: ["Can make facial expressions", "Bone ossification begins", "Vocal cords forming"]
      },
      13: { 
        size: "Peach", 
        length: "65-70 mm", 
        weight: "40-45 g",
        description: "The fetus has unique fingerprints and can suck its thumb.",
        milestones: ["Unique fingerprints formed", "Can suck thumb", "Intestines move from umbilical cord into abdomen"]
      },
      14: { 
        size: "Lemon", 
        length: "80-85 mm", 
        weight: "55-60 g",
        description: "The fetus begins producing thyroid hormones and has a functional digestive system.",
        milestones: ["Producing thyroid hormones", "Making facial expressions", "Beginning to develop hair pattern"]
      },
      15: { 
        size: "Apple", 
        length: "95-100 mm", 
        weight: "70-80 g",
        description: "The fetus can sense light and is developing taste buds.",
        milestones: ["Can sense light", "Taste buds developing", "Scalp hair pattern established"]
      },
      16: { 
        size: "Avocado", 
        length: "110-120 mm", 
        weight: "100-110 g",
        description: "The fetus can make facial expressions and grasp with its hands.",
        milestones: ["Can make complex facial expressions", "Growing more muscles", "Heart pumps 25 quarts of blood daily"]
      },
      17: { 
        size: "Pear", 
        length: "130-140 mm", 
        weight: "130-150 g",
        description: "The fetus is practicing sucking and swallowing, important skills for feeding.",
        milestones: ["Practicing sucking and swallowing", "Developing adipose (fat) tissue", "Skeleton hardening"]
      },
      18: { 
        size: "Sweet Potato", 
        length: "140-150 mm", 
        weight: "160-190 g",
        description: "The fetus is now about half its final birth length and can hear sounds.",
        milestones: ["Can hear sounds from outside", "Myelin (nerve coating) forming", "Beginning to establish sleep patterns"]
      },
      19: { 
        size: "Mango", 
        length: "150-160 mm", 
        weight: "220-260 g",
        description: "The fetus develops a protective coating called vernix and lanugo hair.",
        milestones: ["Vernix (waxy protective coating) forms", "Lanugo (fine hair) covers body", "Sensory brain development accelerates"]
      },
      20: { 
        size: "Banana", 
        length: "160-170 mm", 
        weight: "280-320 g",
        description: "You may feel stronger movements as the fetus grows. Halfway point!",
        milestones: ["Movements become stronger", "Regular sleep/wake cycles", "Sweat glands forming"]
      },
      21: { 
        size: "Carrot", 
        length: "170-180 mm", 
        weight: "340-390 g",
        description: "The fetus has fully formed eyebrows and eyelids, which remain shut.",
        milestones: ["Eyebrows and eyelids fully formed", "Can swallow amniotic fluid", "Bone marrow begins producing blood cells"]
      },
      22: { 
        size: "Corn", 
        length: "180-190 mm", 
        weight: "430-470 g",
        description: "The fetus has developed a sense of touch and can feel things.",
        milestones: ["Sense of touch developing", "Eyes formed but iris lacks pigment", "Developing coordinated movements"]
      },
      23: { 
        size: "Large Mango", 
        length: "190-210 mm", 
        weight: "500-550 g",
        description: "The fetus practices breathing movements and has a regular sleep cycle.",
        milestones: ["Practicing breathing movements", "Distinctive sleep cycles", "Inner ear fully developed (balance)"]
      },
      24: { 
        size: "Cantaloupe", 
        length: "210-230 mm", 
        weight: "600-650 g",
        description: "The fetus has a chance of survival if born now with intensive medical intervention.",
        milestones: ["Lungs developing surfactant", "Skin becoming more opaque", "Responds to familiar sounds"]
      },
      25: { 
        size: "Cauliflower", 
        length: "220-240 mm", 
        weight: "650-700 g",
        description: "The fetus is growing more fat and has a hand grasp reflex.",
        milestones: ["Blood vessels in lungs developing", "More fat accumulating", "Hand grasp reflex developed"]
      },
      26: { 
        size: "Lettuce", 
        length: "230-250 mm", 
        weight: "760-820 g",
        description: "The fetus's eyes begin to open, and brain wave activity increases.",
        milestones: ["Eyes begin to open", "Brain wave activity for hearing", "Inhaling/exhaling amniotic fluid"]
      },
      27: { 
        size: "Rutabaga", 
        length: "250-270 mm", 
        weight: "860-920 g",
        description: "The fetus has periods of REM sleep, indicating brain development.",
        milestones: ["REM sleep occurring", "Can distinguish sweet tastes", "Brain developing rapidly"]
      },
      28: { 
        size: "Eggplant", 
        length: "260-280 mm", 
        weight: "960-1050 g",
        description: "The fetus can blink its eyes and has eyelashes.",
        milestones: ["Blinking eyes", "Eyelashes present", "Surfactant production increasing"]
      },
      29: { 
        size: "Butternut Squash", 
        length: "270-290 mm", 
        weight: "1100-1200 g",
        description: "The fetus is gaining weight and developing more fat stores.",
        milestones: ["Developing more fat stores", "Brain can regulate primitive breathing", "Can detect light/dark"]
      },
      30: { 
        size: "Cabbage", 
        length: "280-300 mm", 
        weight: "1250-1350 g",
        description: "The fetus has fingernails and toenails, and can suck its thumb.",
        milestones: ["Fingernails and toenails grown", "Brain connections increasing rapidly", "More coordinated movements"]
      },
      31: { 
        size: "Coconut", 
        length: "290-310 mm", 
        weight: "1500-1600 g",
        description: "The fetus can turn its head from side to side.",
        milestones: ["Can turn head side to side", "Immune system developing", "Developing sleeping patterns"]
      },
      32: { 
        size: "Jicama", 
        length: "310-330 mm", 
        weight: "1700-1800 g",
        description: "The fetus has toenails now and is practicing breathing.",
        milestones: ["Toenails completely formed", "Practicing breathing", "Central nervous system can regulate temperature"]
      },
      33: { 
        size: "Pineapple", 
        length: "320-340 mm", 
        weight: "1900-2100 g",
        description: "The fetus has reached a weight where survival outside the womb is likely with medical care.",
        milestones: ["Lungs developing rapidly", "Coordinating sucking and swallowing", "Pupillary light reflex functioning"]
      },
      34: { 
        size: "Cantaloupe", 
        length: "340-360 mm", 
        weight: "2200-2400 g",
        description: "The fetus has almost fully developed lungs.",
        milestones: ["Fingernails reach fingertips", "Nearly fully developed lungs", "Skin becoming smoother"]
      },
      35: { 
        size: "Honeydew Melon", 
        length: "350-370 mm", 
        weight: "2500-2700 g",
        description: "The fetus continues to gain weight and prepare for birth.",
        milestones: ["Kidney function maturing", "Liver processing waste", "Most organ systems maturing"]
      },
      36: { 
        size: "Large Romaine Lettuce", 
        length: "370-390 mm", 
        weight: "2700-2900 g",
        description: "The fetus is considered early term and has a good chance of healthy survival.",
        milestones: ["Gaining weight rapidly", "Meconium in intestines", "Antibodies transferring from mother"]
      },
      37: { 
        size: "Winter Melon", 
        length: "380-400 mm", 
        weight: "2900-3100 g",
        description: "The fetus is considered early term and continues preparing for birth.",
        milestones: ["Considered early term", "Most systems fully developed", "Head may begin to descend"]
      },
      38: { 
        size: "Pumpkin", 
        length: "400-420 mm", 
        weight: "3100-3300 g",
        description: "The fetus is now full term and ready for birth at any time.",
        milestones: ["Full term", "Lungs likely mature", "Strong sucking reflex"]
      },
      39: { 
        size: "Watermelon", 
        length: "410-430 mm", 
        weight: "3300-3500 g",
        description: "The fetus continues to gain weight and prepare for delivery.",
        milestones: ["Brain growth continuing", "Chest prominent", "Firm grasp", "Surfactant production complete"]
      },
      40: { 
        size: "Small Pumpkin 🎃", 
        length: "480-530 mm", 
        weight: "3400-3600 g",
        description: "The fetus is fully developed and ready to be born.",
        milestones: ["Ready for life outside womb", "Immune system prepared", "Brain connections continuing to develop"]
      }
};

// Weekly information by week
export const weeklyNotes: WeeklyNotes = {
    4: {
        symptoms: "Missed period, fatigue, mild cramping, possibly tender breasts. Your body is working hard even though you may not feel pregnant yet.",
        husbandTips: "🎮 QUEST: Emotional Support\n- Stock up on her favorite snacks\n- Take over some household chores\n- Be patient with mood swings and understand hormonal changes\n- Start researching pregnancy together",
        nutrition: "Focus on folate-rich foods like leafy greens, citrus fruits, and beans. Stay hydrated and consider prenatal vitamins if not already taking them.",
        exercise: "Continue your normal exercise routine, but avoid overexertion. Walking and swimming are excellent options throughout pregnancy.",
        developmentHighlights: [
          "Neural tube forming (brain and spinal cord)",
          "Heart beginning to form",
          "Arm and leg buds developing"
        ]
      },
      5: {
        symptoms: "Morning sickness may begin (can occur any time of day), continued breast tenderness, fatigue, frequent urination starting.",
        husbandTips: "🎮 QUEST: Morning Sickness Support\n- Keep plain crackers by the bedside for before she gets up\n- Learn to cook mild, non-spicy meals\n- Handle strong-smelling tasks like garbage and cleaning\n- Research food aversions in pregnancy",
        nutrition: "Small, frequent meals may help with nausea. Try ginger tea or lemon water for morning sickness. Continue focusing on nutrient-dense foods when possible.",
        exercise: "Light exercise can help with fatigue and mood regulation. Try short walks or prenatal yoga if feeling up to it.",
        developmentHighlights: [
          "Heart now beating",
          "Eyes and ears beginning to form",
          "Tiny arm and leg buds becoming more defined"
        ]
      },
      6: {
        symptoms: "Continued morning sickness, frequent urination, mood swings, possible food aversions or cravings beginning.",
        husbandTips: "🎮 QUEST: Comfort Provider\n- Plan bathroom breaks during outings\n- Start pregnancy journal together\n- Research pregnancy apps to track development\n- Be understanding about food aversions",
        nutrition: "Focus on protein-rich foods when able to eat. B6-rich foods like chicken, potatoes, and bananas may help with nausea.",
        exercise: "Continue gentle exercise if feeling well enough. Don't push through exhaustion—rest when needed.",
        developmentHighlights: [
          "Facial features becoming more defined",
          "Fingers and toes starting to form",
          "Brain developing rapidly"
        ]
      },
      7: {
        symptoms: "Morning sickness may intensify, food aversions/cravings, continued fatigue, possible heightened sense of smell.",
        husbandTips: "🎮 QUEST: Food Manager\n- Be ready for midnight snack runs\n- Keep track of food aversions in a shared note\n- Make sure she stays hydrated with water, coconut water, or sports drinks\n- Prepare small, frequent meals",
        nutrition: "Continue with small, frequent meals. Focus on getting adequate protein and healthy fats when possible.",
        exercise: "Gentle stretching can help with growing discomfort. Consider prenatal-specific exercise classes if available.",
        developmentHighlights: [
          "Eyelid folds forming",
          "Limbs elongating",
          "Digestive system developing"
        ]
      },
      8: {
        symptoms: "Fatigue, heightened sense of smell, possible breast growth, continued morning sickness.",
        husbandTips: "🎮 QUEST: Environment Master\n- Use unscented cleaning products\n- Create a relaxing sleep environment\n- Take over cooking if smells bother her\n- Help with household organization for baby preparation",
        nutrition: "Try eating foods rich in B vitamins and iron to combat fatigue. Cold foods may be more tolerable if nausea continues.",
        exercise: "Swimming is excellent as it relieves pressure and helps with swelling. Consider joining a prenatal exercise class.",
        developmentHighlights: [
          "All major organs developing",
          "Webbed fingers and toes separating",
          "Unique facial features forming"
        ]
      },
      9: {
        symptoms: "Mood swings, morning sickness often peaks, possible visible changes to abdomen, breast changes continuing.",
        husbandTips: "🎮 QUEST: Emotional Guardian\n- Practice active listening without trying to 'fix' everything\n- Plan relaxing activities together\n- Start planning nursery design\n- Attend prenatal appointments together",
        nutrition: "Calcium-rich foods are important as baby's bones develop. Try dairy or dairy alternatives, leafy greens, and fortified foods.",
        exercise: "Regular activity helps manage mood swings. Pelvic floor exercises (Kegels) are beneficial to start now.",
        developmentHighlights: [
          "External genitalia beginning to develop",
          "Moving limbs (though not yet felt)",
          "All essential organs formed and beginning to function"
        ]
      },
      10: {
        symptoms: "Less fatigue for some, possible heartburn beginning, uterus size of a grapefruit, possible end of morning sickness soon.",
        husbandTips: "🎮 QUEST: Health Support\n- Stock up on antacids (doctor-approved)\n- Plan gentle exercise together\n- Start researching birthing classes\n- Help research pregnancy-safe remedies for discomfort",
        nutrition: "If heartburn begins, avoid spicy, acidic, and fatty foods. Eat smaller meals and remain upright after eating.",
        exercise: "Gentle cardio like walking remains excellent. As energy returns, you may feel able to do more activity.",
        developmentHighlights: [
          "Baby is now officially a fetus",
          "Vital organs functioning",
          "Fingers and toes fully separated"
        ]
      },
      11: {
        symptoms: "Decreased nausea, increased energy, hormonal acne possible, slight bump may be visible.",
        husbandTips: "🎮 QUEST: Activity Partner\n- Plan short, gentle walks together\n- Start pregnancy photography to document the journey\n- Research baby gear together\n- Help monitor stress levels",
        nutrition: "With nausea potentially decreasing, focus on varied, nutrient-dense foods. Iron-rich foods help prevent anemia.",
        exercise: "As energy returns, maintain regular activity. Avoid exercises lying flat on back after this point.",
        developmentHighlights: [
          "Baby can make complex facial expressions",
          "Developing reflexes",
          "External genitalia differentiating"
        ]
      },
      12: {
        symptoms: "Food cravings, round ligament pain (sharp abdominal pains), increased vaginal discharge, possible constipation.",
        husbandTips: "🎮 QUEST: Comfort Champion\n- Learn pregnancy massage techniques for back and legs\n- Help with stretching exercises\n- Start planning baby shower\n- Research baby names together",
        nutrition: "Fiber-rich foods help with constipation. Prunes, whole grains, and plenty of water can provide relief.",
        exercise: "Stretching helps with round ligament pain. Avoid quick, jerky movements that trigger this discomfort.",
        developmentHighlights: [
          "Digestive system beginning to practice",
          "Bone and cartilage forming",
          "Can move fingers and toes"
        ]
      },
      13: {
        symptoms: "Increased energy, visible bump forming, less morning sickness, possible food cravings or aversions.",
        husbandTips: "🎮 QUEST: Documentation Master\n- Take weekly bump photos\n- Start planning maternity photoshoot\n- Research childbirth classes to attend together\n- Help organize pregnancy records and appointments",
        nutrition: "With appetite likely returning, focus on nutrient-dense foods. Protein is important for baby's growth spurt.",
        exercise: "Maintain regular exercise routine. Consider prenatal yoga or swimming for low-impact options.",
        developmentHighlights: [
          "Unique fingerprints formed",
          "Vocal cords forming",
          "Intestines developing in abdomen"
        ]
      },
      14: {
        symptoms: "May feel baby's first movements (flutters), less breast tenderness, possible headaches, continued round ligament pain.",
        husbandTips: "🎮 QUEST: Second Trimester Support\n- Help monitor headaches and suggest breaks from screens\n- Learn about baby's developmental milestones\n- Start playing music or reading to baby\n- Research baby safety equipment",
        nutrition: "Omega-3 fatty acids are important for baby's brain development. Consider fatty fish (within mercury limits) or plant sources.",
        exercise: "Regular exercise helps manage blood pressure. Consider prenatal-specific classes if available.",
        developmentHighlights: [
          "Baby can squint, frown, and grimace",
          "Making coordinated limb movements",
          "Can suck thumb and respond to stimuli"
        ]
      },
      15: {
        symptoms: "More noticeable baby movements, improved hair and nail growth, possible nasal congestion, round ligament pain.",
        husbandTips: "🎮 QUEST: Connection Builder\n- Try to feel baby movements (may still be too early)\n- Research fetal development together\n- Help track baby kicks when they become regular\n- Start planning paternity leave if applicable",
        nutrition: "Vitamin C helps with iron absorption. Pair iron-rich foods with vitamin C sources like citrus or bell peppers.",
        exercise: "As your center of gravity shifts, be mindful of balance during exercise. Avoid activities with fall risk.",
        developmentHighlights: [
          "Bones becoming harder",
          "Developing sense of taste and smell",
          "Scalp hair pattern established"
        ]
      },
      16: {
        symptoms: "More defined baby bump, possible backaches, continued round ligament pain, increased appetite.",
        husbandTips: "🎮 QUEST: Preparation Leader\n- Begin setting up baby's room\n- Research infant CPR and safety classes\n- Help research pediatricians\n- Consider taking a baby care class together",
        nutrition: "Calcium remains important for developing bones. Include dairy or alternatives, leafy greens, and fortified foods.",
        exercise: "Back-strengthening exercises help prevent backaches. Prenatal yoga can be particularly beneficial.",
        developmentHighlights: [
          "Eyes can now perceive light",
          "Ears fully formed",
          "Heart pumping about 25 quarts of blood daily"
        ]
      },
      17: {
        symptoms: "More distinct movements, possible itchy skin as belly stretches, increased appetite, possible leg cramps or backaches.",
        husbandTips: "🎮 QUEST: Rest Engineer\n- Help create comfortable sleeping arrangements with pillows\n- Massage legs to help with cramps\n- Create a relaxing bedtime routine\n- Research baby sleep methods",
        nutrition: "Magnesium-rich foods like nuts, seeds, and leafy greens can help with leg cramps.",
        exercise: "Swimming is excellent for relieving pressure on joints while providing resistance training.",
        developmentHighlights: [
          "Developing adipose (fat) tissue",
          "Practicing sucking and swallowing",
          "Beginning sleep patterns"
        ]
      },
      18: {
        symptoms: "Baby kicks becoming stronger, possible backaches and round ligament pain, increased vaginal discharge.",
        husbandTips: "🎮 QUEST: Home Organizer\n- Help organize home for baby arrival\n- Create a safe sleeping environment\n- Attend anatomy scan appointment\n- Research childcare options if needed",
        nutrition: "Iron needs increase as blood volume expands. Include lean meats, beans, spinach, and fortified cereals.",
        exercise: "Pelvic tilts and gentle back stretches can help alleviate back pain. Consider a pregnancy support belt for activity.",
        developmentHighlights: [
          "Can hear sounds from outside the womb",
          "Practicing yawning and hiccuping",
          "Vernix caseosa (waxy coating) forming on skin"
        ]
      },
      19: {
        symptoms: "More pronounced baby movements, possible shortness of breath, heartburn, backaches, stretch marks may appear.",
        husbandTips: "🎮 QUEST: Comfort Creator\n- Research and prepare soothing remedies for heartburn\n- Help with household tasks requiring bending or lifting\n- Create a relaxation area in home\n- Help moisturize areas prone to stretch marks if wanted",
        nutrition: "Small, frequent meals help with heartburn. Avoid eating close to bedtime and stay upright after meals.",
        exercise: "Focus on exercises that open the chest to ease breathing, like gentle chest stretches and good posture.",
        developmentHighlights: [
          "Sensory brain development accelerating",
          "Vernix and lanugo protecting skin",
          "Regular sleep and wake cycles established"
        ]
      },
      20: {
        symptoms: "Stronger kicks and movements, Braxton Hicks contractions may start, increased back pain, possible leg cramps.",
        husbandTips: "🎮 QUEST: Milestone Celebrator\n- Celebrate halfway point of pregnancy\n- Learn to recognize Braxton Hicks vs. real contractions\n- Research birth plans together\n- Consider a babymoon vacation if possible",
        nutrition: "Vitamin D is important for bone development. Include fatty fish, fortified dairy, or supplements if prescribed.",
        exercise: "Pelvic floor exercises become increasingly important. Kegels help prepare for delivery.",
        developmentHighlights: [
          "Baby can hear and respond to external sounds",
          "Develop regular sleep/wake cycles",
          "Sweat glands forming"
        ]
      },
      21: {
        symptoms: "Stronger baby movements, possible backaches, stretch marks appearing, increased appetite, heartburn.",
        husbandTips: "🎮 QUEST: Movement Tracker\n- Help track baby's movement patterns\n- Create a kick count chart together\n- Research baby's sleep patterns\n- Plan comfortable seating arrangements",
        nutrition: "Calcium and vitamin D remain crucial for bone development. Include dairy or alternatives, leafy greens.",
        exercise: "Continue prenatal yoga or swimming. Avoid exercises lying flat on your back after 20 weeks.",
        developmentHighlights: [
          "Eyebrows and eyelids fully formed",
          "Can swallow amniotic fluid",
          "Bone marrow begins producing blood cells"
        ]
      },
      22: {
        symptoms: "More visible fetal movement, stretch marks, possible leg cramps, swelling in feet/ankles, backaches.",
        husbandTips: "🎮 QUEST: Comfort Specialist\n- Learn foot and leg massage techniques\n- Help elevate feet when resting\n- Create a pregnancy comfort station with essentials\n- Research birth classes together",
        nutrition: "Potassium-rich foods like bananas can help with leg cramps. Limit sodium to reduce swelling.",
        exercise: "Regular movement helps reduce swelling. Swimming is particularly beneficial for relieving pressure.",
        developmentHighlights: [
          "Sense of touch developing fully",
          "Responds to sounds and light",
          "Developing coordinated movements"
        ]
      },
      23: {
        symptoms: "Regular sleep cycles disrupted, increased back pain, possible varicose veins, continued swelling.",
        husbandTips: "🎮 QUEST: Sleep Optimizer\n- Create optimal sleep environment\n- Help with pillow arrangement for comfort\n- Research comfortable maternity clothes\n- Plan relaxing evening routines",
        nutrition: "Focus on foods rich in fiber to prevent constipation. Stay hydrated to help with swelling.",
        exercise: "Gentle stretching before bed can help with sleep. Avoid vigorous exercise close to bedtime.",
        developmentHighlights: [
          "Practicing breathing movements",
          "Distinctive sleep cycles",
          "Inner ear fully developed for balance"
        ]
      },
      24: {
        symptoms: "Braxton Hicks more noticeable, continued back pain, swelling in hands/feet, possible carpal tunnel symptoms.",
        husbandTips: "🎮 QUEST: Nursery Builder\n- Assemble baby furniture\n- Organize baby clothing and supplies\n- Install car seat (or learn how to)\n- Create hospital bag checklist together",
        nutrition: "Continued focus on iron-rich foods to support increased blood volume. Hydration helps with Braxton Hicks.",
        exercise: "Stretching hands and wrists can help with carpal tunnel symptoms. Continue gentle overall activity.",
        developmentHighlights: [
          "Lung developing surfactant for breathing",
          "Skin becoming less transparent",
          "Baby responds more strongly to familiar sounds like mother's voice"
        ]
      },
      25: {
        symptoms: "Increased baby movements, possible hemorrhoids, continued heartburn, possible restless leg syndrome.",
        husbandTips: "🎮 QUEST: Circulation Helper\n- Encourage regular position changes\n- Help with leg elevation during rest\n- Research hemorrhoid prevention methods\n- Plan comfortable workstation setup",
        nutrition: "High-fiber foods help prevent hemorrhoids. Iron-rich foods combat fatigue and support blood volume.",
        exercise: "Walking and swimming help with circulation. Avoid sitting or standing for long periods.",
        developmentHighlights: [
          "Blood vessels in lungs developing",
          "More fat accumulating",
          "Hand grasp reflex developed"
        ]
      },
      26: {
        symptoms: "Eye puffiness, possible carpal tunnel symptoms, increased urination, possible dizziness when standing.",
        husbandTips: "🎮 QUEST: Stability Support\n- Help with slow position changes\n- Monitor for signs of preeclampsia\n- Create hand/wrist exercise routine\n- Ensure adequate hydration",
        nutrition: "Adequate protein and fluids help reduce swelling. Avoid excessive sodium intake.",
        exercise: "Hand and wrist stretches for carpal tunnel. Continue gentle cardio for circulation.",
        developmentHighlights: [
          "Eyes begin to open",
          "Brain wave activity for hearing",
          "Inhaling and exhaling amniotic fluid"
        ]
      },
      27: {
        symptoms: "Possible snoring, increased appetite, visible baby movements, possible skin darkening (melasma).",
        husbandTips: "🎮 QUEST: Third Trimester Prep\n- Prepare for increased snoring\n- Help track baby's movement patterns\n- Research skin care for pregnancy changes\n- Begin third trimester preparations",
        nutrition: "Folate-rich foods help with skin health. Omega-3s support baby's brain development.",
        exercise: "Regular activity helps regulate weight gain. Prenatal yoga supports flexibility.",
        developmentHighlights: [
          "REM sleep occurring",
          "Can distinguish sweet tastes",
          "Brain developing rapidly"
        ]
      },
      28: {
        symptoms: "Shortness of breath, frequent urination returns, continued Braxton Hicks, possible heartburn intensifying.",
        husbandTips: "🎮 QUEST: Final Preparation\n- Pack hospital bag together\n- Install car seat and have it checked\n- Prepare frozen meals for after birth\n- Finalize birth plan and communication plan",
        nutrition: "Focus on sustained energy foods - complex carbs, healthy fats, and quality proteins. Small, frequent meals help with reduced stomach capacity.",
        exercise: "Continue gentle activity but modify as needed. Listen to your body and rest when necessary.",
        developmentHighlights: [
          "Eyes can open and close",
          "Lungs developed enough for survival with intensive care if born early",
          "Brain developing rapidly"
        ]
      },
      29: {
        symptoms: "Increased fatigue, possible leaking colostrum, swelling in hands and feet, back pain intensifying.",
        husbandTips: "🎮 QUEST: Energy Conservation\n- Take over more household tasks\n- Help create comfortable rest areas\n- Monitor swelling levels\n- Prepare for colostrum leaking",
        nutrition: "Calcium and magnesium may help with muscle cramps. Stay hydrated to help with swelling.",
        exercise: "Swimming provides relief from weight and swelling. Gentle stretching helps with back pain.",
        developmentHighlights: [
          "Developing more fat stores",
          "Brain can regulate primitive breathing",
          "Can detect light and dark"
        ]
      },
      30: {
        symptoms: "Difficulty finding comfortable sleep positions, increased Braxton Hicks, possible mood swings.",
        husbandTips: "🎮 QUEST: Comfort Engineer\n- Invest in pregnancy support pillows\n- Practice labor breathing techniques together\n- Be patient with emotional changes\n- Create calming bedtime routine",
        nutrition: "Complex carbohydrates help stabilize mood and energy. Magnesium may help with sleep.",
        exercise: "Prenatal yoga can help with flexibility and relaxation. Avoid overexertion.",
        developmentHighlights: [
          "Fingernails and toenails grown",
          "Brain connections increasing rapidly",
          "More coordinated movements"
        ]
      },
      31: {
        symptoms: "Increased pressure on bladder, possible constipation, shortness of breath increasing, forgetfulness.",
        husbandTips: "🎮 QUEST: Memory Assistant\n- Help with organization and reminders\n- Encourage frequent bathroom breaks\n- Support high-fiber diet choices\n- Practice breathing exercises together",
        nutrition: "High-fiber foods and plenty of water help with constipation. Iron continues to be important.",
        exercise: "Pelvic floor exercises become increasingly important. Walking aids digestion.",
        developmentHighlights: [
          "Can turn head side to side",
          "Immune system developing",
          "Developing sleeping patterns"
        ]
      },
      32: {
        symptoms: "Difficulty finding comfortable sleeping position, increased swelling, possible leaking colostrum, practice contractions.",
        husbandTips: "🎮 QUEST: Sleep Support\n- Help arrange pillows for comfortable sleep\n- Practice relaxation techniques together\n- Review labor support techniques\n- Ensure all baby essentials are ready",
        nutrition: "Focus on easily digestible meals. Heartburn may increase as baby puts pressure on stomach.",
        exercise: "Swimming is ideal as it relieves pressure on joints while providing resistance training.",
        developmentHighlights: [
          "Practicing breathing movements",
          "Gaining weight rapidly",
          "Most organ systems fully developed"
        ]
      },
      33: {
        symptoms: "Increased pelvic pressure, possible heartburn intensifying, difficulty getting comfortable, possible insomnia.",
        husbandTips: "🎮 QUEST: Late Pregnancy Support\n- Help with position changes frequently\n- Create multiple comfortable resting spots\n- Practice massage techniques for comfort\n- Research natural heartburn remedies",
        nutrition: "Small, frequent meals help with heartburn. Avoid lying down immediately after eating.",
        exercise: "Gentle stretching and prenatal yoga. Swimming offers relief from pressure and weight.",
        developmentHighlights: [
          "Lungs developing rapidly",
          "Coordinating sucking and swallowing",
          "Pupillary light reflex functioning"
        ]
      },
      34: {
        symptoms: "Baby movements feel different (less space), increased fatigue, possible nesting urges, round ligament pain.",
        husbandTips: "🎮 QUEST: Nesting Helper\n- Support nesting activities but encourage rest\n- Help with baby room final preparations\n- Monitor for signs of early labor\n- Assist with organizing baby supplies",
        nutrition: "Continue focus on protein and healthy fats. Hydration remains crucial.",
        exercise: "Listen to your body - some days rest is more important than exercise.",
        developmentHighlights: [
          "Fingernails reach fingertips",
          "Nearly fully developed lungs",
          "Skin becoming smoother"
        ]
      },
      35: {
        symptoms: "Increased urination frequency, possible lightning crotch, stretch mark growth, emotional fluctuations.",
        husbandTips: "🎮 QUEST: Emotional Anchor\n- Be extra patient and understanding\n- Plan bathroom accessible outings\n- Help with stretch mark care if wanted\n- Provide constant reassurance and support",
        nutrition: "Vitamin E-rich foods may help with skin elasticity. Continue prenatal vitamins.",
        exercise: "Gentle walks and stretching. Avoid activities that cause lightning crotch pain.",
        developmentHighlights: [
          "Kidney function maturing",
          "Liver processing waste",
          "Most organ systems maturing"
        ]
      },
      36: {
        symptoms: "Increased pelvic pressure, more frequent Braxton Hicks, difficulty sleeping, possible lightening (baby dropping).",
        husbandTips: "🎮 QUEST: Birth Ready\n- Ensure hospital route is planned\n- Keep phone charged and ready\n- Review labor support techniques\n- Be ready for middle-of-night hospital trips",
        nutrition: "Dates may help with cervical ripening. Easy to digest, energy-sustaining foods are important.",
        exercise: "Walking can help encourage baby to move down. Ball exercises can help with pelvic discomfort.",
        developmentHighlights: [
          "Gaining about half a pound per week",
          "Lungs nearly fully mature",
          "Immune system receiving antibodies from mother"
        ]
      },
      37: {
        symptoms: "Baby considered full-term, possible mucus plug loss, irregular contractions, nesting instinct strong.",
        husbandTips: "🎮 QUEST: Early Term Support\n- Know signs of true vs. false labor\n- Have hospital bag by the door\n- Time contractions accurately\n- Stay calm and supportive during false alarms",
        nutrition: "High-energy foods prepare for labor. Stay hydrated and maintain regular eating.",
        exercise: "Walking may help encourage labor. Bouncing on birth ball can provide comfort.",
        developmentHighlights: [
          "Considered early term",
          "Most systems fully developed",
          "Head may begin to descend"
        ]
      },
      38: {
        symptoms: "Full-term baby, increased pressure, possible water breaking, stronger Braxton Hicks, emotional readiness.",
        husbandTips: "🎮 QUEST: Labor Partner\n- Practice labor support techniques\n- Know when to go to hospital\n- Keep important numbers accessible\n- Prepare for the big day with excitement",
        nutrition: "Focus on easily digestible, energy-rich foods. Labor can be long and energy-demanding.",
        exercise: "Gentle movement as comfortable. Save energy for labor and delivery.",
        developmentHighlights: [
          "Full term",
          "Lungs likely mature",
          "Strong sucking reflex"
        ]
      },
      39: {
        symptoms: "Anticipation high, possible pre-labor symptoms, continued discomfort, emotional preparation for birth.",
        husbandTips: "🎮 QUEST: Final Countdown\n- Maintain calm and positive attitude\n- Help distract during early labor\n- Ensure all preparations are complete\n- Focus on the excitement of meeting baby soon",
        nutrition: "Maintain regular eating pattern. Labor can start at any time.",
        exercise: "Gentle activities as tolerated. Rest when possible to conserve energy.",
        developmentHighlights: [
          "Brain growth continuing",
          "Chest prominent",
          "Firm grasp and strong reflexes"
        ]
      },
      40: {
        symptoms: "Very uncomfortable, difficulty sleeping, frequent urination, strong Braxton Hicks, possible mucus plug loss.",
        husbandTips: "🎮 QUEST: Due Date Support\n- Provide encouragement as due date arrives/passes\n- Suggest activities to pass time\n- Help with walking or natural induction methods\n- Be extra patient and supportive",
        nutrition: "Focus on energy-sustaining foods and staying hydrated. Spicy foods or others rumored to induce labor are generally harmless to try.",
        exercise: "Walking, gentle stair climbing, and birthing ball exercises may help encourage labor.",
        developmentHighlights: [
          "Fully developed and ready for birth",
          "Brain continuing rapid development",
          "Lungs prepared for breathing air"
        ]
    }
}; 