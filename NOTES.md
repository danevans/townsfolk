# Various Notes About The System Design

## Qualities

Once there is a class shared by all entities on the board each type of item should have various qualities included in it. These qualities will dictate behavior and consequences of actions.

For example a person should have hunger, movement, age, and mortality. When they die they lose the hunger and movement qualities. They still have an age but they stop _aging_. In this way the mortality quality would affect the other qualities.

Foods might have an edible quality.

It seems like a bad idea to implement these via a mixin pattern because the code will become unmanageable. Removing a mixin could also be a problem.

There's a distinction between the qualities that all members of a class have (abstract) and the qualities that the individual instance have such as a hunger value of 15.

### Jobs

These could be implemented in terms of a quality. Since a character should only have one job at a time some qualities must be mutually exclusive.

### Interactions Between Qualities

If a character has the qualities hunger and mobility then they have to understand that when they get hungry they need to use their mobility to get to some food so they can eat it.

## Desires

Each character gets iterated each turn. The turn has three phases:

1. That iteration should run all required behavior/quality iterations. So if they have a hunger quality they should gain one hunger when a tick goes by.

2. After all the updates to the entity itself are made then the character's top desire is computed (eat, drink, etc.).

    Can characters make a decision like: I'm hungrier than I am thirsty but since I'm near the water I'll drink this turn then head to the food next turn?

3. After the top desire is computed then the character attempts to act on that desire.

So each quality should provide an interface for each of these three phases.

In addition the quality may need to initialize certain things on the entity when it's created.

## Consequences

It's going to present a problem for characters to understand that they may desire something as a consequence of something else. For example if they are hungry will they understand to harvest a plant to eat it if the plant is not edible when it is in the ground. Similarly how will they know to fish and cook the fish?

Or if they want to eat will they understand that they can cook a fish and in order to cook the fish they need to catch it and in order to catch it they need a fishing pole?

Maybe this will require human intervention like assigning a job which will affect their motivation.

Another consequence they should be better at is planning ahead like eating multiple times to give themselves more time to before they get hungry again. Or eventually wanting to take food with them for when they get hungry in the future.

## Hunger Imbalance

What is the right balance between accruing hunger and eventually starving and having enough turns to comfortably find food, eat it, and go about doing other things? I want something like intervals of: 100 turns to do stuff then 20 turns spent finding food then 100 turns again just doing stuff.

Currently they get hungry too fast and don't have time to do much else besides eat to survive. It also may be a problem that they lose the motivation to eat after eating once because the hunger is below the threshold or because now thirst is greater than the hunger.
