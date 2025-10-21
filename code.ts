const pages = [
  `___UX STORIES: FINAL___`,
  `🟢 XXX-NNN Story Name`,
  '__UX DISCOVERY: WIP___',
  `XXX-NNN Discovery Name`,
  '__EXPLORATION__',
  'Ideation',
  'Prototype',
  'Archive'
];

for (let i = 0; i < pages.length; i++) {
  figma.createPage().name = pages[i];
}

figma.currentPage.name = `[FY26Q3] XXX-NNN Epic`;

const key = '131375d4ec32cc83edc32b79d49ddad059210046';

async function importNode() {
  try {
    let importComponent = await figma.importComponentByKeyAsync(key);
    const instance = importComponent.createInstance();
    
    figma.closePlugin();
  } catch (error) {
    console.error('Error:', error);
    figma.notify('Failed to import component');
    figma.closePlugin();
  }
}
importNode();