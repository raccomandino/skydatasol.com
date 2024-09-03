// Create the preloader elements
const preloader = document.createElement('div');
const loader = document.createElement('div');

// Set IDs and classes
preloader.id = 'preloader';
loader.className = 'loader';

// Append loader to preloader and preloader to body
preloader.appendChild(loader);
document.body.appendChild(preloader);

// Add CSS styles for preloader and loader
const style = document.createElement('style');
style.innerHTML = `
  /* Define CSS variables */
  :root {
      --preloader-bg: #000; /* Black background */
      --loader-color: #fff; /* White color for the loader */
      --loader-border-width: 4px; /* Thickness of the loader ring */
      --loader-size: 60px; /* Size of the loader */
      --animation-duration: 1s; /* Duration of the spinning animation */
  }

  /* Preloader styles */
  #preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--preloader-bg);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
  }

  /* Loader animation */
  .loader {
      border: var(--loader-border-width) solid transparent;
      border-top: var(--loader-border-width) solid var(--loader-color);
      border-radius: 50%;
      width: var(--loader-size);
      height: var(--loader-size);
      animation: spin var(--animation-duration) linear infinite;
  }

  /* Spin animation keyframes */
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
`;

// Append the styles to the head
document.head.appendChild(style);

// Hide preloader and enable scrolling once the page is fully loaded
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
        document.body.style.overflow = '';
    }
});



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
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Franchise Opportunities with SkyDataSol', 'franchising-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'New Design System', 'design-system-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Sea Oil and Natural Gas Development', 'electro-manufacturing');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Flexible Templates for Future Growth', 'flexible-templates');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Offshore Petrochemical Extraction and Refinement', 'a1');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Onshore Refinement Services', 'a2');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Nuclear Power Plant Operations', 'a3');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Onshore Renewables', 'a4');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Utilities and Financial Services', 'a5');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Additional Services', 'a6');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Why Franchise with SkyDataSol?', 'a7');

    // Example for any other elements, such as paragraphs,headings, or divs
    setIdBasedOnText('p', 'Why Choose SkyDataSol?', 'list-1');
    setIdBasedOnText('li', 'Available Products:', 'list-2');
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
        '<video class="hero-video" autoplay="" muted="" loop="" playsinline="" src="http://skydatasol.com/video/68F5fb5a-61Fd-4B9d-8A7e-18Cca513393b-3.m4v" style="width: 100vw; height: 100vh; object-fit: cover; position: absolute; top: 0px; left: 0px;">Your browser does not support the video tag.</video>', 
        'before', 
        'hero-video');

        insertDiv('.ContentNotes__CopyBlock-sc-xslbpm-3.aApgm', 
        '<h2 style="padding-bottom:20px;">Oil, Gas & Energy Services</h2>', 
        'before', 
        't1');

    // Insert a div with content after an element with ID 'example-id'
    insertDiv('li#franchising-item', "<p>At SkyDataSol, we offer unique franchising opportunities for entrepreneurs and businesses to join our global network. By partnering with us, you can leverage our industry expertise, proven business models, and comprehensive support to establish and grow your own operation within the oil, gas, and energy sectors. Whether you're looking to enter the market or expand your existing energy business, our franchising model provides the tools and resources you need to succeed.</p>", 'after', 'fran-item-div');
    insertDiv('li#design-system-item', '<p>Custom content after</p>', 'after', 'another-div');
    insertDiv('li#electro-manufacturing', '<p>As a SkyDataSol franchisee, you can tap into the lucrative offshore oil and natural gas market. We provide the technology, training, and support to help you excel in:</p><ul><li>Seismic Exploration: Locating and mapping subsea oil and gas reserves using advanced seismic technology.</li><li>Drilling Operations: Deploying offshore drilling rigs to efficiently extract hydrocarbons.</li><li>Production Facilities: Establishing and managing offshore platforms for hydrocarbon extraction and initial processing.</li><li>Subsea Engineering: Designing and installing subsea pipelines and systems for safe transportation to onshore refineries.</li></ul>', 'after', 'electro-item-div');
   
    insertDiv('#a1', '<p>Join SkyDataSol in the offshore petrochemical sector, where our franchise model enables you to offer comprehensive extraction and refinement services, including:</p><ul><li>Petrochemical Processing: Converting raw hydrocarbons into high-value petrochemical products.</li><li>Transportation & Storage: Ensuring safe and efficient movement and storage of petrochemicals.</li><li>Environmental Management: Implementing best practices for minimizing environmental impact.</li></ul>', 'after', 'list2-item-diva');
    insertDiv('#a2', '<p style="padding-bottom:20px;">Our onshore refinement franchise opportunities are extensive, allowing you to establish a robust business in:<p><ol><li>Oil Refining: Transforming crude oil into market-ready petroleum products.</li><li>Natural Gas Processing: Refining natural gas into LNG and NGLs.</li><li>Chemical Manufacturing: Producing a wide range of chemicals for various industries.</li><li>Petrochemical Refinement: Advanced processing of feedstocks for the production of essential materials like plastics and resins.</li></ol>', 'after', 'list2-item-divb');
    insertDiv('#a3', '<p style="padding-bottom: 20px;">As a SkyDataSol franchisee, you can enter the nuclear energy sector with confidence. Our franchising model covers:</p><ul style="padding-bottom: 20px;"><li>Plant Design & Construction: Engineering and building nuclear power plants.</li><li>Operational Management: Running safe and efficient nuclear facilities.</li><li>Fuel Management: Managing the lifecycle of nuclear fuel.</li><li>Safety & Compliance: Maintaining the highest standards of safety and regulatory adherence.</li></ul>', 'after', 'list2-item-divc');
    insertDiv('#a4', "<p>SkyDataSol's franchising opportunities in renewable energy allow you to participate in the growing demand for sustainable power sources. Our offerings include:</p><ul><li>Wind Energy: Developing and operating wind farms.</li><li>Solar Energy: Installing and managing solar power systems.</li><li>Geothermal Energy: Harnessing geothermal resources for energy production.</li><li>Bioenergy: Producing renewable energy through biofuel and biomass technologies.</li></ul>", 'after', 'list2-item-divd');
    insertDiv('#a5', '<p style="padding-bottom: 20px;">Expand your franchise with SkyDataSol by offering essential services that support the energy industry, including:</p><ul><li>Utility Management: Managing utilities for electricity, gas, and water.</li><li>Energy Trading & Risk Management: Engaging in energy markets with our expertise.</li><li>Project Financing: Providing financial solutions for energy projects.</li></ul>', 'after', 'list2-item-dive');
    insertDiv('#a6', '<p style="padding-bottom: 20px;">To further support your franchise, SkyDataSol offers a range of additional services tailored to the energy sector:</p><ul><li>Environmental Consulting: Offering environmental assessments and compliance support.</li><li>Health & Safety Services: Ensuring the highest standards of safety in all operations.</li><li>Technical Training: Providing comprehensive training programs for your team.</li><li>Maintenance & Repairs: Delivering ongoing support to maintain your infrastructure.</li></ul>', 'after', 'list2-item-divf');
    insertDiv('#a7', '<ul><li>Proven Business Model: Leverage our successful business strategies and operational expertise.</li><li>Comprehensive Support: Benefit from our extensive training, marketing, and operational support.</li><li>Global Brand Recognition: Join a trusted brand with a strong reputation in the energy sector.</li><li>Growth Potential: Tap into a growing market with opportunities for expansion and profitability.</li></ul><p style="padding-top: 20px;">At SkyDataSol, we are dedicated to helping our franchisees succeed in the competitive oil, gas, and energy markets. Our experienced team and comprehensive service offerings make us the partner of choice for entrepreneurs and businesses looking to thrive in this dynamic industry. Contact us today to learn more Manufacturing our franchising opportunities and how you can become part of the SkyDataSol family.</p>', 'after', 'list2-item-divg');


    // Insert a div with content before all divs with class 'target-div'
    insertDiv('.target-div', '<h2>Custom Header before</h2>', 'before');

    // Insert a div with content after all elements with a specific tag
    // insertDiv('h1', '<span>Custom Span after</span>', 'after');
};