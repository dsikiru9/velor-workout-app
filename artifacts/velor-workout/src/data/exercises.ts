import type { Exercise, Section, SectionId, Workout } from '@/types';

export const sections: Section[] = [
  { id: 'arms', name: 'Arms', shortName: 'Arms', description: 'Press, brace, and control your own bodyweight.', note: 'No bars needed. Use the floor and a stable chair only.', accent: '#E4463A', icon: 'arrow-up-right' },
  { id: 'back-shoulders', name: 'Back & Shoulders', shortName: 'Back & shoulders', description: 'Build upper-back endurance and resilient shoulders at home.', note: 'Home training has limits. These drills develop control, endurance, and posture—not a gym replacement.', accent: '#D57A24', icon: 'move-up' },
  { id: 'legs', name: 'Legs', shortName: 'Legs', description: 'Strength, balance, and repeatable power from the floor up.', note: 'A wall or chair can help you keep the work honest.', accent: '#2F7A71', icon: 'footprints' },
  { id: 'abdomen', name: 'Abdomen', shortName: 'Abdomen', description: 'Train the trunk to resist movement and transfer force.', note: 'Quality reps beat speed. Keep your lower back and breathing under control.', accent: '#4B628A', icon: 'scan-line' },
];

export const exerciseBank: Record<string, Exercise> = {
  'incline-pushup': {
    id: 'incline-pushup', name: 'Incline push-up', targetArea: 'Chest & triceps', difficulty: 'Beginner', equipment: 'Stable chair or wall', sets: 2, reps: 8, rest: 30,
    instructions: ['Place hands on a stable chair seat or wall, slightly wider than shoulders.', 'Step back until your body forms one long line.', 'Bend elbows at roughly 45 degrees and lower your chest with control.', 'Press the support away and finish with ribs stacked over hips.'],
    formCues: ['Brace your midsection', 'Keep wrists under elbows', 'Move as one unit'], commonMistakes: ['Sagging hips', 'Flared elbows', 'Unstable furniture'], regression: 'Use a wall and stand closer.', progression: 'Lower the hand support or move to the floor.', primaryMuscles: ['Chest', 'Triceps', 'Front shoulders'],
    mediaUrl: '/media/incline-pushup_2.jpg', mediaAlt: 'Demonstration image for an incline push-up',
  },
  pushup: {
    id: 'pushup', name: 'Push-up', targetArea: 'Chest & triceps', difficulty: 'Intermediate', equipment: 'Open floor', sets: 3, reps: 10, rest: 30,
    instructions: ['Start in a high plank with hands under shoulders.', 'Screw hands into the floor and brace from shoulders to ankles.', 'Lower until elbows reach about 90 degrees.', 'Drive the floor away without losing your plank.'],
    formCues: ['Quiet neck', 'Elbows track back', 'Exhale on the press'], commonMistakes: ['Head leading the body', 'Rushed bottom position', 'Hips rotating'], regression: 'Elevate hands on a stable chair.', progression: 'Add a two-second lower or close the hand position.', primaryMuscles: ['Chest', 'Triceps', 'Core'],
    mediaUrl: '/media/pushup_2.jpg', mediaAlt: 'Demonstration image for a floor push-up',
  },
  closepushup: {
    id: 'closepushup', name: 'Close-grip push-up', targetArea: 'Triceps & chest', difficulty: 'Advanced', equipment: 'Open floor', sets: 3, reps: 8, rest: 30,
    instructions: ['Set hands just inside shoulder width with fingers spread.', 'Brace the body and keep elbows close to your sides.', 'Lower your sternum toward the space between your hands.', 'Press up while keeping shoulders away from ears.'],
    formCues: ['Hands stay grounded', 'Shoulder blades move naturally', 'Whole-body tension'], commonMistakes: ['Hands too narrow for wrists', 'Elbows winging out', 'Hips dropping'], regression: 'Perform from knees or on a raised surface.', progression: 'Pause one inch above the floor.', primaryMuscles: ['Triceps', 'Chest', 'Front shoulders'],
    mediaUrl: '/media/closepushup_2.jpg', mediaAlt: 'Demonstration image for a close-grip push-up',
  },
  chairdip: {
    id: 'chairdip', name: 'Chair-supported triceps dip', targetArea: 'Triceps', difficulty: 'Intermediate', equipment: 'Stable chair against a wall', sets: 2, reps: 8, rest: 30,
    instructions: ['Place a stable chair against a wall and sit on the edge.', 'Hands grip the front edge; walk feet forward with hips close to the chair.', 'Bend elbows to lower only as far as shoulders stay comfortable.', 'Press through palms to return, keeping the chair still.'],
    formCues: ['Shoulders down', 'Small range is fine', 'Chair legs never slide'], commonMistakes: ['Dropping below shoulder comfort', 'Chair or window iron/grille is not secure', 'Shrugging'], regression: 'Keep feet closer and use a shallow bend.', progression: 'Walk feet farther forward or add a pause.', primaryMuscles: ['Triceps', 'Chest', 'Front shoulders'],
    mediaUrl: '/media/chairdip_2.jpg', mediaAlt: 'Demonstration image for a chair-supported triceps dip',
  },
  pikepushup: {
    id: 'pikepushup', name: 'Pike push-up', targetArea: 'Shoulders', difficulty: 'Advanced', equipment: 'Open floor', sets: 3, reps: 6, rest: 40,
    instructions: ['From a plank, walk feet toward hands and lift hips into an inverted V.', 'Turn hands slightly out and keep head between arms.', 'Bend elbows to lower crown of head toward the floor.', 'Push the ground away and return to the pike.'],
    formCues: ['Hips stay high', 'Head travels forward and down', 'Ribs stay tucked'], commonMistakes: ['Collapsing into shoulders', 'Bending from the spine', 'Kicking for momentum'], regression: 'Shorten the range or use a wall-supported pike.', progression: 'Elevate feet on a stable step.', primaryMuscles: ['Shoulders', 'Triceps', 'Upper chest'],
    mediaUrl: '/media/pikepushup_2.jpg', mediaAlt: 'Demonstration image for a pike push-up',
  },
  bearshoulder: {
    id: 'bearshoulder', name: 'Bear shoulder tap', targetArea: 'Shoulders & trunk', difficulty: 'Intermediate', equipment: 'Open floor', sets: 2, reps: 12, rest: 30,
    instructions: ['Set hands under shoulders and knees under hips, then hover knees two inches.', 'Brace so the pelvis stays level.', 'Tap opposite shoulder with one hand.', 'Replace the hand softly and alternate sides.'],
    formCues: ['Slow weight shift', 'Knees stay low', 'Press the floor away'], commonMistakes: ['Rocking hips', 'Holding breath', 'Feet too wide'], regression: 'Keep knees down and perform plank shoulder taps.', progression: 'Move feet closer or add a three-second hold.', primaryMuscles: ['Shoulders', 'Core', 'Chest'],
    mediaUrl: '/media/bearshoulder_2.jpg', mediaAlt: 'Demonstration image for a bear shoulder tap',
  },
  wallslide: {
    id: 'wallslide', name: 'Wall slide', targetArea: 'Shoulder mobility', difficulty: 'Beginner', equipment: 'Clear wall', sets: 2, duration: 30, rest: 20,
    instructions: ['Stand with back against a clear wall, feet a few inches forward.', 'Set ribs down and make a goalpost shape with your arms.', 'Slide arms upward without forcing the range.', 'Return slowly, keeping contact you can maintain comfortably.'],
    formCues: ['No rib flare', 'Move within pain-free range', 'Chin gently tucked'], commonMistakes: ['Arching to chase range', 'Pushing through pain', 'Rushing'], regression: 'Stand farther from the wall.', progression: 'Pause overhead for two seconds.', primaryMuscles: ['Upper back', 'Rotator cuff', 'Serratus'],
    mediaUrl: '/media/wallslide_2.jpg', mediaAlt: 'Demonstration image for a wall slide',
  },
  reverseplank: {
    id: 'reverseplank', name: 'Reverse plank', targetArea: 'Posterior chain', difficulty: 'Intermediate', equipment: 'Open floor', sets: 2, duration: 25, rest: 30,
    instructions: ['Sit with legs extended and hands behind hips, fingers forward or slightly out.', 'Press through palms and heels to lift hips.', 'Create a long line from shoulders to ankles.', 'Breathe steadily, then lower with control.'],
    formCues: ['Chest open', 'Glutes lightly squeezed', 'Wrists comfortable'], commonMistakes: ['Head thrown back', 'Hips sagging', 'Locked painful elbows'], regression: 'Bend knees and keep feet closer.', progression: 'Lift one leg for short alternating holds.', primaryMuscles: ['Shoulders', 'Glutes', 'Hamstrings'],
    mediaUrl: '/media/reverseplank_2.jpg', mediaAlt: 'Demonstration image for a reverse plank',
  },
  squat: {
    id: 'squat', name: 'Tempo squat', targetArea: 'Quads & glutes', difficulty: 'Beginner', equipment: 'Open floor', sets: 3, reps: 10, rest: 30,
    instructions: ['Stand with feet just outside hip width and toes slightly turned out.', 'Brace, send hips back, and lower for a count of three.', 'Keep whole feet connected as knees track over toes.', 'Drive up and finish tall without leaning back.'],
    formCues: ['Tripod foot', 'Knees follow toes', 'Control the bottom'], commonMistakes: ['Heels lifting', 'Knees collapsing inward', 'Dropping fast'], regression: 'Use a wall or chair behind you for a target.', progression: 'Add a four-second lower or a bottom pause.', primaryMuscles: ['Quads', 'Glutes', 'Adductors'],
    mediaUrl: '/media/squat_2.jpg', mediaAlt: 'Demonstration image for a tempo squat',
  },
  'split squat': {
    id: 'split-squat', name: 'Split squat', targetArea: 'Legs & balance', difficulty: 'Intermediate', equipment: 'Open floor or stable chair', sets: 3, reps: 8, rest: 35,
    instructions: ['Step one foot back into a comfortable staggered stance.', 'Lower straight down while keeping front heel grounded.', 'Use the front leg to stand, keeping hips square.', 'Complete all reps, then switch sides.'],
    formCues: ['Front knee tracks toes', 'Tall torso', 'Quiet back foot'], commonMistakes: ['Narrow tightrope stance', 'Pushing off the back foot', 'Front heel rising'], regression: 'Hold a chair lightly for balance.', progression: 'Add a two-second pause at the bottom.', primaryMuscles: ['Quads', 'Glutes', 'Calves'],
    mediaUrl: '/media/split-squat_2.jpg', mediaAlt: 'Demonstration image for a split squat',
  },
  'reverse lunge': {
    id: 'reverse-lunge', name: 'Reverse lunge', targetArea: 'Legs & balance', difficulty: 'Intermediate', equipment: 'Open floor', sets: 3, reps: 8, rest: 35,
    instructions: ['Stand tall with feet under hips.', 'Step one foot back and lower until both knees bend comfortably.', 'Keep the front foot heavy and torso stacked.', 'Drive through the front foot to return and alternate.'],
    formCues: ['Step back, not down', 'Front knee stable', 'Soft landing'], commonMistakes: ['Front knee collapsing', 'Overstriding', 'Bouncing off the back knee'], regression: 'Use a wall for fingertip balance.', progression: 'Add a knee drive at the top.', primaryMuscles: ['Quads', 'Glutes', 'Hamstrings'],
    mediaUrl: '/media/reverse-lunge_2.jpg', mediaAlt: 'Demonstration image for a reverse lunge',
  },
  singlelegbridge: {
    id: 'singlelegbridge', name: 'Single-leg glute bridge', targetArea: 'Glutes & hamstrings', difficulty: 'Advanced', equipment: 'Open floor', sets: 3, reps: 8, rest: 30,
    instructions: ['Lie on your back with one foot planted and the other leg extended.', 'Brace gently and press through the planted heel.', 'Lift hips until shoulders, hips, and knee align.', 'Lower slowly without twisting, then change sides.'],
    formCues: ['Ribs stay down', 'Hips level', 'Heel does the work'], commonMistakes: ['Overarching back', 'Rotating pelvis', 'Pushing from toes'], regression: 'Use a two-leg glute bridge.', progression: 'Pause at the top for three seconds.', primaryMuscles: ['Glutes', 'Hamstrings', 'Core'],
    mediaUrl: '/media/singlelegbridge_2.jpg', mediaAlt: 'Demonstration image for a single-leg glute bridge',
  },
  calfraise: {
    id: 'calfraise', name: 'Single-leg calf raise', targetArea: 'Calves & ankle', difficulty: 'Beginner', equipment: 'Wall or stable chair', sets: 2, reps: 12, rest: 25,
    instructions: ['Stand near a wall or stable chair and use only light fingertip support.', 'Lift one heel while keeping the ankle straight.', 'Rise to a comfortable high point without rolling outward.', 'Lower for a slow count and switch sides.'],
    formCues: ['Big toe stays down', 'Tall posture', 'Full controlled range'], commonMistakes: ['Bouncing', 'Ankle rolling', 'Leaning on support'], regression: 'Use both legs.', progression: 'Pause at the top for two seconds.', primaryMuscles: ['Calves', 'Soleus', 'Foot stabilizers'],
    mediaUrl: '/media/calfraise_2.jpg', mediaAlt: 'Demonstration image for a calf raise',
  },
  'wall sit': {
    id: 'wall-sit', name: 'Wall sit', targetArea: 'Quads', difficulty: 'Intermediate', equipment: 'Clear wall', sets: 3, duration: 30, rest: 35,
    instructions: ['Place your back on a clear wall and walk feet forward.', 'Slide down only as far as you can keep knees aligned over ankles.', 'Keep the back gently in contact and breathe steadily.', 'Press through the feet to stand.'],
    formCues: ['Knees track second toes', 'Even foot pressure', 'Steady breathing'], commonMistakes: ['Knees collapsing inward', 'Feet too close', 'Holding breath'], regression: 'Use a higher position.', progression: 'Add time in five-second increments.', primaryMuscles: ['Quads', 'Glutes', 'Calves'],
    mediaUrl: '/media/wall-sit_2.jpg', mediaAlt: 'Demonstration image for a wall sit',
  },
  deadbug: {
    id: 'deadbug', name: 'Dead bug', targetArea: 'Deep core', difficulty: 'Beginner', equipment: 'Open floor', sets: 2, reps: 8, rest: 25,
    instructions: ['Lie on your back with knees over hips and arms reaching up.', 'Exhale to gently draw ribs down and flatten the low back.', 'Lower opposite arm and leg without losing that position.', 'Return and alternate slowly.'],
    formCues: ['Low back stays quiet', 'Move from the hip and shoulder', 'Exhale on reach'], commonMistakes: ['Arching back', 'Moving too quickly', 'Neck tension'], regression: 'Move one limb at a time.', progression: 'Straighten the moving leg farther.', primaryMuscles: ['Deep abdominals', 'Hip flexors', 'Obliques'],
    mediaUrl: '/media/deadbug_2.jpg', mediaAlt: 'Demonstration image for a dead bug',
  },
  plank: {
    id: 'plank', name: 'Forearm plank', targetArea: 'Trunk endurance', difficulty: 'Beginner', equipment: 'Open floor', sets: 3, duration: 25, rest: 30,
    instructions: ['Set forearms parallel with elbows under shoulders.', 'Step feet back and create a line from head to heels.', 'Squeeze glutes and gently pull ribs toward pelvis.', 'Breathe quietly while keeping the position.'],
    formCues: ['Push floor away', 'Glutes on', 'No breath holding'], commonMistakes: ['Hips sagging', 'Hips too high', 'Shoulders behind elbows'], regression: 'Lower knees while keeping a straight line.', progression: 'Reach one arm forward for controlled holds.', primaryMuscles: ['Abdominals', 'Glutes', 'Shoulders'],
    mediaUrl: '/media/plank_2.jpg', mediaAlt: 'Demonstration image for a forearm plank',
  },
  sidplank: {
    id: 'sidplank', name: 'Side plank', targetArea: 'Obliques', difficulty: 'Intermediate', equipment: 'Open floor', sets: 2, duration: 20, rest: 25,
    instructions: ['Lie on your side with elbow under shoulder and legs stacked.', 'Press the floor away and lift hips into a straight line.', 'Keep ribs stacked and top hip slightly forward.', 'Lower with control and switch sides.'],
    formCues: ['Shoulder away from ear', 'Hips high', 'Eyes forward'], commonMistakes: ['Rolling chest down', 'Collapsing shoulder', 'Holding breath'], regression: 'Keep the bottom knee bent.', progression: 'Lift the top leg for short holds.', primaryMuscles: ['Obliques', 'Glute medius', 'Shoulders'],
    mediaUrl: '/media/sidplank_2.jpg', mediaAlt: 'Demonstration image for a side plank',
  },
  hollowhold: {
    id: 'hollowhold', name: 'Hollow body hold', targetArea: 'Anterior core', difficulty: 'Advanced', equipment: 'Open floor', sets: 3, duration: 20, rest: 35,
    instructions: ['Lie on your back and gently press low back into the floor.', 'Lift shoulders and legs only as far as that contact remains.', 'Reach long through fingers and toes.', 'Breathe behind the brace, then rest before losing position.'],
    formCues: ['Low back is the limiter', 'Long limbs', 'Small range is valid'], commonMistakes: ['Back arching', 'Neck cranking', 'Chasing a low leg angle'], regression: 'Bend knees and reach arms forward.', progression: 'Extend arms overhead or add slow rocks.', primaryMuscles: ['Rectus abdominis', 'Deep core', 'Hip flexors'],
    mediaUrl: '/media/hollowhold_2.jpg', mediaAlt: 'Demonstration image for a hollow body hold',
  },
  'bird-dog': {
    id: 'bird-dog', name: 'Bird dog', targetArea: 'Back & core', difficulty: 'Beginner', equipment: 'Open floor', sets: 2, reps: 8, rest: 25,
    instructions: ['Start on hands and knees with hands under shoulders.', 'Brace and reach one arm and the opposite leg long.', 'Pause without rotating your pelvis.', 'Return softly and alternate sides.'],
    formCues: ['Hips stay square', 'Reach in two directions', 'Quiet spine'], commonMistakes: ['Kicking leg high', 'Turning the ribs', 'Shrugging'], regression: 'Slide one limb at a time.', progression: 'Pause for three seconds or draw an elbow-to-knee.', primaryMuscles: ['Multifidus', 'Glutes', 'Deep abdominals'],
    mediaUrl: '/media/bird-dog_2.jpg', mediaAlt: 'Demonstration image for a bird dog',
  },
};

