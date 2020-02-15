<template>
<div>

通过props解耦routes.params.id 
<span>{{id}}</span>
</div>
</template>
<script>
export default {
    name:'routesParams',
    props:['id']
}
</script>
<style>
</style>