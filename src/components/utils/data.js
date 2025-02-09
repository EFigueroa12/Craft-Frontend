export const IDENTITY_CARDS = [
    {
        name: "Scissors",
        power: "Steal 1 resource from another player.",
        block: "Blocks kills from paper.",
    },
    {
        name: "Cockroach",
        power: "Can kill attack any ID with 2 of each resource payment.",
        block: "Can not block kill attacks.",
    },
    {
        name: "Paper",
        power: "Block stealing of resources.",
        block: "Blocks kills from rock.",
    },
    {
        name: "Rock",
        power: "Can grab 2 resources from resource deck on turn.",
        block: "Blocks kills from scissors.",
    }
];

export const RULES = [
    {
        rule:"Four resources of same type to kill attack. For example, 4 stone for Rock, 4 wood for Paper, 4 metal for scissors."
    },
    {
        rule:"2 resources can be exchanged for 1 specific resource that is known by all players."
    },
    {
        rule:"1 exchange with Identity deck allowed per player."
    },
];

export const RESOURCE_CARDS = [
    {
        name: "Metal"
    },
    {
        name: "Wood"
    },
    {
        name: "Stone"
    },
];