<script setup>
import { dataToEsm } from '@rollup/pluginutils';

const { reportGroups } = defineProps({
    "reportGroups": Array
})
</script>

<template>
    <table id="wholesale-list" class="table-auto mt-8">
        <caption>Daily Fresh Fish Report</caption>
        <FishReportSubTable v-for="reportGroup in reportGroups" :reportGroup="reportGroup" />
    </table>
</template>