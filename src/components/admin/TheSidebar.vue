<template>
    <aside class="sidebar">
        <ul class="sidebar-list">
            <li v-for="item in menuItems" :key="item">
                <font-awesome-icon :icon="item.icon" />
                {{ item.title }}
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { title: 'Home', icon: ['fas', 'home']},
                { title: 'Pages', icon: ['fas', 'sticky-note']},
                { title: 'Field group', icon: ['fas', 'layer-group'] }
            ]
        }
    }
}
</script>

<style scoped>
    .sidebar-list {
        list-style: none;
        text-align: left;
    }
    .sidebar {
        background: rgb(5, 68, 104);
        position: fixed;
        top: 0;
        left: 0;
        width: 225px;
        height: 100%;
        padding: 20px 0;
        transition: all 0.5s ease;
    }
</style>