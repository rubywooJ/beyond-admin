<template>
    <div id="footer">
        <div class="bottom">
            Come From <a href="https://github.com/rubywooJ/beyond" target="_blank">Beyond</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Bottom',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

    #footer {
    }

    .bottom {
        background-color: #eff2f5;
        width: 100%;
        height: 30px;
        font-size: 13px;
        color: #8c8c8c;
        padding-top: 15px;
        position: absolute;
        bottom: 0px;
    }

    .bottom a {
        color: #0099dc;
    }
</style>
