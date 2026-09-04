/**
 * menuData.js — realistic menu items for Wildflower Kitchen & Coffee.
 * 18-24 items across categories: Breakfast, Coffee & Drinks, Lunch, Dinner, Desserts.
 * Each: { id, category, name, description, price, tags[] }
 */

const menuData = [
    // ── Breakfast ─────────────────────────────────────────
    {
        id: 1,
        category: 'Breakfast',
        name: 'Wildflower Benedict',
        description:
            'Two poached eggs over house-made sourdough, draped in hollandaise with sautéed spinach, roasted tomato, and a sprinkle of microgreens.',
        price: 16,
        tags: ['vegetarian'],
    },
    {
        id: 2,
        category: 'Breakfast',
        name: 'Seasonal Grain Bowl',
        description:
            'Warm farro tossed with roasted sweet potato, kale, pickled red onion, tahini drizzle, and a soft-boiled egg.',
        price: 14,
        tags: ['vegetarian'],
    },
    {
        id: 3,
        category: 'Breakfast',
        name: 'Buttermilk Pancake Stack',
        description:
            'Three fluffy buttermilk pancakes layered with Oregon marionberry compote, whipped mascarpone, and toasted pecans.',
        price: 13,
        tags: ['vegetarian'],
    },
    {
        id: 4,
        category: 'Breakfast',
        name: 'Smoked Salmon Toast',
        description:
            'House-cured salmon on thick-cut rye with cream cheese, capers, shaved red onion, and fresh dill.',
        price: 17,
        tags: [],
    },

    // ── Coffee & Drinks ──────────────────────────────────
    {
        id: 5,
        category: 'Coffee & Drinks',
        name: 'Wildflower Lavender Latte',
        description:
            'Double-shot espresso with steamed oat milk and house-made lavender syrup, finished with a dusting of culinary lavender.',
        price: 6,
        tags: ['vegetarian'],
    },
    {
        id: 6,
        category: 'Coffee & Drinks',
        name: 'Cold Brew Old Fashioned',
        description:
            'Our 18-hour cold brew infused with orange peel and a dash of vanilla bitters over king-size ice.',
        price: 7,
        tags: ['vegetarian'],
    },
    {
        id: 7,
        category: 'Coffee & Drinks',
        name: 'Matcha Honey Fog',
        description:
            'Ceremonial-grade matcha whisked with honey-sweetened oat milk and a wisp of vanilla.',
        price: 6,
        tags: ['vegetarian', 'glutenFree'],
    },
    {
        id: 8,
        category: 'Coffee & Drinks',
        name: 'Fresh-Pressed Greens',
        description:
            'Cucumber, celery, green apple, ginger, and lemon — cold-pressed to order.',
        price: 9,
        tags: ['vegetarian', 'glutenFree'],
    },

    // ── Lunch ─────────────────────────────────────────────
    {
        id: 9,
        category: 'Lunch',
        name: 'Garden Harvest Salad',
        description:
            'Mixed greens with roasted beets, candied walnuts, shaved Parmigiano, and champagne vinaigrette.',
        price: 15,
        tags: ['vegetarian', 'glutenFree'],
    },
    {
        id: 10,
        category: 'Lunch',
        name: 'Smoked Turkey Club',
        description:
            'House-smoked turkey, pepper bacon, avocado, heirloom tomato, and garlic aioli on grilled ciabatta. Served with house fries.',
        price: 18,
        tags: [],
    },
    {
        id: 11,
        category: 'Lunch',
        name: 'Mushroom & Gruyère Melt',
        description:
            'Wild mushroom duxelles and melted Gruyère on rustic sourdough, with a side of roasted tomato soup.',
        price: 16,
        tags: ['vegetarian'],
    },
    {
        id: 12,
        category: 'Lunch',
        name: 'Spicy Thai Peanut Bowl',
        description:
            'Rice noodles, crunchy vegetables, edamame, and crispy tofu tossed in a spicy peanut-lime dressing with fresh herbs.',
        price: 17,
        tags: ['vegetarian', 'spicy'],
    },

    // ── Dinner ────────────────────────────────────────────
    {
        id: 13,
        category: 'Dinner',
        name: 'Pan-Seared Salmon',
        description:
            'Wild-caught Chinook salmon with a pistachio-herb crust, served over cauliflower purée with charred broccolini and lemon beurre blanc.',
        price: 32,
        tags: ['glutenFree'],
    },
    {
        id: 14,
        category: 'Dinner',
        name: 'Braised Short Rib',
        description:
            'Twelve-hour red wine-braised short rib with creamy polenta, roasted root vegetables, and gremolata.',
        price: 34,
        tags: ['glutenFree'],
    },
    {
        id: 15,
        category: 'Dinner',
        name: 'Wild Mushroom Risotto',
        description:
            'Arborio rice slowly stirred with a medley of foraged mushrooms, aged Parmesan, truffle oil, and fresh thyme.',
        price: 26,
        tags: ['vegetarian', 'glutenFree'],
    },
    {
        id: 16,
        category: 'Dinner',
        name: 'Herb-Crusted Lamb Chops',
        description:
            'New Zealand lamb chops with rosemary-garlic crust, roasted fingerlings, mint pesto, and seasonal greens.',
        price: 36,
        tags: ['glutenFree'],
    },
    {
        id: 17,
        category: 'Dinner',
        name: 'Roasted Cauliflower Steak',
        description:
            'Thick-cut cauliflower steak with romesco sauce, toasted almonds, golden raisins, and crispy sage.',
        price: 22,
        tags: ['vegetarian', 'glutenFree', 'spicy'],
    },

    // ── Desserts ──────────────────────────────────────────
    {
        id: 18,
        category: 'Desserts',
        name: 'Dark Chocolate Fondant',
        description:
            'Warm Valrhona chocolate cake with a molten center, served with vanilla bean ice cream and a dusting of fleur de sel.',
        price: 14,
        tags: ['vegetarian'],
    },
    {
        id: 19,
        category: 'Desserts',
        name: 'Lemon Posset',
        description:
            'Silky citrus cream set with Meyer lemon, topped with macerated berries and a buttery shortbread crumble.',
        price: 11,
        tags: ['vegetarian', 'glutenFree'],
    },
    {
        id: 20,
        category: 'Desserts',
        name: 'Seasonal Fruit Galette',
        description:
            'Rustic free-form pastry filled with peak-season stone fruit, brown butter, and a scoop of cardamom ice cream.',
        price: 13,
        tags: ['vegetarian'],
    },
    {
        id: 21,
        category: 'Desserts',
        name: 'Affogato al Caffè',
        description:
            'A scoop of house-made vanilla gelato drowned in a fresh double espresso shot, with a hazelnut biscotti on the side.',
        price: 9,
        tags: ['vegetarian'],
    },
];

export default menuData;
