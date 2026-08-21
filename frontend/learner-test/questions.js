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
}
];