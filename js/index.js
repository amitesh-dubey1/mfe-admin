Maya.Store.mayaadmin = {
    name: 'mayaadmin', // Store name should be lowercase
    data: {},
    events: {
        // Corrected onLoad function
        onLoad: async (ev) => {
            return Maya.Store.SetData({
                store: 'mayaadmin', key: ev.key
            })({ msg: 'Hello World!!' });
        }
    }
};

class MayaAdmin extends MayaMFE {
    constructor() {
        super();
        this.setView('main'); // Ensure view is set
        this.setStore(Maya.Store.mayaadmin);
    }

    getTitle = () => "Maya Admin Page";
    isSecured = () => false;

    // Call event correctly
    onLoad = async (ev) => {
        return Maya.Store.mayaadmin.events.onLoad(ev);
    };

    onQuery = async (ev) => {};
}

// Register custom web component (Fixed Name)
window.customElements.define('albert-mayaadmin', MayaAdmin);