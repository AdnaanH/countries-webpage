export function generateRandomCountryDescription(country) {
    // Helper function to format numbers with commas
    const formatNumber = (num) => {
        return num.toLocaleString();
    };

    // Helper function to get random item from array
    const getRandomItem = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    // Helper function to get random items without repetition
    const getRandomItems = (array, count) => {
        const shuffled = [...array].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };

    // Template categories
    const templates = {
        geography: [
            `Nestled in ${country.region}, ${country.name} spans ${formatNumber(country.area)} square kilometers, offering a diverse landscape from ${country.latlng[0]}° latitude to ${country.latlng[1]}° longitude.`,
            `The country's geography is marked by ${country.borders ? formatNumber(country.borders.length) : 'no'} international borders, creating a unique blend of cultural influences.`,
            `With ${formatNumber(country.population)} inhabitants, ${country.name} is known for its ${country.subregion} charm and natural beauty.`
        ],
        culture: [
            `The people of ${country.name} are known for their ${country.demonym} heritage, which is reflected in their vibrant festivals and traditions.`,
            `Rich in cultural heritage, the country boasts ${country.languages.length} official languages: ${country.languages.map(lang => lang.name).join(', ')}.`,
            `The capital city, ${country.capital}, serves as a melting pot of ${country.name}'s diverse cultural tapestry.`
        ],
        economy: [
            `The economy of ${country.name} is primarily driven by ${country.currencies.map(curr => curr.name).join(', ')}, reflecting its global trade position.`,
            `Known for its ${country.region} market influence, ${country.name} plays a significant role in regional economic development.`,
            `With a Gini index of ${country.gini}, the country demonstrates a commitment to economic equality and social progress.`
        ],
        tourism: [
            `Tourists flock to ${country.name} to experience its stunning natural beauty and rich cultural heritage.`,
            `The country's vibrant street markets and historical landmarks make it a must-visit destination for travelers.`,
            `Adventure seekers and cultural enthusiasts alike find ${country.name} to be an enchanting destination.`
        ]
    };

    // Function to generate a paragraph based on country characteristics
    const generateParagraph = (category) => {
        const baseTemplate = getRandomItem(templates[category]);
        
        // Add dynamic content based on country characteristics
        let enhancedTemplate = baseTemplate;
        
        // Add population density context if applicable
        if (country.area && country.population) {
            const density = (country.population / country.area).toFixed(1);
            enhancedTemplate += ` With a population density of ${density} people per square kilometer, ${country.name} presents a unique living environment.`;
        }
        
        // Add border context
        if (country.borders && country.borders.length > 0) {
            enhancedTemplate += ` The country shares borders with ${formatNumber(country.borders.length)} nations, creating a rich tapestry of regional interactions.`;
        }
        
        return enhancedTemplate;
    };

    // Select three different categories for the description
    const categories = Object.keys(templates);
    const selectedCategories = getRandomItems(categories, 3);

    // Generate paragraphs for each selected category
    const paragraphs = selectedCategories.map(category => generateParagraph(category));

    // Combine paragraphs with proper spacing
    return paragraphs.join('\n\n');
}
