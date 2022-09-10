const tabElements = [
    {
        id: 'testimonial-1',
        triggerEl: document.querySelector('#testimonial-1-tab'),
        targetEl: document.querySelector('#testimonial-1')
    },
    {
        id: 'testimonial-2',
        triggerEl: document.querySelector('#testimonial-2-tab'),
        targetEl: document.querySelector('#testimonial-2')
    },
    {
        id: 'testimonial-3',
        triggerEl: document.querySelector('#testimonial-3-tab'),
        targetEl: document.querySelector('#testimonial-3')
    }
];

const options={defaultTabId: 'testimonial-1', activeClasses: 'bg-gray-100 dark:bg-gray-700', inactiveClasses: 'bg-white dark:bg-gray-900', onShow: ()=>{}};

const tabs = new Tabs(tabElements, options);