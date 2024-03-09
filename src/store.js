import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8001',
    menuItems: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'projects',
            label: 'Progetti'
        },
        // {
        //     name: 'technologies',
        //     label: 'Tecnologie'
        // }
    ]
})