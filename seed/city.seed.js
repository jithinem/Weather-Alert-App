const City = require('../models/city.model');

const cityJson = [
  { "city": "Kochi" },
  { "city": "Trivandrum" },
  { "city": "Mumbai" }
];

const seedCountries = async () => {
  try {
    // Check if the City collection is empty
    const cityCount = await City.countDocuments();
    if (cityCount > 0) {
      console.log('City collection already contains data. Seeding skipped.');
      return;
    }

    // Seed the collection if empty
    await City.insertMany(cityJson);
    console.log('Cities seeded successfully');
  } catch (error) {
    console.error('Error seeding cities:', error);
  }
};

module.exports = {seedCountries}
