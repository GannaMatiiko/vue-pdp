<template>
    <button class="base-button">
        <slot></slot>
    </button>
</template>

<style scoped>
    .base-button {
        color: #ffffff;
        background: #138470;
        font-size: 24px;
        padding: 15px 30px;
        border-radius: 15px;
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease;
        border: none;
    }
    .base-button:hover {
        background: #2bbda3;
    }
</style>