<template>
    <div>
        <h2>router页面</h2>
        <img src="../../assets/img/123.jpg" style="width: 100px;height: 100px;"/>
    </div>
</template>

<script>
import loadsh from 'loadsh';
import './test';

export default {
    methods: {
        test () {
            
        }
    },
    created () {
        console.log(loadsh, 66);
    }
}
</script>

<style>

</style>