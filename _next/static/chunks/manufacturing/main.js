window.onload = function() {
    /**
     * Insert a div with custom content before or after the target element(s).
     *
     * @param {string} targetSelector - The selector of the target element(s).
     * @param {string} content - The custom content to insert inside the div.
     * @param {string} position - 'before' to insert before, 'after' to insert after the target element(s).
     * @param {string} [divClass] - Optional class name for the new div.
     */

    // Function to set ID based on text content for any element
    function setIdBasedOnText(selector, textToMatch, idToSet) {
        // Select all elements that match the selector
        const elements = document.querySelectorAll(selector);

        // Loop through each element and check the text content
        elements.forEach((element) => {
            // Use innerText and trim to ensure accurate matching
            const text = element.innerText.trim();

            // Set the ID if the text matches
            if (text.includes(textToMatch)) {
                element.id = idToSet;
            }
        });
    }

    // Example usage for different elements
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Why Choose Franchising with SkyDataSol Corporation in Electronics and Heavy Industries?', 'franchising-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'New Design System', 'design-system-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Electronics Manufacturing Franchises', 'electro-manufacturing');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Flexible Templates for Future Growth', 'flexible-templates');

    // Example for any other elements, such as paragraphs, headings, or divs
    setIdBasedOnText('p', 'Available Products:', 'list-1');
    setIdBasedOnText('li', 'Available Products:', 'list-2');
    setIdBasedOnText('p', 'Franchising in these sectors allows you to partner with SkyDataSol Corporation and benefit from our extensive industry knowledge, training programs, and marketing support. Whether you are interested in the fast-paced world of electronics or the foundational stability of heavy industries, there are numerous opportunities to explore.', 'bottom-text-1');
    setIdBasedOnText('h1', 'Some heading text to match', 'custom-heading-id');
    setIdBasedOnText('div', 'Some div text to match', 'custom-div-id');


    function insertDiv(targetSelector, content, position = 'before', divClass = '') {
        // Find all the target elements based on the selector
        var targets = document.querySelectorAll(targetSelector);
        
        // Loop through each target element
        targets.forEach(function(target) {
            // Create a new div element
            var newDiv = document.createElement('div');
            
            // Set the class name if provided
            if (divClass) {
                newDiv.className = divClass;
            }
            
            // Set the custom content inside the div
            newDiv.innerHTML = content;
            
            // Insert the new div before or after the target element
            if (position === 'before') {
                target.parentNode.insertBefore(newDiv, target);
            } else if (position === 'after') {
                target.parentNode.insertBefore(newDiv, target.nextSibling);
            } else {
                console.error("Position must be 'before' or 'after'.");
            }
        });
    }

    // Usage examples:
    // Insert a div with content before all paragraphs with class 'example-class'

        insertDiv('section.ProjectHero__ProjectHeroSection-sc-1g1pu7g-0.ehifeV', 
        '<video class="hero-video" autoplay="" muted="" loop="" playsinline="" src="http://127.0.0.1:5500/video/Bf225053-71C3-47A8-867A-E57c6b4fc601-7.m4v" style="width: 100vw; height: 100vh; object-fit: cover; position: absolute; top: 0px; left: 0px;">Your browser does not support the video tag.</video>', 
        'before', 
        'hero-video');

        insertDiv('.ContentNotes__CopyBlock-sc-xslbpm-3.aApgm', 
        '<h2 style="padding-bottom:20px;">SkyDataSol Corporation: Electronics and Heavy Industries Manufacturing in Franchising</h2>', 
        'before', 
        't1');

        insertDiv('p#list-1', 
        '<ul style="padding-bottom:20px;"><li>Consumer Electronics: Smartphones and Tablets, Televisions and Audio Equipment, Wearable Technology, Home Appliances.</li><li>Computer Hardware: Laptops and Desktops, Computer Components, Networking Equipment.</li><li>Telecommunications Equipment: Networking Infrastructure, Communication Devices.</li><li>Industrial Electronics: Automation Systems, Medical Devices, Energy Systems.</li><li>Electronic Components: Semiconductors, Sensors and Actuators, Battery Technology.</li><li>Automotive Electronics and Software: Self-Driving Car Solutions, In-Vehicle Infotainment Systems, Electric Vehicle (EV) Components, Advanced Driver Assistance Systems (ADAS).</li><li>Smart City Technologies: Smart Traffic Management Systems, IoT-Enabled Infrastructure, Public Safety and Surveillance Systems, Energy-Efficient Public Lighting.</li><li>Renewables Manufacturing: Solar Panels, Wind Turbine Electronics, Energy Storage Solutions, Inverters and Charge Controllers, Electric Vehicle (EV) Components.</li></ul>', 
        'after', 
        'list-1');

        insertDiv('#bottom-text-1', 
        '<h2 style="padding-bottom:20px;">Franchise Opportunities with SkyDataSol Corporation</h2>', 
        'before', 
        't1');

        insertDiv('.Xtwls', 
        '<h2 style="padding-bottom:20px;">Why Choose SkyDataSol Corporation?</h2>', 
        'before', 
        't2');

        insertDiv('footer.Footer__StyledFooter-sc-1mmo66d-0.eyPIBC', 
        '<div class="footer-text"><h2 style="padding-bottom:20px;text-align:center;color:#fff;background:#000;">Explore Our Other Franchising Opportunities</h2><p style="color:#fff;background-color:#000;text-align:center;">Looking for something different? Check out our other franchising opportunities across various industries.</p><p style="color:#fff;background-color:#000;text-align:center;">This page now provides a detailed overview of the franchising opportunities available with SkyDataSol Corporation in the Electronics and Heavy Industries manufacturing sectors, with specific emphasis on Automotive Electronics, Self-Driving Car Solutions, Smart City Technologies, Renewables Manufacturing solutions, and Metallurgical Products and Services.</p></div>', 
        'before', 
        't3');

    // Insert a div with content after an element with ID 'example-id'
    insertDiv('li#franchising-item', '<p>Franchising with SkyDataSol Corporation in the electronics and heavy industries sectors provides a unique opportunity to leverage established brand recognition, operational expertise, and a proven business model. These sectors are integral to the global economy, offering stable growth potential and consistent demand for their products. By investing in a SkyDataSol franchise within these industries, you gain access to a robust supply chain, technical support, and marketing resources, ensuring a strong foundation for success.</p>', 'after', 'fran-item-div');
    insertDiv('li#design-system-item', '<p>Custom content after</p>', 'after', 'another-div');
    insertDiv('li#electro-manufacturing', '<p>The electronics sector is at the forefront of innovation, catering to consumer, industrial, automotive, and renewable energy markets. SkyDataSol franchises in this category are involved in the production, assembly, and distribution of a wide range of electronic products, offering lucrative opportunities for those interested in technology-driven businesses.</p>', 'after', 'electro-item-div');
    insertDiv('#flexible-templates', '<p>The heavy industries sector encompasses the manufacturing of large-scale industrial products, machinery, and metallurgical services essential for construction, mining, energy, and transportation sectors. Franchising in this area with SkyDataSol Corporation offers a gateway to businesses that produce critical infrastructure components, heavy machinery, and metallurgical products.</p>', 'after', 'heavy1-item-div');
    insertDiv('.t2', '<p>Extensive Industry Network: We connect you with leading franchise opportunities in electronics, renewables, automotive electronics, and heavy industries.<br>Comprehensive Support: From initial setup to ongoing operations, we provide the tools and resources you need to succeed.<br>Customizable Options: Tailor your franchise investment to suit your goals, market, and expertise.<br>Start your journey today by exploring the diverse franchising opportunities available with SkyDataSol Corporation in the Electronics and Heavy Industries sectors. Transform your entrepreneurial vision into reality with a franchise that aligns with your ambitions and expertise.<br>For more information on available franchises, please contact us or visit our franchise listings page.</p>', 'after', 'qo-item-div');
    insertDiv('#list-2', '<ul><li>Construction Equipment: Excavators and Bulldozers, Cranes and Lifting Equipment, Concrete Mixers and Asphalt Pavers.</li><li>Transportation Equipment: Heavy Trucks and Buses, Railway Equipment, Shipbuilding.</li><li>Energy Production Equipment: Wind Turbines, Power Generators, Pipelines and Drilling Equipment.</li><li>Heavy Machinery: Industrial Presses, Mining Equipment, Agricultural Machinery.</li><li>Metallurgical Products and Services: Steel Production, Metal Casting, Forging and Stamping, Metal Fabrication, Heat Treatment, Welding and Joining Technologies, Surface Coating and Treatment.</li></ul>', 'after', 'list2-item-div');


    // Insert a div with content before all divs with class 'target-div'
    insertDiv('.target-div', '<h2>Custom Header before</h2>', 'before');

    // Insert a div with content after all elements with a specific tag
    // insertDiv('h1', '<span>Custom Span after</span>', 'after');
};