const pools: Record<SectionId, string[]> = {
  arms: ['wallslide', 'incline-pushup', 'pushup', 'chairdip', 'bearshoulder', 'closepushup', 'pikepushup'],
  'back-shoulders': ['wallslide', 'bird-dog', 'bearshoulder', 'reverseplank', 'pikepushup', 'plank', 'sidplank'],
  legs: ['squat', 'calfraise', 'split squat', 'reverse lunge', 'wall sit', 'singlelegbridge', 'bird-dog'],
  abdomen: ['deadbug', 'bird-dog', 'plank', 'sidplank', 'reverseplank', 'hollowhold', 'bearshoulder'],
};

const focusWords: Record<SectionId, string[]> = {
  arms: ['base control', 'pressing volume', 'triceps strength', 'shoulder stability', 'close-range power'],
  'back-shoulders': ['scapular control', 'upper-back endurance', 'shoulder capacity', 'posterior-chain control', 'anti-rotation'],
  legs: ['position and balance', 'tempo strength', 'single-leg control', 'knee resilience', 'repeatable power'],
  abdomen: ['breathing and brace', 'anti-extension', 'side-body control', 'trunk endurance', 'integrated control'],
};

export function getSection(sectionId: string) {
  return sections.find((section) => section.id === sectionId);
}

