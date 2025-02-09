class AdminUIMFE extends MayaMFE {
    constructor() {
        super();
        this.setStore(Maya.Store.adminui);
        this.setView('main');
    }

    onLoad = async (options) => {
        this.setView(options.view || 'main');
        return Maya.Store.adminui.events.onLoad(options);
    };
}

window.customElements.define('admin-ui', AdminUIMFE);

// Define the Store for Admin UI
Maya.Store.adminui = {
    name: 'adminui',
    data: {},

    events: {
        onLoad: async (options) => {
            console.log("Admin UI MFE Loaded");

            // Example: Fetch initial data
            const data = await fetch('/api/admin/data').then(res => res.json());
            Maya.Store.SetData({ store: 'adminui', key: 'dashboard' })(data);
        },

        fetchUsers: async () => {
            console.log("Fetching users...");
            const users = await fetch('/api/admin/users').then(res => res.json());
            Maya.Store.SetData({ store: 'adminui', key: 'users' })(users);
        },

        addUser: async () => {
            console.log("Add User Clicked!");
            // Placeholder logic for adding a user
        }
    }
};
