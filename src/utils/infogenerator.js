export function generateRandomCountryDescription(country) {
    const templates = [
        `The country of ${country.name} is located in ${country.region}, specifically in the ${country.subregion}. It has a population of approximately ${country.population} people and covers an area of ${country.area} square kilometers. The capital city is ${country.capital}, which serves as the political and cultural center of the nation. The official language(s) spoken here include ${country.languages.map(lang => lang.name).join(', ')}.`,
        
        `Known for its ${country.demonym} heritage, ${country.name} boasts a rich history and diverse culture. The country is famous for its ${country.currencies.map(curr => curr.name).join(', ')} and has a unique culinary scene. Tourists often visit to experience its beautiful landscapes and vibrant cities. With a Gini index of ${country.gini}, it reflects the economic disparities present in the nation.`,
        
        `In ${country.name}, the vibrant culture is reflected in its festivals and traditions. The country is home to stunning natural beauty, from ${country.latlng[0]}° latitude to ${country.latlng[1]}° longitude. The people of ${country.name} are known for their hospitality and warmth, making it a welcoming destination for travelers.`,
        
        `${country.name} is a land of contrasts, where modernity meets tradition. The economy is driven by ${country.currencies.map(curr => curr.name).join(', ')}, and the country is known for its rich natural resources. Visitors can explore historical sites and enjoy the local cuisine, which is a blend of various influences.`,
        
        `With a diverse population, ${country.name} offers a unique blend of cultures and traditions. The country is recognized for its contributions to art and music, with many famous artists hailing from this region. The capital, ${country.capital}, is a hub of activity and a great place to experience the local lifestyle.`,
        
        `The geography of ${country.name} is as diverse as its culture, featuring mountains, rivers, and coastlines. The country has a rich biodiversity, making it a great destination for nature lovers. The local cuisine, influenced by various cultures, is a must-try for anyone visiting the country.`,
        
        `The people of ${country.name} are known for their resilience and determination. The country has a rich history of overcoming challenges and has emerged as a leader in various fields. The natural beauty of the country is a source of inspiration for many, and the local cuisine is a reflection of the diverse influences in the region.`,
        
        `The country of ${country.name} is a melting pot of cultures, with a rich history of trade and exchange. The people are known for their warmth and hospitality, and the country is a popular destination for tourists. The local cuisine is a blend of various influences, making it a unique culinary experience.`,
        
        `The natural beauty of ${country.name} is a source of pride for the people, and the country is known for its commitment to environmental conservation. The diverse culture is reflected in the various festivals and traditions, and the local cuisine is a reflection of the rich history of the region.`,
        
        `The country of ${country.name} is a land of opportunity, with a vibrant economy and a rich cultural heritage. The people are known for their creativity and innovation, and the country is a hub of activity and progress. The local cuisine is a reflection of the diverse influences in the region, making it a must-try for anyone visiting the country.`,
        
        `In ${country.name}, the vibrant economy is driven by key sectors like ${country.economy}, which play a vital role in global markets. The capital city, ${country.capital}, is known for its bustling markets and modern skyline, blending history with progress.`,
        
        `Rich in biodiversity, ${country.name} is home to stunning national parks and reserves. From dense forests to rolling plains, the country’s landscapes offer a haven for wildlife enthusiasts and adventurers alike. Its people cherish a deep connection with nature.`,
        
        `${country.name} has a legacy of innovation and creativity. Known for breakthroughs in ${country.industries}, it is a hub of talent and ingenuity. The capital, ${country.capital}, is a testament to the country’s drive towards sustainable urban development.`,
        
        `The cultural fabric of ${country.name} is woven with colorful festivals and age-old traditions. Visitors are often drawn to its historic landmarks and vibrant street markets. The cuisine, with its use of ${country.specialtyIngredients}, leaves an unforgettable impression.`,
        
        `Surrounded by breathtaking landscapes, ${country.name} is known for its serene coastal areas and majestic mountain ranges. The people take pride in their heritage and are actively preserving their natural and cultural wealth for future generations.`,
        
        `A leader in green energy initiatives, ${country.name} is setting benchmarks for sustainability. Its picturesque scenery and well-preserved historical sites make it a dream destination for eco-tourists. The cuisine is celebrated for its bold and aromatic flavors.`,
        
        `The heartbeat of ${country.name} lies in its dynamic cities and peaceful countryside. Whether exploring its ancient ruins or indulging in modern luxuries, visitors find an enchanting blend of the old and new.`,
        
        `Famous for its intricate craftsmanship and vibrant artistry, ${country.name} is a treasure trove of cultural expression. The local economy thrives on exports like ${country.exports}, which reflect its innovative spirit and global influence.`,
        
        `Home to iconic landmarks and sprawling landscapes, ${country.name} captivates with its scenic charm. Festivals, folklore, and traditional music add to its cultural appeal, creating a vibrant atmosphere year-round.`,
        
        `${country.name} shines as a beacon of cultural diversity and modern innovation. Its people, known for their resourcefulness, continue to shape the global narrative in fields like ${country.globalInfluenceAreas}. The capital, ${country.capital}, is a true microcosm of its dynamism.`,
    ];
    

    // Randomly select three different templates
    const randomIndex1 = Math.floor(Math.random() * templates.length);
    let randomIndex2 = Math.floor(Math.random() * templates.length);
    let randomIndex3 = Math.floor(Math.random() * templates.length);
    
    // Ensure the three selected templates are different
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * templates.length);
    }
    while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
        randomIndex3 = Math.floor(Math.random() * templates.length);
    }

    const paragraph1 = templates[randomIndex1];
    const paragraph2 = templates[randomIndex2];
    const paragraph3 = templates[randomIndex3];

    return `${paragraph1}\n\n${paragraph2}\n\n${paragraph3}`;
}
