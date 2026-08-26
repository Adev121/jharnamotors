const questionBank = [
    {
        id: 1,
        category: "Road Safety",
        question: `
            Near a pedestrian crossing, when pedestrians
            are waiting to cross the road, you should
        `,
        options: [
            "Sound horn and proceed",
            "Slow down, sound horn and pass",
            "Stop the vehicle and wait till the pedestrians cross the road and then proceed"
        ],
        // PDF answer column = 3
        correctAnswer: 2,
        image: null
    },
    {
        id: 3,
        category: "Road Safety",
        question: `
            You are approaching a narrow bridge and another
            vehicle is about to enter the bridge from the
            opposite side. You should
        `,
        options: [
            "Increase the speed and try to cross the bridge as fast as possible",
            "Put on the headlight and pass the bridge",
            "Wait till the other vehicle crosses the bridge and then proceed"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 5,
        category: "Accident Rules",
        question: `
            When a vehicle is involved in an accident causing
            injury to any person, the driver should
        `,
        options: [
            "Take the vehicle to the nearest police station and report the accident",
            "Stop the vehicle and report to the police station",
            "Take all reasonable steps to secure medical attention to the injured and report to the nearest police station within 24 hours"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 7,
        category: "Traffic Rules",
        question: `
            On a road designated as one way, the driver
        `,
        options: [
            "May park anywhere",
            "Should not drive in reverse gear",
            "May drive in either direction"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 9,
        category: "Overtaking",
        question: `
            You can overtake a vehicle in front
        `,
        options: [
            "Through the right side of that vehicle",
            "Through the left side if the road is wide",
            "From either side"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 11,
        category: "Railway Crossing",
        question: `
            When a vehicle approaches an unguarded railway
            level crossing, before crossing it, the driver shall
        `,
        options: [
            "Ensure that no train or trolley is coming before crossing",
            "Sound horn and cross the track as fast as possible",
            "Proceed without checking"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 15,
        category: "Driving Licence",
        question: `
            Validity of learner's licence
        `,
        options: [
            "6 months",
            "30 days",
            "Till the driving licence is obtained"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 21,
        category: "Pedestrian Rules",
        question: `
            In a road without a footpath, pedestrians
        `,
        options: [
            "Should walk on the left side of the road",
            "Should walk on the right side of the road",
            "May walk on either side of the road"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 23,
        category: "Emergency Vehicles",
        question: `
            Free passage should be given to the following
            types of vehicles
        `,
        options: [
            "Ambulance and fire service vehicles",
            "Express and Super Express buses",
            "Private cars"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 29,
        category: "Night Driving",
        question: `
            Fog lamps are used
        `,
        options: [
            "During night only",
            "When there is mist",
            "Only during daytime"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 31,
        category: "Pedestrian Safety",
        question: `
            Zebra lines are meant for
        `,
        options: [
            "Stopping vehicles",
            "Pedestrians crossing",
            "Vehicle parking"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 35,
        category: "Traffic Signals",
        question: `
            Red traffic light indicates
        `,
        options: [
            "Proceed",
            "Stop the vehicle",
            "Slow down"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 41,
        category: "Night Driving",
        question: `
            When a vehicle is parked on the roadside during night,
            what should remain lit?
        `,
        options: [
            "The park light",
            "Headlight only",
            "No light is required"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 45,
        category: "Traffic Rules",
        question: `
            Drunken driving is
        `,
        options: [
            "Allowed during night time",
            "Allowed in private vehicles",
            "Prohibited in all vehicles"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 49,
        category: "Vehicle Safety",
        question: `
            Rear view mirror is used for
        `,
        options: [
            "Seeing your face",
            "Watching the traffic approaching from behind",
            "Seeing the back seat passenger"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 53,
        category: "Parking Rules",
        question: `
            Parking is permitted
        `,
        options: [
            "In turnings",
            "On footpaths",
            "Where parking is not prohibited"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 84,
        category: "Overtaking",
        question: `
            Before overtaking a vehicle, it should be ensured that
        `,
        options: [
            "No vehicle is approaching from behind",
            "The road ahead is clearly visible and it is safe to overtake",
            "The vehicle in front is turning left"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 88,
        category: "Overtaking",
        question: `
            When your vehicle is being overtaken, you should
        `,
        options: [
            "Stop your vehicle immediately",
            "Increase the speed of your vehicle",
            "Not obstruct the other vehicle from overtaking"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 91,
        category: "Two-Wheeler Rules",
        question: `
            More than two persons on a two wheeler is
        `,
        options: [
            "Allowed in unavoidable circumstances",
            "Allowed when traffic is less",
            "Prohibited"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 93,
        category: "Vehicle Safety",
        question: `
            The hand brake is to be used
        `,
        options: [
            "To apply sudden brake",
            "To slow down at high speed",
            "To park a vehicle"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 99,
        category: "Road Safety",
        question: `
            Using an unregistered vehicle in a public place is
        `,
        options: [
            "Illegal",
            "Legal",
            "Legal if there is urgency"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 109,
        category: "Traffic Rules",
        question: `
            Over speeding is
        `,
        options: [
            "Not an offence",
            "An offence leading to suspension or cancellation of driving licence",
            "An offence leading to punishment by fine only"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 121,
        category: "Overtaking",
        question: `
            When the vehicle behind has begun to overtake
            our vehicle
        `,
        options: [
            "We shall not overtake another vehicle",
            "We can overtake another vehicle",
            "We can overtake another vehicle by blowing the horn"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 123,
        category: "Overtaking",
        question: `
            When our vehicle is being overtaken
        `,
        options: [
            "We shall not increase speed",
            "We can increase speed with due care",
            "We should immediately overtake another vehicle"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 125,
        category: "Parking Rules",
        question: `
            Parking is prohibited in the following place
        `,
        options: [
            "Entrance of hospital",
            "Open parking area",
            "Designated parking zone"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 155,
        category: "Driving Behaviour",
        question: `
            What is tail-gating?
        `,
        options: [
            "Driving too close behind a vehicle in a dangerous manner",
            "Keeping a safe distance from the vehicle ahead",
            "Keeping at least seven metres from the vehicle ahead"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 160,
        category: "Road Rules",
        question: `
            Road on which driving in reverse gear is prohibited
        `,
        options: [
            "One-way road",
            "Steep descending road",
            "Steep ascending road"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 199,
        category: "Motor Vehicle Act",
        question: `
            According to Section 112 of the Motor Vehicles Act,
            1988
        `,
        options: [
            "Speed limit shall not be exceeded",
            "A driver shall not drive after consuming alcohol",
            "A vehicle shall not be used on road without paying tax"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 213,
        category: "Driving Behaviour",
        question: `
            Zig-zag driving is
        `,
        options: [
            "Permitted when the road is empty",
            "Prohibited",
            "Permitted at low speed"
        ],
        correctAnswer: 1,
        image: null
    },
    {
        id: 216,
        category: "Roundabout",
        question: `
            While on a roundabout
        `,
        options: [
            "Traffic entering has right of way",
            "Traffic exiting has right of way",
            "Traffic on the roundabout has right of way"
        ],
        correctAnswer: 2,
        image: null
    },
    {
        id: 220,
        category: "Road Safety",
        question: `
            It is essential to wear a helmet while driving a
            two-wheeler because
        `,
        options: [
            "It is for your individual safety",
            "Otherwise you will be caught by traffic police",
            "It is necessary for uniformity on the road"
        ],
        correctAnswer: 0,
        image: null
    },
    {
        id: 221,
        category: "Driving Behaviour",
        question: `
            When should you sound the horn of your vehicle?
        `,
        options: [
            "To give you right of way",
            "To warn other drivers of your presence",
            "To attract a friend's attention"
        ],
        correctAnswer: 1,
        image: null
    },
    /* =========================
   TRAFFIC SIGN QUESTIONS
========================= */
{
    id: 70,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_057.png",
    options: [
        "Side road ahead",
        "Cross road ahead",
        "Narrow road ahead"
    ],
    correctAnswer: 1
},
{
    id: 72,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_058.png",
    options: [
        "Compulsory keep left",
        "Turn left",
        "No entry"
    ],
    correctAnswer: 1
},
{
    id: 74,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_059.png",
    options: [
        "Right ascend",
        "Right hand curve",
        "Keep right"
    ],
    correctAnswer: 1
},
{
    id: 76,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_060.png",
    options: [
        "Left hand curve",
        "Left ascend",
        "Keep left"
    ],
    correctAnswer: 0
},
{
    id: 78,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_061.png",
    options: [
        "Right ascend and descend",
        "Right descend",
        "Slippery road"
    ],
    correctAnswer: 0
},
{
    id: 80,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_062.png",
    options: [
        "Left descend",
        "Left hair pin bend",
        "Keep left"
    ],
    correctAnswer: 1
},
{
    id: 82,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_063.png",
    options: [
        "Left reverse bend",
        "Turn right and go ahead",
        "Right reverse bend"
    ],
    correctAnswer: 0
},
{
    id: 84,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_065.png",
    options: [
        "Left reverse bend",
        "Turn left and go ahead",
        "Right reverse bend"
    ],
    correctAnswer: 2
},
{
    id: 86,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_066.png",
    options: [
        "Side road left",
        "Speed limit",
        "Axle weight limit"
    ],
    correctAnswer: 2
},
{
    id: 88,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_067.png",
    options: [
        "Turn right",
        "Side road right",
        "Keep right"
    ],
    correctAnswer: 1
},
{
    id: 90,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_068.png",
    options: [
        "Cross road ahead",
        "Narrow road ahead",
        "Side road ahead"
    ],
    correctAnswer: 0
},
{
    id: 92,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_069.png",
    options: [
        "Turn right",
        "Turn left",
        "Roundabout"
    ],
    correctAnswer: 2
},
{
    id: 94,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_070.png",
    options: [
        "Dangerous dip",
        "Ferry",
        "Narrow bridge"
    ],
    correctAnswer: 1
},
{
    id: 96,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_071.png",
    options: [
        "Unguarded level crossing",
        "Barrier ahead",
        "Guarded level crossing"
    ],
    correctAnswer: 0
},
{
    id: 98,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_073.png",
    options: [
        "Y-intersection right",
        "Side road left",
        "Cross road ahead"
    ],
    correctAnswer: 0
},
{
    id: 100,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_074.png",
    options: [
        "Y-intersection left",
        "Side road right",
        "Y-intersection right"
    ],
    correctAnswer: 2
},
{
    id: 102,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_075.png",
    options: [
        "Turn left",
        "Turn right",
        "Y-intersection"
    ],
    correctAnswer: 2
},
{
    id: 106,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_077.png",
    options: [
        "Slippery road",
        "Loose gravel",
        "No entry for motor car"
    ],
    correctAnswer: 0
},
{
    id: 108,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_078.png",
    options: [
        "Loose gravel",
        "Slippery road",
        "No entry for motor car"
    ],
    correctAnswer: 0
},
{
    id: 110,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_079.png",
    options: [
        "Cycle crossing",
        "Cycle crossing prohibited",
        "No entry for cycles"
    ],
    correctAnswer: 0
},
{
    id: 112,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_081.png",
    options: [
        "Cattle crossing",
        "Cattle prohibited",
        "Animals prohibited"
    ],
    correctAnswer: 1
},
{
    id: 114,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_082.png",
    options: [
        "School ahead",
        "Pedestrians crossing",
        "Pedestrians prohibited"
    ],
    correctAnswer: 0
},
{
    id: 116,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_083.png",
    options: [
        "Men at work",
        "Children playing",
        "Pedestrian crossing"
    ],
    correctAnswer: 1
},
{
    id: 118,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_084.png",
    options: [
        "Rough road",
        "Slippery road",
        "Falling rocks"
    ],
    correctAnswer: 2
},
{
    id: 120,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_085.png",
    options: [
        "Bridge ahead",
        "Ferry",
        "Refreshment stall ahead"
    ],
    correctAnswer: 1
},
{
    id: 122,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_086.png",
    options: [
        "Steep ascend",
        "Steep descend",
        "Slippery road"
    ],
    correctAnswer: 0
},
{
    id: 124,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_087.png",
    options: [
        "Steep ascend",
        "Steep descend",
        "Slippery road"
    ],
    correctAnswer: 1
},
{
    id: 126,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_088.png",
    options: [
        "Y-intersection",
        "Road widens ahead",
        "Narrow bridge"
    ],
    correctAnswer: 2
},
{
    id: 128,
    category: "Traffic Signs",
    question: "What does this traffic sign indicate?",
    image: "Images/traffic-signs/sign_asset_089.png",
    options: [
        "Bridge ahead",
        "Gap in median",
        "Narrow bridge"
    ],
    correctAnswer: 2
},
,
{
    id: 2,
    category: "Road Safety",
    question: "The following sign represents",
    options: [
        "Keep left",
        "No entry",
        "One way"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 4,
    category: "Road Safety",
    question: "When approaching a road junction, the driver should",
    options: [
        "Increase speed",
        "Slow down and proceed only after ensuring that the way is clear",
        "Sound horn continuously and proceed"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 6,
    category: "Traffic Rules",
    question: "When an ambulance with flashing lights and siren approaches, you should",
    options: [
        "Give way to the ambulance",
        "Race ahead of the ambulance",
        "Block its path"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 8,
    category: "Traffic Rules",
    question: "When you see a red traffic signal, you should",
    options: [
        "Stop the vehicle before the stop line",
        "Proceed carefully",
        "Increase speed"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 10,
    category: "Driving Licence",
    question: "A learner's licence is valid for",
    options: [
        "30 days",
        "6 months",
        "1 year"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 12,
    category: "Railway Crossing",
    question: "At an unguarded railway level crossing, the driver should",
    options: [
        "Stop, look both ways and proceed only when safe",
        "Increase speed and cross immediately",
        "Follow the vehicle in front without stopping"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 14,
    category: "Traffic Rules",
    question: "Using a mobile phone while driving is",
    options: [
        "Allowed on empty roads",
        "Allowed at low speed",
        "Prohibited"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 16,
    category: "Driving Licence",
    question: "A learner driver must display",
    options: [
        "A red cross mark",
        "The letter L on the vehicle",
        "A green flag"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 18,
    category: "Road Safety",
    question: "Seat belt should be used",
    options: [
        "Only on highways",
        "Only by the driver during long journeys",
        "As required for safety while driving"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 20,
    category: "Pedestrian Safety",
    question: "Pedestrians should cross the road",
    options: [
        "At a zebra crossing where available",
        "Anywhere they wish",
        "Only from the middle of the road"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 22,
    category: "Traffic Rules",
    question: "Before changing lanes, a driver should",
    options: [
        "Check mirrors and ensure it is safe",
        "Immediately turn into the other lane",
        "Sound the horn and move without checking"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 24,
    category: "Emergency Vehicles",
    question: "Free passage should be given to",
    options: [
        "Emergency vehicles such as ambulances and fire service vehicles",
        "Only private cars",
        "Only buses"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 26,
    category: "Parking Rules",
    question: "Parking a vehicle near a pedestrian crossing is",
    options: [
        "Allowed",
        "Allowed if hazard lights are on",
        "Not allowed where it obstructs traffic or visibility"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 28,
    category: "Night Driving",
    question: "While driving at night, you should",
    options: [
        "Use proper lights according to road and traffic conditions",
        "Drive without lights",
        "Always use high beam"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 30,
    category: "Traffic Rules",
    question: "Overtaking should not be attempted",
    options: [
        "When the road ahead is clearly visible",
        "When it is unsafe or prohibited",
        "When there is sufficient space"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 32,
    category: "Pedestrian Safety",
    question: "A zebra crossing is intended for",
    options: [
        "Parking vehicles",
        "Pedestrians crossing the road",
        "Overtaking vehicles"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 34,
    category: "Traffic Signals",
    question: "A yellow traffic signal means",
    options: [
        "Speed up",
        "Proceed without caution",
        "Slow down and prepare to stop"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 36,
    category: "Traffic Signals",
    question: "A green traffic signal means",
    options: [
        "Proceed if the way is clear",
        "Stop immediately",
        "Reverse the vehicle"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 38,
    category: "Vehicle Safety",
    question: "Before starting a journey, the driver should check",
    options: [
        "Only the fuel level",
        "The vehicle and its important safety equipment",
        "Only the horn"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 40,
    category: "Traffic Rules",
    question: "Driving under the influence of alcohol is",
    options: [
        "Permitted at night",
        "Permitted on highways",
        "An offence"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 42,
    category: "Night Driving",
    question: "When parking a vehicle on the roadside at night, the vehicle should be",
    options: [
        "Properly visible to other road users",
        "Left without any lights",
        "Parked in the middle of the road"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 44,
    category: "Road Safety",
    question: "The driver should maintain a safe distance from the vehicle in front",
    options: [
        "Only during rain",
        "To allow enough time and distance to stop safely",
        "Only while overtaking"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 46,
    category: "Traffic Rules",
    question: "The horn should be used",
    options: [
        "To warn other road users of your presence when necessary",
        "Continuously in traffic",
        "To attract attention unnecessarily"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 48,
    category: "Vehicle Safety",
    question: "The rear-view mirror is mainly used for",
    options: [
        "Checking traffic approaching from behind",
        "Checking the engine",
        "Checking the road surface in front"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 50,
    category: "Traffic Rules",
    question: "A driver should give proper indication before",
    options: [
        "Changing direction or stopping when required",
        "Increasing the music volume",
        "Starting the engine"
    ],
    correctAnswer: 0,
    image: null
},
,
{
    id: 52,
    category: "Road Rules",
    question: "What should a driver do when approaching a pedestrian crossing?",
    options: [
        "Increase speed",
        "Slow down and give way to pedestrians crossing",
        "Sound the horn and continue"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 54,
    category: "Overtaking",
    question: "Overtaking another vehicle is prohibited",
    options: [
        "When approaching a bend or hill where visibility is poor",
        "On a straight road with clear visibility",
        "When the road is empty"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 56,
    category: "Traffic Rules",
    question: "Before overtaking another vehicle, the driver should",
    options: [
        "Ensure that the road ahead is clear and overtaking is safe",
        "Immediately accelerate without checking",
        "Drive very close to the vehicle in front"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 58,
    category: "Parking Rules",
    question: "Parking is prohibited",
    options: [
        "Where it obstructs traffic or creates danger",
        "Only in a parking area",
        "Only during the daytime"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 60,
    category: "Traffic Rules",
    question: "When a vehicle is turning, the driver should",
    options: [
        "Give the proper signal before turning",
        "Turn suddenly without warning",
        "Only sound the horn"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 62,
    category: "Road Safety",
    question: "What should you do if the road surface is slippery?",
    options: [
        "Drive faster to maintain balance",
        "Reduce speed and avoid sudden braking or steering",
        "Apply brakes suddenly"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 64,
    category: "Night Driving",
    question: "When an oncoming vehicle approaches at night, you should",
    options: [
        "Use high beam continuously",
        "Dip your headlights to avoid dazzling the other driver",
        "Switch off all lights"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 66,
    category: "Road Safety",
    question: "What should you do when driving in fog?",
    options: [
        "Drive at high speed",
        "Use appropriate lights and reduce speed",
        "Switch off headlights"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 68,
    category: "Traffic Rules",
    question: "When should you use the indicator of your vehicle?",
    options: [
        "Only when parking",
        "Before turning, changing lanes or changing direction",
        "Only while driving on highways"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 100,
    category: "Traffic Rules",
    question: "What should you do when a police officer gives you a signal to stop?",
    options: [
        "Ignore the signal",
        "Stop the vehicle safely as directed",
        "Increase speed and leave"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 102,
    category: "Road Safety",
    question: "What is the safest way to maintain control of your vehicle?",
    options: [
        "Keep both hands properly on the steering wheel",
        "Drive with one hand at all times",
        "Remove both hands while driving straight"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 104,
    category: "Vehicle Safety",
    question: "Tyres should be checked regularly for",
    options: [
        "Proper air pressure and condition",
        "Only their colour",
        "Only the brand name"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 106,
    category: "Vehicle Safety",
    question: "What should you check before starting your vehicle?",
    options: [
        "Brakes, mirrors and other essential controls",
        "Only the music system",
        "Only the number plate"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 108,
    category: "Traffic Rules",
    question: "When driving behind another vehicle, you should",
    options: [
        "Maintain a safe following distance",
        "Drive as close as possible",
        "Keep flashing your headlights unnecessarily"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 110,
    category: "Roundabout",
    question: "When entering a roundabout, the driver should",
    options: [
        "Give way to traffic already in the roundabout",
        "Enter at maximum speed",
        "Stop in the middle of the roundabout"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 112,
    category: "Road Safety",
    question: "Why should you avoid sudden braking?",
    options: [
        "It can cause loss of control or a collision",
        "It improves fuel efficiency",
        "It makes the vehicle faster"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 114,
    category: "Emergency Vehicles",
    question: "What should you do when a fire service vehicle approaches with siren and flashing lights?",
    options: [
        "Give way and allow it to pass",
        "Follow closely behind it",
        "Block the road"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 116,
    category: "Accident Rules",
    question: "If your vehicle is involved in an accident, you should",
    options: [
        "Stop and take appropriate action according to the situation",
        "Immediately leave the place",
        "Hide the vehicle"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 118,
    category: "Road Safety",
    question: "When driving on a wet road, the driver should",
    options: [
        "Increase speed",
        "Reduce speed and maintain a safe distance",
        "Drive very close to other vehicles"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 120,
    category: "Traffic Rules",
    question: "Before reversing a vehicle, the driver should",
    options: [
        "Ensure that the path behind is clear",
        "Reverse immediately without checking",
        "Only sound the horn"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 122,
    category: "Pedestrian Safety",
    question: "When children are crossing the road, a driver should",
    options: [
        "Slow down and be prepared to stop",
        "Speed up before they cross",
        "Sound the horn continuously"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 124,
    category: "Road Safety",
    question: "What should a driver do when feeling sleepy while driving?",
    options: [
        "Continue driving faster",
        "Stop at a safe place and take rest",
        "Turn up the music and ignore it"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 126,
    category: "Traffic Rules",
    question: "When driving downhill, the driver should",
    options: [
        "Maintain proper control and speed",
        "Switch off the engine and coast",
        "Drive as fast as possible"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 128,
    category: "Road Safety",
    question: "What should you do if a tyre suddenly bursts while driving?",
    options: [
        "Keep control of the steering and gradually slow down",
        "Apply the brakes suddenly",
        "Immediately turn the steering wheel sharply"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 130,
    category: "Traffic Rules",
    question: "Which side of the road should vehicles normally keep in India?",
    options: [
        "Left side",
        "Right side",
        "Middle of the road"
    ],
    correctAnswer: 0,
    image: null
},,
{
    id: 155,
    category: "Road Safety",
    question: "What is 'Tail-gating'?",
    options: [
        "Driving too close behind a vehicle in a dangerous manner",
        "Keeping safe distance from the vehicle ahead and regulating the speed proportionately",
        "Keeping a distance of at least 7 metres from the vehicle ahead"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 159,
    category: "Traffic Rules",
    question: "Type of horn permitted",
    options: [
        "Air-horn",
        "Multi-toned horn",
        "Electric horn"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 164,
    category: "Vehicle Documents",
    question: "All motor vehicles must be covered by",
    options: [
        "Comprehensive insurance",
        "Life insurance",
        "Third party insurance"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 165,
    category: "Traffic Rules",
    question: "You can overtake a vehicle through the left side if",
    options: [
        "The driver of that vehicle indicates his intention to turn right and proceeds to the center of the road",
        "There is sufficient space on the left side",
        "That vehicle moves slowly"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 169,
    category: "Vehicle Documents",
    question: "A vehicle can be seized by authorised officers if",
    options: [
        "The vehicle is not covered by a valid registration or permit",
        "The vehicle is not covered by valid insurance",
        "The vehicle exceeds the speed limit"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 173,
    category: "Driving Licence",
    question: "If drunken driving is detected, the driver is liable to be punished with",
    options: [
        "Imprisonment which may extend to 6 months or Rs. 2000 fine or both",
        "Imprisonment which may extend to 1 year or fine up to Rs. 4000 or both",
        "2 years rigorous imprisonment"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 175,
    category: "Two-Wheeler Rules",
    question: "You hold a learner's licence for a motorcycle. You should",
    options: [
        "Drive when the traffic is less",
        "Drive the vehicle only when an instructor holding a driving licence to drive motorcycle accompanies",
        "Not carry any other person on the motorcycle except for the purpose of getting instructions from an instructor who holds a valid driving licence to drive motorcycle"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 176,
    category: "Road Safety",
    question: "The safe way to stop the vehicle is",
    options: [
        "Press clutch and then brake",
        "Press brake and then clutch",
        "Press clutch and brake simultaneously"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 177,
    category: "Road Safety",
    question: "The safest way to negotiate a steep descent is",
    options: [
        "Use higher torque gear with brake",
        "Use brake and clutch simultaneously",
        "Use top gear with brake"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 178,
    category: "Vehicle Safety",
    question: "If your vehicle becomes broken down during night, you should",
    options: [
        "Stop, use hand brake and exhibit hazardous warning light",
        "Stop and exhibit red light and leave the vehicle",
        "Leave the vehicle without any warning"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 179,
    category: "Road Safety",
    question: "When a cow is standing across the road, you should",
    options: [
        "Wait until it clears the road",
        "Sound horn and drive fast",
        "Pass it from front"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 180,
    category: "Vehicle Rules",
    question: "Painting olive green on a private motor car is",
    options: [
        "Permitted",
        "Not permitted",
        "Permitted with special permission"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 181,
    category: "Vehicle Safety",
    question: "For higher power, the gear to be used is",
    options: [
        "1st gear",
        "Top gear",
        "2nd gear"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 182,
    category: "Traffic Rules",
    question: "Vehicle with left hand controls",
    options: [
        "Can be used",
        "Can be used with signalling device only",
        "Cannot be used"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 183,
    category: "Accident Rules",
    question: "An accident victim can be treated by",
    options: [
        "Only a government hospital doctor",
        "Any registered medical practitioner or doctor",
        "Only a private hospital"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 184,
    category: "Parking Rules",
    question: "While parking your vehicle on a downward gradient, in addition to application of hand brake, the gear engaged should be",
    options: [
        "Neutral gear",
        "First gear",
        "Reverse gear"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 185,
    category: "Traffic Rules",
    question: "While turning to right or left, it is safer if you",
    options: [
        "Use only indicators",
        "Show only hand signal",
        "Use both light indicators and hand signal"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 186,
    category: "Traffic Rules",
    question: "A driver shall drive in a one-way road",
    options: [
        "Only in the direction specified by the sign board",
        "In reverse direction in emergencies",
        "Both ways on Sundays"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 187,
    category: "Ghat Road Rules",
    question: "On ghat roads, when vehicles approach from opposite sides, the driver travelling downhill shall",
    options: [
        "Drive fast before the opposite vehicle enters",
        "Switch on the headlights and take way",
        "Give preference to the vehicles going up"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 188,
    category: "Traffic Rules",
    question: "When you leave a vehicle in a dangerous position, you are inviting action under",
    options: [
        "Section 121",
        "Section 122",
        "Section 185"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 189,
    category: "Traffic Rules",
    question: "Driving under the influence of drugs or alcohol invites action under",
    options: [
        "Section 121",
        "Section 125",
        "Section 185"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 190,
    category: "Railway Crossing",
    question: "Section 131 of MV Act 1988 lays down the duties of the driver regarding",
    options: [
        "Limits of weight",
        "Signal and signalling devices",
        "Precautions at unguarded railway level crossing"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 191,
    category: "Overtaking",
    question: "Under which circumstance will you avoid overtaking?",
    options: [
        "When visibility ahead is clear",
        "On a curve",
        "After a curve"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 192,
    category: "Parking Rules",
    question: "Which type of parking is more suitable on wide roads?",
    options: [
        "In line",
        "Parallel",
        "Inclined"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 193,
    category: "Pedestrian Safety",
    question: "When a pedestrian steps into a zebra line in front of you to cross the road, you should",
    options: [
        "Stop before the stop line and treat it as a stop signal",
        "Proceed before the pedestrian",
        "Sound horn and speed up your vehicle to cross before the pedestrian"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 197,
    category: "Traffic Rules",
    question: "If a person in charge of an animal apprehending that the animal may become unmanageable requests you to stop, the driver shall",
    options: [
        "Stop the vehicle",
        "Proceed while blowing the horn",
        "Only reduce the speed"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 198,
    category: "School Zone",
    question: "When school buses are stopped for picking up or setting down students, you should",
    options: [
        "Blow the horn and proceed",
        "Proceed slowly and cautiously since students may suddenly cross the road",
        "No special care is required"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 199,
    category: "Pedestrian Safety",
    question: "When a blind person crosses the road holding a white cane, the driver shall",
    options: [
        "Consider the white cane as a traffic sign to stop the vehicle",
        "Blow the horn and proceed",
        "Slow down and proceed with caution"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 200,
    category: "Accident Rules",
    question: "When a motor vehicle is involved in an accident, the driver shall report to the nearest police station within",
    options: [
        "24 hours",
        "12 hours",
        "48 hours"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 201,
    category: "Traffic Rules",
    question: "In a road without a footpath, pedestrians should walk on",
    options: [
        "The left side of the road",
        "The right side of the road",
        "Either side of the road"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 203,
    category: "Pedestrian Safety",
    question: "Why should pedestrians not cross the road at sharp bends or very near to a stopped vehicle?",
    options: [
        "It causes inconvenience to other vehicles",
        "It causes inconvenience to other road users",
        "Drivers of vehicles coming from a distance may not see the persons crossing the road"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 204,
    category: "Traffic Rules",
    question: "While turning to a road to the left of the road in which you are going, you should",
    options: [
        "Show the left turn signal, drive to the center and turn left",
        "Sound the horn and turn left",
        "Show the left turn signal, keep to the left side of the road and turn left"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 205,
    category: "Night Driving",
    question: "While driving with the headlight in high beam during night, if a vehicle approaches from the opposite direction, you should",
    options: [
        "Proceed keeping to the left",
        "Put the headlight in dim and bright alternatively several times",
        "Dim the headlight until the vehicle passes"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 206,
    category: "Vehicle Documents",
    question: "Records of a private vehicle include",
    options: [
        "Registration Certificate, G.C.R. and Insurance Certificate",
        "Registration Certificate, Insurance Certificate, Tax Token and Driving Licence",
        "Registration Certificate, Permit and Trip Sheet"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 209,
    category: "Vehicle Safety",
    question: "The rear-view mirror is used for",
    options: [
        "Seeing your face",
        "Watching the traffic approaching from behind",
        "Seeing passengers in the back seat"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 210,
    category: "Traffic Rules",
    question: "When fuel is filled in a vehicle, you shall",
    options: [
        "Check the air pressure",
        "Not use any light of the vehicle",
        "Keep the engine running"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 211,
    category: "Road Safety",
    question: "When you see the traffic sign 'School', you should",
    options: [
        "Stop the vehicle, sound horn and proceed",
        "Slow down and proceed with caution",
        "Sound horn continuously and proceed"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 212,
    category: "Hand Signals",
    question: "The driver of a vehicle extends his right arm with the palm downward and moves the arm upward and downward several times. This means",
    options: [
        "He is turning to the left",
        "He is slowing down the vehicle",
        "Stop on the left side"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 213,
    category: "Driving Licence",
    question: "Minimum age for obtaining driving licence for transport vehicles.",
    options: [
        "25 years",
        "18 years",
        "20 years"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 214,
    category: "Overtaking",
    question: "Overtaking is prohibited in the following case",
    options: [
        "State highway",
        "Panchayath roads",
        "Narrow bridge"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 215,
    category: "Parking Rules",
    question: "Parking prohibited in the following case.",
    options: [
        "Road side",
        "Where parking is permitted",
        "Near traffic light"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 216,
    category: "Traffic Rules",
    question: "Over speeding",
    options: [
        "Is an offence leading to suspension or cancellation of driving licence",
        "Is an offence leading to punishment by fine only",
        "Is not an offence"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 217,
    category: "Accident Rules",
    question: "When any property of a third party is damaged due to an accident, the driver shall",
    options: [
        "Report to the nearest police station within 24 hours",
        "Report to the nearest police station within 7 days",
        "Need not report to any police station"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 218,
    category: "Overtaking",
    question: "When the vehicle behind has begun to overtake our vehicle,",
    options: [
        "We shall not overtake another vehicle",
        "We can overtake another vehicle",
        "We can overtake another vehicle by blowing horn"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 219,
    category: "Overtaking",
    question: "The driver of the vehicle in front has not given signal for overtaking. What should you do?",
    options: [
        "We can overtake by blowing horn",
        "We should overtake immediately",
        "We should not overtake"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 223,
    category: "Vehicle Rules",
    question: "Number of persons that can be carried in the cabin of a Goods Carriage",
    options: [
        "Sufficient persons for loading and unloading the goods",
        "As many persons as recorded in the Registration Certificate",
        "Any number of persons if the journey is short"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 225,
    category: "Accident Rules",
    question: "What must you do if your vehicle is involved in an accident?",
    options: [
        "Stop at the scene of the accident, give First Aid to the victim if possible and help him get medical attention",
        "Drive the vehicle to the nearest police station immediately",
        "Inform the insurance authorities at the earliest"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 226,
    category: "Accident Rules",
    question: "Your vehicle has hit a parked vehicle. The owner of that vehicle could not be traced at the time. What should you do?",
    options: [
        "Drive away from the accident spot and clear the damage later",
        "Inform the insurance authorities as soon as possible",
        "Inform the police station having jurisdiction over the place where the accident occurred within 24 hours"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 227,
    category: "Vehicle Safety",
    question: "While driving your vehicle on a motorway, a front tyre gets burst. You should",
    options: [
        "Loosen the grip on the steering wheel",
        "Hold the steering wheel firmly and stop safely by using the brake",
        "Immediately turn the steering sharply"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 228,
    category: "Night Driving",
    question: "Motor cyclists are advised to wear what type of clothing at night to make them visible to other road users?",
    options: [
        "Bright clothing",
        "Dark clothing",
        "No special type of clothing"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 229,
    category: "Road Safety",
    question: "Before you open the right side doors after parking, you should",
    options: [
        "Ensure that no vehicle is passing by",
        "Quickly open the door and get down",
        "Never open the right doors and always get down from the left"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 230,
    category: "Vehicle Safety",
    question: "Which of the following is most important when loading a vehicle?",
    options: [
        "Loading it towards the rear",
        "Loading it towards the front",
        "Spreading the load evenly"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 231,
    category: "Vehicle Safety",
    question: "You are driving a tipper vehicle carrying loose dry sand. Why should you cover this load properly?",
    options: [
        "To stop handling from being affected",
        "To set your rearward vision",
        "To prevent sand being blown into the eyes of other road users"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 232,
    category: "Vehicle Rules",
    question: "How many people can you carry over the load carried on a truck?",
    options: [
        "One",
        "As per permit",
        "None"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 233,
    category: "Driving Technique",
    question: "What should be checked first before turning to the left?",
    options: [
        "The right side mirror",
        "Look behind over your right shoulder",
        "The left side mirror"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 234,
    category: "Driving Technique",
    question: "You are about to move off. You should always",
    options: [
        "Use your mirrors, look behind and give proper signal",
        "Signal left with indicator and move",
        "Use only the off-side mirror and move away quickly"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 235,
    category: "Road Safety",
    question: "At a road junction, which of the following are most at risk?",
    options: [
        "Cyclists and motor cyclists",
        "Pedestrians",
        "Both"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 236,
    category: "Vehicle Knowledge",
    question: "The turning circle of a vehicle is the",
    options: [
        "Number of turns of the steering wheel between locks",
        "Amount by which a vehicle cuts corners",
        "Amount of space needed for the vehicle to turn"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 237,
    category: "Road Safety",
    question: "Before braking in wet conditions, you should make sure as far as possible that",
    options: [
        "The gear lever is in neutral",
        "There is no mist or water in your rear-view mirror",
        "Your vehicle is travelling slowly in a straight line"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 238,
    category: "Road Safety",
    question: "Your vehicle has broken down on a motorway and you have several passengers on board. You should",
    options: [
        "Stop the vehicle as far to the left side of the road as possible",
        "Move the passengers to the front of your vehicle",
        "Leave the passengers inside without taking precautions"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 239,
    category: "Vehicle Safety",
    question: "A wiper fitted on the windscreen of a vehicle is used",
    options: [
        "Only for rainy season",
        "For cleaning the windscreen in any season",
        "As a signal to an oncoming vehicle to stop"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 240,
    category: "Vehicle Safety",
    question: "The correct procedure for stopping a vehicle not equipped with an anti-lock brake system is",
    options: [
        "Apply the foot brake firmly in a pumping action until the vehicle has stopped",
        "Apply the foot brake firmly once until the vehicle has stopped",
        "Apply the foot brake and hand brake until the vehicle has stopped"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 241,
    category: "Driving Technique",
    question: "You are driving a vehicle fitted with a speed governor. You should be careful when",
    options: [
        "Overtaking another vehicle",
        "Parking the vehicle",
        "Using the horn"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 242,
    category: "Vehicle Safety",
    question: "Which of the following is a legal requirement for every vehicle?",
    options: [
        "A driver of a motor car driving behind a long truck can keep a braking distance",
        "All signals and warning sign posts",
        "Direction posts and markings on road"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 243,
    category: "Vehicle Rules",
    question: "What dangerous substance can be carried on a public service vehicle?",
    options: [
        "Fuel and lubricant required for the vehicle",
        "Explosives",
        "Unsafe hazardous material"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 244,
    category: "Traffic Rules",
    question: "A driver shall not sound the horn",
    options: [
        "In prohibited areas notified by the authority",
        "On every highway",
        "Only during daytime"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 245,
    category: "Vehicle Safety",
    question: "Which safety device fitted in a Light Motor Vehicle protects the driver from injury?",
    options: [
        "Helmet",
        "Seat belt",
        "Crash guard"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 246,
    category: "Two-Wheeler Rules",
    question: "Basic safety requirements of a two wheeler include",
    options: [
        "Rear wheel cover / sari guard",
        "Crash guard",
        "Both of the above"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 247,
    category: "Pedestrian Safety",
    question: "Pedestrians should walk on which side of the road?",
    options: [
        "Right side",
        "Left side",
        "Middle of the road"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 248,
    category: "Vehicle Safety",
    question: "Things to be checked before a long drive include",
    options: [
        "Fuel, oil, brake fluid, coolant and condition of tyres",
        "Spare wheel, tools and tension of all drive belts",
        "All of the above"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 249,
    category: "Traffic Rules",
    question: "Reverse driving is permitted only for",
    options: [
        "Minimum distance required for changing direction",
        "Any distance on an empty road",
        "Driving back to avoid a traffic signal"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 250,
    category: "Parking Rules",
    question: "Precautions to be followed during parking at night",
    options: [
        "Park outside the carriageway and use parking lights and hand brake",
        "Park the vehicle on the footpath away from traffic",
        "Use a tyre jack to prevent rolling"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 251,
    category: "Alternative Fuel",
    question: "Use of LPG as fuel in a vehicle",
    options: [
        "Is prohibited by law",
        "Can be used after certification from the authorities",
        "Cannot be used even in modern LPG inbuilt models"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 252,
    category: "Alternative Fuel",
    question: "Using LPG as vehicle fuel",
    options: [
        "Reduces pollution",
        "Is cost effective",
        "All of the above"
    ],
    correctAnswer: 2,
    image: null
},
{
    id: 253,
    category: "Traffic Rules",
    question: "When changing lanes, you should",
    options: [
        "Use the appropriate indicator signal before changing lanes",
        "Change lanes without signalling",
        "Look only through the front window before changing lanes"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 254,
    category: "Vehicle Rules",
    question: "Towing is permitted only for",
    options: [
        "Mechanically disabled or incompletely assembled motor vehicles",
        "Any registered traveller or sidecar",
        "Any private vehicle"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 255,
    category: "Night Driving",
    question: "During night, a car driving towards you with high beam on is",
    options: [
        "Driving with bad manners since high beams can blind other road users",
        "A safe driver because high beam lights up the road",
        "Always permitted in every situation"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 256,
    category: "Traffic Rules",
    question: "Driving under the influence of alcohol or drugs is",
    options: [
        "Permitted at low speed",
        "An offence",
        "Allowed on empty roads"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 257,
    category: "Vehicle Safety",
    question: "Before leaving a parked vehicle, the driver should",
    options: [
        "Ensure that the vehicle is properly secured",
        "Leave the engine running",
        "Leave the doors open"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 258,
    category: "Driving Licence",
    question: "A person should not allow another person to drive a motor vehicle unless that person holds",
    options: [
        "A valid driving licence for that class of vehicle",
        "Only a learner licence in every situation",
        "An identity card"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 259,
    category: "Vehicle Safety",
    question: "Sudden braking should be avoided because",
    options: [
        "It may cause loss of control or an accident",
        "It increases engine power",
        "It improves tyre life"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 260,
    category: "Two-Wheeler Safety",
    question: "While riding a motorcycle, proper braking should be done",
    options: [
        "Using the brakes carefully and maintaining control",
        "Using only the front brake suddenly",
        "Switching off the engine"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 261,
    category: "Road Safety",
    question: "When riding on loose sand or gravel, the driver should",
    options: [
        "Reduce speed and avoid sudden steering or braking",
        "Increase speed immediately",
        "Apply the brakes sharply"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 262,
    category: "Road Safety",
    question: "For fuel-efficient driving, the driver should",
    options: [
        "Avoid unnecessary acceleration and braking",
        "Always drive in the lowest gear",
        "Keep the engine running while parked"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 263,
    category: "Vehicle Safety",
    question: "Excessive smoke from the exhaust of a motor vehicle indicates",
    options: [
        "Possible pollution or mechanical problems",
        "That the vehicle is performing better",
        "That the fuel tank is full"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 264,
    category: "Environment",
    question: "A Pollution Under Control Certificate is related to",
    options: [
        "Checking vehicle emissions",
        "Checking the colour of the vehicle",
        "Checking the driving licence"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 265,
    category: "Road Safety",
    question: "While driving behind a large vehicle, the driver should",
    options: [
        "Maintain sufficient distance to see the road ahead",
        "Drive very close behind it",
        "Continuously use the horn"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 266,
    category: "Night Driving",
    question: "While driving at night, you should use high beam",
    options: [
        "Only when it does not dazzle other road users",
        "At all times",
        "Only inside crowded areas"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 267,
    category: "Road Safety",
    question: "When approaching a sharp bend, the driver should",
    options: [
        "Reduce speed and keep proper control of the vehicle",
        "Overtake immediately",
        "Increase speed before entering the bend"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 268,
    category: "Traffic Rules",
    question: "A driver should obey traffic signs and signals because",
    options: [
        "They regulate traffic and improve road safety",
        "They are only suggestions",
        "They apply only to commercial vehicles"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 269,
    category: "Road Safety",
    question: "If the vehicle starts skidding, the driver should",
    options: [
        "Avoid sudden braking and try to regain control",
        "Immediately accelerate",
        "Turn the steering wheel sharply in all directions"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 270,
    category: "Driving Technique",
    question: "Before starting a vehicle, the driver should ensure that",
    options: [
        "The surroundings are safe and the vehicle is under control",
        "The vehicle is in motion already",
        "The horn is continuously pressed"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 271,
    category: "Driving Licence",
    question: "A person holding a learner's licence can drive a motor vehicle when",
    options: [
        "The prescribed learner sign is displayed on the vehicle",
        "There is no traffic on the road",
        "Only during daytime"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 272,
    category: "Road Safety",
    question: "When approaching a road intersection without traffic signals, you should",
    options: [
        "Slow down and proceed with caution",
        "Increase speed",
        "Use the horn and continue without slowing down"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 273,
    category: "Traffic Signals",
    question: "A flashing yellow traffic signal indicates",
    options: [
        "Stop immediately",
        "Proceed with caution",
        "Road closed"
    ],
    correctAnswer: 1,
    image: null
},
{
    id: 274,
    category: "Road Markings",
    question: "A continuous line on the road generally indicates",
    options: [
        "Crossing or changing lanes is restricted",
        "Free parking is allowed",
        "Vehicles must increase speed"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 275,
    category: "Road Safety",
    question: "When driving on a steep uphill road, the driver should",
    options: [
        "Use an appropriate lower gear when required",
        "Always use neutral gear",
        "Switch off the engine"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 276,
    category: "Traffic Rules",
    question: "When two vehicles approach a narrow road from opposite directions, the drivers should",
    options: [
        "Proceed carefully and give way when necessary",
        "Both accelerate",
        "Block each other"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 277,
    category: "Parking Rules",
    question: "A vehicle should not be parked",
    options: [
        "Where it obstructs the movement of other vehicles",
        "In a permitted parking area",
        "In a private garage"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 278,
    category: "Road Safety",
    question: "Before entering a main road from a side road, the driver should",
    options: [
        "Give way to traffic already on the main road",
        "Enter without checking",
        "Increase speed immediately"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 279,
    category: "Traffic Rules",
    question: "When a traffic police officer gives a signal that conflicts with a traffic signal, you should obey",
    options: [
        "The traffic police officer",
        "Only the traffic light",
        "Neither signal"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 280,
    category: "Road Safety",
    question: "While approaching a speed breaker, the driver should",
    options: [
        "Reduce speed and cross safely",
        "Increase speed",
        "Apply the hand brake suddenly"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 281,
    category: "Vehicle Safety",
    question: "If the engine temperature becomes excessively high while driving, you should",
    options: [
        "Stop safely and check the vehicle after allowing it to cool",
        "Continue driving at maximum speed",
        "Immediately open the radiator cap while the engine is hot"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 282,
    category: "Road Safety",
    question: "When driving through a waterlogged road, the driver should",
    options: [
        "Drive slowly and maintain control of the vehicle",
        "Accelerate rapidly",
        "Switch off the headlights"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 283,
    category: "Traffic Rules",
    question: "Before making a U-turn, the driver should",
    options: [
        "Ensure that the U-turn is permitted and safe",
        "Turn immediately without checking traffic",
        "Always make the turn at maximum speed"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 284,
    category: "Road Safety",
    question: "If another driver is behaving aggressively on the road, you should",
    options: [
        "Remain calm and avoid confrontation",
        "Compete with the other driver",
        "Block the other vehicle"
    ],
    correctAnswer: 0,
    image: null
},
{
    id: 285,
    category: "Driving Technique",
    question: "Before changing direction, a driver should",
    options: [
        "Check mirrors, give the correct signal and ensure it is safe",
        "Turn suddenly",
        "Only sound the horn"
    ],
    correctAnswer: 0,
    image: null
}];