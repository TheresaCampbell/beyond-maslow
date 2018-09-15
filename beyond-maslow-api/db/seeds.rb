puts "Seeding list items."

listItems = ListItem.create(
  [
    {
      title: "Brickworks",
      body: "I think it's a market? Like, a farmer's market? Katie's told me about it 6 times, but I never remember. We have to go before fall hits, though!",
      cost: "$$",
      category: "Shopping",
      completed: true
    },
    {
      title: "Clubbin'!",
      body: "A wild night to remember! No holds barred! Let's dance the night away! Options: Maddy, Rebel, Dance Cave",
      cost: "$$",
      category: "Night Life",
      completed: false
    },
    {
      title: "Roller Skating",
      body: "Put those derby skills to work and teach your friends how to do tomahawk stops and sick knee slides. Or pretend it's the 70's and dance on those wheels! Invite Tanner - he'll bring themed outfits for all and we can make it a photoshoot.",
      cost: "$",
      category: "Physical Activity",
      completed: false
    },
    {
      title: "Canoeing",
      body: "Ok so I start in stern and then halfway through, we switch positions and impress everybody. Rentable canoes at the waterfront.",
      cost: "$$",
      category: "Physical Activity",
      completed: false
    }
  ]
)

puts "List items seeded!"