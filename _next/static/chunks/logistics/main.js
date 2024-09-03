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
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Freight Forwarding', 'franchising-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'New Design System', 'design-system-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Warehousing & Distribution', 'electro-manufacturing');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Flexible Templates for Future Growth', 'flexible-templates');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Customs Brokerage', 'a1');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Supply Chain Management', 'a2');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'E-commerce Logistics', 'a3');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Specialized Logistics', 'a4');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Express Services', 'a5');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Consulting Services', 'a6');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Technology Solutions', 'a7');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Value-Added Services', 'a8');

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
        '<video class="hero-video" autoplay="" muted="" loop="" playsinline="" src="http://skydatasol.com/video/B233b742-Bfbb-41C3-92E9-955341Ce905a-1.m4v" style="width: 100vw; height: 100vh; object-fit: cover; position: absolute; top: 0px; left: 0px;">Your browser does not support the video tag.</video>', 
        'before', 
        'hero-video');

        insertDiv('.ContentNotes__CopyBlock-sc-xslbpm-3.aApgm', 
        '<h2 style="padding-bottom:20px;">SkyDataSol Corporation Logistics Services</h2>', 
        'before', 
        't1');

    // Insert a div with content after an element with ID 'example-id'
    insertDiv('li#franchising-item', '<ul><li>Air Freight: Fast and reliable air transport solutions for time-sensitive shipments.</li><li>Ocean Freight: Cost-effective sea transport services for bulk and large-scale shipments.</li><li>Road Freight: Flexible and extensive trucking options for domestic and cross-border deliveries.</li><li>Rail Freight: Efficient rail solutions for heavy and voluminous cargo over long distances.</li></ul>', 'after', 'fran-item-div');
    insertDiv('li#design-system-item', '<p>Custom content after</p>', 'after', 'another-div');
    insertDiv('li#electro-manufacturing', '<ul><li>Storage Solutions: Secure and scalable warehousing facilities for all types of goods.</li><li>Inventory Management: Advanced inventory tracking and management systems to ensure accuracy and efficiency.</li><li>Order Fulfillment: Comprehensive pick, pack, and shipping services tailored to your business needs.</li><li>Cross-Docking: Streamlined cross-docking services to reduce storage time and expedite deliveries.</li></ul>', 'after', 'electro-item-div');
   
    insertDiv('#a1', '<ul><li>Customs Clearance: Expert handling of customs documentation and procedures to ensure smooth import/export operations.</li><li>Tariff Consultation: Guidance on tariff classifications, duty payments, and compliance with trade regulations.</li><li>Import/Export Compliance: Assistance with adhering to international trade laws and regulations.</li></ul>', 'after', 'list2-item-diva');
    insertDiv('#a2', '<ul><li>End-to-End Supply Chain Solutions: Integrated supply chain management services from procurement to delivery.</li><li>Vendor Managed Inventory (VMI): Efficient inventory management by coordinating with suppliers for seamless replenishment.</li><li>Reverse Logistics: Handling returns, recycling, and disposal of products in an eco-friendly manner.</li><li>Demand Planning: Accurate demand forecasting and planning to optimize inventory levels and reduce costs.</li></ul>', 'after', 'list2-item-divb');
    insertDiv('#a3', '<ul><li>Last-Mile Delivery: Fast and reliable last-mile delivery services to ensure timely delivery to end customers.</li><li>Order Fulfillment: Customized e-commerce order processing, including picking, packing, and shipping.</li><li>Returns Management: Efficient management of product returns and exchanges to enhance customer satisfaction.</li><li>Parcel Delivery: Flexible and cost-effective parcel delivery options for businesses of all sizes.</li></ul>', 'after', 'list2-item-divc');
    insertDiv('#a4', '<ul><li>Cold Chain Logistics: Temperature-controlled logistics solutions for perishable goods such as food and pharmaceuticals.</li><li>Hazardous Materials (HAZMAT): Safe and compliant transportation and handling of hazardous materials.</li><li>Project Cargo: Expert handling of oversized, heavy, and complex cargo for large-scale projects.</li><li>Automotive Logistics: Tailored logistics solutions for the automotive industry, including JIT delivery and parts distribution.</li></ul>', 'after', 'list2-item-divd');
    insertDiv('#a5', '<ul><li>Same-Day Delivery: Urgent delivery services for time-critical shipments within the same day.</li><li>Next-Day Delivery: Reliable next-day delivery options for quick and efficient shipping.</li><li>International Express: Fast and secure international express services for global deliveries.</li></ul>', 'after', 'list2-item-dive');
    insertDiv('#a6', '<ul><li>Logistics Consulting: Expert advice on optimizing your logistics processes and reducing operational costs.</li><li>Supply Chain Audits: Comprehensive audits to identify inefficiencies and improve supply chain performance.</li><li>Sustainability Solutions: Guidance on implementing eco-friendly practices and reducing your carbon footprint.</li></ul>', 'after', 'list2-item-divf');
    insertDiv('#a7', '<ul><li>Real-Time Tracking: Advanced tracking systems to monitor your shipments in real time.</li><li>Logistics Software Integration: Seamless integration of logistics management software with your existing systems.</li><li>Data Analytics: Data-driven insights and analytics to improve logistics operations and decision-making.</li></ul>', 'after', 'list2-item-divg');
    insertDiv('#a8', '<ul><li>Packaging Solutions: Custom packaging services to protect your goods during transit.</li><li>Labeling & Documentation: Professional labeling and accurate documentation for all types of shipments.</li><li>Assembly & Kitting: Value-added services including assembly, kitting, and bundling of products.</li></ul>', 'after', 'list2-item-divh');
    insertDiv('#list-1', '<p>Global Franchise Network: Benefit from our extensive network of franchised partners and agents around the world, ensuring seamless global logistics.</p><ul><li>Expertise: A team of experienced logistics professionals dedicated to providing top-notch service.</li><li>Customer-Centric: Tailored solutions to meet the specific needs of your business.</li><li>Technology-Driven: Leveraging the latest technology to provide efficient and transparent logistics services.</li><li>Sustainability: Commitment to eco-friendly practices and reducing the environmental impact of our operations.</li></ul><p>Contact us today to learn more Manufacturing how SkyDataSol’s logistics services can help your business thrive. Whether you’re interested in partnering with us as a client or exploring franchising opportunities, we’re here to support your logistics needs.</p>', 'after', 'list2-item-divi');


    // Insert a div with content before all divs with class 'target-div'
    insertDiv('.target-div', '<h2>Custom Header before</h2>', 'before');

    // Insert a div with content after all elements with a specific tag
    // insertDiv('h1', '<span>Custom Span after</span>', 'after');
};