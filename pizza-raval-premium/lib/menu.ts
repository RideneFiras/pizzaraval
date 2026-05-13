/**
 * Real menu items pulled verbatim from the May 2026 Pizza Raval Ramblas
 * print menus (Menu ESP + Menu ING PDFs). Do not edit prices or invent items.
 */

export type MenuItem = {
  es: string;
  en: string;
  descEs?: string;
  descEn?: string;
  price?: string;
  veg?: boolean;
  special?: boolean;
};

export const pizzas: MenuItem[] = [
  { es: "Margarita", en: "Margarita", descEs: "Salsa de tomate, muzzarella y pesto", descEn: "Tomato sauce, mozzarella, pesto", price: "€18", veg: true },
  { es: "Fugazza", en: "Fugazza", descEs: "Muzzarella, cebolla y orégano", descEn: "Mozzarella, onions, oregano", price: "€19", veg: true },
  { es: "Champiñones", en: "Mushroom", descEs: "Muzzarella, champiñones y orégano", descEn: "Mozzarella, mushrooms, oregano", price: "€19", veg: true },
  { es: "Bacon & BBQ", en: "Bacon & BBQ", descEs: "Muzzarella, tiras de bacon, salsa barbacoa", descEn: "Mozzarella, bacon strips, BBQ sauce", price: "€20" },
  { es: "Vegetales", en: "Veggie", descEs: "Muzzarella, calabacín, pimientos y puerro", descEn: "Mozzarella, zucchini, red peppers, leeks", price: "€20" },
  { es: "Jamón Dulce", en: "Sweet Ham", descEs: "Muzzarella y jamón dulce", descEn: "Mozzarella and ham", price: "€20" },
  { es: "Espinaca & Queso Azul", en: "Spinach & Blue Cheese", descEs: "Muzzarella, espinaca y queso azul", descEn: "Mozzarella, spinach, blue cheese", price: "€20" },
  { es: "Pepperoni", en: "Pepperoni", descEs: "Muzzarella y chorizo de pepperoni", descEn: "Mozzarella and pepperoni", price: "€21" },
  { es: "Queso de Cabra", en: "Goat Cheese", descEs: "Muzzarella, queso de cabra y miel", descEn: "Mozzarella, goat cheese, honey", price: "€21" },
  { es: "Tomate y Rúcula", en: "Tomato & Arugula", descEs: "Muzzarella, tomates cherry y rúcula", descEn: "Mozzarella, cherry tomatoes, arugula", price: "€21" },
  { es: "4 Quesos", en: "4 Cheese", descEs: "Muzzarella, queso azul, cheddar y provolone", descEn: "Mozzarella, blue cheese, cheddar, provolone", price: "€21" },
  { es: "Vegana", en: "Vegan", descEs: "Queso vegano, calabacín, pimientos y puerro", descEn: "Vegan cheese, zucchini, red peppers, leeks", price: "€21", veg: true },
];

export const especiales: MenuItem[] = [
  { es: "Hawaiana", en: "Hawaiian", descEs: "Muzzarella, jamón dulce y piña", descEn: "Mozzarella, ham, pineapple", price: "€22", special: true },
  { es: "Anchoas con Aceitunas Negras", en: "Anchovies with Black Olives", price: "€24", special: true },
  { es: "Rúcula con Tomates Secos", en: "Arugula with Sun-Dried Tomatoes", price: "€24", special: true, veg: true },
  { es: "Jamón Dulce, Huevo y Aceitunas", en: "Sweet Ham, Boiled Egg, Olives", price: "€25", special: true },
];

export const paraPicar: MenuItem[] = [
  { es: "Olivas", en: "Olives", descEs: "Verdes y negras", descEn: "Black & green", price: "€2,00", veg: true },
  { es: "Porción de Pizza", en: "Slice of Pizza", price: "€3,50" },
  { es: "Empanada de Carne", en: "Meat Empanada", price: "€3,20" },
  { es: "Empanada de Pollo", en: "Chicken Empanada", price: "€3,20" },
  { es: "Empanada Vegana", en: "Vegan Empanada", price: "€3,20", veg: true },
  { es: "Porción de Faina", en: "Slice of Faina", descEs: "De garbanzos o con espinaca", descEn: "Garbanzo or garbanzo with spinach", price: "€3,00", veg: true },
  { es: "Faina Montada", en: "Loaded Faina", descEs: "Salsa de tomate, queso y hasta 2 toppings", descEn: "Tomato sauce, cheese, up to 2 toppings", price: "€3,50" },
  { es: "Hummus", en: "Hummus", descEs: "Con tiritas de pan de pizza", descEn: "With pizza bread strips", price: "€5,50", veg: true },
  { es: "Tiritas de Faina Crocante", en: "Crispy Faina Strips", descEs: "Con dip de salsa de tomates secos", descEn: "With sun-dried tomato dip", price: "€5,50", veg: true },
  { es: "Tiritas de Milanesa", en: "Milanesa Strips", descEs: "Con chimichurri", descEn: "With chimichurri", price: "€6,50" },
];

export const alPan: MenuItem[] = [
  { es: "Burger", en: "Burger", descEs: "Cheddar, lechuga, tomate y ketchup", descEn: "Cheddar, lettuce, tomato, ketchup", price: "€8,50" },
  { es: "Milanesa de Pollo", en: "Chicken Milanesa", descEs: "Muzzarella, lechuga y tomate", descEn: "Mozzarella, lettuce, tomato", price: "€8,50" },
  { es: "Milanesa de Berenjena", en: "Eggplant Milanesa", descEs: "Queso vegano, lechuga y tomate", descEn: "Vegan cheese, lettuce, tomato", price: "€8,50", veg: true },
];

export const bebidas = {
  beer: [
    { es: "Caña Estrella", en: "Caña Estrella", price: "€3,00" },
    { es: "Caña 1906", en: "Caña 1906", price: "€3,20" },
    { es: "Pinta", en: "Pint", price: "€5,00" },
    { es: "Alambra botella", en: "Alambra bottle", price: "€3,50" },
    { es: "Águila botella", en: "Águila bottle", price: "€4,00" },
    { es: "Sin gluten", en: "Gluten free", price: "€3,50" },
  ] as MenuItem[],
  wineCocktails: [
    { es: "Copa de vino", en: "Glass of wine", price: "€3,50" },
    { es: "Shots", en: "Shots", price: "€3,00" },
    { es: "Cubatas", en: "Highballs", price: "€7,00" },
  ] as MenuItem[],
  soft: [
    { es: "Agua", en: "Water", price: "€2,00" },
    { es: "Refrescos", en: "Soft drinks", price: "€2,50" },
  ] as MenuItem[],
};
