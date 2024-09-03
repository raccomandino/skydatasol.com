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
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Our Engineering Products & Services', 'franchising-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'New Design System', 'design-system-item');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Civil Engineering', 'electro-manufacturing');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Flexible Templates for Future Growth', 'flexible-templates');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Mechanical Engineering', 'a1');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Electrical Engineering', 'a2');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Chemical Engineering', 'a3');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Defense & Security Engineering', 'a4');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Aerospace Engineering', 'a5');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Franchising Opportunities with SkyDataSol Corporation', 'a6');
    setIdBasedOnText('ul.UnstyledList-sc-nh8fku-0.bmWmtJ li', 'Join the SkyDataSol Family', 'a7');

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

        insertDiv('.PageContactVertical__FormLayout-sc-1ecz74v-1.QUsuG', 
        '<form name="contact" method="POST" data-netlify="true" style="padding-bottom: 20px;"><input type="hidden" name="form-name" value="contact"><p><label for="name">Name:</label><input type="text" id="name" name="name" required></p><p><label for="email">Email:</label><input type="email" id="email" name="email" required></p><p><label for="message">Message:</label><textarea id="message" name="message" rows="5" required></textarea></p><p><button type="submit">Send</button></p></form>', 
        'after', 
        'hero-video');

        insertDiv('.ContentNotes__CopyBlock-sc-xslbpm-3.aApgm', 
        '<h2 style="padding-bottom:20px;">Welcome to SkyDataSol Corporation</h2>', 
        'before', 
        't1');

    // Insert a div with content after an element with ID 'example-id'
    insertDiv('li#franchising-item', "<p>SkyDataSol Corporation is proud to offer an extensive array of engineering products and services, including:</p>", 'after', 'fran-item-div');
    insertDiv('li#design-system-item', '<p>Custom content after</p>', 'after', 'another-div');
    insertDiv('li#electro-manufacturing', '<ol><li>Structural Design and Analysis:<ul><li>Comprehensive building design for residential, commercial, and industrial projects.</li><li>Expertise in bridge and highway design.</li><li>Seismic retrofitting and foundation engineering.</li></ul></li><li>Transportation Engineering:<ul><li>Design of roadways, highways, and rail systems.</li><li>Traffic management and airport infrastructure development.</li></ul></li><li>Water Resources and Environmental Engineering:<ul><li>Water supply systems and wastewater treatment facilities.</li><li>Sustainable site development and environmental impact assessments.</li></ul></li><li>Geotechnical Engineering:<ul><li>Ground improvement, foundation design, and slope stability analysis.</li></ul></li></ol>', 'after', 'electro-item-div');
   
    insertDiv('#a1', '<ol><li>HVAC Systems:<ul><li>Advanced heating, ventilation, and air conditioning solutions.</li><li>Energy-efficient air quality control technologies.</li></ul></li><li>Manufacturing and Production:<ul><li>Custom machinery, automation, and robotics integration.</li><li>Precision machining and material handling solutions.</li></ul></li><li>Power and Energy Systems:<ul><li>Renewable energy systems, including solar, wind, and thermal solutions.</li><li>Energy storage systems and power generation technologies.</li></ul></li><li>Piping and Fluid Systems:<ul><li>Design of industrial piping, hydraulic, and pneumatic systems.</li></ul></li></ol>', 'after', 'list2-item-diva');
    insertDiv('#a2', '<ol><li>Power Systems:<ul><li>Comprehensive electrical power distribution and high-voltage systems.</li><li>Substation design, installation, and smart grid technology integration.</li></ul></li><li>Control Systems and Automation:<ul><li>PLC programming, SCADA systems, and process control optimization.</li></ul></li><li>Renewable Energy:<ul><li>Solar and wind power systems, battery storage, and microgrid solutions.</li></ul></li><li>Communication Systems:<ul><li>Design and implementation of data, telecommunications, and wireless communication networks.</li></ul></li></ol>', 'after', 'list2-item-divb');
    insertDiv('#a3', '<ol><li>Process Design and Optimization:<ul><li>Chemical process design, simulation, and safety management.</li><li>Specialized services in petrochemical, pharmaceutical, and environmental engineering.</li></ul></li><li>Materials Engineering:<ul><li>Polymer processing, advanced materials development, and corrosion prevention.</li></ul></li></ol>', 'after', 'list2-item-divc');
    insertDiv('#a4', "<ol><li>Defense Systems:<ul><li>Cutting-edge weapon systems, military vehicle engineering, and command control systems.</li></ul></li><li>Security Engineering:<ul><li>Surveillance, cybersecurity, and perimeter security solutions.</li></ul></li><li>Aerospace and Maritime Engineering:<ul><li>Design of aircraft, spacecraft, naval, and marine defense systems.</li></ul></li></ol>", 'after', 'list2-item-divd');
    insertDiv('#a5', '<p style="padding-bottom: 20px;">SkyDataSol Corporation is at the forefront of Aerospace Engineering, offering a wide range of specialized products and services to meet the needs of this dynamic industry:</p><ol style="padding-bottom: 20px;"><li>Aircraft Design and Development:<ul><li>Design and development of commercial and military aircraft.</li><li>Structural analysis and aerodynamics optimization.</li><li>Avionics systems integration.</li></ul></li><li>Spacecraft Engineering:<ul><li>Design and manufacturing of satellites and space exploration vehicles.</li><li>Propulsion systems development.</li><li>Spacecraft systems engineering and integration.</li></ul></li><li>Propulsion Systems:<ul><li>Advanced jet engine design and testing.</li><li>Rocket propulsion systems for space exploration.</li><li>Hybrid propulsion technology.</li></ul></li><li>Unmanned Aerial Vehicles (UAVs):<ul><li>Design and development of drones and UAVs for various applications.</li><li>Autonomous navigation systems.</li><li>Payload integration and customization.</li></ul></li><li>Aerospace Materials Engineering:<ul><li>Development of lightweight, high-strength materials.</li><li>Thermal protection systems for spacecraft re-entry.</li><li>Advanced composite materials for aerospace applications.</li></ul></li></ol>', 'after', 'list2-item-dive');
    insertDiv('#a6', '<p style="padding-bottom: 20px;">SkyDataSol Corporation is expanding its reach through a global franchise model, offering an exciting opportunity to be part of our innovative engineering company. As a franchisee, you will:</p><ol style="padding-bottom: 20px;"><li>Leverage a Proven Business Model:<ul><li>Utilize our established business strategies, brand recognition, and expert support to build a successful engineering services franchise.</li></ul></li><li>Receive Comprehensive Training and Support:<ul><li>Benefit from extensive training in our products and services, along with ongoing technical and business support.</li></ul></li><li>Enjoy Exclusive Territory Rights:<ul><li>Operate within a designated area with minimal competition from other SkyDataSol franchises.</li></ul></li><li>Benefit from Strong Marketing and Branding:<ul><li>Take advantage of our robust marketing strategies and strong brand presence.</li></ul></li><li>Access Cutting-Edge Innovation and Development:<ul><li>Stay at the forefront of engineering technology with access to our R&D resources and industry-leading innovations.</li></ul></li></ol>', 'after', 'list2-item-divf');
    insertDiv('#a7', "<p>By becoming a franchisee with SkyDataSol Corporation, you will join a network of professionals dedicated to delivering world-class engineering solutions. Whether you're an experienced engineer or an entrepreneur looking for a new venture, our franchise model provides the tools and support you need for success.</p><p>Contact us today to explore our franchising opportunities and become a part of the SkyDataSol Corporation family. Together, we can engineer a better future.</p>", 'after', 'list2-item-divg');


    // Insert a div with content before all divs with class 'target-div'
    insertDiv('.target-div', '<h2>Custom Header before</h2>', 'before');

    // Insert a div with content after all elements with a specific tag
    // insertDiv('h1', '<span>Custom Span after</span>', 'after');
};