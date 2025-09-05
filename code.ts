figma.showUI(__html__);

figma.ui.onmessage = msg => {
    if (msg.type === 'create-pages') {
        const motif = msg.version;

        const pages = [
        `___UX STORIES: FINAL___`,
        `XXX-NNN [${motif}]`,
        '__UX DISCOVERY: WIP___',
        `XXX-NNN [${motif}]`,
        '__EXPLORATION__',
        'Ideation',
        'Prototype',
        'Archive'
        ]

        for (let i = 0; i < pages.length; i++) {
            figma.createPage().name = pages[i];
        }

        figma.currentPage.name = `Epic XXX-NNN [${motif}]`;
        
        const key = '131375d4ec32cc83edc32b79d49ddad059210046';

        async function importNode() {
            let importComponent = await figma.importComponentByKeyAsync(key);
            importComponent.createInstance();
            figma.closePlugin();
        }
        importNode();

    } else {
        figma.closePlugin();
    }

}