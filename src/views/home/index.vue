<template>
    <div>
        <h2 class="wrap">router页面</h2>
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
        let dinglun = () => {
            console.log(loadsh, '我爱你啊啊啊啊啊啊啊');
        }

        dinglun();
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>