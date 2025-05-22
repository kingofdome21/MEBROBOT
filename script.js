// JavaScript for Fundamental Particles website

document.addEventListener("DOMContentLoaded", function() {
    // DOM Elements
    const homeView = document.getElementById("home-view");
    const atomView = document.getElementById("atom-view");
    const quarksView = document.getElementById("quarks-view");
    const atomBuilderView = document.getElementById("atom-builder-view"); // New Atom Builder View

    const atomBox = document.getElementById("atom-box");
    const quarksBox = document.getElementById("quarks-box");
    const atomBuilderBox = document.getElementById("atom-builder-box"); 
    const backButtons = document.querySelectorAll(".back-btn");
    const langButtons = document.querySelectorAll(".lang-btn");
    
    // Atom particles & nucleons (for Atom Detail View)
    const atomParticles = document.querySelectorAll(".detail-particle");
    const nucleons = document.querySelectorAll(".nucleon");
    const electronInfo = document.getElementById("electron-info");
    const nucleusInfo = document.getElementById("nucleus-info"); 
    const protonInfo = document.getElementById("proton-info");
    const neutronInfo = document.getElementById("neutron-info");
    
    // Quark elements (main library and internal)
    const internalQuarkElements = document.querySelectorAll(".quark-internal");
    const internalUpInfo = document.getElementById("internal-up-info");
    const internalDownInfo = document.getElementById("internal-down-info");

    // Fundamental library links
    const fundamentalLinks = document.querySelectorAll(".fundamental-link");
    
    let currentLang = "en";
    
    const translations = {
        en: {
            siteHeaderTitle: "SubAtomic World",
            fundamentalParticlesLibraryTitle: "FUNDAMENTAL PARTICLES",
            exploreAtom: "EXPLORE ATOM",
            fundamentalParticles: "FUNDAMENTAL PARTICLES",
            back: "← Back",
            clickParticle: "Click on a particle to learn more about it",
            electron: "ELECTRON",
            nucleus: "NUCLEUS",
            proton: "PROTON",
            neutron: "NEUTRON",
            upQuark: "UP QUARK",
            downQuark: "DOWN QUARK",
            mass_label: "Mass:",
            charge_label: "Charge:",
            components_label: "Components:",
            composition_label: "Composition:",
            internalStructure: "Internal Quark Structure:",
            quarkInstruction: "Click on a quark to learn more about it",
            viewLibrary: "View Fundamental Particles Library",
            viewFullLibrary: "View Full Quark Library",
            copyright: "© 2025 Fundamental Particles. All rights reserved.",
            madeWith: "Made with Manus",
            libraryDescTop: "A quark is a type of elementary particle and a fundamental constituent of matter. Quarks combine to form composite particles called hadrons, the most stable of which are protons and neutrons, the components of atomic nuclei. All commonly observable matter is composed of up quarks, down quarks and electrons. Due to a phenomenon known as colour confinement, quarks are never found in isolation; they can be found only within hadrons, which include baryons (such as protons and neutrons) and mesons, or in quark–gluon plasmas.",
            libraryDescBottom: "All quarks, are elementary fermions with spin 1/2, and experience all four fundamental interactions: gravitation, electromagnetism, weak interactions, and strong interactions.",
            quarksCategory: "QUARKS",
            leptonsCategory: "LEPTONS",
            bosonsCategory: "BOSONS",
            upName: "Up", downName: "Down", charmName: "Charm", strangeName: "Strange", topName: "Top", bottomName: "Bottom",
            electronName: "Electron", muonName: "Muon", tauName: "Tau",
            electronneutrinoName: "Electron Neutrino", muonneutrinoName: "Muon Neutrino", tauneutrinoName: "Tau Neutrino",
            photonName: "Photon", gluonName: "Gluon", wbosonName: "W Boson", zbosonName: "Z Boson", higgsbosonName: "Higgs Boson",
            atomBuilder: "ATOM BUILDER",
            atomBuilderTitle: "Atom Builder",
            addProton: "Add Proton", removeProton: "Remove Proton",
            addNeutron: "Add Neutron", removeNeutron: "Remove Neutron",
            addElectron: "Add Electron", removeElectron: "Remove Electron",
            protonsLabel: "Protons:", neutronsLabel: "Neutrons:", electronsLabel: "Electrons:",
            elementBuiltMsg: "You've built {elementName} ({elementSymbol})!",
            maxProtonsMsg: "Maximum 20 protons reached.",
            maxNeutronsMsg: "Maximum 25 neutrons reached.",
            maxElectronsMsg: "Maximum 18 electrons reached (Shells full).",
            neutralAtomBuiltMsg: "You've built a neutral {elementName} ({elementSymbol}) atom!",
            ionBuiltMsg: "You've built a {elementName} ({elementSymbol}) ion with charge {charge}!",
            isotopeBuiltMsg: "You've built an isotope: {elementName}-{massNumber} ({elementSymbol})!",
            isotopeIonBuiltMsg: "You've built an ion of the isotope {elementName}-{massNumber} ({elementSymbol}) with charge {charge}!",
            neutralIsotopeBuiltMsg: "You've built a neutral isotope: {elementName}-{massNumber} ({elementSymbol})!",
            "electron-info_li_0": "Electrons are fundamental particles that orbit around the nucleus of an atom.",
            "electron-info_li_1": "They have a negative electric charge and are much lighter than protons or neutrons.",
            "electron-info_li_2": "Electrons are responsible for chemical bonding between atoms.",
            "electron-info_li_3": "They were discovered by J.J. Thomson in 1897.",
            "electron-info_li_4": "Electrons can behave as both particles and waves, demonstrating quantum properties.",
            "nucleus-info_li_0": "The nucleus is the dense central region of an atom.",
            "nucleus-info_li_1": "It contains protons (positively charged) and neutrons (neutral).",
            "nucleus-info_li_2": "The nucleus makes up less than 0.01% of an atom's volume but contains over 99.9% of its mass.",
            "nucleus-info_li_3": "It was discovered by Ernest Rutherford in 1911.",
            "nucleus-info_li_4": "The strong nuclear force holds the nucleus together, overcoming the electromagnetic repulsion between protons.",
            "proton-info_li_0": "A proton is the positively charged particle that, together with the electrically neutral particles called neutrons, make up the nucleus of an atom.",
            "proton-info_li_1": "It has a positive electric charge equal in magnitude to that of an electron.",
            "proton-info_li_2": "Its mass is slightly less than the mass of a neutron and 1,836 times the mass of an electron.",
            "proton-info_li_3": "Protons and neutrons, each with masses of approximately one atomic mass unit, are jointly referred to as \"nucleons\" (particles present in atomic nuclei).",
            "proton-info_li_4": "One or more protons are present in the nucleus of every atom. They provide the attractive electrostatic central force which binds the atomic electrons.",
            "neutron-info_li_0": "A neutron is a subatomic particle with no electric charge, found in the nucleus of every atom except hydrogen-1.",
            "neutron-info_li_1": "Neutrons and protons make up the nucleus of an atom, and are collectively called nucleons.",
            "neutron-info_li_2": "The neutron has a mass slightly greater than that of a proton and about 1,839 times the mass of an electron.",
            "neutron-info_li_3": "Outside the nucleus, free neutrons are unstable and have a mean lifetime of about 15 minutes, decaying into a proton, an electron, and an antineutrino.",
            "neutron-info_li_4": "Neutrons play an important role in nuclear fission and fusion reactions.",
            "internal-up-info_li_0": "The up quark is the lightest of all quarks.",
            "internal-up-info_li_1": "It has a fractional electric charge of +⅔.",
            "internal-up-info_li_2": "Up quarks are found in protons (2 up quarks, 1 down quark) and neutrons (1 up quark, 2 down quarks).",
            "internal-up-info_li_3": "It is a first-generation quark, meaning it's one of the building blocks of ordinary matter.",
            "internal-up-info_li_4": "Up quarks are never found in isolation due to a phenomenon called color confinement.",
            "internal-down-info_li_0": "The down quark is the second lightest quark.",
            "internal-down-info_li_1": "It has a fractional electric charge of -⅓.",
            "internal-down-info_li_2": "Down quarks are found in protons (1 down quark, 2 up quarks) and neutrons (2 down quarks, 1 up quark).",
            "internal-down-info_li_3": "It is a first-generation quark, part of the fundamental building blocks of ordinary matter.",
            "internal-down-info_li_4": "Like all quarks, down quarks cannot exist in isolation due to color confinement.",
            "up-info_li_0": "The up quark is the lightest of all quarks.", "up-info_li_1": "It has a fractional electric charge of +⅔.", "up-info_li_2": "Up quarks are found in protons (2 up quarks, 1 down quark) and neutrons (1 up quark, 2 down quarks).", "up-info_li_3": "It is a first-generation quark, meaning it's one of the building blocks of ordinary matter.", "up-info_li_4": "Up quarks are never found in isolation due to a phenomenon called color confinement.",
            "down-info_li_0": "The down quark is the second lightest quark.", "down-info_li_1": "It has a fractional electric charge of -⅓.", "down-info_li_2": "Down quarks are found in protons (1 down quark, 2 up quarks) and neutrons (2 down quarks, 1 up quark).", "down-info_li_3": "It is a first-generation quark, part of the fundamental building blocks of ordinary matter.", "down-info_li_4": "Like all quarks, down quarks cannot exist in isolation due to color confinement.",
            "charm-info_li_0": "The charm quark is a second-generation quark.", "charm-info_li_1": "It has a fractional electric charge of +⅔, the same as the up quark.", "charm-info_li_2": "The charm quark was predicted in 1970 and discovered in 1974.", "charm-info_li_3": "It is much heavier than the first-generation quarks (up and down).", "charm-info_li_4": "Charm quarks are found in particles like the J/ψ meson and D mesons.",
            "strange-info_li_0": "The strange quark is a second-generation quark.", "strange-info_li_1": "It has a fractional electric charge of -⅓, the same as the down quark.", "strange-info_li_2": "The strange quark was discovered in the 1950s through the observation of \"strange\" particles in cosmic rays.", "strange-info_li_3": "It is heavier than the up and down quarks but lighter than the charm quark.", "strange-info_li_4": "Strange quarks are found in particles like kaons and some hyperons.",
            "top-info_li_0": "The top quark is a third-generation quark and the heaviest known elementary particle.", "top-info_li_1": "It has a fractional electric charge of +⅔, the same as the up and charm quarks.", "top-info_li_2": "The top quark was discovered in 1995 at Fermilab.", "top-info_li_3": "Due to its extremely high mass, it decays before it can form hadrons, making it the only quark that can be studied in isolation.", "top-info_li_4": "Its mass is close to that of a gold atom, despite being a fundamental particle.",
            "bottom-info_li_0": "The bottom quark is a third-generation quark.", "bottom-info_li_1": "It has a fractional electric charge of -⅓, the same as the down and strange quarks.", "bottom-info_li_2": "The bottom quark was discovered in 1977 at Fermilab.", "bottom-info_li_3": "It is the second-heaviest quark, after the top quark.", "bottom-info_li_4": "Bottom quarks are found in B mesons and bottomonium states.",
            "muon-info_li_0": "The muon is a second-generation lepton, similar to the electron but much heavier.", "muon-info_li_1": "It has a negative electric charge.", "muon-info_li_2": "Muons are unstable and decay quickly into an electron, a neutrino, and an antineutrino.", "muon-info_li_3": "They are produced in high-energy collisions, such as cosmic rays hitting the atmosphere.",
            "tau-info_li_0": "The tau is a third-generation lepton, even heavier than the muon.", "tau-info_li_1": "It has a negative electric charge.", "tau-info_li_2": "Tau particles are very unstable and decay rapidly into other particles.", "tau-info_li_3": "They were discovered in the 1970s.",
            "electron-neutrino-info_li_0": "The electron neutrino is a first-generation lepton with no electric charge.", "electron-neutrino-info_li_1": "It interacts very weakly with matter, making it hard to detect.", "electron-neutrino-info_li_2": "Neutrinos are produced in nuclear reactions, like those in the sun.", "electron-neutrino-info_li_3": "They have a tiny mass, but it is not zero.",
            "muon-neutrino-info_li_0": "The muon neutrino is a second-generation lepton associated with the muon.", "muon-neutrino-info_li_1": "It has no electric charge and interacts weakly.", "muon-neutrino-info_li_2": "Muon neutrinos are produced in processes involving muons.",
            "tau-neutrino-info_li_0": "The tau neutrino is a third-generation lepton associated with the tau particle.", "tau-neutrino-info_li_1": "It has no electric charge and interacts weakly.", "tau-neutrino-info_li_2": "Tau neutrinos are the most recently discovered type of neutrino.",
            "photon-info_li_0": "The photon is the force carrier for the electromagnetic force.", "photon-info_li_1": "It is a massless particle with no electric charge.", "photon-info_li_2": "Light is composed of photons.", "photon-info_li_3": "Photons travel at the speed of light in a vacuum.",
            "gluon-info_li_0": "Gluons are the force carriers for the strong nuclear force.", "gluon-info_li_1": "They bind quarks together within protons and neutrons.", "gluon-info_li_2": "Gluons are massless and have no electric charge, but they carry \"color charge\".", "gluon-info_li_3": "There are eight types of gluons.",
            "w-boson-info_li_0": "W bosons (W+ and W-) are force carriers for the weak nuclear force.", "w-boson-info_li_1": "They are responsible for certain types of radioactive decay.", "w-boson-info_li_2": "W bosons are very heavy and have either a positive or negative electric charge.", "w-boson-info_li_3": "They were discovered in 1983.",
            "z-boson-info_li_0": "The Z boson is also a force carrier for the weak nuclear force.", "z-boson-info_li_1": "It is involved in processes like neutrino scattering.", "z-boson-info_li_2": "The Z boson is very heavy and has no electric charge.", "z-boson-info_li_3": "It was discovered along with the W bosons in 1983.",
            "higgs-boson-info_li_0": "The Higgs boson is associated with the Higgs field, which gives mass to other fundamental particles.", "higgs-boson-info_li_1": "It has no electric charge and is very heavy.", "higgs-boson-info_li_2": "The Higgs boson was discovered at the Large Hadron Collider (LHC) in 2012.", "higgs-boson-info_li_3": "Its discovery confirmed the final piece of the Standard Model of particle physics."
        },
        bs: {
            siteHeaderTitle: "SubAtomski Svijet",
            fundamentalParticlesLibraryTitle: "FUNDAMENTALNE ČESTICE",
            exploreAtom: "ISTRAŽI ATOM",
            fundamentalParticles: "FUNDAMENTALNE ČESTICE",
            back: "← Nazad",
            clickParticle: "Kliknite na česticu da saznate više o njoj",
            electron: "ELEKTRON", nucleus: "JEZGRO", proton: "PROTON", neutron: "NEUTRON",
            upQuark: "GORNJI KVARK", downQuark: "DONJI KVARK",
            mass_label: "Masa:", charge_label: "Naboj:", components_label: "Komponente:", composition_label: "Sastav:",
            internalStructure: "Unutrašnja struktura kvarkova:", quarkInstruction: "Kliknite na kvark da saznate više o njemu",
            viewLibrary: "Pogledaj biblioteku fundamentalnih čestica", viewFullLibrary: "Pogledaj punu biblioteku kvarkova",
            copyright: "© 2025 Fundamentalne Čestice. Sva prava zadržana.", madeWith: "Napravljeno sa Manus",
            libraryDescTop: "Kvark je vrsta elementarne čestice i osnovni sastojak materije. Kvarkovi se kombinuju da formiraju složene čestice zvane hadroni, od kojih su najstabilniji protoni i neutroni, komponente atomskih jezgara. Sva uobičajeno vidljiva materija sastoji se od gornjih kvarkova, donjih kvarkova i elektrona. Zbog fenomena poznatog kao zatočenje boje, kvarkovi se nikada ne nalaze u izolaciji; mogu se naći samo unutar hadrona, koji uključuju barione (kao što su protoni i neutroni) i mezone, ili u kvark-gluonskim plazmama.",
            libraryDescBottom: "Svi kvarkovi su elementarni fermioni sa spinom 1/2, i doživljavaju sve četiri fundamentalne interakcije: gravitaciju, elektromagnetizam, slabe interakcije i jake interakcije.",
            quarksCategory: "KVARKOVI", leptonsCategory: "LEPTONI", bosonsCategory: "BOZONI",
            upName: "Gornji", downName: "Donji", charmName: "Šarmantni", strangeName: "Čudni", topName: "Vršni", bottomName: "Dubinski",
            electronName: "Elektron", muonName: "Mion", tauName: "Tau",
            electronneutrinoName: "Elektronski Neutrino", muonneutrinoName: "Mionski Neutrino", tauneutrinoName: "Tau Neutrino",
            photonName: "Foton", gluonName: "Gluon", wbosonName: "W Bozon", zbosonName: "Z Bozon", higgsbosonName: "Higgsov Bozon",
            atomBuilder: "GRADITELJ ATOMA", atomBuilderTitle: "Graditelj Atoma",
            addProton: "Dodaj Proton", removeProton: "Ukloni Proton",
            addNeutron: "Dodaj Neutron", removeNeutron: "Ukloni Neutron",
            addElectron: "Dodaj Elektron", removeElectron: "Ukloni Elektron",
            protonsLabel: "Protoni:", neutronsLabel: "Neutroni:", electronsLabel: "Elektroni:",
            elementBuiltMsg: "Napravili ste {elementName} ({elementSymbol})!",
            maxProtonsMsg: "Dostignut maksimalan broj od 20 protona.",
            maxNeutronsMsg: "Dostignut maksimalan broj od 25 neutrona.",
            maxElectronsMsg: "Dostignut maksimalan broj od 18 elektrona (Ljuske pune).",
            neutralAtomBuiltMsg: "Napravili ste neutralni atom {elementName} ({elementSymbol})!",
            ionBuiltMsg: "Napravili ste ion {elementName} ({elementSymbol}) sa nabojem {charge}!",
            isotopeBuiltMsg: "Napravili ste izotop: {elementName}-{massNumber} ({elementSymbol})!",
            isotopeIonBuiltMsg: "Napravili ste ion izotopa {elementName}-{massNumber} ({elementSymbol}) sa nabojem {charge}!",
            neutralIsotopeBuiltMsg: "Napravili ste neutralni izotop: {elementName}-{massNumber} ({elementSymbol})!",
            "electron-info_li_0": "Elektroni su fundamentalne čestice koje kruže oko jezgra atoma.", "electron-info_li_1": "Imaju negativan električni naboj i mnogo su lakši od protona ili neutrona.", "electron-info_li_2": "Elektroni su odgovorni za hemijske veze između atoma.", "electron-info_li_3": "Otkrio ih je J.J. Thomson 1897. godine.", "electron-info_li_4": "Elektroni se mogu ponašati i kao čestice i kao talasi, pokazujući kvantna svojstva.",
            "nucleus-info_li_0": "Jezgro je gusta centralna regija atoma.", "nucleus-info_li_1": "Sadrži protone (pozitivno naelektrisane) i neutrone (neutralne).", "nucleus-info_li_2": "Jezgro čini manje od 0,01% zapremine atoma, ali sadrži preko 99,9% njegove mase.", "nucleus-info_li_3": "Otkrio ga je Ernest Rutherford 1911. godine.", "nucleus-info_li_4": "Jaka nuklearna sila drži jezgro na okupu, prevazilazeći elektromagnetno odbijanje između protona.",
            "proton-info_li_0": "Proton je pozitivno naelektrisana čestica koja, zajedno sa električno neutralnim česticama zvanim neutroni, čini jezgro atoma.", "proton-info_li_1": "Ima pozitivan električni naboj jednak po veličini naboju elektrona.", "proton-info_li_2": "Njegova masa je neznatno manja od mase neutrona i 1.836 puta veća od mase elektrona.", "proton-info_li_3": "Protoni i neutroni, svaki sa masom od približno jedne atomske jedinice mase, zajednički se nazivaju \"nukleoni\" (čestice prisutne u atomskim jezgrima).", "proton-info_li_4": "Jedan ili više protona prisutni su u jezgru svakog atoma. Oni obezbeđuju privlačnu elektrostatičku centralnu silu koja vezuje atomske elektrone.",
            "neutron-info_li_0": "Neutron je subatomska čestica bez električnog naboja, koja se nalazi u jezgru svakog atoma osim vodonika-1.", "neutron-info_li_1": "Neutroni i protoni čine jezgro atoma i zajednički se nazivaju nukleoni.", "neutron-info_li_2": "Neutron ima masu neznatno veću od mase protona i oko 1.839 puta veću od mase elektrona.", "neutron-info_li_3": "Izvan jezgra, slobodni neutroni su nestabilni i imaju srednji životni vek od oko 15 minuta, raspadajući se na proton, elektron i antineutrino.", "neutron-info_li_4": "Neutroni igraju važnu ulogu u reakcijama nuklearne fisije i fuzije.",
            "internal-up-info_li_0": "Gornji kvark je najlakši od svih kvarkova.", "internal-up-info_li_1": "Ima frakcioni električni naboj od +⅔.", "internal-up-info_li_2": "Gornji kvarkovi se nalaze u protonima (2 gornja kvarka, 1 donji kvark) i neutronima (1 gornji kvark, 2 donja kvarka).", "internal-up-info_li_3": "To je kvark prve generacije, što znači da je jedan od gradivnih blokova obične materije.", "internal-up-info_li_4": "Gornji kvarkovi se nikada ne nalaze u izolaciji zbog fenomena zvanog zatočenje boje.",
            "internal-down-info_li_0": "Donji kvark je drugi najlakši kvark.", "internal-down-info_li_1": "Ima frakcioni električni naboj od -⅓.", "internal-down-info_li_2": "Donji kvarkovi se nalaze u protonima (1 donji kvark, 2 gornja kvarka) i neutronima (2 donja kvarka, 1 gornji kvark).", "internal-down-info_li_3": "To je kvark prve generacije, deo fundamentalnih gradivnih blokova obične materije.", "internal-down-info_li_4": "Kao i svi kvarkovi, donji kvarkovi ne mogu postojati u izolaciji zbog zatočenja boje.",
            // Bosanski translations for particle library items
            "up-info_li_0": "Gornji kvark je najlakši od svih kvarkova.", "up-info_li_1": "Ima frakcioni električni naboj od +⅔.", "up-info_li_2": "Gornji kvarkovi se nalaze u protonima (2 gornja kvarka, 1 donji kvark) i neutronima (1 gornji kvark, 2 donja kvarka).", "up-info_li_3": "To je kvark prve generacije, što znači da je jedan od gradivnih blokova obične materije.", "up-info_li_4": "Gornji kvarkovi se nikada ne nalaze u izolaciji zbog fenomena zvanog zatočenje boje.",
            "down-info_li_0": "Donji kvark je drugi najlakši kvark.", "down-info_li_1": "Ima frakcioni električni naboj od -⅓.", "down-info_li_2": "Donji kvarkovi se nalaze u protonima (1 donji kvark, 2 gornja kvarka) i neutronima (2 donja kvarka, 1 gornji kvark).", "down-info_li_3": "To je kvark prve generacije, deo fundamentalnih gradivnih blokova obične materije.", "down-info_li_4": "Kao i svi kvarkovi, donji kvarkovi ne mogu postojati u izolaciji zbog zatočenja boje.",
            "charm-info_li_0": "Šarmantni kvark je kvark druge generacije.", "charm-info_li_1": "Ima frakcioni električni naboj od +⅔, isti kao gornji kvark.", "charm-info_li_2": "Šarmantni kvark je predviđen 1970. i otkriven 1974. godine.", "charm-info_li_3": "Mnogo je teži od kvarkova prve generacije (gornji i donji).", "charm-info_li_4": "Šarmantni kvarkovi se nalaze u česticama kao što su J/ψ mezon i D mezoni.",
            "strange-info_li_0": "Čudni kvark je kvark druge generacije.", "strange-info_li_1": "Ima frakcioni električni naboj od -⅓, isti kao donji kvark.", "strange-info_li_2": "Čudni kvark je otkriven 1950-ih godina posmatranjem \"čudnih\" čestica u kosmičkim zracima.", "strange-info_li_3": "Teži je od gornjeg i donjeg kvarka, ali lakši od šarmantnog kvarka.", "strange-info_li_4": "Čudni kvarkovi se nalaze u česticama kao što su kaoni i neki hiperoni.",
            "top-info_li_0": "Vršni kvark je kvark treće generacije i najteža poznata elementarna čestica.", "top-info_li_1": "Ima frakcioni električni naboj od +⅔, isti kao gornji i šarmantni kvark.", "top-info_li_2": "Vršni kvark je otkriven 1995. godine u Fermilabu.", "top-info_li_3": "Zbog svoje izuzetno velike mase, raspada se pre nego što može da formira hadrone, što ga čini jedinim kvarkom koji se može proučavati u izolaciji.", "top-info_li_4": "Njegova masa je bliska masi atoma zlata, iako je fundamentalna čestica.",
            "bottom-info_li_0": "Dubinski kvark je kvark treće generacije.", "bottom-info_li_1": "Ima frakcioni električni naboj od -⅓, isti kao donji i čudni kvark.", "bottom-info_li_2": "Dubinski kvark je otkriven 1977. godine u Fermilabu.", "bottom-info_li_3": "To je drugi najteži kvark, posle vršnog kvarka.", "bottom-info_li_4": "Dubinski kvarkovi se nalaze u B mezonima i stanjima botonijuma.",
            "muon-info_li_0": "Mion je lepton druge generacije, sličan elektronu ali mnogo teži.", "muon-info_li_1": "Ima negativan električni naboj.", "muon-info_li_2": "Mioni su nestabilni i brzo se raspadaju na elektron, neutrino i antineutrino.", "muon-info_li_3": "Proizvode se u sudarima visoke energije, kao što su kosmički zraci koji udaraju u atmosferu.",
            "tau-info_li_0": "Tau je lepton treće generacije, čak teži od miona.", "tau-info_li_1": "Ima negativan električni naboj.", "tau-info_li_2": "Tau čestice su veoma nestabilne i brzo se raspadaju na druge čestice.", "tau-info_li_3": "Otkrivene su 1970-ih godina.",
            "electron-neutrino-info_li_0": "Elektronski neutrino je lepton prve generacije bez električnog naboja.", "electron-neutrino-info_li_1": "Veoma slabo interaguje sa materijom, što ga čini teškim za detekciju.", "electron-neutrino-info_li_2": "Neutrini se proizvode u nuklearnim reakcijama, kao što su one na Suncu.", "electron-neutrino-info_li_3": "Imaju sićušnu masu, ali ona nije nula.",
            "muon-neutrino-info_li_0": "Mionski neutrino je lepton druge generacije povezan sa mionom.", "muon-neutrino-info_li_1": "Nema električni naboj i slabo interaguje.", "muon-neutrino-info_li_2": "Mionski neutrini se proizvode u procesima koji uključuju mione.",
            "tau-neutrino-info_li_0": "Tau neutrino je lepton treće generacije povezan sa tau česticom.", "tau-neutrino-info_li_1": "Nema električni naboj i slabo interaguje.", "tau-neutrino-info_li_2": "Tau neutrini su najskorije otkrivena vrsta neutrina.",
            "photon-info_li_0": "Foton je nosilac sile za elektromagnetnu silu.", "photon-info_li_1": "To je čestica bez mase i bez električnog naboja.", "photon-info_li_2": "Svetlost se sastoji od fotona.", "photon-info_li_3": "Fotoni putuju brzinom svetlosti u vakuumu.",
            "gluon-info_li_0": "Gluoni su nosioci sile za jaku nuklearnu silu.", "gluon-info_li_1": "Oni vezuju kvarkove zajedno unutar protona i neutrona.", "gluon-info_li_2": "Gluoni su bez mase i nemaju električni naboj, ali nose \"naboj boje\".", "gluon-info_li_3": "Postoji osam vrsta gluona.",
            "w-boson-info_li_0": "W bozoni (W+ i W-) su nosioci sile za slabu nuklearnu silu.", "w-boson-info_li_1": "Odgovorni su za određene vrste radioaktivnog raspada.", "w-boson-info_li_2": "W bozoni su veoma teški i imaju ili pozitivan ili negativan električni naboj.", "w-boson-info_li_3": "Otkriveni su 1983. godine.",
            "z-boson-info_li_0": "Z bozon je takođe nosilac sile za slabu nuklearnu silu.", "z-boson-info_li_1": "Uključen je u procese kao što je rasejanje neutrina.", "z-boson-info_li_2": "Z bozon je veoma težak i nema električni naboj.", "z-boson-info_li_3": "Otkriven je zajedno sa W bozonima 1983. godine.",
            "higgs-boson-info_li_0": "Higgsov bozon je povezan sa Higgsovim poljem, koje daje masu drugim fundamentalnim česticama.", "higgs-boson-info_li_1": "Nema električni naboj i veoma je težak.", "higgs-boson-info_li_2": "Higgsov bozon je otkriven u Velikom hadronskom sudaraču (LHC) 2012. godine.", "higgs-boson-info_li_3": "Njegovo otkriće potvrdilo je poslednji deo Standardnog modela fizike čestica."
        },
        tr: {
            siteHeaderTitle: "SubAtomik Dünya",
            fundamentalParticlesLibraryTitle: "TEMEL PARÇACIKLAR",
            exploreAtom: "ATOMU KEŞFET",
            fundamentalParticles: "TEMEL PARÇACIKLAR",
            back: "← Geri",
            clickParticle: "Daha fazla bilgi için bir parçacığa tıklayın",
            electron: "ELEKTRON", nucleus: "ÇEKİRDEK", proton: "PROTON", neutron: "NÖTRON",
            upQuark: "YUKARI KUARK", downQuark: "AŞAĞI KUARK",
            mass_label: "Kütle:", charge_label: "Yük:", components_label: "Bileşenler:", composition_label: "Bileşim:",
            internalStructure: "İç Kuark Yapısı:", quarkInstruction: "Daha fazla bilgi için bir kuarka tıklayın",
            viewLibrary: "Temel Parçacıklar Kütüphanesini Görüntüle", viewFullLibrary: "Tam Kuark Kütüphanesini Görüntüle",
            copyright: "© 2025 Temel Parçacıklar. Tüm hakları saklıdır.", madeWith: "Manus ile yapıldı",
            libraryDescTop: "Kuark, temel bir parçacık türü ve maddenin temel bir bileşenidir. Kuarklar, hadronlar adı verilen bileşik parçacıkları oluşturmak için birleşirler, bunların en kararlı olanları protonlar ve nötronlardır, atom çekirdeklerinin bileşenleridir. Yaygın olarak gözlemlenebilen tüm madde, yukarı kuarklar, aşağı kuarklar ve elektronlardan oluşur. Renk hapsi olarak bilinen bir fenomen nedeniyle, kuarklar asla izolasyonda bulunmazlar; sadece hadronlar içinde bulunabilirler, bunlar baryonları (protonlar ve nötronlar gibi) ve mezonları içerir, veya kuark-gluon plazmalarında bulunabilirler.",
            libraryDescBottom: "Tüm kuarklar, 1/2 spinli temel fermiyonlardır ve dört temel etkileşimin tümünü yaşarlar: yerçekimi, elektromanyetizma, zayıf etkileşimler ve güçlü etkileşimler.",
            quarksCategory: "KUARKLAR", leptonsCategory: "LEPTONLAR", bosonsCategory: "BOZONLAR",
            upName: "Yukarı", downName: "Aşağı", charmName: "Tılsımlı", strangeName: "Acayip", topName: "Üst", bottomName: "Alt",
            electronName: "Elektron", muonName: "Müon", tauName: "Tau",
            electronneutrinoName: "Elektron Nötrinosu", muonneutrinoName: "Müon Nötrinosu", tauneutrinoName: "Tau Nötrinosu",
            photonName: "Foton", gluonName: "Gluon", wbosonName: "W Bozonu", zbosonName: "Z Bozonu", higgsbosonName: "Higgs Bozonu",
            atomBuilder: "ATOM OLUŞTURUCU", atomBuilderTitle: "Atom Oluşturucu",
            addProton: "Proton Ekle", removeProton: "Proton Kaldır",
            addNeutron: "Nötron Ekle", removeNeutron: "Nötron Kaldır",
            addElectron: "Elektron Ekle", removeElectron: "Elektron Kaldır",
            protonsLabel: "Protonlar:", neutronsLabel: "Nötronlar:", electronsLabel: "Elektronlar:",
            elementBuiltMsg: "{elementName} ({elementSymbol}) oluşturdunuz!",
            maxProtonsMsg: "Maksimum 20 protona ulaşıldı.",
            maxNeutronsMsg: "Maksimum 25 nötrona ulaşıldı.",
            maxElectronsMsg: "Maksimum 18 elektrona ulaşıldı (Kabuklar dolu).",
            neutralAtomBuiltMsg: "Nötr bir {elementName} ({elementSymbol}) atomu oluşturdunuz!",
            ionBuiltMsg: "{charge} yüklü bir {elementName} ({elementSymbol}) iyonu oluşturdunuz!",
            isotopeBuiltMsg: "Bir izotop oluşturdunuz: {elementName}-{massNumber} ({elementSymbol})!",
            isotopeIonBuiltMsg: "{charge} yüklü {elementName}-{massNumber} ({elementSymbol}) izotopunun bir iyonunu oluşturdunuz!",
            neutralIsotopeBuiltMsg: "Nötr bir izotop oluşturdunuz: {elementName}-{massNumber} ({elementSymbol})!",
            "electron-info_li_0": "Elektronlar, bir atomun çekirdeği etrafında dönen temel parçacıklardır.", "electron-info_li_1": "Negatif bir elektrik yüküne sahiptirler ve protonlardan veya nötronlardan çok daha hafiftirler.", "electron-info_li_2": "Elektronlar, atomlar arasındaki kimyasal bağlardan sorumludur.", "electron-info_li_3": "1897'de J.J. Thomson tarafından keşfedildiler.", "electron-info_li_4": "Elektronlar hem parçacık hem de dalga gibi davranabilirler, kuantum özelliklerini gösterirler.",
            "nucleus-info_li_0": "Çekirdek, bir atomun yoğun merkezi bölgesidir.", "nucleus-info_li_1": "Protonları (pozitif yüklü) ve nötronları (nötr) içerir.", "nucleus-info_li_2": "Çekirdek, bir atomun hacminin %0,01'inden azını oluşturur ancak kütlesinin %99,9'undan fazlasını içerir.", "nucleus-info_li_3": "1911'de Ernest Rutherford tarafından keşfedildi.", "nucleus-info_li_4": "Güçlü nükleer kuvvet, protonlar arasındaki elektromanyetik itmeyi aşarak çekirdeği bir arada tutar.",
            "proton-info_li_0": "Proton, nötron adı verilen elektriksel olarak nötr parçacıklarla birlikte bir atomun çekirdeğini oluşturan pozitif yüklü parçacıktır.", "proton-info_li_1": "Bir elektronun yüküne eşit büyüklükte pozitif bir elektrik yüküne sahiptir.", "proton-info_li_2": "Kütlesi, bir nötronun kütlesinden biraz daha az ve bir elektronun kütlesinin 1.836 katıdır.", "proton-info_li_3": "Her biri yaklaşık bir atomik kütle birimi kütleye sahip olan protonlar ve nötronlar, ortaklaşa \"nükleonlar\" (atom çekirdeklerinde bulunan parçacıklar) olarak adlandırılır.", "proton-info_li_4": "Her atomun çekirdeğinde bir veya daha fazla proton bulunur. Atom elektronlarını bağlayan çekici elektrostatik merkezi kuvveti sağlarlar.",
            "neutron-info_li_0": "Nötron, hidrojen-1 hariç her atomun çekirdeğinde bulunan, elektrik yükü olmayan bir atom altı parçacıktır.", "neutron-info_li_1": "Nötronlar ve protonlar bir atomun çekirdeğini oluşturur ve topluca nükleonlar olarak adlandırılır.", "neutron-info_li_2": "Nötronun kütlesi bir protonunkinden biraz daha fazla ve bir elektronun kütlesinin yaklaşık 1.839 katıdır.", "neutron-info_li_3": "Çekirdeğin dışında, serbest nötronlar kararsızdır ve ortalama ömürleri yaklaşık 15 dakikadır, bir proton, bir elektron ve bir antinötrinoya bozunurlar.", "neutron-info_li_4": "Nötronlar, nükleer fisyon ve füzyon reaksiyonlarında önemli bir rol oynar.",
            "internal-up-info_li_0": "Yukarı kuark, tüm kuarkların en hafifidir.", "internal-up-info_li_1": "+⅔ kesirli bir elektrik yüküne sahiptir.", "internal-up-info_li_2": "Yukarı kuarklar protonlarda (2 yukarı kuark, 1 aşağı kuark) ve nötronlarda (1 yukarı kuark, 2 aşağı kuark) bulunur.", "internal-up-info_li_3": "Birinci nesil bir kuarktır, yani sıradan maddenin yapı taşlarından biridir.", "internal-up-info_li_4": "Yukarı kuarklar, renk hapsi adı verilen bir fenomen nedeniyle asla izolasyonda bulunmazlar.",
            "internal-down-info_li_0": "Aşağı kuark, ikinci en hafif kuarktır.", "internal-down-info_li_1": "-⅓ kesirli bir elektrik yüküne sahiptir.", "internal-down-info_li_2": "Aşağı kuarklar protonlarda (1 aşağı kuark, 2 yukarı kuark) ve nötronlarda (2 aşağı kuark, 1 yukarı kuark) bulunur.", "internal-down-info_li_3": "Birinci nesil bir kuarktır, sıradan maddenin temel yapı taşlarının bir parçasıdır.", "internal-down-info_li_4": "Tüm kuarklar gibi, aşağı kuarklar da renk hapsi nedeniyle izolasyonda var olamazlar.",
            // Turkish translations for particle library items
            "up-info_li_0": "Yukarı kuark, tüm kuarkların en hafifidir.", "up-info_li_1": "+⅔ kesirli bir elektrik yüküne sahiptir.", "up-info_li_2": "Yukarı kuarklar protonlarda (2 yukarı kuark, 1 aşağı kuark) ve nötronlarda (1 yukarı kuark, 2 aşağı kuark) bulunur.", "up-info_li_3": "Birinci nesil bir kuarktır, yani sıradan maddenin yapı taşlarından biridir.", "up-info_li_4": "Yukarı kuarklar, renk hapsi adı verilen bir fenomen nedeniyle asla izolasyonda bulunmazlar.",
            "down-info_li_0": "Aşağı kuark, ikinci en hafif kuarktır.", "down-info_li_1": "-⅓ kesirli bir elektrik yüküne sahiptir.", "down-info_li_2": "Aşağı kuarklar protonlarda (1 aşağı kuark, 2 yukarı kuark) ve nötronlarda (2 aşağı kuark, 1 yukarı kuark) bulunur.", "down-info_li_3": "Birinci nesil bir kuarktır, sıradan maddenin temel yapı taşlarının bir parçasıdır.", "down-info_li_4": "Tüm kuarklar gibi, aşağı kuarklar da renk hapsi nedeniyle izolasyonda var olamazlar.",
            "charm-info_li_0": "Tılsımlı kuark, ikinci nesil bir kuarktır.", "charm-info_li_1": "Yukarı kuarkla aynı olan +⅔ kesirli bir elektrik yüküne sahiptir.", "charm-info_li_2": "Tılsımlı kuark 1970'de tahmin edildi ve 1974'te keşfedildi.", "charm-info_li_3": "Birinci nesil kuarklardan (yukarı ve aşağı) çok daha ağırdır.", "charm-info_li_4": "Tılsımlı kuarklar, J/ψ mezonu ve D mezonları gibi parçacıklarda bulunur.",
            "strange-info_li_0": "Acayip kuark, ikinci nesil bir kuarktır.", "strange-info_li_1": "Aşağı kuarkla aynı olan -⅓ kesirli bir elektrik yüküne sahiptir.", "strange-info_li_2": "Acayip kuark, 1950'lerde kozmik ışınlardaki \"acayip\" parçacıkların gözlemlenmesiyle keşfedildi.", "strange-info_li_3": "Yukarı ve aşağı kuarklardan daha ağırdır ancak tılsımlı kuarktan daha hafiftir.", "strange-info_li_4": "Acayip kuarklar, kaonlar ve bazı hiperonlar gibi parçacıklarda bulunur.",
            "top-info_li_0": "Üst kuark, üçüncü nesil bir kuarktır ve bilinen en ağır temel parçacıktır.", "top-info_li_1": "Yukarı ve tılsımlı kuarklarla aynı olan +⅔ kesirli bir elektrik yüküne sahiptir.", "top-info_li_2": "Üst kuark 1995'te Fermilab'da keşfedildi.", "top-info_li_3": "Aşırı yüksek kütlesi nedeniyle, hadronlar oluşturmadan önce bozunur, bu da onu izolasyonda incelenebilen tek kuark yapar.", "top-info_li_4": "Kütlesi, temel bir parçacık olmasına rağmen bir altın atomununkine yakındır.",
            "bottom-info_li_0": "Alt kuark, üçüncü nesil bir kuarktır.", "bottom-info_li_1": "Aşağı ve acayip kuarklarla aynı olan -⅓ kesirli bir elektrik yüküne sahiptir.", "bottom-info_li_2": "Alt kuark 1977'de Fermilab'da keşfedildi.", "bottom-info_li_3": "Üst kuarktan sonra ikinci en ağır kuarktır.", "bottom-info_li_4": "Alt kuarklar, B mezonlarında ve bottomonyum durumlarında bulunur.",
            "muon-info_li_0": "Müon, elektrona benzer ancak çok daha ağır olan ikinci nesil bir leptondur.", "muon-info_li_1": "Negatif bir elektrik yüküne sahiptir.", "muon-info_li_2": "Müonlar kararsızdır ve hızla bir elektron, bir nötrino ve bir antinötrinoya bozunurlar.", "muon-info_li_3": "Atmosfere çarpan kozmik ışınlar gibi yüksek enerjili çarpışmalarda üretilirler.",
            "tau-info_li_0": "Tau, müondan bile daha ağır olan üçüncü nesil bir leptondur.", "tau-info_li_1": "Negatif bir elektrik yüküne sahiptir.", "tau-info_li_2": "Tau parçacıkları çok kararsızdır ve hızla diğer parçacıklara bozunurlar.", "tau-info_li_3": "1970'lerde keşfedildiler.",
            "electron-neutrino-info_li_0": "Elektron nötrinosu, elektrik yükü olmayan birinci nesil bir leptondur.", "electron-neutrino-info_li_1": "Maddeyle çok zayıf etkileşime girer, bu da onu tespit etmeyi zorlaştırır.", "electron-neutrino-info_li_2": "Nötrinolar, güneşteki gibi nükleer reaksiyonlarda üretilir.", "electron-neutrino-info_li_3": "Küçük bir kütleleri vardır, ancak sıfır değildir.",
            "muon-neutrino-info_li_0": "Müon nötrinosu, müonla ilişkili ikinci nesil bir leptondur.", "muon-neutrino-info_li_1": "Elektrik yükü yoktur ve zayıf etkileşime girer.", "muon-neutrino-info_li_2": "Müon nötrinoları, müonları içeren süreçlerde üretilir.",
            "tau-neutrino-info_li_0": "Tau nötrinosu, tau parçacığıyla ilişkili üçüncü nesil bir leptondur.", "tau-neutrino-info_li_1": "Elektrik yükü yoktur ve zayıf etkileşime girer.", "tau-neutrino-info_li_2": "Tau nötrinoları, en son keşfedilen nötrino türüdür.",
            "photon-info_li_0": "Foton, elektromanyetik kuvvetin kuvvet taşıyıcısıdır.", "photon-info_li_1": "Kütlesiz ve elektrik yükü olmayan bir parçacıktır.", "photon-info_li_2": "Işık fotonlardan oluşur.", "photon-info_li_3": "Fotonlar vakumda ışık hızında hareket eder.",
            "gluon-info_li_0": "Gluonlar, güçlü nükleer kuvvetin kuvvet taşıyıcılarıdır.", "gluon-info_li_1": "Protonlar ve nötronlar içindeki kuarkları birbirine bağlarlar.", "gluon-info_li_2": "Gluonlar kütlesizdir ve elektrik yükleri yoktur, ancak \"renk yükü\" taşırlar.", "gluon-info_li_3": "Sekiz tür gluon vardır.",
            "w-boson-info_li_0": "W bozonları (W+ ve W-), zayıf nükleer kuvvetin kuvvet taşıyıcılarıdır.", "w-boson-info_li_1": "Belirli radyoaktif bozunma türlerinden sorumludurlar.", "w-boson-info_li_2": "W bozonları çok ağırdır ve pozitif veya negatif bir elektrik yüküne sahiptirler.", "w-boson-info_li_3": "1983'te keşfedildiler.",
            "z-boson-info_li_0": "Z bozonu da zayıf nükleer kuvvetin bir kuvvet taşıyıcısıdır.", "z-boson-info_li_1": "Nötrino saçılması gibi süreçlerde yer alır.", "z-boson-info_li_2": "Z bozonu çok ağırdır ve elektrik yükü yoktur.", "z-boson-info_li_3": "1983'te W bozonları ile birlikte keşfedildi.",
            "higgs-boson-info_li_0": "Higgs bozonu, diğer temel parçacıklara kütle kazandıran Higgs alanı ile ilişkilidir.", "higgs-boson-info_li_1": "Elektrik yükü yoktur ve çok ağırdır.", "higgs-boson-info_li_2": "Higgs bozonu 2012'de Büyük Hadron Çarpıştırıcısı'nda (LHC) keşfedildi.", "higgs-boson-info_li_3": "Keşfi, Standart Model parçacık fiziğinin son parçasını doğruladı."
        }
    };
    
    // --- Atom Builder Specific Variables and Elements ---
    const addProtonButton = document.getElementById("add-proton-button");
    const addNeutronButton = document.getElementById("add-neutron-button");
    const addElectronButton = document.getElementById("add-electron-button");
    const removeProtonButton = document.getElementById("remove-proton-button");
    const removeNeutronButton = document.getElementById("remove-neutron-button");
    const removeElectronButton = document.getElementById("remove-electron-button");
    const protonCountElement = document.getElementById("proton-count");
    const neutronCountElement = document.getElementById("neutron-count");
    const electronCountElement = document.getElementById("electron-count");
    const elementMessageElement = document.getElementById("element-message");
    const atomBuilderNucleus = document.querySelector("#atom-builder-view .atom-builder-nucleus"); // Scoped to Atom Builder View
    const atomBuilderModel = document.querySelector("#atom-builder-view .atom-builder-model"); // Scoped

    const MAX_PROTONS = 20;
    const MAX_NEUTRONS = 25;
    const MAX_ELECTRONS = 18; 
    const SHELL_CAPACITIES = [2, 8, 8];

    let ab_protonCount = 0; // Prefixed to avoid conflict if any
    let ab_neutronCount = 0;
    let ab_electronCount = 0;
    let ab_electrons = []; 
    let ab_animationFrameId = null; 
    // --- End Atom Builder Specific Variables ---

    // Navigation functions
    function showHomeView() {
        homeView.style.display = "flex";
        atomView.style.display = "none";
        quarksView.style.display = "none";
        if (atomBuilderView) atomBuilderView.style.display = "none"; // Hide Atom Builder View
        hideAllParticleInfo();
        hideAllQuarkInfo();
        if (ab_animationFrameId) { // Stop electron animation when leaving builder
            cancelAnimationFrame(ab_animationFrameId);
            ab_animationFrameId = null;
        }
    }
    
    function showAtomView() {
        homeView.style.display = "none";
        atomView.style.display = "block";
        quarksView.style.display = "none";
        if (atomBuilderView) atomBuilderView.style.display = "none";
        hideAllParticleInfo(); 
        hideAllQuarkInfo();
        if (ab_animationFrameId) { 
            cancelAnimationFrame(ab_animationFrameId);
            ab_animationFrameId = null;
        }
    }
    
    function showQuarksView() {
        homeView.style.display = "none";
        atomView.style.display = "none";
        quarksView.style.display = "block";
        if (atomBuilderView) atomBuilderView.style.display = "none";
        hideAllParticleInfo();
        hideAllQuarkInfo(); 
        if (ab_animationFrameId) { 
            cancelAnimationFrame(ab_animationFrameId);
            ab_animationFrameId = null;
        }
    }

    function showAtomBuilderView() {
        homeView.style.display = "none";
        atomView.style.display = "none";
        quarksView.style.display = "none";
        if (atomBuilderView) atomBuilderView.style.display = "block";
        hideAllParticleInfo();
        hideAllQuarkInfo();
        // Restart animation if there are electrons
        if (ab_electrons.length > 0 && !ab_animationFrameId) {
            ab_animationFrameId = requestAnimationFrame(ab_updateElectronPositions);
        }
    }
    
    function hideAllParticleInfo() {
        document.querySelectorAll(".particle-info").forEach(info => info.style.display = "none");
    }
    
    function hideAllQuarkInfo() {
        document.querySelectorAll(".quark-info").forEach(info => info.style.display = "none");
    }

    function showParticleInfo(particleType) {
        hideAllParticleInfo();
        hideAllQuarkInfo();
        const infoElement = document.getElementById(`${particleType}-info`);
        if (infoElement) {
            infoElement.style.display = "block";
            infoElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }

    function showQuarkInfo(quarkType, isInternal = false) {
        hideAllParticleInfo(); 
        hideAllQuarkInfo(); 
        let infoElementId = isInternal ? `internal-${quarkType}-info` : `${quarkType}-info`;
        if (quarkType === "electron" && !isInternal) {
             infoElementId = "electron-info"; 
        }
        const infoElement = document.getElementById(infoElementId);
        if (infoElement) {
            infoElement.style.display = "block";
            infoElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            console.error(`Info element not found for quark/particle: ${quarkType}`);
        }
    }
    
    function updateLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Invalid language: ${lang}`);
            return;
        }
        currentLang = lang;
        langButtons.forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            }
        });
        const elementsToTranslate = document.querySelectorAll("[data-translate-key]");
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-translate-key");
            let translationText = translations[lang][key];
            
            if (key === "elementBuiltMsg" && elementMessageElement && elementMessageElement.dataset.elementName) {
                // Special handling for dynamic message, re-evaluate with ab_checkElement
            } else if (translationText !== undefined) {
                element.textContent = translationText;
            } else {
                const fallbackText = translations["en"][key];
                if (fallbackText !== undefined && !(key === "elementBuiltMsg" && elementMessageElement && elementMessageElement.dataset.elementName)) {
                    element.textContent = fallbackText;
                } else if (!fallbackText) {
                     console.error(`Translation key '${key}' not found in English either.`);
                }
            }
        });
        if (atomBuilderView && atomBuilderView.style.display === 'block') {
             ab_checkElement(); // Update element message if builder is active
        }
    }
    
    // Event Listeners
    atomBox.addEventListener("click", showAtomView);
    quarksBox.addEventListener("click", showQuarksView);
    if (atomBuilderBox) { // Check if element exists before adding listener
        atomBuilderBox.addEventListener("click", showAtomBuilderView); 
    }
    
    backButtons.forEach(btn => {
        btn.addEventListener("click", showHomeView);
    });
    
    langButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            if (currentLang !== lang) {
                updateLanguage(lang);
            }
        });
    });
    
    atomParticles.forEach(particle => {
        particle.addEventListener("click", function(e) {
            e.stopPropagation();
            const particleType = this.getAttribute("data-particle");
            showParticleInfo(particleType);
        });
    });
    
    nucleons.forEach(nucleon => {
        nucleon.addEventListener("click", function(e) {
            e.stopPropagation();
            const nucleonType = this.getAttribute("data-nucleon");
            if (nucleusInfo) nucleusInfo.style.display = "none"; 
            showParticleInfo(nucleonType);
        });
    });
    
    internalQuarkElements.forEach(quark => {
        quark.addEventListener("click", function(e) {
            e.stopPropagation();
            const quarkType = this.getAttribute("data-quark");
            showQuarkInfo(quarkType, true);
        });
    });
    
    fundamentalLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = this.getAttribute("data-target");
            if (target === "quarks-view") {
                showQuarksView();
            }
        });
    });
    
    const particleItems = document.querySelectorAll(".particle-item");
    particleItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const particleId = this.getAttribute("data-particle-id");
            if (particleId) {
                showQuarkInfo(particleId, false); 
            }
        });
    });

    // --- Atom Builder Logic (Merged and Prefixed: ab_) ---
    if (addProtonButton) { // Ensure elements exist before adding listeners (they are in atom-builder-view)
        addProtonButton.addEventListener("click", () => {
            if (ab_protonCount >= MAX_PROTONS) {
                alert(translations[currentLang].maxProtonsMsg || translations["en"].maxProtonsMsg);
                return;
            }
            const proton = document.createElement("div");
            proton.className = "atom-builder-proton nucleon-particle";
            if (atomBuilderNucleus) atomBuilderNucleus.appendChild(proton);
            ab_protonCount++;
            if (protonCountElement) protonCountElement.textContent = ab_protonCount;
            ab_updateNucleusSize();
            ab_checkElement();
        });
    }

    if (addNeutronButton) {
        addNeutronButton.addEventListener("click", () => {
            if (ab_neutronCount >= MAX_NEUTRONS) {
                alert(translations[currentLang].maxNeutronsMsg || translations["en"].maxNeutronsMsg);
                return;
            }
            const neutron = document.createElement("div");
            neutron.className = "atom-builder-neutron nucleon-particle";
            if (atomBuilderNucleus) atomBuilderNucleus.appendChild(neutron);
            ab_neutronCount++;
            if (neutronCountElement) neutronCountElement.textContent = ab_neutronCount;
            ab_updateNucleusSize();
            ab_checkElement();
        });
    }

    function ab_updateElectronPositions() {
        if (!atomBuilderModel || atomBuilderView.style.display === 'none') {
             if (ab_animationFrameId) cancelAnimationFrame(ab_animationFrameId);
             ab_animationFrameId = null;
             return;
        }
        const centerX = atomBuilderModel.offsetWidth / 2;
        const centerY = atomBuilderModel.offsetHeight / 2;
        const electronsByShell = {};
        ab_electrons.forEach(electron => {
            const shell = electron.shell;
            if (!electronsByShell[shell]) electronsByShell[shell] = [];
            electronsByShell[shell].push(electron);
        });

        ab_electrons.forEach(electronInfo => {
            const element = electronInfo.element;
            const shell = electronInfo.shell;
            const shellElectrons = electronsByShell[shell] || [];
            const totalInShell = shellElectrons.length;
            const index = shellElectrons.indexOf(electronInfo);
            if (index === -1 || totalInShell === 0) return;
            const orbitElement = atomBuilderModel.querySelector(`.atom-builder-orbit-${shell}`);
            if (!orbitElement) return;
            const orbitStyle = window.getComputedStyle(orbitElement);
            const orbitWidth = parseFloat(orbitStyle.width);
            const orbitRadius = orbitWidth / 2;
            const now = Date.now() / 1000; 
            const speed = 1.0; 
            const angleOffset = (index / totalInShell) * 2 * Math.PI; 
            const angle = (now * speed + angleOffset) % (2 * Math.PI);
            const x = centerX + Math.cos(angle) * orbitRadius;
            const y = centerY + Math.sin(angle) * orbitRadius;
            const electronSize = 15;
            element.style.left = `${x - electronSize / 2}px`;
            element.style.top = `${y - electronSize / 2}px`;
        });

        if (ab_electrons.length > 0) {
            ab_animationFrameId = requestAnimationFrame(ab_updateElectronPositions);
        } else if (ab_animationFrameId) {
            cancelAnimationFrame(ab_animationFrameId);
            ab_animationFrameId = null;
        }
    }

    if (addElectronButton) {
        addElectronButton.addEventListener("click", () => {
            if (ab_electronCount >= MAX_ELECTRONS) {
                alert(translations[currentLang].maxElectronsMsg || translations["en"].maxElectronsMsg);
                return;
            }
            let targetShell = 0;
            let electronsInShells = [0, 0, 0];
            ab_electrons.forEach(e => {
                if (e.shell >= 1 && e.shell <= SHELL_CAPACITIES.length) {
                    electronsInShells[e.shell - 1]++;
                }
            });
            for (let i = 0; i < SHELL_CAPACITIES.length; i++) {
                if (electronsInShells[i] < SHELL_CAPACITIES[i]) {
                    targetShell = i + 1;
                    break;
                }
            }
            if (targetShell === 0) {
                alert(translations[currentLang].maxElectronsMsg || translations["en"].maxElectronsMsg);
                return;
            }
            const electronElement = document.createElement("div");
            electronElement.className = "atom-builder-electron";
            electronElement.style.position = "absolute";
            if (atomBuilderModel) atomBuilderModel.appendChild(electronElement);
            ab_electrons.push({ element: electronElement, shell: targetShell });
            ab_electronCount++;
            if (electronCountElement) electronCountElement.textContent = ab_electronCount;
            if (!ab_animationFrameId) {
                ab_updateElectronPositions(); 
                ab_animationFrameId = requestAnimationFrame(ab_updateElectronPositions);
            } else {
                ab_updateElectronPositions(); 
            }
            ab_checkElement();
        });
    }

    if (removeProtonButton) {
        removeProtonButton.addEventListener("click", () => {
            if (ab_protonCount > 0) {
                const protonToRemove = atomBuilderNucleus ? atomBuilderNucleus.querySelector(".atom-builder-proton") : null;
                if (protonToRemove) {
                    atomBuilderNucleus.removeChild(protonToRemove);
                    ab_protonCount--;
                    if (protonCountElement) protonCountElement.textContent = ab_protonCount;
                    ab_updateNucleusSize();
                    ab_checkElement();
                }
            }
        });
    }

    if (removeNeutronButton) {
        removeNeutronButton.addEventListener("click", () => {
            if (ab_neutronCount > 0) {
                const neutronToRemove = atomBuilderNucleus ? atomBuilderNucleus.querySelector(".atom-builder-neutron") : null;
                if (neutronToRemove) {
                    atomBuilderNucleus.removeChild(neutronToRemove);
                    ab_neutronCount--;
                    if (neutronCountElement) neutronCountElement.textContent = ab_neutronCount;
                    ab_updateNucleusSize();
                    ab_checkElement(); 
                }
            }
        });
    }

    if (removeElectronButton) {
        removeElectronButton.addEventListener("click", () => {
            if (ab_electronCount > 0) {
                let electronToRemoveInfo = null;
                let highestShell = 0;
                let removeIndex = -1;
                for (let i = ab_electrons.length - 1; i >= 0; i--) {
                    if (ab_electrons[i].shell > highestShell) highestShell = ab_electrons[i].shell;
                }
                for (let i = ab_electrons.length - 1; i >= 0; i--) {
                    if (ab_electrons[i].shell === highestShell) {
                        electronToRemoveInfo = ab_electrons[i];
                        removeIndex = i;
                        break;
                    }
                }
                if (electronToRemoveInfo && electronToRemoveInfo.element && atomBuilderModel) {
                    atomBuilderModel.removeChild(electronToRemoveInfo.element);
                    ab_electrons.splice(removeIndex, 1);
                    ab_electronCount--;
                    if (electronCountElement) electronCountElement.textContent = ab_electronCount;
                    if (ab_electrons.length === 0 && ab_animationFrameId) {
                        cancelAnimationFrame(ab_animationFrameId);
                        ab_animationFrameId = null;
                    }
                    ab_checkElement(); 
                }
            }
        });
    }

    function ab_updateNucleusSize() {
        if (!atomBuilderNucleus) return;
        const totalParticles = ab_protonCount + ab_neutronCount;
        let size = "60px"; // Default small size
        if (totalParticles > 2 && totalParticles <= 6) size = "80px";
        else if (totalParticles > 6 && totalParticles <= 12) size = "100px";
        else if (totalParticles > 12) size = "120px";
        atomBuilderNucleus.style.width = size;
        atomBuilderNucleus.style.height = size;
    }

    function ab_checkElement() {
        if (!elementMessageElement || !translations[currentLang]) return;
        let elementName = "";
        let elementSymbol = "";
        const atomicNumber = ab_protonCount;
        const massNumber = ab_protonCount + ab_neutronCount;
        const charge = ab_protonCount - ab_electronCount;

        // Simplified element data (add more as needed)
        const elementsData = {
            1: { name: "Hydrogen", symbol: "H" }, 2: { name: "Helium", symbol: "He" },
            3: { name: "Lithium", symbol: "Li" }, 4: { name: "Beryllium", symbol: "Be" },
            5: { name: "Boron", symbol: "B" }, 6: { name: "Carbon", symbol: "C" },
            7: { name: "Nitrogen", symbol: "N" }, 8: { name: "Oxygen", symbol: "O" },
            9: { name: "Fluorine", symbol: "F" }, 10: { name: "Neon", symbol: "Ne" },
            11: { name: "Sodium", symbol: "Na" }, 12: { name: "Magnesium", symbol: "Mg" },
            13: { name: "Aluminum", symbol: "Al" }, 14: { name: "Silicon", symbol: "Si" },
            15: { name: "Phosphorus", symbol: "P" }, 16: { name: "Sulfur", symbol: "S" },
            17: { name: "Chlorine", symbol: "Cl" }, 18: { name: "Argon", symbol: "Ar" },
            19: { name: "Potassium", symbol: "K" }, 20: { name: "Calcium", symbol: "Ca" }
        };

        if (elementsData[atomicNumber]) {
            elementName = elementsData[atomicNumber].name;
            elementSymbol = elementsData[atomicNumber].symbol;
        }

        let message = "";
        let messageKey = "elementBuiltMsg"; // Default message

        if (elementName) {
            elementMessageElement.dataset.elementName = elementName; // Store for dynamic translation
            elementMessageElement.dataset.elementSymbol = elementSymbol;
            elementMessageElement.dataset.massNumber = massNumber;
            elementMessageElement.dataset.charge = charge > 0 ? `+${charge}` : `${charge}`;

            const isIsotope = ab_neutronCount !== atomicNumber && (atomicNumber === 1 && ab_neutronCount > 0 || atomicNumber > 1) ; // Basic isotope check
            const isIon = charge !== 0;

            if (isIsotope && isIon) messageKey = "isotopeIonBuiltMsg";
            else if (isIsotope && !isIon) messageKey = "neutralIsotopeBuiltMsg";
            else if (!isIsotope && isIon) messageKey = "ionBuiltMsg";
            else if (!isIsotope && !isIon) messageKey = "neutralAtomBuiltMsg";
            else messageKey = "elementBuiltMsg"; // Fallback

            message = (translations[currentLang][messageKey] || translations["en"][messageKey] || "").replace("{elementName}", elementName)
                                                               .replace("{elementSymbol}", elementSymbol)
                                                               .replace("{massNumber}", massNumber)
                                                               .replace("{charge}", charge > 0 ? `+${charge}` : `${charge}`);
            elementMessageElement.textContent = message;
            elementMessageElement.style.display = "block";
        } else {
            elementMessageElement.textContent = "";
            elementMessageElement.style.display = "none";
            delete elementMessageElement.dataset.elementName;
            delete elementMessageElement.dataset.elementSymbol;
            delete elementMessageElement.dataset.massNumber;
            delete elementMessageElement.dataset.charge;
        }
    }
    // --- End Atom Builder Logic ---

    updateLanguage("en");
    showHomeView(); 
});

