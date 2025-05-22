// JavaScript for Atom Builder with 3D Visualization

document.addEventListener("DOMContentLoaded", function() {
    // DOM Elements
    const backButton = document.querySelector(".back-btn");
    const addElectronBtn = document.getElementById("add-electron");
    const addProtonBtn = document.getElementById("add-proton");
    const addNeutronBtn = document.getElementById("add-neutron");
    const removeElectronBtn = document.getElementById("remove-electron");
    const removeProtonBtn = document.getElementById("remove-proton");
    const removeNeutronBtn = document.getElementById("remove-neutron");
    const electronsContainer = document.getElementById("electrons-container");
    const nucleus = document.querySelector(".nucleus");
    const protonCountElement = document.getElementById("proton-count");
    const neutronCountElement = document.getElementById("neutron-count");
    const electronCountElement = document.getElementById("electron-count");
    const elementMessage = document.getElementById("element-message");

    // Particle counts
    let protonCount = 0;
    let neutronCount = 0;
    let electronCount = 0;

    // Maximum limits
    const MAX_PROTONS = 20;
    const MAX_NEUTRONS = 25;
    const MAX_ELECTRONS = 18;

    // Electron shell configuration (max electrons per shell)
    const electronShells = [2, 8, 8];

    // Base nucleus size
    const baseNucleusSize = 60;
    const particleContribution = 3; // Size increase per particle

    // Elements data (first 20 elements)
    const elements = {
        1: { name: "Hydrogen", symbol: "H" },
        2: { name: "Helium", symbol: "He" },
        3: { name: "Lithium", symbol: "Li" },
        4: { name: "Beryllium", symbol: "Be" },
        5: { name: "Boron", symbol: "B" },
        6: { name: "Carbon", symbol: "C" },
        7: { name: "Nitrogen", symbol: "N" },
        8: { name: "Oxygen", symbol: "O" },
        9: { name: "Fluorine", symbol: "F" },
        10: { name: "Neon", symbol: "Ne" },
        11: { name: "Sodium", symbol: "Na" },
        12: { name: "Magnesium", symbol: "Mg" },
        13: { name: "Aluminum", symbol: "Al" },
        14: { name: "Silicon", symbol: "Si" },
        15: { name: "Phosphorus", symbol: "P" },
        16: { name: "Sulfur", symbol: "S" },
        17: { name: "Chlorine", symbol: "Cl" },
        18: { name: "Argon", symbol: "Ar" },
        19: { name: "Potassium", symbol: "K" },
        20: { name: "Calcium", symbol: "Ca" }
    };

    // Event Listeners
    backButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    addElectronBtn.addEventListener("click", addElectron);
    addProtonBtn.addEventListener("click", addProton);
    addNeutronBtn.addEventListener("click", addNeutron);
    removeElectronBtn.addEventListener("click", removeElectron);
    removeProtonBtn.addEventListener("click", removeProton);
    removeNeutronBtn.addEventListener("click", removeNeutron);

    // Functions to add particles
    function addElectron() {
        if (electronCount >= MAX_ELECTRONS) {
            elementMessage.textContent = "Maximum " + MAX_ELECTRONS + " electrons reached (Shells full).";
            return;
        }
        
        electronCount++;
        updateElectronCount();
        renderElectrons();
        updateElementMessage();
    }

    function addProton() {
        if (protonCount >= MAX_PROTONS) {
            elementMessage.textContent = "Maximum " + MAX_PROTONS + " protons reached.";
            return;
        }
        
        protonCount++;
        updateProtonCount();
        updateNucleusSize();
        updateNucleusColor();
        updateElementMessage();
    }

    function addNeutron() {
        if (neutronCount >= MAX_NEUTRONS) {
            elementMessage.textContent = "Maximum " + MAX_NEUTRONS + " neutrons reached.";
            return;
        }
        
        neutronCount++;
        updateNeutronCount();
        updateNucleusSize();
        updateElementMessage();
    }

    // Functions to remove particles
    function removeElectron() {
        if (electronCount <= 0) return;
        
        electronCount--;
        updateElectronCount();
        renderElectrons();
        updateElementMessage();
    }

    function removeProton() {
        if (protonCount <= 0) return;
        
        protonCount--;
        updateProtonCount();
        updateNucleusSize();
        updateNucleusColor();
        updateElementMessage();
    }

    function removeNeutron() {
        if (neutronCount <= 0) return;
        
        neutronCount--;
        updateNeutronCount();
        updateNucleusSize();
        updateElementMessage();
    }

    // Update count displays
    function updateElectronCount() {
        electronCountElement.textContent = electronCount;
    }

    function updateProtonCount() {
        protonCountElement.textContent = protonCount;
    }

    function updateNeutronCount() {
        neutronCountElement.textContent = neutronCount;
    }

    // Update nucleus size based on number of particles
    function updateNucleusSize() {
        const totalParticles = protonCount + neutronCount;
        const newSize = baseNucleusSize + (totalParticles * particleContribution);
        nucleus.style.width = newSize + 'px';
        nucleus.style.height = newSize + 'px';
    }

    // Update nucleus color based on proton/neutron ratio
    function updateNucleusColor() {
        // If there are neutrons, blend the color toward blue
        if (protonCount > 0 && neutronCount > 0) {
            const ratio = neutronCount / (protonCount + neutronCount);
            const r = Math.floor(255 * (1 - ratio * 0.5)); // Keep some red
            const b = Math.floor(255 * ratio * 0.8);       // Add blue based on neutron ratio
            nucleus.style.backgroundColor = `rgb(${r}, 40, ${b})`;
            nucleus.style.boxShadow = `0 0 15px rgba(${r}, 40, ${b}, 0.5)`;
        } else if (protonCount > 0) {
            // Pure protons - red
            nucleus.style.backgroundColor = '#ff4040';
            nucleus.style.boxShadow = '0 0 15px rgba(255, 64, 64, 0.5)';
        } else {
            // No particles
            nucleus.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            nucleus.style.boxShadow = 'none';
        }
    }

    // Render electrons in their shells
    function renderElectrons() {
        // Clear existing electrons
        electronsContainer.innerHTML = '';
        
        let remainingElectrons = electronCount;
        let shellIndex = 0;
        
        // Distribute electrons across shells
        while (remainingElectrons > 0 && shellIndex < electronShells.length) {
            const shellCapacity = electronShells[shellIndex];
            const electronsInShell = Math.min(remainingElectrons, shellCapacity);
            
            // Create electrons for this shell
            for (let i = 0; i < electronsInShell; i++) {
                const electron = document.createElement('div');
                electron.className = 'electron electron-orbit-' + (shellIndex + 1);
                
                // Position electrons evenly around the orbit
                const angle = (i / electronsInShell) * 2 * Math.PI;
                const delay = (i / electronsInShell) * -8; // Stagger animation
                
                // Apply initial position and animation delay
                electron.style.animationDelay = delay + 's';
                
                // Add to container
                electronsContainer.appendChild(electron);
            }
            
            remainingElectrons -= electronsInShell;
            shellIndex++;
        }
    }

    // Update element message based on current configuration
    function updateElementMessage() {
        if (protonCount === 0) {
            elementMessage.textContent = '';
            return;
        }
        
        const element = elements[protonCount];
        if (!element) {
            elementMessage.textContent = '';
            return;
        }
        
        const massNumber = protonCount + neutronCount;
        const charge = protonCount - electronCount;
        
        if (charge === 0 && neutronCount === 0) {
            // Basic element
            elementMessage.textContent = `You've built ${element.name} (${element.symbol})!`;
        } else if (charge === 0 && neutronCount > 0) {
            // Neutral isotope
            elementMessage.textContent = `You've built a neutral isotope: ${element.name}-${massNumber} (${element.symbol})!`;
        } else if (charge !== 0 && neutronCount === 0) {
            // Ion
            const chargeText = charge > 0 ? `+${charge}` : charge;
            elementMessage.textContent = `You've built a ${element.name} (${element.symbol}) ion with charge ${chargeText}!`;
        } else {
            // Isotope ion
            const chargeText = charge > 0 ? `+${charge}` : charge;
            elementMessage.textContent = `You've built an ion of the isotope ${element.name}-${massNumber} (${element.symbol}) with charge ${chargeText}!`;
        }
    }

    // Initialize the view
    updateNucleusSize();
    updateNucleusColor();
    renderElectrons();
    updateElementMessage();
});
