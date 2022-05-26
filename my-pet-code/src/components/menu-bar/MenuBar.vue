<template>
    <Menubar :model="items" class="menu-container">
        <template #start>
            <div class="my-pet-image-container" @click="pushToRoute('/')">
                <span class="image-background-color"></span>
                <span class="my-pet-image"></span>
            </div>
        </template>
        <template #item="{item}">
            <span :id="`${item.htmlId}`" :class="getActiveClass(item.id)" class="menu-item" @click="pushToRoute(item.route, item.id)">
                {{ item.label }}
            </span>
        </template>
    </Menubar>
</template>

<script>
export default {
    name: 'MenuBar',
    data() {
        return {
            activeItem: [
                false,
                false,
                false,
                false,
                false,
                false,
            ]
        }
    },
        computed: {
        items() {
            return [
                {
                    id: 0,
                    htmlId: "products-menu-item",
                    label:  'Menu Inicial',
                    route: "/"
                },
                {
                    id: 1,
                    htmlId: "projects-menu-item",
                    label: 'Editar Usuário',
                    route: "/register/user"
                },
                {
                    id: 2,
                    htmlId: "costs-menu-item",
                    label: "Cadastrar Pet",
                    route: "/register/pet"
                }
            ];
        },
    },
    methods: {
        getActiveClass(index) {
            return this.activeItem[index] ? "menu-item-active" : "";
        },
        pushToRoute(route, id) {
            this.$router.push(route);
            this.setSelectedMenuItem(id);
            this.activateMenu(id);
        },
        activateMenu(id) {
            for (let i = 0; i < this.activeItem.length; i++) {
                if (i === id) {
                    this.activeItem[i] = true;
                } else {
                    this.activeItem[i] = false;
                }
            }
        },
        setSelectedMenuItem(id) {
            localStorage.setItem("selected-menu-item", id);
        },
        getSelectedMenuItem() {
            let selectedMenuItem = localStorage.getItem("selected-menu-item");
            if (selectedMenuItem !== null && selectedMenuItem !== undefined) {
                this.activateMenu(Number(selectedMenuItem));
            }
        }
    },
    created() {
        this.getSelectedMenuItem();
    }
}
</script>

<style lang="scss" scoped>
    .my-pet-image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;

        &:hover {
            cursor: pointer;
        }
    }

    .image-background-color {
        position: absolute;
        top: 3px;
        left: 11px;
        width: 204px;
        height: 57px;
        z-index: 9;
    }

    .my-pet-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 40px;
        z-index: 10;
    }

    .menu-container {
        background: #186872;
        border-radius: 0;
        height: 56px !important;
        filter: drop-shadow(0 0 1px #C8C8C8);
        width: 100%;
    }

    .menu-title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 30px;

        &:hover {
            cursor: pointer;
        }
    }

    .menu-item {
        color: white;
        font-size: 1rem;
        margin: 0 5px 0 5px;
        padding: 15px 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        &:hover {
            color: azure;
            cursor: pointer;
        }
    }

    .menu-item-active {
        border-bottom: solid 2px azure;
        font-weight: bolder;
    }

    @media screen and (max-width: 960px) {
        .menu-item {
            background: #2C2C2C;
            margin: 0;
        }
    }
</style>