export function getWorkout(sectionId: SectionId, level: number): Workout {
  const pool = pools[sectionId];
  const tier: Workout['tier'] = level <= 7 ? 'Beginner' : level <= 14 ? 'Intermediate' : 'Advanced';
  const focus = focusWords[sectionId][(level - 1) % focusWords[sectionId].length];
  const count = 5;
  const chosen = Array.from({ length: count }, (_, index) => pool[(level - 1 + index) % pool.length]);
  const scale = 1 + Math.floor((level - 1) / 4);
  const exercises = chosen.map((key, index) => {
    const base = exerciseBank[key];
    const volume = Math.min(5, base.sets + Math.floor((level - 1) / 8) + (level >= 15 && index % 2 === 0 ? 1 : 0));
    const reps = base.reps ? Math.min(24, base.reps + Math.floor((level - 1) / 3) * 2 + (level >= 15 ? 1 : 0)) : undefined;
    const duration = base.duration ? Math.min(75, base.duration + Math.floor((level - 1) / 3) * 5) : undefined;
    return { ...base, workoutSets: volume, workoutReps: reps, workoutDuration: duration };
  });
  return {
    id: `${sectionId}-${level}`,
    sectionId,
    level,
    title: `${getSection(sectionId)?.name} ${level}`,
    tier,
    focus,
    estimatedMinutes: 12 + scale * 3 + Math.round(exercises.length * 1.5),
    exercises,
  };
}

export function getAllWorkouts(): Workout[] {
  return sections.flatMap((section) => Array.from({ length: 22 }, (_, index) => getWorkout(section.id, index + 1)));
}