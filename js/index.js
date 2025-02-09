// Store for Admin Page
Maya.Store.adminPage = {
    name: 'adminPage', // Store name must match MFE name
    data: {},          // Holds state

    events: {
        onLoad: async (options) => {
            console.log('Admin Page Loaded', options);
            Maya.Store.SetData({ store: 'adminPage', key: 'init' })({ status: 'loaded' });
        },

        fetchUsers: async () => {
            const users = await Maya.API.getUsers(); // Placeholder for API call
            Maya.Store.SetData({ store: 'adminPage', key: 'users' })(users);
        },

        addUser: async (options) => {
            console.log('Adding User:', options);
            Maya.API.createUser(options); // Placeholder API call
            Maya.Store.Publish({ topic: 'userUpdated' })({ message: 'New user added' });
        }
    }
};

// Define Admin Page MFE
class AdminPageMFE extends MayaMFE {
    constructor() {
        super();
        this.setStore(Maya.Store.adminPage);
        this.setView('main');
    }

    onLoad = async (options) => {
        this.setView(options.view || 'main');
        return Maya.Store.adminPage.events.onLoad(options);
    };

    onMessage = (option) => async (msg) => {
        console.log('Message received:', msg);
    };
}

// Register the MFE as a custom web component
window.customElements.define('admin-page', AdminPageMFE);
