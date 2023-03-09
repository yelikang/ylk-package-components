<template>
    <div>
        123
        <c-input></c-input>
        <c-select></c-select>
    </div>
</template>

<script>
import {CInput, CSelect} from 'lib'
import 'lib/theme/c-input.css'
import 'lib/theme/c-select.css'

console.log('CInput', CInput)
export default {
    components:{
        CInput,
        CSelect
    }
}
</script>