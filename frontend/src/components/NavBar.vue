<template>
    <Menubar style=" background: #f9dcba;" :model="items"/>
</template>

<script>

export default {
	data() {
		return {
			items: [
            {
                label: 'BookCourt',
                style: "font-size: 32px; font-family: Playfair Display;"
            },
            {
                label: 'Каталог',
                icon: 'pi pi-book',
                to: '/catalog',
                style: "font-size: 20px; font-family: Roboto;"
            },
            {
                label: 'Личный кабинет',
                icon: 'pi pi-user',
                to: '/profile',
                style: "font-size: 20px; font-family: Roboto;"
            },
            {
                label: 'Выход',
                icon: 'pi pi-sign-out',
                to: '/login',
                style: "font-size: 20px; font-family: Roboto;"
            }
            ]
		}
	}
}
</script>

<style lang="scss">



</style>